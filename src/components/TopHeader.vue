<template>
<header>
  <div class="site-name">
    {{siteCfg.title}}
  </div>
  <ul>
    <li v-for="menu in siteCfg.table">
      <a v-if="menu.type === 'permalink'" :href="menu.path">{{ menu.title }}</a>
      <router-link v-else :to="menu.path">{{ menu.title }}</router-link>
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
}
a {
  float: left;
  text-decoration: none;
  color: black;
}
a :active {
  color: black;
}
ul {
  float: right;
  list-style-type: none;
}
li {
  display: inline-block;
  margin-left: 5px;
}
</style>