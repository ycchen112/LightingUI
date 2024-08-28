<template>
  <div class="dashboard">
    <div class="dashboard-title">智慧照明平台</div>
    <div class="content">
      <div class="left-section">
        <div class="box school-count">
          <div class="label">学校数</div>
          <div class="number">18</div>
        </div>
        <div class="box classroom-count">
          <div class="label">教室数</div>
          <div class="number">73</div>
        </div>
      </div>
      <div class="right-section">
        <div class="stat-box">
          <div class="stat-label">灯具总数</div>
          <div class="stat-number">72</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">网关总数</div>
          <div class="stat-number">13</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">网关离线</div>
          <div class="stat-number">12</div>
        </div>

        <div class="school-bar-chart">
          <SchoolBarChart style=" width: 400px; height: 260px; "/>
        </div>
        <div class="rank-chart-container">
          <RankChart />
        </div>
        <div class="top-section-container">
          <TopSection :powerValue="85.6" />
        </div>
        <div class="divider"></div>
        <div class="map-section-container">
          <MapSection />
        </div>
        <div class="bottom-section-container">
          <BottomSection />
        </div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-header">
        <div class="chart-title">2024用能情况</div>
      </div>
      <BarChart class="bar-chart"/>
      <PieChart class="pie-chart" />
      <EnergyTable class="energy-table" />
    </div>
  </div> 
</template>

<script setup>
import BarChart from './BarChart.vue'
import SchoolBarChart from './SchoolBarChart.vue'
import PieChart from './PieChart.vue';
import EnergyTable from './EnergyTable.vue'
import RankChart from './RankChart.vue'
import TopSection from './TopSection.vue';
import MapSection from './MapSection.vue';
import BottomSection from './BottomSection.vue';
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0a1a2a;
  padding-left: 20px; 
  padding-top: 15px;
}

.dashboard-title {
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}

.content {
  display: flex;
  gap: 40px;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.right-section {
  display: flex;
  flex-wrap: wrap; 
  gap: 1px;
  margin-left: -30px;
}

.box {
  width: 220px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 1px;
}

.school-count {
  background-color: #e74c3c;
}

.classroom-count {
  background-color: #1abc9c;
}

.label {
  font-size: 15px; 
  font-weight: 450; 
  margin-bottom: 5px; 
  text-align: center;
}

.number {
  font-size: 30px; 
  font-weight: bold; 
  margin-top: 10px;
}

.stat-box {
  width: 120px; 
  height: 50px; 
  background-color: #0a1a2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  color: white;
  margin-left: 10px;
}

.stat-label {
  font-size: 15px;
}

.stat-number {
  font-size: 25px;
  font-weight: bold;
}

.school-bar-chart {
  background-color: #0a1a2a;
  border-radius: 4px;
  margin-left: -200px;
  margin-top: 47px;
}

.chart {
  width: 100%; 
  height: 100%; 
}

.rank-chart-container {
  margin-left:-25px;
  margin-top: -8px; 
}

.top-section-container {
  margin-left: 120px;
  margin-top: -35px;
}


.divider {
  width: 27%;
  height: 1px;
  border-bottom: 1px dashed #f7fa18;
  top: -350px;
  margin-left: 710px;
  position: relative;
}

.map-section-container {
  margin-left: 720px;
  margin-top: -350px;
}

.bottom-section-container {
  margin-left: 700px;
  margin-top: -200px;
}


.chart-container {
  display: flex;
  position: relative;
  flex-direction: row; 
  width: 20%; 
  justify-content: space-between;
}

.chart-header {
  padding-bottom: 10px; 
  margin-top: -65px;
}

.chart-title {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: left; 
  white-space: nowrap;
}

.bar-chart {
  margin-left: -100px; 
  margin-top: -40px;
}

.pie-chart {
  margin-left: -60px; 
}

.energy-table {
  margin-left: -45px; 
  margin-top: -40px;
}
</style>
