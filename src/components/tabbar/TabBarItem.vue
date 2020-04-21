<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
  export default{
    name: "TabBarItem",
    props:{
      path:String
    },
//    data(){
//      return{
//        isActive:true,
//      }
//    },
    computed:{
      isActive(){
        //$route当前活跃页面的路由
        return this.$route.path.indexOf(this.path)!==-1
      }
    },
    methods:{
      itemClick(){
        //$所有页面的路由
        this.$router.replace(this.path)
      }
    }
  }
</script>
<style scoped>
  .tar-bar-item{
    flex:1 ;
    text-align: center;
    height:49px;
    font-size: 14px;

  }
  .tar-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color:red;
  }

</style>
