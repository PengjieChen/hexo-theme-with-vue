<template>
  <section id="post-contain">
  <div v-html="post.content">
  </div>
  <div id="back-button">
    <button class="button" @click="goBack">Back</button>
    <button class="button" @click="goHome">Home</button>
  </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Post',
  props: ['slug'],
  computed: {
    ...mapGetters([ 'post' ])
  },
  methods: {
    ...mapActions([ 'getPost', 'goBack', 'goHome' ])
  },
  created () {
    this.getPost({slug: this.slug})
    .then(
      () => {
        document.title = this.slug
      }
    )
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" src="../styles/post.scss"></style>
<style lang="scss" src="../styles/code.scss"></style>