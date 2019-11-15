import types from './type'
let timer = null
const methods = {
    state: {
        isShow: false,
        count: 0
    },
    /*eslint-disable */
    mutations: {
        [types.LOADING](state, boolean) {
            state.isShow = boolean
        },
        [types.COUNTER_INC](state) {
            state.count = state.count + 1
        },
        [types.COUNTER_DEC](state) {
            state.count = Math.max(0, state.count - 1)
        }
    },
    actions: {
        [types.LOADING]({
            commit,
            state
        }, boolean) {
            if (boolean) {
                if (state.count === 0) {
                    timer = setTimeout(() => {
                        commit(types.LOADING, boolean)
                    }, 250)
                }
                commit(types.COUNTER_INC)
            } else {
                commit(types.COUNTER_DEC)
                if (state.count === 0) {
                    clearTimeout(timer)
                    timer = null
                    commit(types.LOADING, boolean)
                }
            }
        }
    }
}

export default methods