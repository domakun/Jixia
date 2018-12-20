<template>
  <div class="content">
    <div class="head">head
    </div>
    <div class="main">
      <div class="link">

        <el-menu class="el-menu-demo" mode="horizontal" >
          <el-menu-item @click='toUser()' index='1' >用户管理</el-menu-item>
          <el-menu-item @click='toJd()'  index='2'>景点管理</el-menu-item>
          <el-menu-item @click='toGl()' index='3'>攻略管理</el-menu-item>
        </el-menu>

      </div>
      <div class="panel">
        <router-view></router-view>
      </div>
    </div>
    <div class='foot'>
      foot

    </div >
  </div>
</template>
<script>
  export default {
    name:'Admin',
    methods:{
      toUser:function(){
        this.$router.push('/User')
      },
      toJd:function(){
        this.$router.push('/Jd')
      },
      toGl:function(){
        this.$router.push('/Gl')
      }
    }
  }
</script>
<style>
.content {
  width: 1080px ;
  /*background-color: green ;*/
  margin: 0 auto ;
}
.head {
  background-color: black ;
  width: 100% ;
  height: 100px ;
  color: white ;
}
.main {
  /*background-color: pink ;*/
  width: 100% ;
}
.link {
  background-color: white ;
}
.panel {
  /*background-color: pink ;*/
  height: 500px ;
}
.foot {
  height: 200px ;
  background-color: gray ;
  height: 100px ;
}

</style>
