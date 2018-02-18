<template>
  <section>
    <div class="list-result">Find {{timelinea.length}} post{{timelinea.length > 1 ? 's' : ' '}} in {{year}} - {{month}}!</div>
    <post-list :postslist="timelinea"></post-list>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import PostList from '@/components/PostList.vue'

export default {
  name: 'PostsByTL',
  props: ['year', 'month'],
  components: {
    'post-list': PostList
  },
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
            for (let tmonth of tyear.postlist) {
              if (tmonth.month === this.month) {
                this.updateTimelinea(tmonth.postlist)
                break
              }
            }
          }
        }
        document.title = 'Time line for all the posts'
        window.scrollTo(0, 0)
      })
  }
}
</script>

<style lang="scss" scoped>
// a {
//   text-decoration: none;
//   font-size: 1.3em;
//   color: black;
//   border: 1px solid white;
// }
</style>
