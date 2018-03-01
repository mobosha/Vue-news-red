<template>
    <div class="page-loadmore">
        

        <div class="page-loadmore-wrapper" ref="wrapper" >  <!-- :style="{ height: wrapperHeight + 'px' }" -->

            <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                
                <Course :couseData='list'></Course>

                <!-- <section class="video-item ub" v-for="(item,index) in list" @click="pushUrl(index)">
                    <div class="v-poster">
                        <img :src="item.cover">
                    </div>
                    <div class="v-mask ub-f1">
                        <div class="v-head">
                            <div class="v-play"></div>
                            <div class="v-title">{{item.title}}</div>
                        </div>
                    </div>
                </section> -->


                <div slot="top" class="mint-loadmore-top">
                  <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                  <span v-show="topStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                  </span>
                </div>    


                <div slot="bottom" class="mint-loadmore-bottom">
                  <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                  <span v-show="bottomStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                  </span>
                </div>
            </mt-loadmore>
        </div>

    </div>
</template>
<style>
.page-loadmore{
    margin-bottom: 69px;
}
.type-list {
    padding: 10px 0;
}

.type-list li {
    padding: 3px 15px;
    display: inline-block;
}
</style>
<script>
import { taskList } from './../../api/task'
import mockData from './../../mock/index'
import Course from '../../components/content/Course.vue'
export default {
    data() {
        return {
            list: [],
            dataCount: 0,
            data: {
                firstIndex: 0,
                pageSize: 10,
            },
            
            allLoaded: false,

            bottomStatus: '',
            // wrapperHeight: 0,



            topStatus: '',
        }
    },
    created() {
        

        this.get();
    },
    activated() {
        this.$emit('title', this.$route.meta._menuName);
    },
    methods: {
        get: function () {
            taskList(this.data).then(res => {
                this.list = this.list.concat(res.data.data);
                this.dataCount = res.data.counts;
            }).catch(error => {
                console.log(error)
            })
        },
        handleBottomChange(status) {
            console.log(status);
            this.bottomStatus = status;
        },
        loadBottom() {

            setTimeout(() => {
                if((this.data.firstIndex + this.data.pageSize) < this.dataCount){
                    this.data.firstIndex = parseInt(this.data.firstIndex) + 10;
                    this.get();
                }else{
                    this.allLoaded = true; //true禁止上拉加载
                }           
                this.$refs.loadmore.onBottomLoaded();
            }, 1500);
        },

        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop() {
            setTimeout(() => {
                this.list = [];
                this.get();
                this.$refs.loadmore.onTopLoaded();
            }, 1500);
        },


        pushUrl: function (index) {
            sessionStorage.setItem("videodetail", JSON.stringify(this.list[index]));
            this.$router.push({ path: '/player' });
        },


    },
    mounted() {
      // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    components:{
        Course
    }
}
</script>

