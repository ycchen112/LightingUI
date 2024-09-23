<template>
    <div class="container">
      <!-- 两个输入框和按钮 -->
      <div class="input-container">
        <el-input v-model="gatewayName" placeholder="网关名称" class="input-box gateway-name" />
        <el-input v-model="gatewayId" placeholder="网关编号" class="input-box gateway-id" />
        <el-button type="primary" @click="queryData" class="action-button">查询</el-button>
        <el-button @click="exportData" class="action-button">导出</el-button>
      </div>
    
      <!-- 表格 -->
      <div class="table-container">
        <el-table :data="filteredData" stripe style="width: 100%; margin-top: 20px;">
        <el-table-column prop="time" label="时间" width="180" />
        <el-table-column prop="gatewayId" label="网关编号" width="180" />
        <el-table-column prop="gatewayName" label="网关名称" width="180" />
        <el-table-column prop="messageType" label="消息类型" width="100" />
        <el-table-column prop="messageContent" label="消息内容" />
        <el-table-column prop="response" label="返回消息" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="editRow(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </div>
      
      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalItems"
        :page-size="pageSize"
        @current-change="handlePageChange"
      />
    </div>
  </template>
    
  <script>
  import { ref, computed } from 'vue';
    
  export default {
    setup() {
      const gatewayName = ref('');
      const gatewayId = ref('');
      const currentPage = ref(1);
      const pageSize = ref(2);
      const totalItems = ref(0);  // 假设总数据量
    
      // 示例数据
      const tableData = ref([
        { time: '2024-07-30 17:43:29', gatewayId: 'DC0D30D540B3', gatewayName: '黄工测试网关', messageType: 'A0', messageContent: '01032C7E00090300DC0D30D540B3', response: '1' },
        { time: '2024-07-30 17:43:29', gatewayId: 'DC0D30D540B3', gatewayName: '黄工测试网关', messageType: 'A0', messageContent: '01032C7E00090300DC0D30D540B3', response: '2' },
        { time: '2024-07-30 17:43:29', gatewayId: 'DC0D30D540B3', gatewayName: '黄工测试网关', messageType: 'A0', messageContent: '01032C7E00090300DC0D30D540B3', response: '3' },
        { time: '2024-07-30 17:43:29', gatewayId: 'DC0D30D540B3', gatewayName: '黄工测试网关', messageType: 'A0', messageContent: '01032C7E00090300DC0D30D540B3', response: '4' },
      ]);

      const filteredData = computed(() => {
      // 首先根据输入框内容过滤数据
      let data = tableData.value.filter(item => 
        (gatewayId.value === '' || item.gatewayId.includes(gatewayId.value)) &&
        (gatewayName.value === '' || item.gatewayName.includes(gatewayName.value))
      );
      // 然后进行分页
      const start = (currentPage.value - 1) * pageSize.value;
      const end = currentPage.value * pageSize.value;
      return data.slice(start, end);
    });
    
      const queryData = () => {
        // 处理查询逻辑
      };
    
      const exportData = () => {
        // 处理导出逻辑
      };
    
      const editRow = (row) => {
        // 处理修改逻辑
      };
    
      const deleteRow = (row) => {
        // 处理删除逻辑
      };
    
      const handlePageChange = (page) => {
        currentPage.value = page;
        // 分页逻辑
      };
    
      return {
        gatewayName,
        gatewayId,
        tableData,
        filteredData,
        currentPage,
        pageSize,
        totalItems,
        queryData,
        exportData,
        editRow,
        deleteRow,
        handlePageChange,
      };
    },
    mounted() { this.totalItems = this.tableData.length; },
  };
  </script>
    
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .input-box {
    width: 250px;
    height: 40px;
  }
  
  .gateway-id {
    padding-right: 20px;
  }
  
  .action-button {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
  }

  .table-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding: 10px; 
  background-color: #fff;
  border-radius: 8px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  }

  .el-table :deep(th),
  .el-table :deep(td) {
  text-align: center;
  }

  .el-table :deep(th) {
  font-size: 16px; 
  font-weight: bold;
  background-color: #f7f7f7;
  border-bottom: 1px solid #f1f1f1;
  }
  </style>
  