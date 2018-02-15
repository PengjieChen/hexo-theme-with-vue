<template>
  <section id="post-contain">
  <div v-html="post.content">
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
    ...mapActions([ 'getPost' ])
  },
  created () {
    this.getPost({slug: this.slug})
    .then(
      () => {
        document.title = this.slug
      }
    )
    // console.log(this.posts)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../styles/base.scss"></style>
<style lang="scss" src="../styles/post.scss"></style>
<style lang="scss" src="../styles/code.scss"></style>
