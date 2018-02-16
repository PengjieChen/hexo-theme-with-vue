<template>
  <div class="fof">
    <img class="fof-img" src="../assets/404.jpeg" alt="404"/> 
    <div id="back">
      <router-link :to="{ name: 'Posts' }">To find my way.</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created () {
    document.title = 'I just lost my way...'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back {
  display: block;
  margin-top: 30px;
  font-size: 1.7em;
  text-align: center;
  background-color: #DBDBDB;
}
.fof-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}
.fof {
  padding-left: 20px;
}
</style>
