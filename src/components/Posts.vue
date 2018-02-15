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
  name: 'Posts',
  props: ['id'],
  computed: {
    ...mapGetters([ 'posts', 'pageCount', 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created () {
    this.getPosts({id: 1})
    .then(
      () => {
        document.title = this.siteCfg.title
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  font-size: 1.3em;
  color: black;
}

a:active {
  border-bottom: 1px solid black;
}
</style>