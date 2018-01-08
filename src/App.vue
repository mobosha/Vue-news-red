<template>
    <div id="app">
        <HeadBar :title="title"></HeadBar>
            <transition
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
            >
              <keep-alive>
                <router-view @title="change" :title="title"></router-view>
              </keep-alive>
            </transition>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
    import HeadBar from './components/Header.vue'
    import FooterBar from './components/footer.vue'
    export default {
        name: 'app',
        components: {
            HeadBar,
            FooterBar
        },
        data(){
            return{
                title:"IT"
            }
        },
        methods:{
            change(title) {
                this.title = title;

            }

        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
</style>
