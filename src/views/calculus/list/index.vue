<template>
  <div>
    <backTop></backTop>
    <div class="myScroll" ref="myScroll">
      <div class="scrollList" ref="scrollList">
        <div class="table-heade">
          <div class="td">ID</div>
          <div class="td">统计时间</div>
          <div class="td">点击量</div>
          <div class="td">哈希算法</div>
          <div class="td">哈希值</div>
          <div class="td">演算结果</div>
          <div class="td" style="text-align: center">操作</div>
        </div>
        <div class="table-body">
          <van-pull-refresh
            v-model="isRefresh"
            @refresh="onRefresh"
            :style="{
          height: '100%'
        }"
          >
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
                <div class="td">{{ item.id }}</div>
                <div class="td">{{ item.opentime }}</div>
                <div class="td">{{ item.resultnum | toThousandFilter }}</div>
                <div class="td">{{ item.algorithm }}</div>
                <div class="td">{{ item.hash }}</div>
                <div class="td">{{ item.result }}</div>
                <div class="td" style="justify-content: center" @click="handleClick(item)">验证</div>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </div>
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
    this.getList(() => {})
  },
  mounted () {
    this.$nextTick(() => {
      this.initBS()
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/views/calculusResult.scss";
.active {
  background: #f7f7f7!important;
}
</style>
