import { createRouter, createWebHistory } from "vue-router/dist/vue-router.esm.js";
import Home from "./views/Home.vue";

const routerHistory = createWebHistory("/");

let router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/',      component: Home, name: '' },
    { path: '/who',   component: Home, name: 'who' },
    { path: '/what',  component: Home, name: 'what' },
    { path: '/where', component: Home, name: 'where' },
    { path: '/when',  component: Home, name: 'when' },
    { path: '/why',   component: Home, name: 'why' }
  ]
});
router.afterEach((to, from) => {
  console.info((to, from, window.location.pathname));
})

export default router;
