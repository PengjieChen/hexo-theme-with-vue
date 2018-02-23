<template>
  <section>
    <post-list :postslist="posts"></post-list>
    <div>
      <ul class="paginator-list">
        <li class="paginator" v-for="n in pageCount">
          <router-link :to="{ name: 'PostsById', params: { id: n }}">{{ n }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Posts',
  props: ['id'],
  components: {
    'post-list': PostList
  },
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
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
</style>