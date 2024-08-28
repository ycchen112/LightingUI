<template>
  <div class="app">
    <HeaderLayout />
    <div class="layout">
      <SideLayout class="side-layout" />
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script setup>
import HeaderLayout from './layout/HeaderLayout.vue';
import SideLayout from './layout/SideLayout.vue';
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.side-layout {
  width: 180px;
  background-color: #2d3a4b;
}

.main-content {
  flex: 1;
  background-color: #f0f2f5;
  overflow-y: auto;
}

#app {
  height: 100%;
  background-color: #f0f2f5;
}

.ant-table td {
  white-space: nowrap;
}
</style>
