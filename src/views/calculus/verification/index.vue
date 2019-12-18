<template>
  <div class="main">
    <div class="item">
      <div class="label">
        统计时间
      </div>
      <el-input v-model="form.opentime" placeholder=""></el-input>
    </div>
    <div class="item">
      <div class="label">
        点击量
      </div>
      <el-input v-model="form.resultnum" placeholder=""></el-input>
    </div>
    <div class="item">
      <div class="label">
        哈希算法
      </div>
      <el-input value="SHA512" placeholder=""></el-input>
    </div>
    <div class="item">
      <div class="label">
        哈希值
      </div>
      <el-input type="textarea" :value="netData.hash" placeholder="" :autosize="{
        minRows: 2, maxRows: 4
      }"></el-input>
    </div>
    <div class="item">
      <div class="label">
        演算结果
      </div>
      <el-input :value="netData.result" placeholder=""></el-input>
    </div>
    <van-button round type="info" class="myBtn" @click="submitForm">验证</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Input } from 'element-ui'
import { Button } from 'vant'
import data from './data'
import methods from './methods'
Vue.use(Input).use(Button)
export default {
  data,
  methods,
  created () {
    let query = this.$route.query
    this.form = {
      opentime: query.opentime || '',
      resultnum: query.resultnum || '',
      sum: query.sum || '',
      inputValue: query.inputValue || '',
      is_mobile: 1
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/calculusVerification.scss';
</style>
