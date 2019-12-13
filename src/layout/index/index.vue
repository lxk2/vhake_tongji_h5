<template>
  <div>
    <Banner :tabbarNameList="tabbarNameList"></Banner>
    <router-view :style="{
      position: 'relative',
      marginBottom: bottomMargin + 'px',
      background: '#FFFFFF',
      minHeight: tabbarNameList.indexOf($route.name) !== -1 ? 0 : `calc(100vh - ${bottomMargin}px)`
    }" />
    <Footer ref="myFooter" :tabbarNameList="tabbarNameList"></Footer>
  </div>
</template>

<script>
import Footer from '../footer/footer'
import Banner from '../banner/banner'
export default {
  components: {
    Footer,
    Banner
  },
  data () {
    return {
      bottomMargin: 0,
      tabbarNameList: [
        'index',
        'calculus'
      ]
    }
  },
  methods: {},
  created () {
    this.$nextTick(() => {
      let html = document.getElementsByTagName('html')[0].style.fontSize
      this.bottomMargin =
        this.$refs.myFooter.$refs.tabbar.$el.offsetHeight +
        (80 / 75) * parseFloat(html)
    })
  },
  mounted () {},
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  watch: {
    routeName () {
      this.$nextTick(() => {
        let html = document.getElementsByTagName('html')[0].style.fontSize
        this.bottomMargin =
          this.$refs.myFooter.$refs.tabbar.$el.offsetHeight +
          (80 / 75) * parseFloat(html)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/layout/index.scss";
</style>
