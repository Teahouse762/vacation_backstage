<template>
  <div class="home">
    <el-container>
      <el-header>
        <p>MMALL ADMIN</p>
        <p>欢迎,admin <span @click="logout()">退出</span></p>
      </el-header>
      <el-container class="content">
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" router>
            <el-menu-item-group>
              <template slot="title">首页</template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">商品</template>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="1-2">品类管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">订单</template>
              <el-menu-item index="1-1">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  //组件名字-十七
  name: "",
  //存放数据
  data() {
    return {
      //TODO
    };
  },
  //props验证
  props: {
    //TODO
  },
  //挂载组件
  components: {
    //TODO
  },
  //组件将要加载
  created() {
    //TODO
  },
  //组件已挂载
  mounted() {
    //TODO
  },
  //事件方法
  methods: {
    logout(){
         this.$router.push("/")
    }
  },
  //计算属性
  computed: {
    //TODO
  },
  //监听属性
  watch: {
    //TODO
  },
  //过滤器
  filters: {
    //TODO
  },
  //自定义事件
  directives: {
    //TODO
  },
};
</script>
<style lang="scss" scoped>
.home,
.content,
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  background: #eee;
  > p:first-child {
    font-size: 30px;
  }
  > p:last-child {
    span {
      text-decoration: underline;
      color: lightblue;
    }
  }
}
.el-aside {
  height: 100%;
  background: #eee;
}
</style>
