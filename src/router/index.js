import Vue from 'vue'
import Router from 'vue-router'

if (!window.root || window.root === '') {
  window.root = '/'
} else if (!window.root.endsWith('/')) {
  window.root += '/'
}

const root = window.root

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: root,
      name: 'Posts',
      component: () => import('@/views/Posts')
    },
    {
      path: root + 'Post/:slug',
      props: true,
      name: 'Post',
      component: () => import('@/views/Post')
    },
    {
      path: root + 'Posts/:id',
      props: true,
      name: 'PostsById',
      component: () => import('@/views/PostsById')
    },
    {
      path: root + 'Tags/:tag',
      props: true,
      name: 'PostsByTag',
      component: () => import('@/views/PostsByTag')
    },
    {
      path: root + 'Cats/:cat',
      props: true,
      name: 'PostsByCat',
      component: () => import('@/views/PostsByCat')
    },
    {
      path: root + 'Timeline/:year/:month',
      props: true,
      name: 'PostsByTL',
      component: () => import('@/views/PostsByTL')
    },
    {
      path: root + 'CV',
      name: 'CV',
      component: () => import('@/views/CV')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/views/NotFound')
    }
  ]
})
