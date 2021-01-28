<template>
  <div>
      <div class="item_headers">
          <div> <h3>商品管理</h3> </div>
          <div> <el-button type="primary" icon="el-icon-plus" @click="addListuser">添加商品</el-button> </div>
      </div>

      <div class="item_main_container">
          <el-cascader :options="options" clearable @change="onchange"></el-cascader>

          <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>

          <el-button type="primary" @click="addList">查询</el-button>
      </div>

<div class="item_table">
 <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="信息"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>

      <el-table-column
        label="状态">
         <template slot-scope="scope">
           <div class="item_button">
              <div> 
                {{scope.row.status | type1 }} 
              </div>
              <button @click="onupAndDown(scope.row)">{{scope.row.status | type2}}</button>
           </div>
         </template>
      </el-table-column>

      <el-table-column
        label="操作"
        >
       <template slot-scope="scope">
         <el-button type="text" @click="ongoods(scope.row.id)">查看</el-button>

        <el-button type="text" @click="onModify(scope.row.id)">编辑</el-button>
       </template>
      </el-table-column>
    </el-table>

  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import {shang , chaxun,dataModify} from '../../http/index'
export default {
  data(){
    return {
      list:{
        pageNum:1,
        pageSize:10
      },

      userList:[],
      msg:"",

      options:[{
          value: 'id',
          label: '按照用户id查询',
      },
      
      {
          value: 'name',
          label: '按照用户名字查询',
      }],

      input:'',
      type:"",
      total:0
    }
    
  },

    mounted(){
       this.shangList()
    },

  methods:{
    async shangList(){
      const res = await shang(
        `/api/product/list.do?pageNum=${this.list.pageNum}`
      )
  
      // console.log(res)

      this.userList = res.data.data.list

      this.total = res.data.data.total
  },

  handleCurrentChange(val){
      this.list.pageNum = val
      this.shangList()
  },

  ongoods(id){ // 详情
    // console.log(id)
    this.$router.push({
      path:'/ongoods',
      query:{
        id
      }
    })
  },

  onModify(id){ // 编辑
    this.$router.push({
      path:'/modify',
      query:{id}
    })
  },


  addList(){
    var index = this.msg[0]

      if(index == 'name'){
          this.type = "productName"
          chaxun({
            // 就相当于一个属性名字  一个属性值
            [this.type]:this.input
          }).then(res=>{
            // console.log(res)
            this.userList = res.data.data.list

            this.total = res.data.data.total
          })
      }

      if(index == 'id'){
        this.type = 'productId'
        // {productId:this.input} //就是要穿的属性名称  后面加的值
        chaxun(  { [this.type]:this.input }  ).then(res=>{
          console.log(res)
           this.userList = res.data.data.list
           this.total = res.data.data.total
        })
      }
  },  

  onchange(val){
    this.msg = val
    // console.log(val)
  },

  onupAndDown(item){
    console.log(item)
      this.$confirm('此操作将上架商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 函数调用   // 商品上下架接口  
          dataModify({
              productId:item.id,
              // 上架 是 1   下架 是 2 
              status:item.status==1?2:1
                     // 比如说  你点的 是上架 那么就是 1   如果是1的话  就取 2 下架    在如果不等于1 的话  那么就去上架  
          }).then(res=>{
            console.log(res)
            shang( // 请求完之后  重新请求所有列表数组  重新渲染 
              `/api/product/list.do?pageNum=${this.list.pageNum}`
            ).then(res1=>{
              console.log(res1)
              this.userList = res1.data.data.list;

              this.total = res1.data.data.total
            })
          })
          this.$message({
            type: 'success',
            message: '修改状态成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
  },
addListuser(){
  this.$router.push('/addList')
}

},


  filters:{
    // flterState(val){
    //     if(val == "1"){
    //         return '已下架'
    //     } 

    //     if(val == '2'){
    //         return '在售'
    //     }
    // }


    type1(val){
      return val == 1 ? '在售' :'已下架'
    },

    type2(val){
      return val == 1 ?'下架' :'上架'
    }
  }
}
</script>

<style scoped>
.item_headers {
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #000;
}

.item_main_container {
  width: 35%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.input {
  width: 200px;
  margin: 10px;
}

.item_table{
  width: 100%;
  height: 70vh;
  /* overflow: auto; */
}

.block {
  width: 100%;
  height: 20vh;

}

.item_button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.item_button button {
  background-color: orange;
  border: none;
  outline: none;
}
</style>