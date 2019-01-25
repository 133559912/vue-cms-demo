<template>
  <div>
    <el-form :inline="true"
      :model="formInline"
      ref="formInline"
      class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="formInline.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="formInline.keywords"
            placeholder="关键字"></el-input>
        </el-form-item>
        <el-button type="primary"
          @click="onSubmit">查询</el-button>
        <el-button type="primary"
          @click="onCancel">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formInline: {
        date: '',
        keywords: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formInline)
    },
    onCancel() {
      this.$refs.formInline.resetFields()
      console.log(this.formInline)
    }
  }
}
</script>

<style>
</style>
