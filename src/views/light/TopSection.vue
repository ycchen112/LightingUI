<template>
    <div class="top-section">
      <div class="title">累计用能</div>
      <div class="power-icon">
        <i class="fas fa-power-off"></i>
      </div>
      <div class="power-value">{{ powerValue }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      powerValue: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-left: -30px;
  }
  
  .title {
    margin-right: 10px;
    color: #ffffff;
    font-size: 15px;
  }
  
  .power-icon {
    margin-right: 45px;
    color: #f59c04;
  }
  
  .power-value {
    color: #f7fa18;
    font-size: 20px;
  }
  </style>
  