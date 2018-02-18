<template>
  <header>
    <!-- <img class="head-pic" src="../assets/QR.jpg" alt="header"/> -->
    <div class="header-img"></div>
    <div class="header-inner">
      <div class="site-name">
        <h1>{{siteCfg.title}}</h1>
      </div>
      <ul class="site-menu">
        <li class="menu-items" v-for="menu in siteCfg.table">
          <a v-if="menu.type === 'permalink'" :href="menu.path" target="_blank"><h1 class="nav-menu">{{ menu.title }}</h1></a>
          <router-link v-else :to="menu.path"><h1 class="nav-menu">{{ menu.title }}</h1></router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopHeader',
  computed: {
    ...mapGetters([ 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'getSiteCfg' ])
  },
  created () {
    this.getSiteCfg()
      .then(() => {
        document.title = `${this.siteCfg.title}`
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

h1 {
  font-size: 18px;
  color: black;
}
.site-name, .menu-items, a, ul {
  margin: 0px auto;
}
.site-name {
  float: left;
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: black;
}
.site-menu {
  float: right;
  margin-right: 20px;
}
.menu-items {
  display: inline-block;
  margin-left: 9px;
}
header {
  width: 100%;
  height: 250px;
  // background-size:cover;
  // background-position: 50% 50%;
  // background-image: url(../assets/cat.jpeg);
}
.header-img {
  position: absolute;
  width: 100%;
  height: 250px;
  background-size:cover;
  background-position: 50% 50%;
  background-image: url(../assets/cat.jpeg);
}
.header-inner {
  position: relative;
}
.nav-menu, .site-name {
  text-shadow: 1px 1px 2px $--sub-main-color;
}
.nav-menu:hover {
  color: $--sub-main-color;
  border-bottom: 2px solid $--sub-main-color;
}
@media (max-width: $--small-screen-width) {
  .site-name, .site-menu {
    float: none;
    margin: 0 10px;
  }
  .menu-items {
    margin: 0 10px 0 0;
  }
}
</style>