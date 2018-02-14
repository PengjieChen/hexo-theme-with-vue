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
#app {
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
}
.side {
  float: left;
  margin-left: -100%;
  width: 200px;
}
.side, .main-contain {
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}
.clear {
  clear: both;
}
</style>
