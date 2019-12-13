<template>
  <div class="cell" @click="handleClick">
    <div class="cell-left">
      {{ label }}
    </div>
    <div class="cell-right">
      {{ value }}
      <van-icon v-if="showArrow" name="arrow" :style="{
        marginLeft: '10px',
        fontSize: '16px',
        display: 'block'
      }" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  name: 'cell',
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$emit('click', true)
    }
  },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    value: {
      default: () => ''
    },
    showArrow: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>
