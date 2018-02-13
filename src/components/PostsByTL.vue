<template>
  <section class="hello">
    <div>
      <ul>
        Find {{timelinea.length}} posts in #{{year}}-{{month}}! 
        <li v-for="post in timelinea">
          <router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.slug }}</router-link>
          <p v-html="post.date"></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'PostsByTL',
  props: ['year', 'month'],
  computed: {
    ...mapGetters([ 'timelinea', 'timeline' ])
  },
  methods: {
    ...mapActions([ 'getTimeline' ]),
    ...mapMutations([ 'updateTimelinea' ])
  },
  created () {
    this.getTimeline().then(
      () => {
        for (let tyear of this.timeline) {
          if (tyear.year === this.year) {
            // console.log('this.year' + this.year)
            for (let tmonth of tyear.postlist) {
              if (tmonth.month === this.month) {
                // console.log('this.month' + this.month)
                this.updateTimelinea(tmonth.postlist)
                // console.log(this.timelinea)
                break
              }
            }
          }
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border:1px solid #F00;
}

.hello {
  float: left;
  text-align: left;
}

.paginator {
  display: inline-block;
  margin-left: 5px;
}

a {
  text-decoration: none;
  color: black;
  border: 1px solid white;
}

a:hover {
  border: 1px solid black;
}

.paginator :visited {

}

li {
  list-style-type: none;
}
</style>
