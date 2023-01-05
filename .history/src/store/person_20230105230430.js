import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced:true,
    state:{
        personList:[{id:'01',name:'tom'}]
    },
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('w')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('must include w')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value) {
            state.personList.unshift(value)
        }
    },
    getters:{//用于将state中的数据进行加工 
        bigSum(state) {
            return state.sum*10
        }
    }
}