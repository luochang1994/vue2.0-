<template>
    <div class="editPassW">
        <i class="el-icon-close closeIcon" @click="cloceDio"></i>

        <div class="verifyPhone" >
            <el-steps :active="activeStep" align-center>
                <el-step title="验证手机号"></el-step>
                <el-step title="重设密码"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            <div class="verifyWrap" v-if="activeStep==1">
                <el-form :model="rulePhone" :rules="rulesPhone" ref="rulePhone" label-width="80px" class="demo-ruleForm" style="margin-top:20px;">
                    <el-form-item label="手机号" prop="phonePass">
                        <el-input clearable v-model="rulePhone.phonePass"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="verifyPass">
                        <el-input style="width:65%;" clearable v-model="rulePhone.verifyPass" ></el-input>
                        <el-button style="margin-left:22px" type="primary" @click="alert(123)">获取验证码</el-button>
                    </el-form-item>
                    <el-form-item style="margin-top: 35px !important;">
                        <el-button  type="primary" @click="submitInput('rulePhone')">确定</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="verifyWrap" v-if="activeStep==2">
                <el-form :model="rulePass" :rules="rulesPass" ref="rulePass" label-width="80px" class="demo-ruleForm" style="margin-top:20px;">
                    <el-form-item label="密码" prop="onePass">
                        <el-input clearable type="password" v-model="rulePass.onePass"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="twoPass">
                        <el-input  clearable type="password" v-model="rulePass.twoPass" ></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top: 35px !important;">
                        <el-button  type="primary" @click="submitpPass('rulePass')">确定</el-button>
                    </el-form-item>
                </el-form>
                

            </div>
            <div class="verifyWrap" v-if="activeStep==3">
                <i class="el-icon-success successIcon"></i>
                <p class="p20 passHint">密码重设成功！请重新登录</p>
                <el-button class="passBtn"  type="primary" @click="clickLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'));
      } else {
          if(!(/^1[3456789]\d{9}$/.test(value))){
            callback('手机号格式不正确')
          } else{
            callback()
          }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback()
      }
    };

    var validatePass3 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            callback();
        }
    };
    var validatePass4 = (rule, value, callback) => {
       if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.rulePass.onePass) {
             callback(new Error('两次输入密码不一致!'));
        } else {
             callback();
        }
    };
    
    return {
        activeStep:1,
        rulePhone: {
            phonePass: '',
            verifyPass: '',
        },
        rulePass: {
            onePass: '',
            twoPass: '',
        },
        rulesPhone: {
            phonePass: [
            { required: true, validator: validatePass, trigger: 'blur' }
            ],
            verifyPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
            ],
        },
        rulesPass: {
            onePass: [
            { required: true, validator: validatePass3, trigger: 'blur' }
            ],
            twoPass: [
            { required: true, validator: validatePass4, trigger: 'blur' }
            ],
        }


    };
  },
  created(){

  },
  methods: {
    submitInput(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        // alert('submit!');
          this.activeStep = 2;
       
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitpPass(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          // alert('submit!');
          this.activeStep = 3;
       
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cloceDio(){
        this.$emit('close','123456789')
    },
    clickLogin(){
      this.$router.replace('/')
    },
  },
};
</script>
<style lang="less">
    .editPassW{
        width: 520px;
        height: 320px;
        background: white;
        border-radius: 10px;
        position: absolute;
        top: 40%;
        left: 50%;
        margin-top: -160px;
        margin-left: -260px;
    }
    .verifyPhone{
        width: 90%;
        margin:20px auto;
        
    }
    .successIcon{
        font-size: 60px;
        color: #409EFF;
        margin: 30px 50px;
    }
    .passHint{
        position: absolute;
        top: 124px;
        left: 150px;
        text-align: center;
    }
    .passBtn{
        position: absolute;
        top: 196px;
        left: 85px;
    }
    .closeIcon{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: @padding-hov;
        cursor: pointer;
    }
    .closeIcon:hover{
        color: #409EFF;
    }
    
    
</style>
