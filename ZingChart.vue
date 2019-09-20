<template>
  <div ref="chart"></div>
</template>
<script>
// Import the zingchart library to be used globally.
import "zingchart";
const ZC_DEFAULT_WIDTH = "100%";
const ZC_DEFAULT_HEIGHT = 480;

// One time setup globally to handle all vue objects in the app space.
if (!window.ZCVUE) {
  window.ZCVUE = {
    instances: {},
    count: 0
  };
}

export default {
  props: ["config", "height", "id", "series", "width"],
  data() {
    return {
      chartId: null,
      instance: null, // The zingchart instance object
      chartConfig: null,
      EVENT_NAMES: [
        "animation_end",
        "animation_start",
        "animation_step",
        "modify",
        "node_add",
        "node_remove",
        "plot_add",
        "plot_modify",
        "plot_remove",
        "reload",
        "setdata",
        "data_export",
        "image_save",
        "print",
        "feed_clear",
        "feed_interval_modify",
        "feed_start",
        "feed_stop",
        "beforedestroy",
        "click",
        "complete",
        "dataparse",
        "dataready",
        "destroy",
        "guide_mousemove",
        "load",
        "menu_item_click",
        "resize",
        "Graph Events",
        "gcomplete",
        "gload",
        "History Events",
        "history_back",
        "history_forward",
        "Interactive Events",
        "node_deselect",
        "node_select",
        "plot_deselect",
        "plot_select",
        "legend_item_click",
        "legend_marker_click",
        "node_click",
        "node_doubleclick",
        "node_mouseout",
        "node_mouseover",
        "node_set",
        "label_click",
        "label_mousedown",
        "label_mouseout",
        "label_mouseover",
        "label_mouseup",
        "legend_marker_click",
        "shape_click",
        "shape_mousedown",
        "shape_mouseout",
        "shape_mouseover",
        "shape_mouseup",
        "plot_add",
        "plot_click",
        "plot_doubleclick",
        "plot_modify",
        "plot_mouseout",
        "plot_mouseover",
        "plot_remove",
        "about_hide",
        "about_show",
        "bugreport_hide",
        "bugreport_show",
        "dimension_change",
        "legend_hide",
        "legend_maximize",
        "legend_minimize",
        "legend_show",
        "lens_hide",
        "lens_show",
        "plot_hide",
        "plot_show",
        "source_hide",
        "source_show"
      ],
      METHOD_NAMES: [
        "addnode",
        "addplot",
        "appendseriesdata",
        "appendseriesvalues",
        "getseriesdata",
        "getseriesvalues",
        "modifyplot",
        "removenode",
        "removeplot",
        "set3dview",
        "setnodevalue",
        "setseriesdata",
        "setseriesvalues",
        "exportdata",
        "getimagedata",
        "print",
        "saveasimage",
        "Feed",
        "clearfeed",
        "getinterval",
        "setinterval",
        "startfeed",
        "stopfeed",
        "getcharttype",
        "getdata",
        "getgraphlength",
        "getnodelength",
        "getnodevalue",
        "getobjectinfo",
        "getplotlength",
        "getplotvalues",
        "getrender",
        "getrules",
        "getscales",
        "getversion",
        "getxyinfo",
        "get3dview"
      ]
    };
  },
  destroyed() {
    window.zingchart.exec(this.chartId, "destroy");
  },
  mounted() {
    // Check the user's properties
    if (this.$props.config) {
      this.chartConfig = this.$props.config;
    } else {
      throw new Error("A config is required to render a chart");
    }

    // Set the id for zingchart to render to
    if (this.$props.id) {
      this.chartId = this.$props.id;
    } else {
      this.chartId = "zingchart-vue-" + window.ZCVUE.count++;
    }
    this.$refs.chart.setAttribute("id", this.chartId);

    // Override the user's config series object if provided. Just a shallow override (no deep merge)
    if (this.$props.series) {
      this.chartConfig["series"] = this.$props.series;
    }

    const renderObject = {
      id: this.chartId,
      data: this.chartConfig
    };

    // Chart Dimensions
    renderObject["width"] = this.chartWidth;
    renderObject["height"] = this.chartHeight;

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
  computed: {
    chartWidth() {
      return this.$props.width || ZC_DEFAULT_WIDTH;
    },
    chartHeight() {
      return this.$props.height || ZC_DEFAULT_HEIGHT;
    }
  },
  watch: {
    config: val => {
      window.zingchart.exec(this.chartId, "setdata", val);
    },
    height: () => {
      window.zingchart.exec(this.chartId, "resize", {
        height: this.chartHeight,
        width: this.chartWidth
      });
    },
    series: val => {
      window.zingchart.exec(this.chartId, "setseriesdata", {
        values: val
      });
    },
    width: () => {
      window.zingchart.exec(this.chartId, "resize", {
        height: this.chartHeight,
        width: this.chartWidth
      });
    }
  }
};
</script>