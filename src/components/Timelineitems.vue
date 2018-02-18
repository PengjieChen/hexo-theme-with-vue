<template>
  <div>
    <div>
      <span class="year-line" @click="toggleTimeline" v-if="plusOrMinus">{{plusOrMinus}} {{time.year}} ({{time.postlist.length}})</span>
    </div>
    <div class="month-items" v-if="showTimeline" v-for="byMonth in time.postlist">
      <router-link :to="{ name: 'PostsByTL', params: { year: time.year, month: byMonth.month}}">
        <span @click="updateTimelinea(byMonth.postlist)">{{byMonth.month}} ({{byMonth.postlist.length}})</span>
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
      return this.showTimeline ? '<' : '>'
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
<style lang="scss" scoped>
@import '../styles/vars.scss';

.month-items {
  transform: translate(30px)
}
.year-line:hover {
  cursor: pointer;
  color: $--sub-main-color;
  border-bottom: 2px solid $--sub-main-color;
}
</style>