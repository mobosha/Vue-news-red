/**
 * Created by Administrator on 2016/12/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from '../store/index'
import Home from '../components/Home.vue'
import Video from '../components/Video.vue'
import Article from '../components/Article.vue'
import videoplayer from '../components/VideoPlayer.vue'
import JokeList from '../components/JokeList.vue'
import musiclist from '../components/MusicList.vue'
import music from '../components/music.vue'
import musicplayer from '../components/MusicPlayer.vue'
import wxlist from '../components/WxList.vue'
import wxarticle from '../components/WxArticle.vue'
import movie from '../components/movie.vue'
import moviedetial from '../components/MovieDetail.vue'
import photo from '../components/photo.vue'
import view from '../components/PhotoView.vue'
import lyric from '../components/Lyric.vue'
import coding from '../components/Coding.vue'
import zhihu from '../components/Zhihu.vue'
import sport from '../components/Sport.vue'
import zhihuarticle from '../components/zhihuArticle.vue'
import login from '../components/User/Login.vue'


const routes = [
//最好都加上name属性，
//component: resolve => System.import('../components/User/Login.vue') //这种写法是路由懒加载的写法
    { path: '/home', component: Home },
    { path: '/video', component: Video },
    { path: '/article', name:'article', component: Article },  // <router-link tag="section" class="m_article clearfix" :to="{ path: 'article', query: { id: item.postid}}">
    // { path: '/article/:id', name:'article', component: Article }, //动态路由匹配，动态路径参数（同一个组件渲染，但是id各不相同） //推荐这种写法 // <router-link class="link-type" :to="{ name: 'questionnaire/update', params: { id: scope.row.id }}"> 编辑 </router-link>
    // 这两种传参效果是一模一样的
    // { path: '/article', name:'article', component: Article }, //不推荐 // 不暴露url里边参数的写法，但是当你跳到别的页面或者刷新页面的时候参数会丢失; pc端传递的值显示在url中，存在安全隐患，客户不小心修改了url那样就会出错，移动端就无所谓了，如何才能不显示在url中，同样很简单，但是需要给映射的路径起一个别名，通过name来取别名
    { path: '/player', component: videoplayer },
    { path: '/jokelist', component: JokeList },
    { path: '/musiclist', component: musiclist },
    { path: '/music', component: music },
    { path: '/musicplayer', component: musicplayer },
    { path: '/wxlist', component: wxlist },
    { path: '/wxarticle', component: wxarticle },
    { path: '/movie', component: movie },
    { path: '/moviedetial', component: moviedetial },
    { path: '/photo', component: photo },
    { path: '/view', component: view },
    { path: '/lyric', component: lyric },
    { path: '/coding', component: coding },
    { path: '/sport', component: sport },
    { path: '/zhihu', component: zhihu },
    { path: '/zhihuarticle', component: zhihuarticle },
    {
        path: '/login',
        meta: {
            requireAuth: false,
        },
        component: login
    },
    { path: '*', redirect: '/home' }
]

const router = new VueRouter({
    // mode: 'history',
    routes
});


//全局路由守卫，还有路由独享的守卫，以及组件内的守卫
router.beforeEach((to, from, next) => {
    if (store.state.data.token) {
        next();
    } else {
        next();
        /* console.log("你还没有登录啦")
         if (to.meta.requireAuth==false) {
             next();
         }else {
             next({ path: '/login' })
         }*/

    }
})

router.afterEach(route => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.onscroll = null
  // setTimeout(() => {
  //   store._mutations.completeLoad[0]()
  // }, 100)
})

export default router;