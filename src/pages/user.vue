<template>
  <div class="user-page">
    <div class="photo">
      <img :src="user.imgSrc">
    </div>
    <el-form ref="form"
      :model="form"
      :rules="rules"
      label-width="112px">
      <ul>
        <li>
          <label>用户名：</label>
          <span>{{user.userName}}</span>
        </li>
        <template v-if="!edit">
          <li>
            <label>真实姓名：</label>
            <span>{{user.realName}}</span>
          </li>
          <li>
            <label>邮箱：</label>
            <span>{{user.email}}</span>
          </li>
          <li>
            <label>手机：</label>
            <span>{{user.phone}}</span>
          </li>
        </template>
        <template v-if="edit">
          <el-form-item label="真实姓名："
            prop="realName">
            <el-input size="small"
              v-model="form.realName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱："
            prop="email">
            <el-input size="small"
              v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="手机："
            prop="phone">
            <el-input size="small"
              v-model="form.phone"></el-input>
          </el-form-item>
        </template>
        <li>
          <label>注册时间：</label>
          <span>{{user.time}}</span>
        </li>
      </ul>
      <el-row v-if="!edit">
        <el-button type="primary"
          @click="edit = true">修改</el-button>
      </el-row>
      <el-row v-if="edit">
        <el-button @click="cancelForm">取消</el-button>
        <el-button type="primary"
          @click="submitForm">确认</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from '@/utils/http.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {},
      form: {},
      edit: false,
      rules: {
        realName: [{
          required: true,
          trigger: 'blur',
          message: '请输入不超过5位数字或英文',
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{0,5}$/
        }],
        email: [{
          require: true,
          trigger: 'blur',
          message: '请输入邮箱地址',
          pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        }],
        phone: [{
          require: true,
          trigger: 'blur',
          message: '请输入手机号码',
          pattern: /^1[34578]\d{9}$/
        }]
      }
    }
  },
  mounted() {
    axios.get('data/user')
      .then((res) => {
        this.user = res.data.data
        this.form = JSON.parse(JSON.stringify(this.user))
      })
      .catch((err) => {
        console.error(err)
      })
  },
  methods: {
    cancelForm() {
      this.edit = false
      this.form = JSON.parse(JSON.stringify(this.user))
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: 'data/user',
            data: this.form
          }).then((res) => {
            this.user = res.data.data
            this.form = JSON.parse(JSON.stringify(this.user))
            this.edit = false
          }).catch((err) => {
            console.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.user-page {
  .photo {
    height: 120px;
  }
  img {
    height: 100%;
    width: auto;
    border-radius: 50%;
  }
  ul {
    width: 300px;
    display: inline-block;
    li {
      list-style-type: none;
      text-align: left;
      line-height: 40px;
      label {
        width: 100px;
        display: inline-block;
        text-align: right;
        color: #606266;
        font-size: 16px !important;
      }
    }
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-form-item__error {
    top: 26%;
    left: 105%;
    width: 100%;
    text-align: left;
  }
}
</style>
