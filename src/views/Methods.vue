
<script setup>
  import { ref } from 'vue';
  import ZingChartVue from '../ZingChart.vue';

  const chart = ref(null);
  const chartData = ref({
    type: "line",
    series: [
      {
        values: randomData(10)
      }
    ]
  });

  // Random numbers from 0-100
  function randomData(count) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  };

  function addPlot() {
    chart.value.addplot({
      data: {
        values: randomData(10),
        text: "My new plot"
      }
    });
  };
</script>

<template>
  <div>
    <h3>Modifying the chart with ZingChart methods</h3>
    <p>Every method available to ZingChart is available on the component's instance.</p>
    <ZingChartVue ref="chart" :data="chartData" />

    <h4>addPlot()</h4>
    <p>Adding a plot</p>
    <pre>
      &lt;ZingChartVue ref="chart" :data="chartData" /&gt;
    </pre>
    <pre>
      const chart = ref(null);

      // 'addplot' is a ZingChart method
      chart.value.addplot({
        data: {
          values: randomData(10),
          text: "My new plot"
        }
      });
    </pre>
    <button class="primary" @click="addPlot">Add a plot</button>
  </div>
</template>
