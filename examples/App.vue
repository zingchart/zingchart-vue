<template>
  <div>
    <h1>vue-zingchart playground</h1>
    <p>A simple example of binding data, mutations with methods, and listening to events</p>
    <header>
      <a href="#" class="button" @click="activeDemo = 'simple'">Simple</a>
      <a href="#" class="button" @click="activeDemo = 'dynamic'">Dynamic Config</a>
      <a href="#" class="button" @click="activeDemo = 'methods'">Methods</a>
      <a href="#" class="button" @click="activeDemo = 'events'">Events</a>
    </header>

    <simple-view v-show="activeDemo === 'simple'"/>
    <dynamic-view v-show="activeDemo === 'dynamic'"/>
    <methods-view v-show="activeDemo === 'methods'"/>
    <events-view v-show="activeDemo === 'events'"/>
  </div>
</template>

<script>
import Vue from 'vue';
import zingchartVue from '../ZingChart.vue';
import MethodsView from './Methods.vue';
import EventsView from './Events.vue';
import DynamicView from './Dynamic.vue';
import SimpleView from './Simple.vue';
Vue.component('zingchart', zingchartVue);

export default {
  components: {
    SimpleView,
    DynamicView,
    MethodsView,
    EventsView,
  },
  data() {
    return {
      activeDemo: 'simple',
      nodeCount: 10,
      chartConfig: {
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
    // Add a new plot
    addPlot() {
      this.$refs.chart.addplot({
        data: {
          values: randomData(this.nodeCount),
          text: "My new plot"
        }
      });
    },
    addNodes() {
      const newValues = this.$refs.chart
        .getseriesvalues()
        .map((series) => series.push(Math.floor(Math.random() * 10)));
      this.nodeCount++;
      this.$refs.chart.setseriesvalues({
        values: newValues
      });
    },
    chartDone() {
      this.$refs.output.innerHTML = `Event "Complete" - The chart is rendered\n`;
    },
    nodeInfo(result) {
      // Strip the event object to stringify properly
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