<template>
  <section>
    <div>
      <ul>
        Find {{timelinea.length}} posts in #{{year}}-{{month}}! 
        <li v-for="post in timelinea">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.slug }}</router-link>
          <p v-html="post.date"></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'PostsByTL',
  props: ['year', 'month'],
  computed: {
    ...mapGetters([ 'timelinea', 'timeline' ])
  },
  methods: {
    ...mapActions([ 'getTimeline' ]),
    ...mapMutations([ 'updateTimelinea' ])
  },
  created () {
    this.getTimeline().then(
      () => {
        for (let tyear of this.timeline) {
          if (tyear.year === this.year) {
            // console.log('this.year' + this.year)
            for (let tmonth of tyear.postlist) {
              if (tmonth.month === this.month) {
                // console.log('this.month' + this.month)
                this.updateTimelinea(tmonth.postlist)
                // console.log(this.timelinea)
                break
              }
            }
          }
        }
      })
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
