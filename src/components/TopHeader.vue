<template>
<header>
  <div class="site-name">
    <h1>{{siteCfg.title}}</h1>
  </div>
  <ul>
    <li v-for="menu in siteCfg.table">
      <a v-if="menu.type === 'permalink'" :href="menu.path"><h1>{{ menu.title }}</h1></a>
      <router-link v-else :to="menu.path"><h1>{{ menu.title }}</h1></router-link>
    </li>
  </ul>
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

<style scoped>
.site-name, a, ul, li {
  margin: 0px auto;
}
.site-name {
  float: left;
  margin-left: 20px;
}
a {
  /* float: left; */
  text-decoration: none;
  color: black;
}
/* a:active {
  color: black;
} */
ul {
  float: right;
  margin-right: 20px;
}
li {
  display: inline-block;
  margin-left: 18px;
}
header {
  width: 100%;
  height: 88px;
  background-color: #888;
}
</style>