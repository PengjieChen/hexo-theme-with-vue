<template>
  <section>
    <post-list :postslist="posts"></post-list>
    <div>
      <ul>
        <li class="paginator" v-for="n in pageCount">
          <router-link :to="{ name: 'PostsById', params: { id: n }}">{{ n }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList.vue'

export default {
  name: 'PostsById',
  props: ['id'],
  components: {
    'post-list': PostList
  },
  computed: {
    ...mapGetters([ 'posts', 'pageCount', 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created () {
    this.getPosts({id: this.id})
    .then(
      () => {
        document.title = this.siteCfg.title
      }
    )
  },
  watch: {
    '$route' (to, from) {
      this.getPosts({id: this.id})
      .then(
        () => {
          document.title = this.siteCfg.title
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
</style>
