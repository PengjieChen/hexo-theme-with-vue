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
    console.log(window.innerWidth)
    let percentLength = document.getElementsByClassName(this.cid)[0]
    let outerLentgh = window.innerWidth >= 769 ? 300 : 100
    percentLength.style.width = (this.length / 100 * outerLentgh) + 'px'
    // document.getElementsByClassName(this.percent)[0].style.width = '20px'
    // window.onresize = function percentageResize () {
    //   // let bigFlag = (window.innerWidth >= 768) ? 1 : 0
    //   if (window.innerWidth > 768) {
    //     percentLength.style.width = (that / 100 * 300) + 'px'
    //     // bigFlag = 0
    //     console.log(`big`)
    //     console.log(that.length)
    //   } else if (window.innerWidth < 768) {
    //     percentLength.style.width = (that / 100 * 100) + 'px'
    //     // bigFlag = 1
    //     console.log(`small`)
    //     console.log(that.length)
    //   }
    // }
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
