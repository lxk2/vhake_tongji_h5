<template>
  <div>
    <div class="copyright" :style="{
      bottom: tabbarNameList.indexOf($route.name) !== -1 ? copyrightBottom + 'px' : '0px'
    }">
      <p>Copyright © 1998- 2016 HuaQi. All Rights Reserved.</p>
      <p>奇趣统计 版权所有</p>
    </div>
    <van-tabbar ref="tabbar" v-show="tabbarNameList.indexOf($route.name) !== -1" :value="active" :route="true" :safe-area-inset-bottom="true" :border="true">
      <van-tabbar-item :icon="item.icon[active]" v-for="item in iconList" :key="item.id" :to="item.to">{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { mapState } from 'vuex'
Vue.use(Tabbar).use(TabbarItem)
export default {
  data () {
    return {
      iconList: [
        {
          id: 1,
          name: '在线统计',
          icon: [
            require('@/assets/icon/tongji.png'),
            require('@/assets/icon/tongji_off.png')
          ],
          to: '/'
        },
        {
          id: 2,
          name: '数据演算',
          icon: [
            require('@/assets/icon/yansuan_off.png'),
            require('@/assets/icon/yansuan.png')
          ],
          to: '/calculus'
        }
      ],
      copyrightBottom: 0
    }
  },
  methods: {

  },
  props: {
    tabbarNameList: {
      type: Array,
      default: () => []
    }
  },
  created () {
    this.$nextTick(() => {
      this.copyrightBottom = this.$refs.tabbar.$el.offsetHeight
    })
  },
  computed: {
    ...mapState([
      'tabbarActive'
    ]),
    active () {
      return this.tabbarActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/layout/footer.scss';
</style>
