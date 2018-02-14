<template>
  <section>
    <div>
      <ul>
        Find {{catList.postlist.length}} posts in #{{catList.name}}!
        <li v-for="post in catList.postlist">
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
  name: 'PostsByCat',
  props: ['cat'],
  computed: {
    ...mapGetters([ 'catList' ])
  },
  methods: {
    ...mapActions([ 'getPostsByCat' ])
  },
  created () {
    this.getPostsByCat({cat: this.cat})
    .then()
    // console.log(this.posts)
  },
  watch: {
    '$route' (to, from) {
      this.getPostsByCat({cat: this.cat})
      .then()
      // console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
  border: 1px solid white;
}

a:hover {
  border: 1px solid black;
}

li {
  list-style-type: none;
}
</style>
