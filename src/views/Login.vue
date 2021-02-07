<template>
  <div class="login">
    <div class="box">
      <p>Please Login</p>
      <el-form
        :model="LoginForm"
        status-icon
        :rules="rules"
        ref="loginref"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input type="text" v-model="LoginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="LoginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login()">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { LOGIN } from "http/http";
export default {
  //组件名字-十七
  name: "",
  //存放数据
  data() {
    return {
      LoginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: { required: true, message: "内容不能为空", trigger: "blur" },
        password: { required: true, message: "内容不能为空", trigger: "blur" },
      },
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
    Login() {
      this.$refs.loginref.validate(async (valid) => {
        if (!valid) {
          return false;
        }
        let { data: res } = await LOGIN(this.LoginForm);
        console.log(res)
        // let cookies=cookies.getCookie('JSESSIONID')
        this.$router.push("/home")
      });
    },
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
.login {
  background: #eee;
  height: 100%;
  overflow: hidden;
  .box {
    width: 600px;
    background: #fff;
    border: 1px solid #999;
    margin: 0 auto;
    margin-top: 100px;
    > p {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    .el-form {
      margin-top: 10px;
      padding: 10px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
