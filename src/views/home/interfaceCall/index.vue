<template>
  <div>
    <div class="title">
      接口调用
    </div>
    <div class="content" v-html="content">

    </div>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
  data,
  methods,
  created () {
    this.getData()
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeInterfaceCall.scss';
</style>
