<template>
  <div id="app">
    <top-header class='top'></top-header>
    <div class="clear"></div>
    <div class="main-wrap">
      <section class="main-contain">
        <div class="post-view">
          <div class="post-wrap">
            <router-view></router-view>
          </div>
        </div>
      </section>
      <side-bar class='side'></side-bar>
    </div>
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

<style lang="scss">
@import './styles/main.scss';
</style>