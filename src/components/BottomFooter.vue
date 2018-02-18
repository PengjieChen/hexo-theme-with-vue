<template>
  <footer>
    <div class="footer-contain">
      <p>&copy; {{ time }} {{ siteCfg.author || siteCfg.title }}</p>
      <p>powered by <router-link :to="{ path: '/' }">{{ siteCfg.theme || siteCfg.author }}</router-link></p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'BottomFooter',
  computed: {
    ...mapGetters([ 'siteCfg' ]),
    time () {
      return moment(new Date()).format('YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

footer {
  padding: 50px 40px;
  text-align: left;
  width: 100%;
  color: $--main-background-color;
  background-color: $--footer-background-color;
  font-size: 12px;
}
a {
  color: $--hight-light-color;
}
.footer-contain {
  margin: auto 10px;
}
</style>