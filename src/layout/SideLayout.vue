<template>
  <div class="side-layout">
    <a-menu
      mode="inline"
      theme="dark"
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      @openChange="handleOpenChange"
    >
      <a-sub-menu key="sub1" title="教育照明">
        <a-menu-item key="/dashboard">
          <router-link to="/dashboard">灯具管理</router-link>
        </a-menu-item>
        <a-menu-item key="/gateway">
          <router-link to="/gateway">网关管理</router-link>
        </a-menu-item>
        <a-menu-item key="/scene">
          <router-link to="/scene">场景管理</router-link>
        </a-menu-item>
        <a-menu-item key="/log">
          <router-link to="/log">设备日志管理</router-link>
        </a-menu-item>
        <a-menu-item key="/data">
          <router-link to="/data">数据记录</router-link>
        </a-menu-item>
        <a-menu-item key="/space">
          <router-link to="/space">空间管理</router-link>
        </a-menu-item>
        <a-menu-item key="/day">
          <router-link to="/day">日用能记录</router-link>
        </a-menu-item>
        <a-menu-item key="/month">
          <router-link to="/month">月用能记录</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedKeys = ref([route.path]);
const openKeys = ref(['sub1']);

const handleOpenChange = keys => {
  openKeys.value = keys;
};

watch(route, (newRoute) => {
  selectedKeys.value = [newRoute.path];
});
</script>

<style scoped>
.side-layout {
  height: 100%;
  background-color: #2d3a4b;
}

.a-menu-item-selected {
  background-color: #1d2a38 !important; 
  color: #f0f0f0 !important; 
}

.a-menu-item-selected .anticon {
  color: #f0f0f0 !important; 
}
</style>
