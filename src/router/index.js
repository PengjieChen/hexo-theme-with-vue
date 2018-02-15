import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: () => import('@/components/Posts')
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: () => import('@/components/Blog')
    },
    {
      path: '/Post/:slug',
      props: true,
      name: 'Post',
      component: () => import('@/components/Post')
    },
    {
      path: '/Posts/:id',
      props: true,
      name: 'PostsById',
      component: () => import('@/components/PostsById')
    },
    {
      path: '/Tags/:tag',
      props: true,
      name: 'PostsByTag',
      component: () => import('@/components/PostsByTag')
    },
    {
      path: '/Cats/:cat',
      props: true,
      name: 'PostsByCat',
      component: () => import('@/components/PostsByCat')
    },
    {
      path: '/Timeline/:year/:month',
      props: true,
      name: 'PostsByTL',
      component: () => import('@/components/PostsByTL')
    },
    {
      path: '/CV',
      name: 'CV',
      component: () => import('@/components/CV')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound')
    }
  ]
})
