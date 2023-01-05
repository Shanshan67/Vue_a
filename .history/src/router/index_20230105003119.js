import { createRouter, createWebHistory } from 'vue-router'
import MySearch from '../components/MySearch'
import MyList from '../components/MyList'

export default new Router({
	routes:[
		{
            path:'/',
            name:'MySearch',
            component:MySearch
        },
        {
            path:'/list',
            name:'MyList',
            component:MyList
        }
	]
})