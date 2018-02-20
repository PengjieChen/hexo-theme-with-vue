<template>
<tr>
  <td>
    <span>{{this.cid}}</span>
  </td>
  <td>
    <div class="outer">
      <div class="inner" :class="cid">
      </div>
    </div>
  </td>
</tr>
</template>

<script>
export default {
  name: 'Percentage',
  props: ['cid', 'length'],
  mounted () {
    let percentLength = document.getElementsByClassName(this.cid)[0]
    let outerLentgh = window.innerWidth >= 769 ? 300 : 100
    percentLength.style.width = (this.length / 100 * outerLentgh) + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/vars.scss';

.outer {
  width: $--percentage-length-normal;
  height: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
.inner {
  width: 0px;
  height: 10px;
  background-color: $--main-background-color;
  border-radius: 10px;
}
@media (max-width: $--medium-screen-width) {
  .outer {
    width: $--percentage-length-small;
  }
}
</style>
