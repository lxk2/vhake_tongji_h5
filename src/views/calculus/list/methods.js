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
    // if (!this.myScroll2) {
    //   this.myScroll2 = new BScroll(this.$refs.myScroll2, {
    //     scrollX: true,
    //     eventPassthrough: 'vertical'
    //   })
    // } else {
    //   this.myScroll2.refresh()
    // }
  }
}
