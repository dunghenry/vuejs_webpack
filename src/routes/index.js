import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import PageNotFound from '../pages/PageNotFound.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue'),
    },
    {
        path: '/:catchAll(.*)',
        component: PageNotFound,
        // redirect: '/',
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    // if (to.fullPath === '/') {
    //     if (!store.state.moduleAuthor.currentUser?.username) {
    //         next('/login');
    //         return;
    //     }
    // } else if (to.fullPath === '/todos') {
    //     if (!store.state.moduleAuthor.currentUser?.username) {
    //         next('/login');
    //         return;
    //     }
    // } else if (to.fullPath === '/login') {
    //     if (store.state.moduleAuthor.currentUser?.username) {
    //         next('/');
    //         return;
    //     }
    // }
    next();
    return;
});
export default router;
