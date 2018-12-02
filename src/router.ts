import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: () => import(/* webpackChunkName: "about" */ './views/Accueil.vue'),
    },

    {
      path: '/addCommand',
      name: 'addCommand',
      component: () => import(/* webpackChunkName: "about" */ './views/AddCommand.vue'),
    },
    {
      path: '/cookerCommand',
      name: 'cookerCommand',
      component: () => import(/* webpackChunkName: "about" */ './views/CookerCommand.vue'),
    },
    {
      path: '/modifiedMenu',
      name: 'modifiedMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/ModifiedMenu.vue'),
    },
    {
      path: '/rolesCookers',
      name: 'rolesCookers',
      component: () => import(/* webpackChunkName: "about" */ './views/RolesCookers.vue'),
    },
    {
      path: '/command-1',
      name: 'command-1',
      component: () => import(/* webpackChunkName: "about" */ './views/Command-1.vue'),
    },
    {
      path: '/command-2',
      name: 'command-2',
      component: () => import(/* webpackChunkName: "about" */ './views/Command-2.vue'),
    },
    {
      path: '/command-3',
      name: 'command-3',
      component: () => import(/* webpackChunkName: "about" */ './views/Command-3.vue'),
    },
  ],
});
