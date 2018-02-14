<template>
  <div>
    <div class="tag-item" v-for="tag in tags">
      <router-link :to="{ name: 'PostsByTag', params: { tag: tag.name }}">{{tag.name}}</router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters([ 'tags' ])
  },
  methods: {
    ...mapActions([ 'getTags' ])
  },
  created () {
    this.getTags()
    .then()
    // console.log(this.posts)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag-item {
  float: left;
  margin-left: 10px;
}
</style>