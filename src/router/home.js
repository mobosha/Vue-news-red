 
const Home = resolve => {require(['../components/Home.vue'], resolve)} //按需加载

const routerList = [
	{
		path: '/home',
		name: 'home',  //首字母通常大写 Home
		component: Home //不要引号，不是字符串  //resolve => {require(['../views/index/Home.vue'], resolve)} //懒加载
	},
	{
		path: '/article',
		name: 'article',
		component: resolve => {require(['../views/index/Article.vue'], resolve)}
	}
];

export default {
	routerList
}