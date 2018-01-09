<template>
    <div class="tabBar">
        <mt-tabbar v-model="selected" fixed>
            <!-- <router-link to="/home" class="mint-tab-item">
                <mt-tab-item id="home" >
                    <img slot="icon" src="../assets/images/index/icon_f_homeh.png" height="38" width="37">
                    首页
                </mt-tab-item>
            </router-link>
            <router-link to="/video" class="mint-tab-item">
                <mt-tab-item id="video" >
                    <img slot="icon" src="../assets/images/index/icon_f_ehele.png" height="38" width="37">
                    首页
                </mt-tab-item>
            </router-link>
            <router-link to="/musiclist" class="mint-tab-item">
                <mt-tab-item id="musiclist" >
                    <img slot="icon" src="../assets/images/index/icon_f_eh.png" height="38" width="37">
                    首页
                </mt-tab-item>
            </router-link>
            <router-link to="/jokelist" class="mint-tab-item">
                <mt-tab-item id="jokelist" >
                    <img slot="icon" src="../assets/images/index/icon_f_myh.png" height="38" width="37">
                    首页
                </mt-tab-item>
            </router-link> -->
            <mt-tab-item id="home">
                <img slot="icon" src="../assets/images/index/icon_f_homeh.png" height="38" width="37">
                首页
            </mt-tab-item>
            <mt-tab-item id="video">
                <img slot="icon" src="../assets/images/index/icon_f_ehele.png" height="38" width="37">
                视频
            </mt-tab-item>
            <mt-tab-item id="musiclist">
                <img slot="icon" src="../assets/images/index/icon_f_eh.png" height="38" width="37">
                音乐
            </mt-tab-item>
            <mt-tab-item id="jokelist">
                <img slot="icon" src="../assets/images/index/icon_f_myh.png" height="38" width="37">
                段子
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    
    export default{
        name: 'tabBar',
        data(){
            return {
                isBottom: true,
                selected: 'home'
            }
        },
        created(){
            
        },
        computed: {
            
        },
        methods: {
            
        },
        watch: {
            selected: function (val, oldVal) {
                // 这里就可以通过 val 的值变更来确定
                console.log(val);
                this.$router.push({ path: `${val}` });
                // this.$emit('title', `${val}`);
            }
        }
    }
</script>
<style>
    .tabBar .mint-tabbar.is-fixed{
        z-index: 2006;
    }
</style>