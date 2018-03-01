
const routerList = [
	{
		path: '/jokelist',
		name: 'jokelist',
		component: resolve =>{require(['../views/my/JokeList.vue'], resolve)},
		meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '我的'
        },
	}
];

export default {
	routerList
}