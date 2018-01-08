import Vue from 'vue'

Vue.filter("minutes", function (value) {
    //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return (Math.floor(value / 60) + ":" + Math.floor(value % 60));
});

Vue.filter('time', function (value) {
    return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})