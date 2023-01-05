//import { createRouter,createWebHistory } from "vue-router";
import VueRouter from 'vue-router'
import MySearch from '../components/MySearch'
import MyList from '../components/MyList'


export default new VueRouter({
	routes:[
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
})