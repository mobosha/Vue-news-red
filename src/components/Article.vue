<template>
    <div class="content">
        <h3>{{article.title}}</h3>
        <p class="ptime">{{article.ptime}} {{article.source}}</p>
        <p v-for="imgs in article.img ">
            <img :src="imgs.src" alt="" width="100%">
        </p>

        <div class="textcontent" v-html="article.body"></div>
    </div>
</template>
<style>

</style>
<script>
    // import api from '../api/api'
    import {Indicator} from 'mint-ui'
    // import { articleDetail } from '../api/article-api';
    import { articleDetail } from './../api/article-api.js'
    export default{
        data(){
            return {
                msg: 'hello vue',
                article: {},
                id:null
            }
        },
        created(){
            //this.getArticle();
            this.id = this.$route.query.id;

        },
        activated(){
            this.$emit('title', '文章详情');
            this.article = {};
            this.getArticle();
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        },
        mounted: function() {
            window.scrollTo(0, 0)
        },
        methods: {
            getArticle: function () {
                // var data={
                //     postid:String(this.$route.query.id)
                // };
                
                articleDetail(this.id).then(res => {
                    Indicator.close();
                    (typeof res.data == "object") ? this.article = res.data.data : this.article = {"body": "该内容已删除"};
                    console.log(this.article);
                }).catch((err) => {
                    console.log(err)
                })
                 
                 
                // api.article(data)
                // .then(function (res) {
                //     Indicator.close();
                //     (typeof res.data == "object") ? this.article = res.data : this.article = {"body": "该内容已删除"};

                // }.bind(this)).catch(function (error) {
                //     console.log(error)
                // })

            }
        },
        components: {}
    }
</script>

<style scoped>
    .content {
        padding: 5%;
    }

    .ptime {
        color: #888;
        line-height: 30px;
    }

    .textcontent {
        line-height: 28px;
    }
</style>
