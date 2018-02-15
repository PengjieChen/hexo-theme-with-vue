<template>
  <section>
    <div>
      <ul class="posts-section">
        <li class="posts" v-for="post in posts">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <div v-if="post.excerpt" v-html="post.excerpt" class="post-excerpt"></div>
          <div class="post-date">{{post.date | timeFormat}}</div>
        </li>
      </ul>
    </div>
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

export default {
  name: 'PostsById',
  props: ['id'],
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
