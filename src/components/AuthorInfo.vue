<template>
  <div>
      <div class="au-info">
        <span v-if="siteCfg.author">Author:{{siteCfg.author}}</span>
        <br />
        <span v-if="siteCfg.aboutAU">About Author:{{siteCfg.aboutAU}}</span>
      </div>
      <img src="../assets/QR.jpg" alt="QR"/> 
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.au-info {
  margin: 10px;
}
img {
  display: block;
  width: 180px;
  height: auto;
  margin: 10px auto;
}
</style>
