webpackJsonp([10],{163:function(n,t,i){i(246);var e=i(16)(i(197),i(265),null,null);n.exports=e.exports},197:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i(28),o=(i.n(e),i(58));t.default={data:function(){return{list:{},subjects:[],start:0,count:9}},created:function(){},activated:function(){this.$emit("title","热播电影"),this.get()},methods:{loading:function(){e.Indicator.open({text:"加载中...",spinnerType:"fading-circle"})},get:function(){this.loading();var n={start:this.start,count:this.count};o.a.playing_movie_list(n).then(function(n){this.list=n,this.subjects=this.subjects.concat(n.subjects),this.list.subjects=this.subjects,e.Indicator.close(),this.$emit("title","热播电影")}.bind(this)).catch(function(n){console.log(n)})},loadMore:function(){this.start=this.start+this.count+1,this.get()}},components:{}}},226:function(n,t,i){t=n.exports=i(145)(),t.push([n.i,"\n#movie {\n    width: 100%;\n}\n#movie h3.playing {\n    padding: 20px 0 0 4%;\n    color: #494949;\n    display: block;\n    width: 300px;\n}\n.grid {\n    padding: 20px 0;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: hidden;\n    box-sizing: border-box;\n    display: block;\n    float: left;\n}\n#list .item {\n    text-decoration: none;\n    color: #9b9b9b;\n}\n.grid .item {\n    float: left;\n    box-sizing: border-box;\n    width: 33.33333%;\n    padding-left: 4%;\n    padding-right: 4%;\n    margin-bottom: 10px;\n    overflow: hidden;\n}\n.grid .item .info h3 {\n    width: 100%;\n    font-size: 12px;\n    display: block;\n    word-break: keep-all;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 5px 0;\n    font-weight: 400;\n}\n.cover {\n    height: 150px;\n}\n.cover img {\n    height: 150px;\n    width: 100%;\n}\n\n\n","",{version:3,sources:["D:/wamp/www/A-share/Vue-news-red/src/components/movie.vue"],names:[],mappings:";AACA;IACI,YAAY;CACf;AACD;IACI,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,aAAa;CAChB;AACD;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,eAAe;IACf,YAAY;CACf;AACD;IACI,sBAAsB;IACtB,eAAe;CAClB;AACD;IACI,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,cAAc;IACd,YAAY;CACf",file:"movie.vue",sourcesContent:["\n#movie {\n    width: 100%;\n}\n#movie h3.playing {\n    padding: 20px 0 0 4%;\n    color: #494949;\n    display: block;\n    width: 300px;\n}\n.grid {\n    padding: 20px 0;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: hidden;\n    box-sizing: border-box;\n    display: block;\n    float: left;\n}\n#list .item {\n    text-decoration: none;\n    color: #9b9b9b;\n}\n.grid .item {\n    float: left;\n    box-sizing: border-box;\n    width: 33.33333%;\n    padding-left: 4%;\n    padding-right: 4%;\n    margin-bottom: 10px;\n    overflow: hidden;\n}\n.grid .item .info h3 {\n    width: 100%;\n    font-size: 12px;\n    display: block;\n    word-break: keep-all;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 5px 0;\n    font-weight: 400;\n}\n.cover {\n    height: 150px;\n}\n.cover img {\n    height: 150px;\n    width: 100%;\n}\n\n\n"],sourceRoot:""}])},246:function(n,t,i){var e=i(226);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i(146)("0a5e7e08",e,!0)},265:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"movie"}},[i("h3",{staticClass:"playing"},[n._v(n._s(n.list.title))]),n._v(" "),i("section",{staticClass:"grid",attrs:{id:"list"}},n._l(n.subjects,function(t){return i("router-link",{staticClass:"item",attrs:{tag:"a",to:{path:"/moviedetial",query:{id:t.id}}}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"wp ratio3_4"},[i("img",{attrs:{src:t.images.medium}})])]),n._v(" "),i("div",{staticClass:"info"},[i("h3",[n._v(n._s(t.title)+" ")]),n._v(" "),i("p",{staticClass:"rank"})])])})),n._v(" "),i("mt-button",{directives:[{name:"show",rawName:"v-show",value:0!=n.subjects.length,expression:"subjects.length!=0"}],attrs:{type:"danger",size:"large"},nativeOn:{click:function(t){n.loadMore(t)}}},[n._v("加载更多")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.e284631b3352a5c31bd6.js.map