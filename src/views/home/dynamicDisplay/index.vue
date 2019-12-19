<template>
  <div>
    <div class="v-con">
      <div class="c-item">
        <div class="label">在线人数</div>
        <div class="value">{{ temp[0] }}</div>
      </div>
      <div class="c-item">
        <div class="label">新用户数</div>
        <div class="value">{{ temp[1] }}</div>
      </div>
      <div class="c-item">
        <div class="label">总用户数</div>
        <div class="value">{{ temp[2] }}</div>
      </div>
    </div>
    <div ref="echart" id="container"></div>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
  data,
  methods,
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.getOptions()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/views/homeDynamicDisplay.scss';
  .v-con {
    width: 100%;
    display: flex;
    align-items: center;
    .c-item {
      margin-top: 30px;
      margin-bottom: 20px;
      width: calc(100% / 3);
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .label {
        width: 100%;
        text-align: center;
        font-size: 30px;
        line-height: 1;
        color: #333;
        font-weight: bold;
      }
      .value {
        width: 100%;
        text-align: center;
        font-size: 28px;
        color: red;
        line-height: 1;
        margin-top: 10px;
      }
    }
  }
</style>
