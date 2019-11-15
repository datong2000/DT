import Vue from 'vue'
import Vuex from 'vuex'
import methods from './methods'
import types from './type'

export {types}

Vue.use(Vuex)

export default new Vuex.Store(methods)