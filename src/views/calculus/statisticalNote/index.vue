<template>
  <div>
    <div class="title">
      统计说明
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
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/calculusStatisticalNote.scss';
</style>
