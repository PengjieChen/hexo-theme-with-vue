<template>
<div>
    <div :style="indent"><span @click="toggleChildren" v-if="plusOrMinus">{{plusOrMinus}}</span>
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
      return { transform: `translate(${this.depth * 10}px)` }
    },
    plusOrMinus () {
      return this.tree ? (this.showChildren ? '-' : '+') : ' '
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: left;
}
h1, h2 {
  font-weight: normal;
  border:1px solid #F00;
}
ul {
  list-style-type: none;
  padding: 0;
  border:1px solid #0F0;
}
li {
  display: inline-block;
  margin: 0 10px;
  border:1px solid #00F;
}
a {
  color: #42b983;
}
</style>