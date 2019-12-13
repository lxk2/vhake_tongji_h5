<template>
  <div class="main">
    <cell v-for="item in navList" :key="item.id" :label="item.name" @click="toLink(item.link)"></cell>
  </div>
</template>

<script>
import Cell from '@/components/cell'
import data from './data'
import methods from './methods'
export default {
  data,
  methods,
  components: {
    Cell
  },
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/home.scss';
</style>
