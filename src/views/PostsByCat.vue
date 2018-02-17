<template>
  <section>
    <div class="list-result">Find {{catList.postlist.length}} post{{catList.postlist.length > 1 ? 's' : ' '}} in {{catList.name}}!</div>
    <post-list :postslist="catList.postlist"></post-list>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList.vue'

export default {
  name: 'PostsByCat',
  props: ['cat'],
  components: {
    'post-list': PostList
  },
  computed: {
    ...mapGetters([ 'catList' ])
  },
  methods: {
    ...mapActions([ 'getPostsByCat' ])
  },
  created () {
    this.getPostsByCat({cat: this.cat})
    .then(
      () => {
        document.title = this.cat
      }
    )
  },
  watch: {
    '$route' (to, from) {
      this.getPostsByCat({cat: this.cat})
      .then(
        () => {
          document.title = this.cat
        }
      )
      window.scrollTo(0, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  font-size: 1.3em;
  color: black;
  border: 1px solid white;
}

/* a:hover {
  border: 1px solid black;
} */
</style>
