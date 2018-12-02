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
      path: '/takeOrder',
      name: 'takeOrder',
      component: () => import(/* webpackChunkName: "about" */ './views/TakeOrder.vue'),
    },
    {
      path: '/cookerOrder',
      name: 'cookerOrder',
      component: () => import(/* webpackChunkName: "about" */ './views/CookerOrder.vue'),
    },
    {
      path: '/changeMenu',
      name: 'changeMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/ChangeMenu.vue'),
    },
    {
      path: '/rolesCookers',
      name: 'rolesCookers',
      component: () => import(/* webpackChunkName: "about" */ './views/RolesCookers.vue'),
    },
    {
      path: '/order-1',
      name: 'order-1',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-1.vue'),
    },
    {
      path: '/order-2',
      name: 'order-2',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-2.vue'),
    },
    {
      path: '/order-3',
      name: 'order-3',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-3.vue'),
    },
    {
      path: '/navBarAdmin',
      name: 'navBarAdmin',
      component: () => import(/* webpackChunkName: "about" */ './components/navBarAdmin.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "about" */ './views/Menu.vue'),
    },
    {
      path: '/takeOrder',
      name: 'takeOrder',
      component: () => import(/* webpackChunkName: "about" */ './views/TakeOrder.vue'),
    },
    {
      path: '/unavailableDish',
      name: 'unavailableDish',
      component: () => import(/* webpackChunkName: "about" */ './views/UnavailableDish.vue'),
    },
  ],
});
