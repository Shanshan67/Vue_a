export default {
    namespaced:true,
    state:{
        sum:0,
    },
    actions:{
        /* jia(context,value) {
            context.commit('JIA',value)
        },
        jian(context,value) {
            context.commit('JIAN',value)
        }, */
        jiaOdd(context,value) {
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value) {
            setTimeout(()=> {
                context.commit('JIA',value)
            },500)
        }
    },
    mutations:{
        JIA(state,value) {
            state.sum += value
        },
        JIAN(state,value) {
            state.sum -= value
        },
    },
    getters:{//用于将state中的数据进行加工 
        bigSum(state) {
            return state.sum*10
        }
    }
}