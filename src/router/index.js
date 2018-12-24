import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Callback from '../components/Callback'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: true
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
