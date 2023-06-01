<script setup>
  import { ref } from 'vue';
  import ZingChartVue from '../ZingChart.vue';
  
  const chartData = ref({
    type: "line",
    series: [
      {
        values: [6,4,3,4,6,6,4]
      }
    ]
  });
</script>

<template>
  <div>
    <h3>A simple example with a line chart config</h3>
    <ZingChartVue ref="chart" :data="chartData" />
    <pre>
      &lt;ZingChartVue ref="chart" :data="chartData"/&gt;
    </pre>
    <pre>
      const chartData = ref({
        type: "line",
        series: [
          {
            values: [6,4,3,4,6,6,4]
          }
        ]
      });
    </pre>
  </div>
</template>
