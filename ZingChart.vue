<template>
  <div ref='chart'></div>
</template>

<script>
// Import the zingchart library to be used globally.
import 'zingchart';
import {DEFAULT_WIDTH, DEFAULT_HEIGHT, EVENT_NAMES, METHOD_NAMES} from './constants.js';

// One time setup globally to handle all zingchart-vue objects in the app space.
if (!window.ZCVUE) {
  window.ZCVUE = {
    instances: {},
    count: 0
  };
}

export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
    height: {
      type: [String, Number],
      default: DEFAULT_HEIGHT,
    },
    series: {
      type: Object,
      required: false,
    },
    width: {
      type: [String, Number],
      default: DEFAULT_WIDTH,
    }
  },
  data() {
    return {
      chartId: null,
      instance: null,
      chartConfig: null,
      EVENT_NAMES,
      METHOD_NAMES,
    };
  },
  destroyed() {
    delete window.ZCVUE.instances[this.chartId];
    window.zingchart.exec(this.chartId, 'destroy');
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.chartConfig = this.$props.config;

      // Set the id for zingchart to render to
      if (this.$props.id) {
        this.chartId = this.$props.id;
      } else {
        this.chartId = 'zingchart-vue-' + window.ZCVUE.count++;
      }
      this.$refs.chart.setAttribute('id', this.chartId);

      // Override the user's config series object if provided. Just a shallow override (no deep merge)
      if (this.$props.series) {
        this.chartConfig['series'] = this.$props.series;
      }

      const renderObject = {
        id: this.chartId,
        data: this.chartConfig,
        height: this.$props.height,
        width: this.$props.width,
      };

      // Pipe zingchart specific event listeners
      Object.keys(this.$listeners).forEach(eventName => {
        if (this.EVENT_NAMES.includes(eventName)) {
          // Filter through the provided events list, then register it to zingchart.
          window.zingchart.bind(this.chartId, eventName, result => {
            this.$listeners[eventName](result);
          });
        }
      });

      // Render the chart
      window.zingchart.render(renderObject);

      // Apply all of ZingChart's methods directly to the Vue instance
      this.METHOD_NAMES.forEach(name => {
        this[name] = args => {
          return window.zingchart.exec(this.chartId, name, args);
        };
      });
    },
    resize() {
      window.zingchart.exec(this.chartId, 'resize', {
        height: this.$props.height,
        width: this.$props.width,
      });
    }
  },
  watch: {
    config: function(val) {
      window.zingchart.exec(this.chartId, 'setdata', {
        data: val
      });
    },
    height: function() { this.resize() },
    series: function() {
      window.zingchart.exec(this.chartId, 'setseriesdata', {
        values: val
      });
    },
    width: function() { this.resize() },
  }
};
</script>