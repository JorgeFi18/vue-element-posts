import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeView.vue'
import PostDetail from './components/PostDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/post/:id', component: PostDetail, props: true },
  ],
})