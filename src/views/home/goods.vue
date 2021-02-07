<template>
   <div class="goods">
 <el-table
      :data="goods"
      style="width: 100%"
      border>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column label="信息">
        <template slot-scope="scope">
          <p>{{scope.row.name}}</p>
          <p>{{scope.row.subtitle}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span v-show="scope.row.status==2">已下架</span>
          <span v-show="scope.row.status==1">在售</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span @click="look(scope.row)">查看</span>
          <span @click="edit(scope.row)">编辑</span>
        </template>
      </el-table-column>
    </el-table>
   </div>
</template>
<script>
import {LIST} from "http/http"
export default {
     //组件名字-十七
   name: '',
     //存放数据
   data() { 
    return {
       pageNum:1,
       goods:[]
    }
  },
   //props验证
   props: {
       //TODO
  },
   //挂载组件
   components:{
       //TODO
  },
   //组件将要加载
   created() {
       this.getlist()
  },
   //组件已挂载
   mounted() {
       //TODO
  },
   //事件方法
   methods:{
       async getlist(){
         let {data:res} = await LIST(this.pageNum)
         console.log(res)
         this.goods=res.data.list
       }
  },
   //计算属性
   computed:{
       //TODO
  },
   //监听属性
   watch:{
       //TODO
  },
   //过滤器
   filters:{
       //TODO
  },
   //自定义事件
   directives:{
       //TODO
  }
}
</script>
<style lang='scss' scoped>
</style>