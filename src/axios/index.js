import axios from 'axios'
import apis from './apis'

import store, {
    types
} from '../store/index'

const ajax = axios.create({
    baseURL: 'https://api.myjson.com/'
})

const getData = (url, LoadType) => {
    return ajax.get(url, {
        data: LoadType
    })
}

/*eslint-disable */
ajax.interceptors.request.use(config => {
    store.dispatch(types.LOADING, config.data === false ? false : true)
    return config
}, function (error) {
    store.dispatch(types.LOADING, false)
    return Promise.reject(error);
});

ajax.interceptors.response.use(function (response) {
    store.dispatch(types.LOADING, false)
    return response;
}, function (error) {
    store.dispatch(types.LOADING, false)
    return Promise.reject(error);
});

export {
    getData,
    apis
}