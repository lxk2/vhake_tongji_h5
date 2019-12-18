import { getRichText } from '@/api'
export default {
  getData () {
    getRichText(4)
      .then(res => {
        if (res.code === this.$statusCode.SUCCESS_CODE) {
          this.content = res.data
        } else {
          this.$toast.fail(res.msg)
        }
      })
  }
}
