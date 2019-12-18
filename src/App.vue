<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.replace('http://cs.thelatest.cn/')
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/comm.scss';
.content {
  img {
    max-width: 100%!important;
  }
}
</style>
