
<script setup>
  import { onMounted, ref } from 'vue';
  import ZingChartVue from '../ZingChart.vue';

  const chart = ref();
  const output = ref(null);
  const listOfEventListeners = ref([]);
  const chartData = ref({
    type: "line",
    series: [
      {
        values: randomData(10)
      }
    ]
  });

  function chartDone() {
    output.value.innerHTML = `Event "Complete" - The chart is rendered\n`;
  };
  
  function nodeInfo(result) {
    delete result.ev;
    output.value.innerHTML = `Node Info \n` + JSON.stringify(result) + "\n";
  };

  // Random numbers from 0-100
  function randomData(count) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  };

  onMounted(() => {
    listOfEventListeners.value = Object.keys(chart.value.$attrs);
  });
</script>

<template>
  <div>
    <h3>Listening to the chart with ZingChart events</h3>
    <p>Every event available to ZingChart is available on the component's instance.</p>
    <ZingChartVue 
      ref="chart" 
      :data="chartData" 
      @complete="chartDone" 
      @nodeMouseover="nodeInfo" />

    <pre>&lt;ZingChartVue ref="chart" :data="chartData" @complete="chartDone" @nodeMouseover="nodeInfo" /&gt;</pre>

    <h2>Output from events</h2>
    <h3>Events bound:</h3>
    <ul>
      <li v-for="(item, index) in listOfEventListeners" :key="index">{{item}}</li>
    </ul>
    <textarea ref="output" cols="50" rows="10"></textarea>
  </div>
</template>
