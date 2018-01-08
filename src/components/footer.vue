<template>
    <div class="tabBar">
        <mt-tabbar v-model="selected" fixed>
            
            <mt-tab-item id="home" >
                <img slot="icon" src="../assets/images/index/icon_f_homeh.png" height="38" width="37">
                首页
            </mt-tab-item>
            <mt-tab-item id="video" >
                <img slot="icon" src="../assets/images/index/icon_f_ehele.png" height="38" width="37">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/images/index/icon_f_eh.png" height="38" width="37">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/images/index/icon_f_myh.png" height="38" width="37">
                我的
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
                this.$router.push({ path: `${val}` })
            }
        }
    }
</script>
<style>
    
</style>