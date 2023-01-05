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
    }
]