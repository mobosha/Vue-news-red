<template>
    <div class="video">
        
        <section class="video-item ub" v-for="(item,index) in list" @click="pushUrl(index)">
            <div class="v-poster">
                <img :src="item.cover">
            </div>
            <div class="v-mask ub-f1">
                <div class="v-head">
                    <div class="v-play"></div>
                    <div class="v-title">{{item.title}}</div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
.video{
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
export default {
    data() {
        return {
            list: {},
            typelist: {},
            start: 0,
            count: 10,
            type: "T1457068979049"
        }
    },
    created() {
        this.$emit('title', '热门视频');

        this.get();
    },
    activated() {
    },
    methods: {
        
        get: function () {
            var data = {
                type: 0,
                page: 0
            }
            taskList(data).then(res => {
                this.list = res.data.list;
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
        },
        pushUrl: function (index) {
            sessionStorage.setItem("videodetail", JSON.stringify(this.list[index]));
            this.$router.push({ path: '/player' });
        }
    }
}
</script>

