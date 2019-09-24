<template>
  <div>
    <h3>Modifying the chart with ZingChart methods</h3>
    <p>Every method available to ZingChart is available on the component's instance.</p>
    <zingchart ref="chart" :data="chartData" />

    <h4>addPlot()</h4>
    <p>Adding a plot</p>
    <pre>&lt;zingchart ref="chart" :data="chartData" /&gt;</pre>
    <pre>
  // 'addplot' is a ZingChart method
  this.$refs.chart.addplot({
    data: {
      values: randomData(10),
      text: "My new plot"
    }
  });
  ...

  // Random numbers from 0-100
  function randomData(count) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  }
  </pre>
  <button class="primary" @click="addPlot">Add a plot</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        type: "line",
        series: [
          {
            values: randomData(10)
          }
        ]
      }
    };
  },
  methods: {
    // Add a new plot
    addPlot() {
      this.$refs.chart.addplot({
        data: {
          values: randomData(10),
          text: "My new plot"
        }
      });
    },
  }
};

// Random numbers from 0-100
function randomData(count) {
  return Array.from(new Array(count)).map(() => {
    return Math.floor(Math.random() * 10);
  });
}
</script>