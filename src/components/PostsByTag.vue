<template>
  <section>
    <div>
      <ul>
        Find {{tagList.postlist.length}} post{{tagList.postlist.length > 1 ? 's' : ' '}} in #{{tagList.name}}!
        <li class="posts" v-for="post in tagList.postlist">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <p>{{post.date | timeFormat}}</p>
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

</style>
