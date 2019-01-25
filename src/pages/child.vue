<template>
  <div>
    <div class="search">
      <search></search>
    </div>
    <el-table :data="tableData4"
      style="width: 100%; height: 100%">
      <el-table-column fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.row)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import search from '@/components/common/search'
import axios from '@/utils/http.js'
export default {
  components: {
    search
  },
  data() {
    return {
      tableData4: []
    }
  },
  mounted() {
    axios.get('data/child')
      .then((response) => {
        this.tableData4 = response.data.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    deleteRow(row) {
      axios.delete('data/child', {
        params: {
          id: row.id
        }
      })
        .then((response) => {
          this.tableData4 = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table {
  overflow: scroll;
}
</style>
