import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

// axios.defaults.baseURL = window.root
axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = '/' // localhost

const state = {
  count: 1,
  siteCfg: {},
  posts: [],
  post: {},
  pageCount: 0,
  catTree: [],
  tags: [],
  timeline: [],
  tagList: {postlist: 0},
  catList: {postlist: 0},
  timelinea: []
}

const getters = {
  number (state) {
    return state.count
  },
  siteCfg (state) {
    return state.siteCfg
  },
  posts (state) {
    return state.posts
  },
  post (state) {
    return state.post
  },
  pageCount (state) {
    return state.pageCount
  },
  catTree (state) {
    return state.catTree
  },
  tags (state) {
    return state.tags
  },
  timeline (state) {
    return state.timeline
  },
  tagList (state) {
    return state.tagList
  },
  catList (state) {
    return state.catList
  },
  timelinea (state) {
    return state.timelinea
  }
}

const mutations = {
  plus (state) {
    state.count++
  },
  plusn (state, val) {
    state.count += val
  },
  updateSiteCfg (state, siteCfg) {
    state.siteCfg = siteCfg
  },
  updatePosts (state, {posts}) {
    state.posts = posts
  },
  updatePost (state, {post}) {
    state.post = post
  },
  updatePageCount (state, val) {
    state.pageCount = val
  },
  updateCatTree (state, val) {
    state.catTree = val
  },
  updateTags (state, val) {
    state.tags = val
  },
  updateTimeline (state, val) {
    state.timeline = val
  },
  updateTagList (state, val) {
    state.tagList = val
  },
  updateCatList (state, val) {
    state.catList = val
  },
  updateTimelinea (state, val) {
    state.timelinea = val
  }
}

const actions = {
  asycplus ({commit}) {
    return axios.get('api/site.json')
    .then(({data}) => {
      commit('plusn', data.per_page)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  goBack () {
    return router.go(-1)
  },
  getSiteCfg ({commit}) {
    return axios.get('api/site.json')
    .then(({data}) => {
      commit('updateSiteCfg', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getPosts ({commit}, {id}) {
    return axios.get(`api/posts/${id}.json`)
    .then(({data}) => {
      commit('updatePosts', {posts: data.data})
      commit('updatePageCount', data.pageCount)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getPost ({commit}, {slug}) {
    return axios.get(`api/articles/${slug}.json`)
    .then(({data}) => {
      commit('updatePost', {post: data})
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getCatTree ({commit}) {
    return axios.get(`api/tree.json`)
    .then(({data}) => {
      commit('updateCatTree', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getTags ({commit}) {
    return axios.get(`api/tags.json`)
    .then(({data}) => {
      commit('updateTags', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getTimeline ({commit}) {
    return axios.get(`api/timeline.json`)
    .then(({data}) => {
      commit('updateTimeline', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getPostsByTag ({commit}, {tag}) {
    return axios.get(`api/tags/${tag}.json`)
    .then(({data}) => {
      // console.log(data)
      commit('updateTagList', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  },
  getPostsByCat ({commit}, {cat}) {
    return axios.get(`api/categories/${cat}.json`)
    .then(({data}) => {
      // console.log(data)
      commit('updateCatList', data)
    })
    .catch(function (error) {
      if (error.message === 'Network Error') {
        router.push('NotFound')
      }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
