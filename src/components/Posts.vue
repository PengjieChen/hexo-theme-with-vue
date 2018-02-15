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
  name: 'Posts',
  props: ['id'],
  computed: {
    ...mapGetters([ 'posts', 'pageCount', 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created () {
    this.getPosts({id: 1})
    .then(
      () => {
        document.title = this.siteCfg.title
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paginator {
  margin: 10px auto 10px 30px;
  display: inline-block;
}

a {
  text-decoration: none;
  color: black;
}

a:active {
  border-bottom: 1px solid black;
}
</style>
