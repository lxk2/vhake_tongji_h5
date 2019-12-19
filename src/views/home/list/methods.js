import { getList } from '@/api'
export default {
  onLoad () {
    this.page++
    this.getList(() => {
      this.loading = false
    })
  },
  onRefresh () {
    this.list = []
    this.page = 1
    this.getList(() => {
      this.isRefresh = false
    })
  },
  getList (backcall) {
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
          backcall(true)
        } else {
          this.$toast.fail(res.msg)
        }
      })
  }
}
