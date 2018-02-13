<template>
  <section class="hello">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border:1px solid #F00;
}

.hello {
  float: left;
  text-align: left;
}

.paginator {
  display: inline-block;
  margin-left: 5px;
}

a {
  text-decoration: none;
  color: black;
  border: 1px solid white;
}

a:hover {
  border: 1px solid black;
}

.paginator :visited {

}

li {
  list-style-type: none;
}
</style>
