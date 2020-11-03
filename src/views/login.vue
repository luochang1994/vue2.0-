<template>
  <div class="home" :class="isEditPass?'home':'homePass'">
    <transition name="el-fade-in-linear">
      <div class="loginWrap transition-box" v-if="isEditPass">
          <div @click="cutmoduleClick"  class="loginTitleW">
            <div data-a="1" :class="isDivActive?'activeL':''">微信扫码登录</div>
            <div data-a="2" :class="!isDivActive?'activeL':''">账号登陆</div>
          </div>
          <div v-if="isDivActive" class="loginCode">
            <img src="../assets/img/code.png" alt="">
          </div>
          <div v-if="!isDivActive" class="loginInput">

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="loginName">
              <el-input clearable v-model="ruleForm.loginName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input clearable type="password" v-model="ruleForm.checkPass" ></el-input>
              
            </el-form-item>
            <div class="pull-right forgetPass" @click="editPassC">忘记密码</div>
            <el-form-item style="margin-top: 35px !important;">
              <el-button class="loginBtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>


          </div>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <editPass 
      class="transition-box"
        v-if="!isEditPass"
        @close="closeCreate"
      />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import HelloWorld from "components/HelloWorld.vue";
import editPass from "components/editPass.vue";

export default {
  name: "login",
  components: {
    HelloWorld,
    editPass
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback()
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback()
      }
    };
    return {
      isEditPass:true,
      isDivActive: true,
      radio: "2",
      Arr:[{'a':1,'b':2}],
      radio1: ['解决','array'],

      ruleForm: {
        loginName: '',
        checkPass: '',
      },
      rules: {
        loginName: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
      }



    };
  },
  created(){
    console.log(this.$router)
    console.log(this.$router.matcher)
    // _.cloneDeep
    let aaa = _.cloneDeep(this.Arr);
    aaa.push({'c':555})
    console.log(this.Arr)
    console.log(aaa)
    
    const arr = [1,2,3,4,5,6,7,8,9];
    console.log(_.chunk(arr,3))
    console.log(this.$route.params.userId)

  },
  methods: {
    closeCreate(obj){
      console.log(obj)
      console.log('关闭弹窗')

      this.isEditPass = true; 

    },
    editPassC(){
      this.isEditPass = false; 
    },
    goAbout () {
      this.$router.replace('/')

    },
    cutmoduleClick (e) {
      if (e.target.dataset.a == 1) {
        this.isDivActive = true
      } else if (e.target.dataset.a == 2) {
        this.isDivActive = false
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          // alert('submit!');
          this.goAbout();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    background: #ccc;
    background: url("../assets/img/background.jpg") no-repeat;
    background-size:100% 100% ;
  }
  .homePass{
    width: 100%;
    height: 100%;
    background: #ccc;
    background: url("../assets/img/backgroundPass.jpg") no-repeat;
    background-size:100% 100% ;
  }
  .loginWrap{
    width: 400px;
    height: 320px;
    background: white;
    border-radius: 10px;
    position: absolute;
    right: 150px;
    top: 40%;
    margin-top: -160px;
  }
  .loginTitleW{
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #d1dbe5;
  }
  .loginTitleW{
    div{
      display: inline-block;
      width: 50%;
      line-height: 42px;
      text-align: center;
      font-size: @padding-ver;
      cursor: pointer;
      // font-weight: bold;
      
    }
    div:nth-child(1){
       border-radius: 10px 0 0 0;
    }
    div:nth-child(2){
       border-radius:0 10px 0 0;
    }
  }

  .activeL{
    background: #6397f7;
    color: white;
  }
  .loginCode{
    width: 100%;
    height: 278px;
    position: relative;
    img {
      width: 240px;
      position: absolute;
      top: 20px;
      left: 80px;
    }
  }
  .loginInput{
    width: 85%;
    margin:50px auto;

  }
  .loginBtn{
    width: 300px;
    margin-left: -40px !important;
  }
  .forgetPass{
    color: #aaa;
    font-size: 14px;
    margin-top: -15px ;
    cursor: pointer;;
  }
  
</style>
