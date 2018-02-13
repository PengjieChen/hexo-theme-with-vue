<template>
  <section class="hello" v-html="post.content">
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
    .then()
    // console.log(this.posts)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border:1px solid #F00;
}

.hello {
  float: left;
}
</style>
