<template>
  <div>
    <ul class="posts-section">
      <li class="posts" v-for="post in postslist">
        <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link>
        <div v-if="post.excerpt" v-html="post.excerpt" class="post-excerpt"></div>
        <div class="post-date">{{post.date | timeFormat}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['postslist']
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 1.3em;
}
a:active {
  border-bottom: 1px solid black;
}
</style>
