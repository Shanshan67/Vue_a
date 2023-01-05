import Vue from 'vue'
import Router from 'vue-router'
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
            path:'/list',
            name:'MyList',
            component:MyList
        }
	]
})