<template>
  <section>
    <div>
      <ul>
        Find {{tagList.postlist.length}} posts in #{{tagList.name}}!
        <li v-for="post in tagList.postlist">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <p v-html="post.date"></p>
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
    .then()
    // console.log(this.posts)
  },
  watch: {
    '$route' (to, from) {
      this.getPostsByTag({tag: this.tag})
      .then()
      // console.log(1)
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
