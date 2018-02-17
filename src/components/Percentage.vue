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
    percentLength.style.width = (this.length / 100 * 300) + 'px'
    // document.getElementsByClassName(this.percent)[0].style.width = '20px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  width: 300px;
  height: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
.inner {
  width: 0px;
  height: 10px;
  background-color: #DBDBDB;
  border-radius: 10px;
}
</style>
