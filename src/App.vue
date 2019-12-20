<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    let domain = 'http://cs.thelatest.cn/'
    // let domain = 'http://www.w50f.cn/'
    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.replace(domain)
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
  textarea {
    outline: none!important;
  }
</style>
