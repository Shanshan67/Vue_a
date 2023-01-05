import { createRouter,createWebHistory } from "vue-router";
import MySearch from '../components/MySearch'

const routes=[
    {
        path:'/',
        name:'MySearch',
        component:MySearch
    },
    {
        path:'/mylist',
        name:'MyList',
        component:()=>{
            import('../components/MyList.vue')
        }
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router