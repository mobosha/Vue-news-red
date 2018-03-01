
const routerList = [
	{
		path: '/music',
		name: 'music',
		component: resolve => {require(['../views/mall/Music.vue'], resolve)}, //按需加载
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '积分商城'
        }
	},
	{
		path: '/musicList',
		name: 'musicList',
		component: resolve => {require(['../views/mall/MusicList.vue'], resolve)}, //按需加载
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '积分商城'
        }
	},
	{
		path: '/musicplayer',
		name: 'musicplayer',
		component: resolve => {require(['../views/mall/MusicPlayer.vue'], resolve)}, //按需加载
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '积分商城'
        }
	}
];

export default {
	routerList
}