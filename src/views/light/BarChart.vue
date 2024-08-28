<template>
  <div>
    <Bar :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale
)

const chartData = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
  datasets: [
    {
      type: 'bar', // 柱状图
      label: '正面占比',
      backgroundColor: '#2a9fd6',
      data: [0, 119, 15, 0, 8, 0, 66]
    },
    {
      type: 'line', // 折线图
      label: '同期对比',
      borderColor: '#e74c3c', // 折线颜色
      pointBackgroundColor: '#e74c3c', // 数据点颜色
      data: [0, 0, 0, 0, 0, 0, 0],
      fill: false, // 禁用区域填充
      borderWidth: 2, // 折线宽度
      tension: 0.3 // 曲线弯曲度
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        color: '#fff',
        usePointStyle: true,
        pointStyle: 'rectRounded'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#fff' // X轴文字颜色
      }
    },
    y: {
      ticks: {
        color: '#fff' // Y轴文字颜色
      }
    }
  }
}
</script>
