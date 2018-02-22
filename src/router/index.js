import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: () => import('@/views/Posts')
    },
    {
      path: '/Post/:slug',
      props: true,
      name: 'Post',
      component: () => import('@/views/Post')
    },
    {
      path: '/Posts/:id',
      props: true,
      name: 'PostsById',
      component: () => import('@/views/PostsById')
    },
    {
      path: '/tags/:tag',
      props: true,
      name: 'PostsByTag',
      component: () => import('@/views/PostsByTag')
    },
    {
      path: '/Cats/:cat',
      props: true,
      name: 'PostsByCat',
      component: () => import('@/views/PostsByCat')
    },
    {
      path: '/Timeline/:year/:month',
      props: true,
      name: 'PostsByTL',
      component: () => import('@/views/PostsByTL')
    },
    {
      path: '/CV',
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
