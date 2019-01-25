<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="content-table">
            <component :is="$route.name"></component>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '../common/navMenu'
import index from '@/pages/index'
import assets from '@/pages/assets'
import user from '@/pages/user'
import child from '@/pages/child'
export default {
  name: 'App',
  components: {
    navMenu,
    index,
    assets,
    user,
    child
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
