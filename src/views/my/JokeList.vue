<template>
    <div id="joke_wrap">
        <mt-loadmore :bottom-method="loadBottom" ref="loadmore">
            <li v-for="item in list" class="animated fadeInUp">{{ item.digest }}</li>
        </mt-loadmore>

    </div>
</template>
<script>
    import Vue from 'vue'
    import {Loadmore} from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    import {Indicator} from 'mint-ui'
    import mockData from './../../mock/index'
    import { jockList } from './../../api/jock'
    export default{
        data(){
            return {
                msg: 'hello vue',
                list: [],
                size: 10
            }
        },
        created(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.get();
            this.test();
        },
        activated() {
            this.$emit('title', this.$route.meta._menuName);
        },
        methods: {
            get: function () {
                var data={
                    page:this.size
                }
                jockList(data).then(res => {
                    console.log(res)
                    if(res.data){
                       this.list = this.list.concat(res.data.data); 
                       Indicator.close();
                    }
                }).catch( err => {
                    console.log(err)
                })
                
            },
            loadBottom() {
                this.$refs.loadmore.onTopLoaded();
                this.size += 5;
                this.get();
            },
            test(){
                var arrLike = {
                    length: 3,
                    width: 3,
                    0: "foo",
                    1: "bar"
                };
                var arr = Array.from( arrLike );
                console.log(arr)
            }
        },
        components: {}
    }
</script>
<style scoped>
    #joke_wrap {
        margin-bottom: 69px;
        width: 100%;
        background: #f6f6f6;
    }

    #joke_wrap li {
        padding: 10px 15px;
        box-shadow: 3px 3px 8px #ddd;
        background: #fff;
        margin-bottom: 10px;
        margin-top: 5px;
        font-size: 16px;
    }
</style>
