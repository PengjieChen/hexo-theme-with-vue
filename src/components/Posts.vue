<template>
  <section>
    <div>
      <ul>
        <li class="posts" v-for="post in posts">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
          <p v-html="post.date"></p>
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
import moment from 'moment'

export default {
  name: 'Posts',
  props: ['id'],
  computed: {
    ...mapGetters([ 'posts', 'pageCount' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created () {
    this.getPosts({id: 1})
    .then(
      () => {
        for (let post of this.posts) {
          post.date = moment(post.date).format('Do MMM , YYYY')
        }
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts, .paginator {
  margin-left: 5px;
  list-style-type: none;
}

.paginator {
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
