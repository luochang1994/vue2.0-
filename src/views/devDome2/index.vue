<template lang="">
    <div>
        123456第二个页面个人什么鬼devDome2
        devDome2
        devDome2
        devDome2
        devDome2
        devDome2
        
    </div>
</template>
<script>
// @ is an alias to /src
import _ from 'lodash'
import HelloWorld from "components/HelloWorld.vue";
import editPass from "components/editPass.vue";

export default {
  name: "DevDome2",
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
    console.log('aaaa')
    

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