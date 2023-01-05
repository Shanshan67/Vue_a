// 该文件专门用于创建整个应用的路由器
import * as VueRouter from 'vue-router'
//引入组件
import About from '../components/MyAbout'
import Home from '../components/MyHome'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})
