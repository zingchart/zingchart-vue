<script setup>
  import { onMounted, ref } from 'vue';
  import ZingChartVue from '../ZingChart.vue';

  // Random numbers from 0-100
  function randomData(count) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  }

  function randomColor() {
    const PLOT_COLORS = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#607d8b'];
    return PLOT_COLORS[Math.floor(Math.random() * PLOT_COLORS.length)]
  }

  let chartData = ref(update());

  function update() {
    return {
      type: 'bar',
      series: [
        {
          values: randomData(10),
          backgroundColor: randomColor(),
        }
      ]
    };
  };

  onMounted(() => {
    setInterval( () => {
      chartData.value = update();
    }, 2000);
  });
</script>

<template>
  <div>
    <h3>Dynamic config</h3>
    <p>Everytime the configuration object changes, the component automatically re-renders. Below is an example of the dataset and color changing every 2 seconds without any additional code to re-render the chart. </p>
    <ZingChartVue ref="chart" :data="chartData" />
    <pre>
      &lt;ZingChartVue ref="chart" :data="chartData"/&gt;
    </pre>
    <pre>
      let chartData = ref(update());

      function update() {
        return {
          type: 'bar',
          series: [
            {
              values: randomData(10),
              backgroundColor: randomColor(),
            }
          ]
        };
      };

      onMounted(() => {
        setInterval( () => {
          chartData.value = update();
        }, 2000);
      });
    </pre>
  </div>
</template>