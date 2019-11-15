// import 是文件路径
// path 是 router 路由地址
export const ROUTER_EACH_PATH = [{
    name: 'add',
    import: 'add',
    path: 'add',
    meta: {
        title: '火车选票功能'
    }
}, {
    name: 'axiosLoading',
    import: 'axiosLoading',
    path: 'axiosLoading',
    meta: {
        title: '请求loading，少于250毫秒不请求'
    }
}, {
    name: 'queryParames',
    import: 'queryParames',
    path: 'queryParames',
    meta: {
        title: '前进后退请求参数'
    }
}, {
    name: 'cookie',
    import: 'cookie',
    path: 'cookie',
    meta: {
        title: '设置、获取cookie'
    }
}, {
    name: 'vueMeta',
    import: 'vueMeta',
    path: 'vueMeta',
    meta: {
        title: 'VueMeta和routerEach设置title的区别'
    }
}, {
    name: 'banner',
    import: 'banner',
    path: 'banner',
    meta: {
        title: '轮播图'
    }
}]

export default ROUTER_EACH_PATH