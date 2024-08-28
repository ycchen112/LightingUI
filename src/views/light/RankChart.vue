<template>
    <div class="ranking-container">
      <div class="ranking-title">用能排行</div>
      <div v-for="(item, index) in rankingData" :key="index" class="ranking-item">
        <div class="rank-number">{{ index + 1 }}</div>
        <div class="rank-content">
          <div class="rank-name">{{ item.name }}</div>
          <div class="rank-bar">
            <div class="bar-fill" :style="{ width: item.value + '%' }"></div>
          </div>
          <div class="rank-value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const rankingData = [
    { name: '新碶中学', value: 66 },
    { name: '北仑1+10', value: 11.2 },
    { name: '北仑教育局', value: 7.8 },
    { name: '北仑12+3', value: 0.6 },
    { name: '北仑微1+10', value: 0 }
  ];
  </script>
  
  <style scoped>
  .ranking-container {
    width: 300px;
    color: #fff;
  }
  
  .ranking-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 60px;
    text-align: center;
    position: relative; /* 使用 relative 以便单独移动 */
    top: 20px; /* 向下移动标题，但不影响下面的内容 */
  }
  
  .ranking-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .rank-number {
    font-size: 15px;
    font-weight: bold;
    width: 20px; /* 保持宽度一致 */
    text-align: center;
  }
  
  .rank-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  
  .rank-name {
    flex-grow: 1;
    width: 80px; /* 固定宽度 */
    margin-right: 10px; /* 保持右边距一致 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .rank-bar {
    flex-grow: 2;
    height: 10px;
    background-color: #1e2a38;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    width: 100px; /* 固定宽度 */
  }
  
  .bar-fill {
    height: 100%;
    background-color: #00f0ff;
    border-radius: 4px;
    transition: width 0.5s ease;
  }
  
  .rank-value {
    margin-left: 10px;
    font-size: 14px;
    width: 30px; /* 固定宽度 */
    text-align: right; /* 保持右对齐 */
  }
  </style>
