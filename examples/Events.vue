<template>
  <div>
    <h3>Listening to the chart with ZingChart events</h3>
    <p>Every event available to ZingChart is available on the component's instance.</p>
    <zingchart 
      ref="chart" 
      :data="chartData" 
      @complete="chartDone" 
      @node_mouseover="nodeInfo" />

    <pre>&lt;zingchart ref="chart" :data="chartData" @complete="chartDone" @node_mouseover="nodeInfo" /&gt;</pre>

      <h2>Output from events</h2>
    <h3>Events bound:</h3>
    <ul>
      <li v-for="(item, index) in listOfEventListeners" :key="index">{{item}}</li>
    </ul>
    <textarea ref="output" cols="50" rows="10"></textarea>
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
      },
      listOfEventListeners: []
    };
  },
  mounted() {
    this.listOfEventListeners = Object.keys(this.$refs.chart.$listeners);
  },
  methods: {
    chartDone() {
      this.$refs.output.innerHTML = `Event "Complete" - The chart is rendered\n`;
    },
    nodeInfo(result) {
      delete result.ev;
      this.$refs.output.innerHTML =
        `Node Info \n` + JSON.stringify(result) + "\n";
    }
  }
};

// Random numbers from 0-100
function randomData(count) {
  return Array.from(new Array(count)).map(() => {
    return Math.floor(Math.random() * 10);
  });
}
</script>