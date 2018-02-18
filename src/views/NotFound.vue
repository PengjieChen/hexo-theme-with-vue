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
    window.scrollTo(0, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/vars.scss';

#back {
  display: block;
  margin-top: 30px;
  font-size: 1.7em;
  text-align: center;
  background-color: $--main-background-color;
}
.fof-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}
.fof {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 70px;
}
</style>
