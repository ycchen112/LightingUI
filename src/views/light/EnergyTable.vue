<template>
    <div class="table-container">
      <div class="table-title">设备用能情况</div>
      <table class="energy-table">
        <thead>
          <tr>
            <th>所属空间</th>
            <th>灯具名称</th>
            <th>累计用量(KWH)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.space }}</td>
            <td>{{ item.device }}</td>
            <td>{{ item.usage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const tableData = [
    { space: '北仑教育局-新碶中学', device: '教室灯', usage: '5.5' },
    { space: '北仑教育局-新碶中学', device: '黑板灯', usage: '5.5' },
    { space: '北仑教育局-新碶中学', device: '教室灯', usage: '5.5' },
    { space: '北仑教育局-新碶中学', device: '教室灯', usage: '5.5' },
    { space: '北仑教育局-新碶中学', device: '教室灯', usage: '5.5' },
    { space: '北仑教育局-新碶中学', device: '教室灯', usage: '5.5' },
  ];
  </script>
  
  <style scoped>
  .table-container {
    width: 45%;
    margin-top: 3px;
  }
  
  .table-title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .energy-table {
    width: 50%;
    border-collapse: collapse;
    color: #fff;
  }
  
  .energy-table th, .energy-table td {
    border: 1px solid #2c3e50;
    text-align: center;
    padding: 14px;
  }
  
  .energy-table th {
    background-color: #2980b9;
    color: white;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
  }
  
  .energy-table td {
    background-color: #1a2b3c;
    white-space: nowrap;
    font-size: 14px;
  }


  </style>