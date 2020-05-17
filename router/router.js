import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router.esm.js";
import Home from "./views/Home.vue";

const routerHistory = createWebHashHistory();

let router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/',      component: Home, name: '' },
    { path: '/who',   component: Home, name: 'who' },
    { path: '/what',  component: Home, name: 'what' },
    { path: '/where', component: Home, name: 'where' },
    { path: '/when',  component: Home, name: 'when' },
    { path: '/why',   component: Home, name: 'why' },
    { path: '/*', redirect: '/' }
  ]
});
router.afterEach((to, from) => {

  console.info(from);
  console.info(to);
  console.info('------------'+ window.location.path);
})

export default router;