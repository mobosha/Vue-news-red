<template lang="html">

  <section class="index">
    <h1>index Component</h1>
  </section>

</template>

<script lang="js">
import { getNewCourse } from './../../api/index.js'
import mockData from './../../mock/index.js'
  export default  {
    name: 'index',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
    	getDate: function(){
    		getNewCourse().then(res =>{
    			console.log(res);
    		})
    	}
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .index {

  }
</style>
