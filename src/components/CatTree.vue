<template>
<div>
    <div class="pom" :style="indent">
      <i class="more-or-less" @click="toggleChildren" v-if="plusOrMinus">{{plusOrMinus}}</i>
      <router-link :to="{ name: 'PostsByCat', params: { cat: name }}">{{name}}</router-link>
      </div>
    <cat-tree v-if="showChildren" v-for="sub in tree" :tree="sub.children" :name="sub.name" :depth="depth + 1" :key="sub._id">
    </cat-tree>
</div>
</template>

<script>
export default {
  data () {
    return { showChildren: false }
  },
  name: 'CatTree',
  props: ['tree', 'name', 'depth'],
  computed: {
    indent () {
      return { transform: `translate(${this.depth * 20}px)` }
    },
    plusOrMinus () {
      return this.tree ? (this.showChildren ? '<' : '>') : ' '
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.pom:hover {
  cursor: pointer;
  // color: $--sub-main-color;
}
.more-or-less:hover {
  color: $--sub-main-color;
  border-bottom: 2px solid $--sub-main-color;
}
</style>