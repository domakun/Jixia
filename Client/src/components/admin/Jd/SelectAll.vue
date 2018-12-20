<template>
  <div>
    <el-button type="primary" @click="refresh" plain style="float: left;margin: 10px ">刷新景点</el-button>
    <el-table
      :data="jdData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="jd_name"
        label="景点名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="jd_id"
        label="景点编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="jd_addr"
        label="地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="jd_addr"
        label="地址"
        width="290">
      </el-table-column>
      <el-table-column
        prop="jd_info"
        label="简介"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="updateJd" type="text" size="small">修改</el-button>
          <el-button @click="showJd" type="text" size="small">查看</el-button>
          <el-button @click="deleteJd" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--分页-->
  </div>

</template>

<script>
    export default {
        name: "SelectAll",
        data(){
          return {
            jdData:[],
            pageNow:1,
            totalPages:1
          }
        },
      methods:{
        updateJd:function () {
        },
        showJd:function () {
        },
        deleteJd:function () {
        },
        refresh:function () {
          this.$axios.get("http://192.168.2.101:9999/getAllJd?pageNow="+this.pageNow, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data);
            this.jdData = response.data.jdData;
            this.totalPage = response.data.totalPages;
          }).catch(response=> {
            console.log("get发送Ajax请求失败",response);
          })
        }
      },
        created: function () {
          this.$axios.get("http://192.168.2.101:9999/getAllJd?pageNow="+this.pageNow, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data);
            this.jdData = response.data.jdData;
            this.totalPage = response.data.totalPages;
          }).catch(response=> {
            console.log("get发送Ajax请求失败",response);
          })
        },
    }
</script>

<style scoped>
  .block {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -250px;
  }
</style>
