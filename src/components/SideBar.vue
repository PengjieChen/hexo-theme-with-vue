<template>
  <nav>
    <div v-show="isShow" id="nav_info">
      <div id="atuhor-info">
        <h2>author info</h2>
      </div>
      <div id="achievements">
        <h2>achievements</h2>
        <hr />
        <cat-tree class="cat-tree" v-for="sub in catTree" :tree="sub.children" :name="sub.name" :depth="0" :key="sub._id">
        </cat-tree>
      </div>
      <div id="tags">
        <h2>tags</h2>
        <hr />
        <tags class="tags-list"></tags>
      </div>
      <div class="clear"></div>
      <div id="timeline">
        <h2>timeline</h2>
        <hr />
        <timeline class="timeline-list"></timeline>
      </div>
    </div>
    <div id="nav_click" @click="clickRvert">
      click {{isShow}}
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CatTree from '@/components/CatTree.vue'
import Tags from '@/components/Tags.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'SideBar',
  components: {
    'cat-tree': CatTree,
    'tags': Tags,
    'timeline': Timeline
  },
  data () {
    return {
      navShow: true
    }
  },
  computed: {
    isShow: function () {
      return this.navShow
    },
    ...mapGetters([ 'catTree' ])
  },
  methods: {
    clickRvert: function () {
      this.navShow = !this.navShow
    },
    ...mapActions([ 'getCatTree' ])
  },
  created () {
    this.getCatTree()
      .then()
    // console.log(catTree)
  }
}
</script>

<style scoped>
nav {
  /* border: 1px solid blue; */
}

#nav_info, #nav_click{
  /* border: 1px solid red; */
}

nav_info {
  width: 200px;
}

#nav_click {
  display: none;
  margin: auto 0px;
  padding-top: 200px;
  width: 1%;
}

div {
  /* border: 1px solid yellow; */
}

.cat-tree, .tags-list, .timeline-list {
  font-size: 18px;
}

#atuhor-info, #achievements, #tags, #timeline {
  margin-top: 10px;
  border: 1px solid white;
  background-color: gray;
  border-radius: 8px;
  /* box-shadow:2px 2px 5px #444; */
}

h2 {
  margin: 5px auto;
}
</style>