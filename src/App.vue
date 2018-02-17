<template>
  <div id="app">
    <top-header class='top'></top-header>
    <div class="clear"></div>
    <section class="main-contain">
      <div class="post-view">
      <router-view></router-view>
      </div>
    </section>
    <side-bar class='side'></side-bar>
    <div class="clear"></div>
    <bottom-footer class='bottom'></bottom-footer>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import SideBar from '@/components/SideBar.vue'
import BottomFooter from '@/components/BottomFooter.vue'

export default {
  name: 'app',
  components: {
    'top-header': TopHeader,
    'side-bar': SideBar,
    'bottom-footer': BottomFooter
  }
}
</script>

<style>
p {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.main-contain {
  float: left;
  width: 100%;
}
.post-view {
  margin-left: 200px;
  padding: 20px;
}
.side {
  float: left;
  margin-left: -100%;
  width: 200px;
}
.posts {
  margin: 30px;
  list-style-type: none;
  /* background-color: #DFDFDF; */
}
.post-date {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #7F7F7F;
  font-size: 0.9em;
}
.post-excerpt {
  margin: 10px auto;
}
.list-result {
  padding-top: 20px;
  padding-left: 70px;
  font-size: 1em;
}
.paginator {
  margin: 10px auto 10px 20px;
  display: inline-block;
}
.clear {
  clear: both;
}
.button {
  border: 1px solid black;
  outline: none;
}
.button::-moz-focus-inner {
  border: 0;
  background-color: #D8D8D8;
}
a {
  text-decoration: none;
}
a:hover, a:visited, a:link, a:active {
  color: black;
}
a:focus {
  outline: none;
}
a:hover {
  color: grey;
}
</style>