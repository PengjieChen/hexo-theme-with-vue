<template>
  <div class="hello">
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
