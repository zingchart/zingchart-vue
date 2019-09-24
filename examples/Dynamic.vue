<template>
  <div>
    <h3>Dynamic config</h3>
    <p>Everytime the configuration object changes, the component automatically re-renders. Below is an example of the dataset and color changing every 2 seconds without any additional code to re-render the chart. </p>
     <zingchart ref="chart" :data="chartData" />
<pre>
&lt;zingchart ref="chart" :data="chartData"/&gt;
</pre>
<pre>
  mounted() {
    setInterval( () => {
      this.values = randomData(10);
      this.color = randomColor();
    }, 2000);
  },
  computed: {
    chartData() {
      return {
        type: "bar",
        series: [
          {
            values: this.values,
            backgroundColor: this.color,
          }
        ]
      };
    }
  },
  data() {
    return {
      color: randomColor(),
      values: randomData(10),
    }
  }
...
</pre>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval( () => {
      this.values = randomData(10);
      this.color = randomColor();
    }, 2000);
  },
  computed: {
    chartData() {
      return {
        type: "bar",
        series: [
          {
            values: this.values,
            backgroundColor: this.color,
          }
        ]
      };
    }
  },
  data() {
    return {
      color: randomColor(),
      values: randomData(10),
    }
  }
}
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
</script>