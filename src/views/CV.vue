<template>
<div class="cv-view">
  <button @click="revertLang" class="button">{{ currentLang }}</button>
  <div class="cv-en" v-if="this.lang==='En'">
    <h1>陈鹏杰</h1>
    <p class="slogan">如果不试试，连失败都不是你的。</p>
    <a href="mailto:cnicky01@163.com">cnicky01@163.com</a>
    <h2>项目经验</h2>
    <p>Hexo 主题</p>
    <p>基于VUE框架，搭建Gitpage个人博客。</p>
    <h2>涉及的相关技术</h2>
    <table>
      <percentage cid="Java-Script" length="80"></percentage>
      <percentage cid="HTML" length="55"></percentage>
      <percentage cid="CSS" length="45"></percentage>
      <percentage cid="SCSS" length="35"></percentage>
      <percentage cid="Vue" length="75"></percentage>
      <percentage cid="vue-router" length="65"></percentage>
      <percentage cid="Vuex" length="65"></percentage>
      <percentage cid="Webpack" length="45"></percentage>
    </table>
    <h2>教育背景</h2>
    <p>电子科技大学本科及研究生</p>
    <p>2013年光电信息学院毕业</p>
    <h2>工作经历</h2>
    <p>现从事嵌入式开发，负责公司SSD controlor固件前端开发，主要包括基于SATA协议与主机的通信部分。希望未来从事Web前端开发的相关工作。</p>
    <p>工作地点：杭州</p>
    <p><a href="https://pengjiechen.github.io/" target="_blank">了解更多</a> || <a href="#" target="_blank">下载简历</a></p>
  </div>
  <div class="cv-ch" v-else>
    <h1>PengjieChen</h1>
    <p class="slogan">Give it a try.</p>
    <a href="mailto:cnicky01@163.com">cnicky01@163.com</a>
    <h2>Projects</h2>
    <p>Hexo Theme</p>
    <p>Build personal blog on Gitpage with vue.</p>
    <h2>Skills</h2>
    <table>
      <percentage cid="Java-Script" length="80"></percentage>
      <percentage cid="HTML" length="55"></percentage>
      <percentage cid="CSS" length="45"></percentage>
      <percentage cid="SCSS" length="35"></percentage>
      <percentage cid="Vue" length="75"></percentage>
      <percentage cid="vue-router" length="65"></percentage>
      <percentage cid="Vuex" length="65"></percentage>
      <percentage cid="Webpack" length="45"></percentage>
    </table>
    <h2>Education</h2>
    <p>Undergraduate and graduate student at UESTC(University of Electronic Science and Technology of China)</p>
    <p>Graduated on July 2013, school of optoelectronic imformation of UESTC</p>
    <h2>Current Position</h2>
    <p>Embedded software developer，in charged of SSD controler firmware front-end develop，including communication with host under SATA protocol. Hope to be engaged in Web front-end development in the future.</p>
    <p>Location：HangZhou</p>
    <p><a href="https://pengjiechen.github.io/" target="_blank">More Information</a> || <a href="#" target="_blank">Download CV</a></p>
  </div>
</div>
</template>

<script>
import Percentage from '@/components/Percentage.vue'

export default {
  name: 'CV',
  components: {
    'percentage': Percentage
  },
  data () {
    return {
      lang: 'En',
      windowSize: 'big'
    }
  },
  computed: {
    currentLang: function () {
      return this.lang
    },
    currentWindow: function () {
      return this.windowSize
    }
  },
  methods: {
    revertLang: function () {
      this.lang = (this.lang === 'En') ? 'Ch' : 'En'
      document.title = (this.lang === 'En') ? '陈鹏杰的简历' : "PengjieChen's CV"
    },
    revertStyle: function () {
      this.windowSize = (this.windowSize === 'big') ? 'small' : 'big'
    },
    styleInit: function () {
      this.windowSize = window.windowSize > 768 ? 'big' : 'small'
    }
  },
  created () {
    document.title = '陈鹏杰的简历'
    window.scrollTo(0, 0)
  },
  mounted () {
    this.styleInit()
    // console.log(`this${this.currentWindow}`)
    var that = this
    // that.currentWindow  = this.currentWindow
    // console.log(`that${that.currentWindow}`)
    window.onresize = function percentageResize () {
      if (window.innerWidth >= 768 && that.currentWindow === 'small') {
        // percentLength.style.width = (that / 100 * 300) + 'px'
        // bigFlag = 0
        let el = document.getElementsByClassName('inner')
        let length = el.length
        for (let idx = 0; idx < length; idx++) {
          let tempLength = el[idx].style.width.replace(/px$/, '')
          // console.log(`1 ${tempLength}`)
          el[idx].style.width = tempLength * 3 + 'px'
          // console.log(`2 ${el[idx].style.width}`)
        }
        // console.log(that.currentWindow)
        that.revertStyle()
        // console.log(`after revert:`)
        // console.log(that.currentWindow)
      } else if (window.innerWidth < 768 && that.currentWindow === 'big') {
        // percentLength.style.width = (that / 100 * 100) + 'px'
        // bigFlag = 1
        let el = document.getElementsByClassName('inner')
        let length = el.length
        for (let idx = 0; idx < length; idx++) {
          let tempLength = el[idx].style.width.replace(/px$/, '')
          // console.log(`1 ${tempLength}`)
          el[idx].style.width = tempLength / 3 + 'px'
          // console.log(`2 ${el[idx].style.width}`)
        }
        // console.log(that.currentWindow)
        that.revertStyle()
        // console.log(`after revert:`)
        // console.log(that.currentWindow)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0px;
}
span{
  padding: 0 10px;
  font-size:16px;
}
.cv-view {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 70px;
}
.slogan {
  /* transform: translate(20px); */
  font-size: 0.8em;
}
.skill-tag {
  font-size: 0;
}
</style>