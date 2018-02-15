<template>
  <section>
    <div>
      <ul>
        <li class="posts" v-for="post in posts">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <p>{{post.date | timeFormat}}</p>
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
  name: 'PostsById',
  props: ['id'],
  computed: {
    ...mapGetters([ 'posts', 'pageCount', 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created () {
    this.getPosts({id: this.id})
    .then(
      () => {
        document.title = this.siteCfg.title
      }
    )
  },
  watch: {
    '$route' (to, from) {
      this.getPosts({id: this.id})
      .then(
        () => {
          document.title = this.siteCfg.title
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paginator {
  display: inline-block;
  margin-left: 5px;
}

a {
  text-decoration: none;
  color: black;
  border: 1px solid white;
}

/* a:hover {
  border: 1px solid black;
} */
</style>
