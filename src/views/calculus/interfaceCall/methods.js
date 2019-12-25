import { getRichText } from '@/api'
export default {
  getData () {
    getRichText(4)
      .then(res => {
        if (res.code === this.$statusCode.SUCCESS_CODE) {
          let content = res.data
          content = content.replace(/<img src="(.*?)"/g, '<img src="http://api.w50f.cn:88$1"')
          this.content = content
        } else {
          this.$toast.fail(res.msg)
        }
      })
  }
}
