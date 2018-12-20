<template>
  <div>
    <el-button type="primary" @click="refresh" plain style="float: left;margin: 10px ">刷新景点</el-button>
    <el-table
      :data="jdData"
      border
      style="width: 100%">
      <el-table-column
        :show-overflow-tooltip="true"
        fixed
        prop="jd_name"
        label="景点名称"
        width="100">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_id"
        label="景点编号"
        width="100">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_addr"
        label="地址"
        width="120">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_addr"
        label="地址"
        width="290">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_info"
        label="简介"
        width="150">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="updateJd" type="text" size="small">修改</el-button>
          <el-button @click="showJd" type="text" size="small">查看</el-button>
          <el-button @click="deleteJd(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--分页-->
    <div class="pageInation">
      <el-pagination
        :page-size="5"
        :pager-count="5"
        layout="prev, pager, next"
        :total="totalRows"
        @current-change="current_change">
      </el-pagination>
    </div>

  </div>

</template>

<script>
    export default {
        name: "SelectAll",
        data(){
          return {
            jdData:[],
            pageNow:1,
            totalPages:1,
            totalRows:1,
            current:1
          }
        },
      methods:{
        updateJd:function () {
        },
        showJd:function () {
        },
        deleteJd:function (jdObj) {
          console.log(jdObj);
          var jd_name = jdObj.jd_name ;
          var jd_id = jdObj.jd_id ;
        //  删除
          this.$confirm('此操作将永久删除景点: '+jd_name+' ,是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(() => {
            this.$axios.get("http://192.168.2.101:9999/deleteJd?jd_id="+jd_id, {}).then(response => {
              console.log("get发送Ajax请求成功", response.data);
              if(response.data == 'success'){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.refresh() ;
              }else{
                this.$message({
                  type: 'info',
                  message: '删除失败!'
                });
              }

            }).catch(response=> {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        refresh:function () {
          this.$axios.get("http://192.168.2.101:9999/getAllJd?pageNow="+this.pageNow, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data);
            this.jdData = response.data.jdData;
            this.totalPage = response.data.totalPages;
            this.totalRows = response.data.totalRows;
          }).catch(response=> {
            console.log("get发送Ajax请求失败",response);
          })
        },
        current_change:function (pageNow) {
          this.pageNow = pageNow ;
          this.refresh()
        }
      },
        created: function () {
          this.$axios.get("http://192.168.2.101:9999/getAllJd?pageNow="+this.pageNow, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data);
            this.jdData = response.data.jdData;
            this.totalPage = response.data.totalPages;
            this.totalRows = response.data.totalRows;
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
  .pageInation {
    position: absolute;
    bottom: 30px;
    left: 350px ;
  }
</style>
