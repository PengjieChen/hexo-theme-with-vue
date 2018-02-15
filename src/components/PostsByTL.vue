<template>
  <section>
    <div>
      <ul class="posts-section">
        Find {{timelinea.length}} post{{timelinea.length > 1 ? 's' : ' '}} in {{year}} - {{month}}! 
        <li class="posts" v-for="post in timelinea">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <div v-if="post.excerpt" v-html="post.excerpt" class="post-excerpt"></div>
          <div class="post-date">{{post.date | timeFormat}}</div>
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
        document.title = 'Time line for all the posts'
      })
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.3em;
  color: black;
  border: 1px solid white;
}
</style>
