<template>
  <div>
    <div id="container"></div>
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
    this.initChart()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeDynamicDisplay.scss';
</style>
