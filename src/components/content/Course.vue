<template lang="html">

	<div class="course">
		<div class="list s-list disable-user-behavior" v-for="(item, index) in couseData" on-tap="goCourseDetail(item)">
     		<img src="../../assets/images/couse/com_vipjiaobiao_icon.png" ng-show="item.isVip == 'Y'" class="ng-hide">
     		<img src="../../assets/images/couse/zxkc_jingpinkecheng_jiaobiao.png" ng-show="item.isVip == 'N'item.isExcellentCourse == 'Y'" class="">
            <a class="item item-thumbnail-left s-p-r">
                 <span class="u-courselist-img default-bg" image-lazy-src="http://slams.dev.chinamobo.com/enterpriseuniversity/file/courseImg/20171012/105942078517.jpg" image-lazy-background-image="true" style="background-image: url(http://slams.dev.chinamobo.com/enterpriseuniversity/file/courseImg/20171012/105942078517.jpg);"></span>
		         <h2 class="ng-binding">{{item.tname}}</h2>
		         <div ng-show="item.courseOnline == 'Y' " class="w-online">
		         	<i class="s-icon-pen s-c-b3b3b3">{{item.catid}}</i>
		         	<i class="s-icon-see s-c-b3b3b3">{{index}}</i>
		         	<i class="s-icon-like s-c-b3b3b3">1</i>	
		         </div>
	      		
	          	<!--未签到-->
	          	<div class="s-mark s-course-nosign" ng-show="true"></div>				          
	          	<!--未学习-->
	          	<div class="s-mark s-course-nostudy ng-hide" ng-show="false"></div>
			</a>     
        </div>
	</div>

</template>

<script lang="js">

  export default  {
    name: 'course',
    props: ['couseData'],
    // props: {
    //     couseData: {
    //         type: Array,
    //         default: [{},{}] //这样可以指定默认的值
    //     }
    // },
    mounted() {
        console.log(this.courseData)
    },
    data() {
      return {

      }
    },
    methods: {
    	goCourseDetail:function(item){
            
    	}
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.course {

}
.list {
    position: relative;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    margin-bottom: 20px;
}
.s-list > img {
	width: 3em !important;
	height: 3em;
	max-width: 3em !important;
	position: absolute;
	z-index: 100;
	top: .6em;
	left: .55em;
}
.s-list .item {
    border-color: #E8E8E8;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 10px;
    border-width: 1px;
    border-style: solid;
    font-size: 16px;
}
.s-list a img{
    width: 7.5em !important;
    max-width: 7.5em !important;
    max-height:5em !important;
}
.s-list .item-thumbnail-left {
    padding-left: 8.8em;
}
.s-list .item {
    padding-bottom: .725em !important;
    padding-top: .725em !important;
}
.u-courselist-img {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-block;
    width: 7.5em !important;
    max-width: 7.5em !important;
    height: 100%;
    max-height: 5em !important;
    background-size: 100% 100%;
    -webkit-user-drag: none;
}
.s-list h2 {
    color: #333;
    font-size: .875em;
    padding: 0 2em 0 0;
}
.w-online {
    padding-top: 2.5em;
    text-align: right;
    padding-right: 0.75em;
    padding-left: 0.75em
}

.s-course-nosign {
    background-image: url(../../assets/images/task/sign_no.png);
}
.s-mark {
    position: absolute;
    top: 0;
    z-index: -1;
    right: 1em;
    background-size: 100%;
    width: 1.625em;
    height: 3em;
    background-image: url(../../assets/images/task/sign_no.png);
}
.s-course-nostudy {
    background-image: url(../../assets/images/task/wd_weixuexi_icon.png);
}
.s-list p{
    color: #808080;
    font-size: .69em;
}
.s-list i {
    display: inline-block;
    padding: .1em 0.5em 0em !important;
    color: #666;
    font-size: .6875em;
}

.s-icon-pen::before,.s-icon-see::before,.s-icon-like::before{
    background-repeat: no-repeat;
    background-position: center 100%;
    background-size:100%;
    display:inline-block;    
    padding: .5rem;
    margin-right: .15em;
    padding-top: .8em;
}
.s-icon-pen::before{
    content: "";
    background-image:url(../../assets/images/index/icon_pen.png);
    
}
.s-icon-see::before{
    content: "";
    background-image: url(../../assets/images/index/icon_see.png);
    
}
.s-icon-like::before{
    content: "";
    background-image:  url(../../assets/images/index/icon_like.png);
}
</style>
