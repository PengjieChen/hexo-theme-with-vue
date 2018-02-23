<template>
  <div>
    <timeline-items v-for="byYear in timeline" :time="byYear" :key="byYear.year"></timeline-items>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Timelineitems from '@/components/Timelineitems.vue'

export default {
  name: 'Timeline',
  components: {
    'timeline-items': Timelineitems
  },
  computed: {
    ...mapGetters([ 'timeline' ])
  },
  methods: {
    ...mapActions([ 'getTimeline' ])
  },
  created () {
    this.getTimeline()
    .then()
  }
}
</script>

<style lang="scss" scoped>
</style>