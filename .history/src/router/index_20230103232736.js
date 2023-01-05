import { createRouter,createWebHistory } from "vue-router";
import MySearch from '../components/MySearch'
import MyList from '../components/MyList'

const routes=[
    {
        path:'/',
        name:'MySearch',
        component:MySearch
    },
    {
        path:'/mylist',
        name:'MyList',
        component:MyList
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router