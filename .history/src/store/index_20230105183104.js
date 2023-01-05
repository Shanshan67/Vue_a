import {createStore} from 'vuex'

export default createStore({
    state:{
        sum:0,
    },
    actions:{
        jia(context,value) {
            context.commit('JIA',value)
        },
        jian(context,value) {
            context.commit('JIAN',value)
        },
        jiaOdd(context,value) {
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        }
    },
    mutations:{
        JIA(state,value) {
            state.sum += value
        },
        JIAN(state,value) {
            state.sum -= value
        }
    },
})
