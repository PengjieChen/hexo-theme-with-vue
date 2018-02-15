<template>
  <div>
      <span>Author:{{siteCfg.author}}</span>
      <br />
      <span>About Author:{{siteCfg.aboutAU}}</span>
      <br />
      <img src="../assets/logo.png" /> 
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

</style>
