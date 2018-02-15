<template>
  <section>
    <div>
      <ul class="posts-section">
        Find {{tagList.postlist.length}} post{{tagList.postlist.length > 1 ? 's' : ' '}} in #{{tagList.name}}!
        <li class="posts" v-for="post in tagList.postlist">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <div v-if="post.excerpt" v-html="post.excerpt" class="post-excerpt"></div>
          <div class="post-date">{{post.date | timeFormat}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PostsByTag',
  props: ['tag'],
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
    }
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
