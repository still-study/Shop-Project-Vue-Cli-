import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/api/products',
    name: 'AllProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AllProductsComp.vue'),
  },
  {
    path: '/api/products/:id',
    name: 'Details',
    component: () => import('../components/DetailsComp.vue'),
  },
  {
    path: '/api/cart',
    name: 'Cart',
    component: () => import('../components/CartDetailsComp.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
