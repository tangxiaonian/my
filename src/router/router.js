import store from "../store/index";
import VueRouter from "vue-router";
import Vue from 'vue'


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path:"/",
            redirect: () => {
                return "/login";
            }
        },
        {
            path: "/index",
            component:() => import("../views/index/Index.vue")
        },
        {
            path: "/login",
            component:() => import("../views/login/Login")
        },
        {
            path: "/test",
            component:() => import("../views/test/Test")
        },
        {
            path:"*",
            component:() => import("../views/notfound/NotFound")
        }
    ]
});
// 前置守卫
router.beforeEach((to, from, next) => {

    if (!store.state.users.token) {
        console.log("token 不存在，跳转到登录!");
        next({path: "/login"})
    }else {
        next();
    }

});

export default router;
