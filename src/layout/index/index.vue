<template>
  <div>
    <Banner></Banner>
    <router-view :style="{
      marginBottom: bottomMargin + 'px'
    }" />
    <Footer ref="myFooter"></Footer>
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
      bottomMargin: 0
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
