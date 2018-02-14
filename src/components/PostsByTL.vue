<template>
  <section>
    <div>
      <ul>
        Find {{timelinea.length}} post{{timelinea.length > 1 ? 's' : ' '}} in {{year}} - {{month}}! 
        <li class="posts" v-for="post in timelinea">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <p>{{post.date | timeFormat}}</p>
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

</style>
