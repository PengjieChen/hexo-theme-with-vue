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
.posts-section {
  /* background-color: #A8C8E4; */
}
.paginator {
  margin: 10px auto 10px 20px;
  display: inline-block;
}
.clear {
  clear: both;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
a:hover, a:visited, a:link, a:active {
  color: black;
}
a:focus {
  outline:none;
}
a:hover {
  color: grey;
}
</style>