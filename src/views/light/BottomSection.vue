<template>
  <div class="bottom-section">
    <div class="left-section">
      <IndicatorCard title="温度" value="23°C" icon="fas fa-thermometer-half" />
      <IndicatorCard title="信号" value="-90dBm" icon="fas fa-signal" />
    </div>
    <div class="right-section">
      <IndicatorCard title="湿度" value="56RH" icon="fas fa-tint" />
      <IndicatorCard title="光线" value="250LX" icon="fas fa-sun" />
    </div>
  </div>
</template>

<script>
import IndicatorCard from './IndicatorCard.vue';

export default {
  components: {
    IndicatorCard
  }
};
</script>

<style scoped>
.bottom-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  gap:50px;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 控制每个组件之间的间隔 */
}
</style>
