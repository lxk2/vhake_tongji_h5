import BScroll from 'better-scroll'
export default {
  onLoad () {},
  onRefresh () {},
  initBS () {
    if (!this.myScroll) {
      this.myScroll = new BScroll(this.$refs.myScroll, {
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    } else {
      this.myScroll.refresh()
    }
  }
}
