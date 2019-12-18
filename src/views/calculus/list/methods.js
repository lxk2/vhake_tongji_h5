import BScroll from 'better-scroll'
import { getList2 } from '@/api'
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
  initBS () {
    if (!this.myScroll) {
      this.myScroll = new BScroll(this.$refs.myScroll, {
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    } else {
      this.myScroll.refresh()
    }
  },
  getList (backcall) {
    getList2({
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
  },
  handleClick (row) {
    this.$router.push({
      path: '/calculus/verification',
      query: {
        opentime: row.opentime,
        resultnum: row.resultnum,
        sum: row.sum,
        inputValue: row.inputValue
      }
    })
  }
}
