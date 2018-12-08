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
      path: '/patron',
      name: 'patron',
      component: Home,
    },
    {
      path: '/cuisine',
      name: 'cuisine',
      component: Home,
    },
    {
      path: '/service',
      name: 'service',
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
      path: '/searchOrder',
      name: 'searchOrder',
      component: () => import(/* webpackChunkName: "about" */ './views/SearchOrder.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/Order.vue'),
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
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/Order.vue'),
    },
    {
      path: '/changeRolesCookers',
      name: 'changeRolesCookers',
      component: () => import(/* webpackChunkName: "about" */ './views/ChangeRolesCookers.vue'),
    },
    {
      path: '/changeProfil',
      name: 'changeProfil',
      component: () => import(/* webpackChunkName: "about" */ './views/ChangeProfil.vue'),
    },


    {
      path: '/removeDish',
      name: 'removeDish',
      component: () => import(/* webpackChunkName: "about" */ './views/RemoveDish.vue'),
    },
    {
      path: '/billPaid',
      name: 'billPaid',
      component: () => import(/* webpackChunkName: "about" */ './views/BillPaid.vue'),
    },
    {
      path: '/order-table-14',
      name: 'order-table-14',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-14.vue'),
    },
    {
      path: '/order-table-18',
      name: 'order-table-18',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-18.vue'),
    },
    {
      path: '/order-table-1',
      name: 'order-table-1',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-1.vue'),
    },
    {
      path: '/order-table-2',
      name: 'order-table-2',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-2.vue'),
    },
    {
      path: '/order-table-3',
      name: 'order-table-3',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-3.vue'),
    },
    {
      path: '/order-table-4',
      name: 'order-table-4',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-4.vue'),
    },
    {
      path: '/order-table-4',
      name: 'order-table-4',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-4.vue'),
    },
    {
      path: '/order-table-5',
      name: 'order-table-5',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-5.vue'),
    },
    {
      path: '/order-table-6',
      name: 'order-table-6',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-6.vue'),
    },
    {
      path: '/order-table-7',
      name: 'order-table-7',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-7.vue'),
    },
    {
      path: '/order-table-8',
      name: 'order-table-8',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-8.vue'),
    },
    {
      path: '/order-table-9',
      name: 'order-table-9',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-9.vue'),
    },
    {
      path: '/order-table-10',
      name: 'order-table-10',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-10.vue'),
    },    {
      path: '/order-table-11',
      name: 'order-table-11',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-11.vue'),
    },    {
      path: '/order-table-12',
      name: 'order-table-12',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-12.vue'),
    },    {
      path: '/order-table-13',
      name: 'order-table-13',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-13.vue'),
    },    {
      path: '/order-table-15',
      name: 'order-table-15',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-15.vue'),
    },    {
      path: '/order-table-16',
      name: 'order-table-16',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-16.vue'),
    },    {
      path: '/order-table-17',
      name: 'order-table-17',
      component: () => import(/* webpackChunkName: "about" */ './views/Order-table-17.vue'),
    },
    {
      path: '/veganMenu',
      name: 'veganMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/VeganMenu.vue'),
    },
    {
      path: '/all-menus',
      name: 'all-menus',
      component: () => import(/* webpackChunkName: "about" */ './views/AllMenus.vue'),
    },
    {
      path: '/bossMenu',
      name: 'bossMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/BossMenu.vue'),
    },
    {
      path: '/summerMenu',
      name: 'summerMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/SummerMenu.vue'),
    },
    {
      path: '/newMenu',
      name: 'newMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/NewMenu.vue'),
    },
    {
      path: '/winterMenu',
      name: 'winterMenu',
      component: () => import(/* webpackChunkName: "about" */ './views/WinterMenu.vue'),
    },
    {
     path: '/cookerOrderFinished',
     name: 'cookerOrderFinished',
     component: () => import(/* webpackChunkName: "about" */ './views/CookerOrderFinished.vue'),
    },

  ],
});
