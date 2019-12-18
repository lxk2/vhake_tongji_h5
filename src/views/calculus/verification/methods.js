import { validate } from '@/api'
export default {
  submitForm () {
    validate(this.form)
      .then(res => {
        if (res.code === this.$statusCode.SUCCESS_CODE) {
          this.$toast.success('验证成功')
          this.netData = res.data
        } else {
          this.$toast.fail(res.msg)
        }
      })
  }
}
