<template>
  <div class="login">
    <el-form ref="form"
      class="login-form"
      :model="form"
      :rules="rules"
      label-width="112px">
      <h3>用户登录</h3>
      <el-form-item prop="userName">
        <el-input prefix-icon="el-icon-star-off"
          v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
          prefix-icon="el-icon-star-on"
          v-model="form.password"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="input-captcha"
        prop="captcha">
        <el-input name="captcha"
          type="text"
          v-model="form.captcha"
          prefix-icon="el-icon-question"
          auto-complete="off"
          :maxlength="6"
          placeholder="验证码">
        </el-input>
        <transition name="el-fade-in">
          <el-tooltip class="item"
            v-show="getCaptcha"
            effect="dark"
            content="点击更新验证码"
            placement="top-end">
            <img alt="验 证 码"
              :loading="getCaptcha"
              :src="imgCaptchaStr"
              @click="resetCaptcha">
          </el-tooltip>
        </transition>
      </el-form-item>
      <el-row>
        <el-button type="primary"
          @click="submitForm">登录</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from '../../utils/http.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      getCaptcha: false,
      imgCaptchaStr: '',
      form: {
        userName: '',
        password: '',
        captcha: ''
      },
      rules: {
        userName: [{
          required: true,
          trigger: 'blur',
          message: '请输入不超过10位数字或英文',
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{0,10}$/
        }],
        password: [{
          required: true,
          trigger: 'blur',
          message: '请输入不超过10位数字或英文',
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{0,10}$/
        }]
      }
    }
  },
  mounted() {
    this.getCaptchaImg()
  },
  methods: {
    getCaptchaImg() {
      axios.get('auth/captcha')
        .then((res) => {
          this.imgCaptchaStr = res.data.base64
          this.getCaptcha = true
        })
        .catch((err) => {
          console.error(err)
        })
    },
    cancelForm() {
      this.edit = false
      this.form = JSON.parse(JSON.stringify(this.user))
    },
    submitForm() {
      this.edit = true
      axios.post('auth/tokens', this.form)
        .then((res) => {
          if (res.data.ErrorCode === '200') {
            // 登录提示弹窗
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            // 跳转主页
            this.$router.push({ name: 'index' })
          } else {
            // 登录提示弹窗
            this.$message.error(res.data.message)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    resetCaptcha() {
      this.getCaptcha = false
      this.getCaptchaImg()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  text-align: center;
}
.login-form {
  width: 500px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-right: 100px;
  box-sizing: border-box;
  padding-bottom: 50px;
  .input-captcha {
    .el-input {
      width: 60%;
    }
    img {
      display: inline-block;
      width: 38%;
      position: relative;
      top: 10px;
    }
  }
}
</style>
