<script setup>
  import { computed, onMounted, onUnmounted, ref, useAttrs, watch } from 'vue';
  // import constants that define methods, events and default rendering parameters
  import constants from 'zingchart-constants';
  import zingchart from 'zingchart';

  // One time setup globally to handle all zingchart-vue objects in the app space.
  if (!window.ZCVUE) {
    window.ZCVUE = {
      instances: {},
      count: 0
    };
  }

  // PROPS
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    forceRender: {
      type: String,
    },
    height: {
      type: [String, Number],
      default: constants.DEFAULT_HEIGHT,
    },
    id: {
      type: [String],
      required: false,
    },
    modules: {
      type: [String, Array],
      required: false
    },
    output: {
      type: String,
      default: constants.DEFAULT_OUTPUT,
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
      default: constants.DEFAULT_WIDTH,
    }
  });

  // DATA
  const chart = ref();
  let chartId = null;
  let forceRenderOnChange = null;
  let renderObject = null;

  // Set the id for zingchart to render to
  if (props.id) {
    chartId = props.id;
  } else {
    chartId = 'zingchart-vue-' + window.ZCVUE.count++;
  }

  // COMPUTED
  const chartData = computed(() => {
    const data = props.data;
    if (props.series) {
      data['series'] = props.series;
    }
    return data;
  });
  // WATCHERS
  watch(() => props.data, () => {
    if (forceRenderOnChange) {
      renderObject.data = chartData.value;
      zingchart.render(renderObject);
    } else {
      zingchart.exec(chartId, 'setdata', {
        data: chartData.value,
      });
    }
  });
  watch(() => props.height, () => {
    resize();
  });
  watch(() => props.series, () => {
    zingchart.exec(chartId, 'setseriesdata', {
      data: chartData.series,
    });
  });
  watch(() => props.width, () => {
    resize();
  });

  // METHODS
  function render() {
    forceRenderOnChange = typeof props.forceRender !== 'undefined';
    chart.value.style.width = props.width;
    chart.value.style.height = props.height;

    chart.value.setAttribute('id', chartId);

    renderObject = {
      id: chartId,
      data: chartData.value,
      height: props.height,
      width: props.width,
      output: props.output,
    };
    if (props.modules) {
      renderObject.modules = props.modules;
    }

    if (props.theme) {
      renderObject.defaults = props.theme;
    }

    // Render the chart
    zingchart.render(renderObject);
  }

  function resize() {
    chart.value.style.width = props.width;
    chart.value.style.height = props.height;
    zingchart.exec(chartId, 'resize', {
      height: props.height,
      width: props.width,
    });
  }

  // LIFECYCLE HOOKS
  onMounted(() => {
    render();
  });
  onUnmounted(() => {
    delete window.ZCVUE.instances[chartId];
    zingchart.exec(chartId, 'destroy');
  });

  // EXPOSE
  const toExpose = {};
  // Apply all of ZingChart's methods directly to the Vue instance
  constants.METHOD_NAMES.forEach(name => {
    if (name.includes('zingchart.')) {
      // Remove `zingchart.` from name
      let members = name.split('.');
      // Methods executed directly on zingchart object
      if (members.length === 2) {
        toExpose[`${members[1]}`] = () => {
          return zingchart[members[1]]();
        };
      } else {
        toExpose[`${members[1]}.${members[2]}`] = args => {
          if (members[1] === 'maps') {
            // Does not require chart id
            return zingchart[members[1]][members[2]](args);
          } else {
            // Requires chart id in first arg
            return zingchart[members[1]][members[2]](chartId, args);
          }
        };
      }
    } else {
      toExpose[name] = args => {
        // Methods executed through `zingchart.exec()`
        return zingchart.exec(chartId, name, args);
      };
    }
  });
  // Pipe zingchart specific event listeners
  const attrs = useAttrs();
  Object.keys(attrs).forEach(attr => {
    let eventName = attr.slice(2).replace(/(?:^|\.?)([A-Z])/g, function (x,y){return '_' + y.toLowerCase()}).replace(/^_/, '');
    if (constants.EVENT_NAMES.includes(eventName)) {
      // Filter through the provided events list, then register it to zingchart.
      zingchart.bind(chartId, eventName, result => {
        attrs[attr](result);
      });
    }
  });
  defineExpose(toExpose);
</script>

<template>
  <div ref='chart' :data="chartData"></div>
</template>
