<template>
  <nav>
    <div v-show="isShow" id="nav_info">
      <div class="nav_raw">
        author info
      </div>
      <div class="nav_raw">
        achievements
        <cat-tree v-for="sub in catTree" :tree="sub.children" :name="sub.name" :depth="0" :key="sub._id">
        </cat-tree>
      </div>
      <div class="nav_raw">
        tags
        <tags></tags>
      </div>
      <div class="nav_raw">
        timeline
        <timeline></timeline>
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
  border: 1px solid blue;
}

#nav_info, #nav_click{
  border: 1px solid red;
  float: left;
  text-align: center;
  vertical-align: middle;
}

nav_info {

}

#nav_click {

  margin: auto 0px;
  padding-top: 200px;
  width: 1%;
}

.nav_raw {

}

div {
  border: 1px solid yellow;
}
</style>