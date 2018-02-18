<template>
  <section>
    <div class="list-result">Find {{tagList.postlist.length}} post{{tagList.postlist.length > 1 ? 's' : ' '}} in #{{tagList.name}}!</div>
    <post-list :postslist="tagList.postlist"></post-list>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList.vue'

export default {
  name: 'PostsByTag',
  props: ['tag'],
  components: {
    'post-list': PostList
  },
  computed: {
    ...mapGetters([ 'tagList' ])
  },
  methods: {
    ...mapActions([ 'getPostsByTag' ])
  },
  created () {
    this.getPostsByTag({tag: this.tag})
    .then(
      () => {
        document.title = '#' + this.tag
      }
    )
  },
  watch: {
    '$route' (to, from) {
      this.getPostsByTag({tag: this.tag})
      .then(
        () => {
          document.title = '#' + this.tag
        }
      )
      window.scrollTo(0, 0)
    }
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
