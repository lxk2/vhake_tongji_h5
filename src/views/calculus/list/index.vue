<template>
  <div>
    <backTop></backTop>
    <div class="right" style="position: fixed;right: 0;top: 0;z-index: 999999999;height: 100%;">
      <div class="fiexd">操作</div>
      <van-pull-refresh
            v-model="isRefresh"
            @refresh="onRefresh"
            :style="{
          height: '100%'
        }"
          >
          <div>
            <div class="x-fixed" v-for="item in list" :key="item.id">
              验证
            </div>
          </div>
      </van-pull-refresh>
    </div>

    <div class="myScroll" ref="myScroll">
      <div class="scrollList" ref="scrollList">
        <div class="table-heade">
          <div class="td">ID</div>
          <div class="td">统计时间</div>
          <div class="td">点击量</div>
          <div class="td">哈希算法</div>
          <div class="td">哈希值</div>
          <div class="td">演算结果</div>
          <div class="td"></div>
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
              <div class="tr" v-for="item in list" :key="item.id">
                <div class="td">{{ item.id }}</div>
                <div class="td">{{ item.create_time }}</div>
                <div class="td">{{ item.online_users }}</div>
                <div class="td">{{ item.hash_algorithm }}</div>
                <div class="td">{{ item.hash }}</div>
                <div class="td">{{ item.result }}</div>
                <div class="td"></div>
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
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.initBS()
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/views/calculusResult.scss";
</style>
