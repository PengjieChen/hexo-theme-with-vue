<template>
<div>
    <div class="pom" :style="indent">
      <span @click="toggleChildren" v-if="plusOrMinus">{{plusOrMinus}}</span>
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

<style scoped>
.pom :hover {
  cursor: pointer;
}
</style>