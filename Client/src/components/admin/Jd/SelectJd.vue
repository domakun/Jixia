<template>
    <div class="panel">
      <el-form :inline="true" :model="jdObj" class="demo-form-inline">
        <el-form-item label="地区">
          <el-input v-model="jdObj.jd_addr" placeholder="地区关键字"></el-input>
        </el-form-item>
        <el-form-item label="id">
          <el-input v-model="jdObj.jd_id" placeholder="景点id"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="jdObj.jd_name" placeholder="景点名字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <div >
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
                <el-button @click="deleteJd" type="text" size="small">删除</el-button>
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
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "SelectJd",
      data:function () {
          return {
            url:'http://192.168.2.101:9999',
            jdObj:{
              jd_addr:'',
              jd_name:'',
              jd_id:''
            },
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
        deleteJd:function () {
        },
        current_change:function (pageNow) {
          this.pageNow = pageNow ;
          this.refresh()
        },
        refresh:function () {
          for(var item in this.jdObj){
            var val = this.jdObj[item] ;
            if(val　== undefined || val.trim() == '' ){
              this.jdObj[item]= '' ;
            }
          }
          var url = `http://localhost:9999/getSomeJds?pageNow=${this.pageNow}&jd_addr=${this.jdObj.jd_addr}&jd_name=${this.jdObj.jd_name}&jd_id=${this.jdObj.jd_id}`
          var url = `${this.url}/getSomeJds?pageNow=${this.pageNow}&jd_addr=${this.jdObj.jd_addr}&jd_name=${this.jdObj.jd_name}&jd_id=${this.jdObj.jd_id}`
          this.$axios.get(url, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data)
            this.jdData = response.data.jdData
            this.totalPage = response.data.totalPages
            this.totalRows = response.data.totalRows
          }).catch(response=> {
            console.log("get发送Ajax请求失败",response)
          })
        },
        onSubmit:function () {
          this.pageNow = 1  ;
          this.refresh()
        }
      }
    }
</script>

<style scoped>
  .panel {
    margin-top: 10px ;
  }
</style>
