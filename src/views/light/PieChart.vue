<template>
    <div ref="pieChart" style="width: 500px; height: 400px;"></div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
  import { onMounted, ref, nextTick } from 'vue';
  
  const pieChart = ref(null);
  
  onMounted(() => {
    nextTick(() => {
      if (pieChart.value) {
        const chart = echarts.init(pieChart.value);
        chart.setOption({
          title: {
            text: '本月设备用能TOP5',
            left: 'center',
            top: '1%',
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
          },
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              name: '设备用能',
              type: 'pie',
              radius: '55%',
              data: [
                { value: 20, name: '黑板灯' },
                { value: 20, name: '黑板灯' },
                { value: 20, name: '教室灯' },
                { value: 20, name: '教室灯' },
                { value: 20, name: '教室灯' },
              ],
              label: {
                color: '#fff',
                formatter: '{b}\n{d}%',
              },
              itemStyle: {
                normal: {
                  color: function(params) {
                    const colorList = ['#e74c3c', '#e74c3c', '#34495e', '#34495e', '#34495e'];
                    return colorList[params.dataIndex];
                  },
                },
              },
            },
          ],
        });
      }
    });
  });
  </script>
  