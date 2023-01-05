import {createStore} from 'vuex'

export default createStore({
    state:{
        sum:0,
    },
    actions:{
        jia(context,value) {
            context.commit('JIA',value)
        }
    },
    mutations:{
        JIA(state,value) {
            state.sum += value
        }
    },
})
