import Vue from 'vue'
import Router from 'vue-router'
import ROUTER_EACH_PATH from './routerEach'

Vue.use(Router)

const routes = [{
    path: "/show",
    component: () => import('@/components/show.vue'),
    meta: {
        title: '分类'
    }
}]

/*eslint-disable */
for (const item of ROUTER_EACH_PATH) {
    routes.push({
        path: '/first/' + item.path,
        name: 'first/' + item.name,
        component: () => {
            return import(`@/views/first/${item.import}`)
        },
        meta: item.meta
    })
}

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router