<template>
    <div>
      <el-form label-position="left" label-width="80px" :model="jdObj">
        <el-form-item label="名称">
          <el-input v-model="jdObj.jd_name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-cascader
            size="large"
            :options="options"
            v-model="area"
            @change="addrChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="景点信息" prop="desc">
          <el-input style="resize:none"  type="textarea" v-model="jdObj.jd_info"></el-input>
        </el-form-item>
        <el-form-item label="图片url">
          <el-input v-model="jdObj.jd_imgs"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">添加景点</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import { regionData,CodeToText } from 'element-china-area-data'
    export default {
      name: "AddJd",
      methods:{
        submitForm:function () {
          //检查提交数据
          for(var item in this.jdObj){
            console.log(this.jdObj[item]) ;
            if(this.jdObj[item].trim() == ''){
              this.$message({
                message: '任意信息不可为空！',
                type: 'warning'
              });
              return ;
            }
          }
          //提交表格
          console.log(this.jdObj);
          var params = new URLSearchParams();
          params.append('jd_name', this.jdObj.jd_name);       //你要传给后台的参数值 key/value
          params.append('jd_addr', this.jdObj.jd_addr);
          params.append('jd_info', this.jdObj.jd_info);
          params.append('imgs', this.jdObj.jd_imgs);
          this.$axios({
            method: 'post',
            url:'http://192.168.2.101:9999/addJd',
            data:params
          }).then((res)=>{
            if(res.data == 'success'){
              this.$message({
                message: '景点添加成功',
                type: 'success'
              });
            }else {
              this.$message({
                message: '景点已经存在了，请修改景点名字吧',
                type: 'warning'
              });
            }

          });
        },
        resetForm:function () {
          //重置表格
          this.jdObj = {}
        },
        addrChange:function () {
          //地址改变
          var array = [] ;
          this.area.forEach(function (item,index,arr) {
            array[index] = CodeToText[item] ;
          })
          this.jdObj.jd_addr = array.join(',') ;
        },

        check:function () {
          for(var item in this.jdObj){
            if(item.trim() == ''){
              console.log(item);
              return true ;
            }
            return false ;
          }
        }
      },
      data(){
          return{
            jdObj:{
              jd_name:'',
              jd_addr:'',
              jd_info:'',
              jd_imgs:''
            },
            options: regionData,
            area:[]

          }
      }
    }
</script>

<style scoped>

</style>
