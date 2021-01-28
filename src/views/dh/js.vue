<template>
  <div class="item_container">

        <div class="item_left1">
          <div class="item_number">{{nav.userCount}}</div>
          <div class="item_text"> <i class="el-icon-user"></i> 用户总数 </div>  
        </div>
        <div class="item_container1">
          <div class="item_number">{{nav.productCount}}</div>
          <div class="item_text"> <i class="el-icon-s-operation"></i> 商品总数 </div> 
        </div>
        <div class="item_right1">
          <div class="item_number"> {{nav.orderCount}}</div>
           <div class="item_text"> <i class="el-icon-s-operation"></i> 订单总数 </div> 
        </div>

  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  data() {
    return {

      nav:{},

    
    };
  },

  
  mounted(){ 
    this.$API.HomeList().then(res=>{
      // console.log(res)
      this.nav = res.data.data

      console.log(this.nav)
    })
  },

 
};
</script>

<style scoped>

.item_container_lit1 {
  width: 200px;
  height: 70px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}


.item_left1 {
  width: 30%;
  height: 200px;
  background-color: red;
  color: #fff;
  font-size:55px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

}


.item_left1:hover {
   transform: scale(1.05);
  transition: all 1s;
  /* box-sizing: border-box; */
}



.item_right1:hover {
   transform: scale(1.05);
  transition: all 1s;
  /* box-sizing: border-box; */
}




.item_container1:hover {
   transform: scale(1.05);
  transition: all 1s;
  /* box-sizing: border-box; */
}

.item_number {
  width: 100%;
    display: inline-flex;
  justify-content: center;
  align-items: center;
}
.item_text {
  font-size: 26px;
}

.item_container1 {
    width: 30%;
  height: 200px;
  background-color: pink;
   color: #fff;
  font-size: 55px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
   flex-wrap: wrap;

}

.item_right1{
    width: 30%;
  height:200px;
  background-color: blue;
   color: #fff;
  font-size: 55px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

}

.item_right_ite1 {
  width: 80px;
  height: 100%;
  background-color: blue;
  font-size: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.item_right_ite2 {
  width: 80px;
  height: 100%;
  background-color: olivedrab;
  font-size: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.item_right_ite3 {
  width: 80px;
  height: 100%;
  background-color: red;
  font-size: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.item_container {
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.item_left_itw2 {
  width: 120px;
  height: 100%;
  font-size: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
}

.item_left_itw2 div:nth-child(1) {
  width: 100%;
  font-weight: 700;
  color: blue;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.item_left_itw2 div:nth-child(2) {
  color: #999;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
}
.item_left {
  width: 30%;
  /* background: red; */
  margin: 10px;
}

.item_right {
  width: 70%;
  height: 470px;
  justify-content: space-around;
  flex-wrap: wrap;
  
}


.item_title div:nth-child(2) {
  color: #999;
  font-size: 12px;
}


</style>