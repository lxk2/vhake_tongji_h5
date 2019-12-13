<template>
  <div>
    <backTop></backTop>
    <div class="table-heade">
      <div class="td">
        ID
      </div>
      <div class="td">
        统计时间
      </div>
      <div class="td">
        点击量
      </div>
      <div class="td">
        波动值
      </div>
    </div>
    <div class="table-body">
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" :style="{
        height: '100%'
      }">
        <van-list
          :style="{
            height: '100%'
          }"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
        <div class="tr" v-for="item in list" :key="item.id">
          <div class="td">
            {{ item.id }}
          </div>
          <div class="td">
            {{ item.create_time }}
          </div>
          <div class="td">
            {{ item.online_users }}
          </div>
          <div class="td">
            {{ item.volatility }}
          </div>
        </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { PullRefresh, List } from 'vant'
import data from './data'
import methods from './methods'
import backTop from '@/components/backTop'
Vue.use(PullRefresh).use(List)
export default {
  data,
  methods,
  components: {
    backTop
  },
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeResult.scss';
</style>
