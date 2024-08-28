<template>
  <div class="school-bar-chart">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chart = ref(null)

onMounted(() => {
  const myChart = echarts.init(chart.value)

  const option = {
    color: ['#2ecc71', '#e67e22'],  // These colors match the 教室灯 (green) and 黑板灯 (orange)
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['教室灯', '黑板灯'],  // This is where you define the legend
      textStyle: {
        color: '#fff'  // Ensures the text is white to be visible on the dark background
      }
    },
    xAxis: {
      type: 'category',
      data: [
        '新钢小学', '湖边小学', '澎湖小学', '新塘小学',
        '长江中学', '唐山中学', '园洲中学', '商校附属学校',
        '明德小学', '宁波项目班'
      ],
      axisLabel: {
        rotate: 45,
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '教室灯',
        type: 'bar',
        data: Array(10).fill(0)  // Example data for 教室灯, adjust the array size if needed
      },
      {
        name: '黑板灯',
        type: 'bar',
        data: Array(10).fill(0)  // Example data for 黑板灯, adjust the array size if needed
      }
    ]
  }

  myChart.setOption(option)
})
</script>

<style scoped>
.school-bar-chart {
  background-color: #0a1a2a;
  padding: 10px;
  border-radius: 4px;
}

.chart {
  height: 100%; /* Ensure the chart is full size */
}
</style>
