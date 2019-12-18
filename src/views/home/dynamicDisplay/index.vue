<template>
  <div>
    <div ref="echart" id="container"></div>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
  data,
  methods,
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.getOptions()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeDynamicDisplay.scss';
</style>
