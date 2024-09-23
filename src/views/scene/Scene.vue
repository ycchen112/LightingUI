<template>
    <div class="scence">
      <el-row class="main-row" style="height: 100%;">
        <!-- 左侧树菜单 -->
        <el-col :span="3" class="tree-column">
          <el-input placeholder="搜索" v-model="searchText" class="search-box" />
          <el-tree
            :data="treeData"
            :props="defaultProps"
            default-expand-all
            node-key="id"
            highlight-current
            class="tree-menu"
          />
        </el-col>
  
        <!-- 右侧内容区域 -->
        <el-col :span="21" class="content-column">
          <!-- 操作按钮 -->
          <el-row :gutter="20" class="action-buttons">
            <el-button>查询</el-button>
            <el-button>导出</el-button>
            <el-button type="primary">新增</el-button>
            <el-button type="danger">删除</el-button>
          </el-row>
  
          <!-- 表格和分页 -->
          <div class="table-container">
            <!-- 表格 -->
            <el-table :data="tableData" class="custom-table full-width-table">
              <el-table-column type="selection" width="55" align="center" />
              <el-table-column prop="name" label="名称" width="180" align="center" />
              <el-table-column prop="createdTime" label="创建时间" width="180" align="center" />
              <el-table-column prop="sceneName" label="场景名称" width="180" align="center" />
              <el-table-column prop="lastExecuted" label="最后执行时间" width="180" align="center" />
              <el-table-column prop="remarks" label="备注" align="center" />
              <el-table-column label="操作" width="300" align="center">
                <template #default="scope">
                  <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
                  <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                  <el-button @click="handleExecute(scope.row)" type="text" size="small">执行</el-button>
                </template>
              </el-table-column>
            </el-table>
  
            <!-- 分页 -->
            <div class="pagination-container">
              <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      searchText: '',
      treeData: [
        {
          label: '北仑教育局',
          children: [
            { label: '新契小学' },
            { label: '长江小学' },
            { label: '淮河小学' },
          ],
        },
        {
          label: '宁波项目样板间',
          children: [{ label: '1' }],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      tableData: [
        {
          name: '创建访问',
          createdTime: '2023-01-04 14:44:41',
          sceneName: '手动模式',
          lastExecuted: '2023-06-13 11:58:10',
          remarks: '',
        },
        {
          name: '考场模式',
          createdTime: '2023-01-03 14:23:31',
          sceneName: '考试模式',
          lastExecuted: '2023-06-11 23:34:56',
          remarks: '',
        },
      ],
      total: 0,
      pageSize: 10,
    };
  },
  mounted() { this.total = this.tableData.length; }, // 将表格数据的长度赋值给 total 
  methods: {
    handleEdit(row) {
      console.log('修改', row);
    },
    handleDelete(row) {
      console.log('删除', row);
    },
    handleExecute(row) {
      console.log('执行', row);
    },
    handleSizeChange(size) {
      this.pageSize = size;
    },
    handleCurrentChange(page) {
      console.log('当前页', page);
    },
  },
};
</script>

<style scoped>
.scence {
  height: 100vh;
  padding: 20px; 
  box-sizing: border-box;
}

.main-row {
  height: 100%;
}

.tree-column {
  height: 100%;
  border-right: 1px solid #ebeef5;
  padding-right: 15px;
  padding-left: 10px;
  overflow-y: auto;
}

.search-box {
  margin-bottom: 10px;
}

.tree-menu {
  flex-grow: 1;
}

.content-column {
  padding-left: 20px; 
  display: flex;
  flex-direction: column;
  height: 100%;
}

.action-buttons {
  margin-bottom: 10px;
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

.full-width-table {
  flex-grow: 1;
  width: 100%;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}

.el-table th,
.el-table td{
  text-align: center;
}

.el-table :deep(th) {
  font-size: 16px; 
  font-weight: bold;
  background-color: #f7f7f7;
  border-bottom: 1px solid #f1f1f1;
}

:deep(.el-pagination) {
  margin-top: 10px;
  text-align: right;
  padding-bottom: 10px;
}

:deep(.el-button) {
  margin-right: 5px;
  padding: 10px 20px;
  font-size: 14px;
}
</style>
