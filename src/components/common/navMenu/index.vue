<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse"
      style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu class="el-menu-vertical-demo"
      :collapse="isCollapse">
      <template v-for="(item, key) in nav">
        <el-submenu :index="item.name"
          v-if="item.children"
          :key="key">
          <template slot="title">
            <router-link :to="item.name"
              slot="title">
              {{item.label}}
            </router-link>
          </template>
          <template v-for="(child, index) in item.children">
            <el-menu-item :index="child.name"
              :key="index">
              <router-link :to="child.name">
                {{child.label}}
              </router-link>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="item.name"
          v-else
          :key="key">
          <router-link :to="item.name"
            slot="title">
            {{item.label}}
          </router-link>
        </el-menu-item>

      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isCollapse: false,
      nav: [
        {
          name: 'index',
          path: '/index',
          label: '首页'
        },
        {
          name: 'assets',
          path: '/assets',
          label: '资产',
          children: [
            {
              name: 'child',
              path: '/assets/child',
              label: '子资产'
            }
          ]
        },
        {
          name: 'user',
          path: '/user',
          label: '个人中心'
        }
      ]
    }
  }
}
</script>

<style>
.el-menu {
  text-align: left;
}
</style>
