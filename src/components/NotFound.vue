<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click='goBack'>Back~</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotFound',
  data () {
    return {
      msg: '404!'
    }
  },
  methods: {
    ...mapActions([ 'goBack' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
