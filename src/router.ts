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
    {
      path: '/bill',
      name: 'bill',
      component: () => import(/* webpackChunkName: "about" */ './views/Bill.vue'),
    },
    {
      path: '/bill-table-18',
      name: 'bill-table-18',
      component: () => import(/* webpackChunkName: "about" */ './views/Bill-table-18.vue'),
    },
    {
      path: '/new-menu',
      name: 'new-menu',
      component: () => import(/* webpackChunkName: "about" */ './views/NewMenu.vue'),
    },
    {
      path: '/cookerToDoNothing',
      name: 'cookerToDoNothing',
      component: () => import(/* webpackChunkName: "about" */ './views/CookerToDoNothing.vue'),
    },
    {
      path: '/cook',
      name: 'cook',
      component: () => import(/* webpackChunkName: "about" */ './views/Cook.vue'),
    },
    {
      path: '/newCook',
      name: 'newCook',
      component: () => import(/* webpackChunkName: "about" */ './views/NewCook.vue'),
    },
    {
      path: '/newCookerToDoNothing',
      name: 'newCookerToDoNothing',
      component: () => import(/* webpackChunkName: "about" */ './views/NewCookerToDoNothing.vue'),
    },
    {
      path: '/newRolesCookers',
      name: 'newRolesCookers',
      component: () => import(/* webpackChunkName: "about" */ './views/NewRolesCookers.vue'),
    },
    {
      path: '/newCookerOrder',
      name: 'newCookerOrder',
      component: () => import(/* webpackChunkName: "about" */ './views/NewCookerOrder.vue'),
    },
  ],
});
