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
        <div class="tr" v-for="(item, index) in list" :key="item.id" :class="{
          active: index % 2 === 1
        }">
          <div class="td">
            {{ item.id }}
          </div>
          <div class="td">
            {{ item.opentime }}
          </div>
          <div class="td">
            {{ item.resultnum | toThousandFilter }}
          </div>
          <div class="td">
            {{ item.f_value }}
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
    this.getList()
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeResult.scss';
.active {
  background: #f7f7f7!important;
}
</style>
