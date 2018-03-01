
const routerList = [
	{
		path: '/video',
		name: 'video',
		component: resolve => { require(['../views/task/Video.vue'], resolve)},
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '任务中心'
        }
	},
	{
		path: '/videoplayer',
		name: 'videoplayer',
		component: resolve => {require(['../views/task/VideoPlayer.vue'], resolve)},
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '任务中心'
        }
	}
]

export default {
	routerList
}