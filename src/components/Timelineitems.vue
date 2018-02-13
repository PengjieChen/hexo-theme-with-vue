<template>
  <div>
    <div>
      <span @click="toggleTimeline" v-if="plusOrMinus">{{plusOrMinus}} {{time.year}}({{time.postlist.length}})</span>
    </div>
    <div v-if="showTimeline" v-for="byMonth in time.postlist">
      <router-link :to="{ name: 'PostsByTL', params: { year: time.year, month: byMonth.month}}">
        <span @click="updateTimelinea(byMonth.postlist)">{{byMonth.month}}({{byMonth.postlist.length}})</span>
        </router-link>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'Timelineitems',
  props: [ 'time' ],
  data () {
    return { showTimeline: false }
  },
  computed: {
    plusOrMinus () {
      return this.showTimeline ? '-' : '+'
    }
  },
  methods: {
    toggleTimeline () {
      this.showTimeline = !this.showTimeline
    },
    ...mapMutations([ 'updateTimelinea' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border:1px solid #F00;
}

.hello {
  float: left;
}
</style>