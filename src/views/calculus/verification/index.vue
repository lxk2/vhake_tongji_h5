<template>
  <div class="main">
    <div class="item">
      <div class="label">
        统计时间
      </div>
      <el-input v-model="formData.create_time" placeholder=""></el-input>
    </div>
    <div class="item">
      <div class="label">
        点击量
      </div>
      <el-input v-model="formData.create_time" placeholder=""></el-input>
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
      <el-input type="textarea" value="a0b725519ce3f30bcbb733a87c85720a3cd96d467542f9009a67df274348158dc3cc4795dc928387bba99a2df02440338728bce49c3c7029e4eb7b71e423791c" placeholder="" autosize></el-input>
    </div>
    <div class="item">
      <div class="label">
        演算结果
      </div>
      <el-input value="10,7,2,5,1,9,3,8,6,4" placeholder=""></el-input>
    </div>
    <van-button round type="info" class="myBtn">验证</van-button>
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
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/calculusVerification.scss';
</style>
