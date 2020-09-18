<template>
  <div ref='chart'></div>
</template>

<script>
// Import the zingchart library to be used globally (MUST BE DONE EXPLICITLY BEFORE THIS COMPONENT)
// import zingchart from 'zingchart/es6';

// import constants that define methods, events and default rendering parameters
import constants from 'zingchart-constants';
const { DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_OUTPUT, EVENT_NAMES, METHOD_NAMES } = constants;


// One time setup globally to handle all zingchart-vue objects in the app space.
if (!window.ZCVUE) {
  window.ZCVUE = {
    instances: {},
    count: 0
  };
}

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    height: {
      type: [String, Number],
      default: DEFAULT_HEIGHT,
    },
    id: {
      type: [String],
      required: false,
    },
    output: {
      type: String,
      default: DEFAULT_OUTPUT,
    },
    series: {
      type: Array,
      required: false,
    },
    theme: {
      type: Object,
      required: false,
    },
    width: {
      type: [String, Number],
      default: DEFAULT_WIDTH,
    },
    modules: {
      type: [String, Array],
      required: false
    },
    forceRender: {
      type: String,
    }
  },
  data() {
    return {
      chartId: null,
      instance: null,
      forceRenderOnChange: false,
      EVENT_NAMES,
      METHOD_NAMES,
      renderObject: null,
    };
  },
  destroyed() {
    delete window.ZCVUE.instances[this.chartId];
    window.zingchart.exec(this.chartId, 'destroy');
  },
  computed: {
    chartData() {
      const data = this.$props.data;
      // Override the user's config series object if provided. Just a shallow override (no deep merge)
      if (this.$props.series) {
        data['series'] = this.$props.series;
      }
      return data;
    }
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.forceRenderOnChange = typeof this.$props.forceRender !== 'undefined';
      this.$el.style.width = this.$props.width;
      this.$el.style.height = this.$props.height;
      // Set the id for zingchart to render to
      if (this.$props.id) {
        this.chartId = this.$props.id;
      } else {
        this.chartId = 'zingchart-vue-' + window.ZCVUE.count++;
      }
      this.$refs.chart.setAttribute('id', this.chartId);

      this.renderObject = {
        id: this.chartId,
        data: this.chartData,
        height: this.$props.height,
        width: this.$props.width,
        output: this.$props.output,
      };
      if(this.$props.modules) {
        this.renderObject.modules = this.$props.modules;
      }

      if(this.$props.theme) {
        this.renderObject.defaults = this.$props.theme;
      }

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
      window.zingchart.render(this.renderObject);

      // Apply all of ZingChart's methods directly to the Vue instance
      this.METHOD_NAMES.forEach(name => {
        this[name] = args => {
          return window.zingchart.exec(this.chartId, name, args);
        };
      });
    },
    resize() {
      this.$el.style.width = this.$props.width;
      this.$el.style.height = this.$props.height;
      window.zingchart.exec(this.chartId, 'resize', {
        height: this.$props.height,
        width: this.$props.width,
      });
    }
  },
  watch: {
    data: function() {
      if(this.forceRenderOnChange) {
        this.renderObject.data = this.chartData;
        window.zingchart.render(this.renderObject);
      } else {
        window.zingchart.exec(this.chartId, 'setdata', {
          data: this.chartData,
        });
      }
    },
    height: function() { this.resize() },
    series: function() {
      window.zingchart.exec(this.chartId, 'setseriesdata', {
        data: this.chartData.series,
      });
    },
    width: function() { this.resize() },
  }
};
</script>