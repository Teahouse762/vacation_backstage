<template>
  <div class="item_container">
    <div class="item_wrapper">
      <div class="title">欢迎登陆 - MMALL管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="loginFormRef"
        label-width="100px"
        class="demo-dynamic"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="addLogin" class="btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../http/index'
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入你正确的账号", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            min: 1,
            max: 5,
            message: "长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
   async addLogin() {
       this.$refs.loginFormRef.validate(async (valid)=>{
          // if(!valid) return;
          //这是讲data重命名为res
           const { data : res } = await login(this.ruleForm)

           if (res.data.status == 0) return this.$message.error("登录失败！");
            console.log(valid)
           this.$router.push('/home')
       })
    }
  },

  mounted(){
   
  }
  
  };
</script>

<style scoped>
.item_container {
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(243, 243, 243);
}

.item_wrapper {
  width: 600px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  /* display: inline-flex;
    justify-content: space-around;
    align-items: center; */
  /* flex-wrap: wrap; */
}

.demo-dynamic {
  width: 500px;
  /* display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
}

.btn {
  width: 100%;
}

.title {
  width: 100%;
  font-size: 19px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
}
</style>