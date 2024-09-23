<template>
  <div class="table-container">
    <!-- 输入框和按钮 -->
    <div class="search-bar">
      <el-input v-model="deviceNameQuery" placeholder="灯控器名称" class="input-query"></el-input>
      <el-input v-model="deviceNumberQuery" placeholder="灯控器编号" class="input-query"></el-input>
      <el-input v-model="networkQuery" placeholder="所属网关" class="input-query"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="searchData">查询</el-button>
      <el-button icon="el-icon-download" @click="exportData">导出</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" class="custom-table" stripe>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="time" label="时间" align="center" sortable></el-table-column>
      <el-table-column prop="network" label="所属网关" align="center"></el-table-column>
      <el-table-column prop="area" label="所属空间" align="center"></el-table-column>
      <el-table-column prop="deviceName" label="灯控器名称" align="center"></el-table-column>
      <el-table-column prop="deviceNumber" label="灯控器编号" align="center"></el-table-column>
      <el-table-column prop="energyData" label="电能数据" align="center" sortable></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-link type="primary" @click="editRow(scope.row)">修改</el-link>
          <el-link type="danger" @click="deleteRow(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handlePageChange"
        @size-change="handleSizeChange">
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
const total = ref(0); // 数据总数
const pageSize = ref(10); // 每页显示的数据条数
const currentPage = ref(1); // 当前页码

// 查询条件的输入框绑定
const deviceNameQuery = ref(''); // 灯控器名称
const deviceNumberQuery = ref(''); // 灯控器编号
const networkQuery = ref(''); // 所属网关

// 模拟API获取分页数据
const fetchData = (page = 1, size = 10) => {
  // API请求时传入分页参数（如page和pageSize）
  const queryParams = {
    page,
    pageSize: size,
    deviceName: deviceNameQuery.value,
    deviceNumber: deviceNumberQuery.value,
    network: networkQuery.value,
  };
  
  // 模拟API响应数据
  setTimeout(() => {
    // 这里模拟总记录数为100条
    total.value = 100;

    // 模拟当前页的数据
    tableData.value = Array.from({ length: pageSize.value }, (_, index) => ({
      time: `2024-07-25 16:52:${50 - index}`,
      network: '黄工测试网关',
      area: '新明中学',
      deviceName: index % 2 === 0 ? '黑板灯' : '教室灯',
      deviceNumber: index + 1 + (page - 1) * pageSize.value,
      energyData: '5.5',
    }));
  }, 500); // 模拟API延迟
};

// 搜索数据
const searchData = () => {
  ElMessage.info('正在根据查询条件筛选数据...');
  currentPage.value = 1; // 重置为第一页
  fetchData(1, pageSize.value); // 根据查询条件重新获取第一页数据
};

// 导出数据
const exportData = () => {
  ElMessage.info('导出数据功能');
};

// 修改行
const editRow = (row) => {
  ElMessage.info(`修改 ${row.deviceName}`);
};

// 删除行
const deleteRow = (row) => {
  ElMessage.confirm('确定要删除这条记录吗？').then(() => {
    ElMessage.success('删除成功');
  });
};

// 页码变化
const handlePageChange = (page) => {
  currentPage.value = page;
  fetchData(page, pageSize.value);
};

// 每页条数变化
const handleSizeChange = (size) => {
  pageSize.value = size;
  fetchData(currentPage.value, size);
};

// 初始化加载数据
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.table-container {
  display: flex;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  height: calc(100vh - 40px); /* 使表格占满整个页面 */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  width: 100%;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.input-query {
  width: 200px;
  margin-right: 10px;
}

.el-button {
  margin-right: 10px;
}

.custom-table {
  flex-grow: 1;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.el-table :deep(th) {
  width: 100%;
  background-color: #f0f4f7;
  color: #333;
  font-weight: bold;
  text-align: center;
}

.el-table :deep(td) {
  text-align: center;
  width: 100%;
}

.el-link {
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 100%;
}
</style>
