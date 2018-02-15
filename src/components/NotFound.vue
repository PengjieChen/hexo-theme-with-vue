<template>
  <div>
    <div id="back">
      <router-link :to="{ name: 'Posts' }">Click to back~</router-link>
    </div>
    <img class="fof" src="../assets/404.jpeg" alt="404"/> 
  </div>
</template>

<script>
export default {
  name: 'NotFound'
  // data () {
  //   return {
  //     msg: '404!'
  //   }
  // },
  // methods: {
  //   ...mapActions([ 'goBack' ])
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back {
  font-size: 2em;
  display: block;
}
.fof {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
