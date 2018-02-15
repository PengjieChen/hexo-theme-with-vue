<template>
<footer>
  <p>&copy; {{ time }} {{ siteCfg.author || siteCfg.title }}</p>
  <p>powered by <router-link :to="{ path: '/' }">{{ siteCfg.title }}</router-link></p>
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

<style scoped>
footer {
  margin: 10px auto;
  text-align: left;
  width: 100%;
  background-color: #888;
  font-size: 0.9em;
}
h1 {
  margin: 0;
}
</style>