<template>
  <section>
    <div>
      <ul>
        Find {{catList.postlist.length}} post{{catList.postlist.length > 1 ? 's' : ' '}} in #{{catList.name}}!
        <li class="posts" v-for="post in catList.postlist">
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
    .then(
      () => {
        document.title = this.cat
      }
    )
  },
  watch: {
    '$route' (to, from) {
      this.getPostsByCat({cat: this.cat})
      .then(
        () => {
          document.title = this.cat
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
  color: black;
  border: 1px solid white;
}

/* a:hover {
  border: 1px solid black;
} */
</style>
