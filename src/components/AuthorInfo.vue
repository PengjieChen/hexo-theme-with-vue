<template>
  <div>
      <div class="au-info">
        <span v-if="siteCfg.author">Author:{{siteCfg.author}}</span>
        <br />
        <span v-if="siteCfg.aboutAU">About Author:{{siteCfg.aboutAU}}</span>
      </div>
      <img class="qr" src="../assets/QR.jpg" alt="QR"/> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthorInfo',
  computed: {
    ...mapGetters([ 'siteCfg' ])
  }
}
</script>

<style lang="scss" scoped>
.au-info {
  margin: 10px;
}
.qr {
  display: block;
  width: 180px;
  height: auto;
  margin: 10px auto;
}
</style>
