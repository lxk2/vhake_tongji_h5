import { getList } from '@/api'
export default {
  async onLoad () {
    this.page++
    await this.getList()
    console.log('走到这里了吗')
    this.loading = false
  },
  async onRefresh () {
    this.list = []
    this.page = 1
    await this.getList()
    this.isRefresh = false
  },
  getList () {
    getList({
      page: this.page,
      list_rows: this.list_rows
    })
      .then(res => {
        if (res.code === this.$statusCode.SUCCESS_CODE) {
          this.count = res.data.count
          if (res.data.finished) {
            this.finished = true
          } else {
            this.finished = false
          }
          if (this.page === 1) {
            this.list = res.data.list
          } else {
            this.list = this.list.concat(res.data.list)
          }
        } else {
          this.$toast.fail(res.msg)
        }
      })
  }
}
