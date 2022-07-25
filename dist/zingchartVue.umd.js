(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zingchartVue"] = factory();
	else
		root["zingchartVue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (false) {}

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3183b948-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./ZingChart.vue?vue&type=template&id=c3629ee4&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"chart"})
}
var staticRenderFns = []


// CONCATENATED MODULE: ./ZingChart.vue?vue&type=template&id=c3629ee4&

// CONCATENATED MODULE: ./node_modules/zingchart-constants/events.js
/* harmony default export */ var events = ([
  'history_back',
  'history_forward',
  'destroy',
  'beforedestroy',
  'animation_step',
  'animation_start',
  'animation_end',
  'guide_mouseout',
  'guide_mousemove',
  'dataload',
  'dataparse',
  'modulesready',
  'dataready',
  'resize',
  'swipe',
  'mousewheel',
  'render',
  'complete',
  'load',
  'about_show',
  'about_hide',
  'error',
  'reload',
  'menu_item_click',
  'beforezoom',
  'node_mousedown',
  'node_mouseover',
  'node_mouseout',
  'node_mouseup',
  'plot_mouseout',
  'plot_mouseup',
  'node_click',
  'plot_click',
  'node_doubleclick',
  'plot_doubleclick',
  'gload',
  'gcomplete',
  'maps.zoom',
  'plot_add',
  'plot_remove',
  'modify',
  'plot_modify',
  'node_set',
  'node_add',
  'node_remove',
  'setdata',
  'legend_minimize',
  'legend_hide',
  'legend_maximize',
  'legend_show',
  'source_show',
  'source_hide',
  'dataexport',
  'legend_mouseover',
  'legend_mouseout',
  'legend_item_click',
  'legend_marker_click',
  'shape_mouseover',
  'shape_mousedown',
  'shape_mouseout',
  'shape_mouseup',
  'shape_mousemove',
  'shape_click',
  'shape_dblclick',
  'label_mouseover',
  'label_mousedown',
  'label_mouseout',
  'label_mouseup',
  'label_mousemove',
  'label_click',
  'label_dblclick',
  'feed_clear',
  'feed_step',
  'feed_interval_modify',
  'feed_stop',
  'feed_start',
  'zoom',
  'postzoom',
  'zingchart.plugins.dragging.update',
  'zingchart.plugins.dragging.complete',
  'heatmap.mousemove',
  'zingchart.plugins.selection-tool.mouseup',
  'zingchart.plugins.selection-tool.selection',
  'zingchart.plugins.selection-tool.beforeselection'
]);
// CONCATENATED MODULE: ./node_modules/zingchart-constants/methods.js
/* harmony default export */ var methods = ([
  'zingchart.exec',
  'goback',
  'goforward',
  'showmenu',
  'hidemenu',
  'destroy',
  'getrender',
  'clear',
  'reload',
  'load',
  'enable',
  'disable',
  'closemodal',
  'openmodal',
  'print',
  'fullscreen',
  'exitfullscreen',
  'resize',
  'plothide',
  'showguide',
  'hideguide',
  'showtooltip',
  'hidetooltip',
  'clicknode',
  'locktooltip',
  'unlocktooltip',
  'showhoverstate',
  'showplot',
  'togglesource',
  'togglebugreport',
  'toggleabout',
  'toggleplot',
  'getcharttype',
  'getversion',
  'get3dview',
  'set3dview',
  'getpage',
  'setpage',
  'unbinddocument',
  'addmenuitem',
  'resetguide',
  'setguide',
  'zingchart.render',
  'zingchart.maps.getMapByGraphIndex',
  'zingchart.maps.zoomIn',
  'zingchart.maps.zoomOut',
  'zingchart.maps.destroyMap',
  'zingchart.maps.setView',
  'zingchart.maps.viewAll',
  'zingchart.maps.zoomToItem',
  'zingchart.maps.zoomTo',
  'zingchart.maps.getInfo',
  'zingchart.maps.getItems',
  'zingchart.maps.getItemInfo',
  'zingchart.maps.XY',
  'zingchart.maps.getLonLat',
  'clearscroll',
  'getbubblesize',
  'getscaleinfo',
  'getobjectinfo',
  'getxyinfo',
  'update',
  'setcharttype',
  'addgraph',
  'addplot',
  'removeplot',
  'modify',
  'modifyplot',
  'setnodevalue',
  'setscalevalues',
  'addscalevalue',
  'removescalevalue',
  'addnode',
  'removenode',
  'setdata',
  'getseriesdata',
  'setseriesdata',
  'appendseriesdata',
  'getseriesvalues',
  'setseriesvalues',
  'appendseriesvalues',
  'togglelegend',
  'legendminimize',
  'legendmaximize',
  'legendscroll',
  'toggledimension',
  'getdata',
  'getoriginaljson',
  'getgraphlength',
  'getplotlength',
  'getscales',
  'getnodelength',
  'getnodevalue',
  'getplotvalues',
  'getimagedata',
  'exportimage',
  'saveasimage',
  'exportdata',
  'downloadCSV',
  'downloadXLS',
  'downloadRAW',
  'viewDataTable',
  'addobject',
  'removeobject',
  'updateobject',
  'repaintobjects',
  'getallobjects',
  'getobjectsbyclass',
  'getlabelinfo',
  'getshapeinfo',
  'setobjectsmode',
  'clearfeed',
  'getinterval',
  'setinterval',
  'startfeed',
  'stopfeed',
  'clearselection',
  'getselection',
  'setselection',
  'select',
  'deselect',
  'getzoom',
  'pan',
  'zoomin',
  'zoomout',
  'zoomto',
  'zoomtovalues',
  'viewall',
  'removenote',
  'updatenote',
  'getnotes',
  'addnote',
  'addmarker',
  'updatemarker',
  'removemarker',
  'addrule',
  'removerule',
  'updaterule',
  'getrules',
  'bubblepack.setdata',
  'calendar_setvalues',
  'colorscale.setvalue',
  'colorscale.update',
  'colorscale.clear',
  'colorscale.getinfo',
  'heatmap.setdata',
  'zingchart.maps.loadGeoJSON',
  'zingchart.maps.loadTopoJSON',
  'resetscales',
  'resetsetseriesdata',
  'getscaleminmax',
  'tree.addnode',
  'tree.removenode',
  'tree.getdata',
  'tree.set',
  'tree.addlink',
  'tree.removelink',
  'treemap.updateNode',
  'treemap.addNode',
  'treemap.removeNode',
  'zingchart.bind',
  'zingchart.unbind'
]);

// CONCATENATED MODULE: ./node_modules/zingchart-constants/markers.js
/* harmony default export */ var markers = ([
  'square',
  'parallelogram',
  'trapezoid',
  'circle',
  'diamond',
  'triangle',
  'ellipse',
  'star5',
  'star6',
  'star7',
  'star8',
  'rpoly5',
  'rpoly6',
  'rpoly7',
  'rpoly8',
  'gear5',
  'gear6',
  'gear7',
  'gear8',
  'pie',
]);

// CONCATENATED MODULE: ./node_modules/zingchart-constants/misc.js
/* harmony default export */ var misc = ({
  DEFAULT_WIDTH: '100%',
  DEFAULT_HEIGHT: 480,
  DEFAULT_OUTPUT: 'svg',
});

// CONCATENATED MODULE: ./node_modules/zingchart-constants/main.js





const {DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_OUTPUT} = misc;

/* harmony default export */ var main = ({
  EVENT_NAMES: events,
  METHOD_NAMES: methods,
  MARKER_NAMES: markers,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_OUTPUT,
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./ZingChart.vue?vue&type=script&lang=js&

// Import the zingchart library to be used globally (MUST BE DONE EXPLICITLY BEFORE THIS COMPONENT)
// import zingchart from 'zingchart/es6';

// import constants that define methods, events and default rendering parameters

const { DEFAULT_WIDTH: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_WIDTH, DEFAULT_HEIGHT: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_HEIGHT, DEFAULT_OUTPUT: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_OUTPUT, EVENT_NAMES, METHOD_NAMES } = main;


// One time setup globally to handle all zingchart-vue objects in the app space.
if (!window.ZCVUE) {
  window.ZCVUE = {
    instances: {},
    count: 0
  };
}

/* harmony default export */ var lib_vue_loader_options_ZingChartvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true,
    },
    height: {
      type: [String, Number],
      default: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_HEIGHT,
    },
    id: {
      type: [String],
      required: false,
    },
    output: {
      type: String,
      default: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_OUTPUT,
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
      default: lib_vue_loader_options_ZingChartvue_type_script_lang_js_DEFAULT_WIDTH,
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
        if (name.includes('zingchart.')) {
          let members = name.split('.');
          // Remove `zingchart.` from name
          this[`${members[1]}.${members[2]}`] = args => {
            // Methods executed directly on zingchart object
            if (members.length === 2) {
              return window.zingchart[members[1]]();
            } else {
              if (members[1] === 'maps') {
                // Does not require chart id
                return window.zingchart[members[1]][members[2]](args);
              } else {
                // Requires chart id in first arg
                return window.zingchart[members[1]][members[2]](this.chartId, args);
              }
            }
          };
        } else {
          this[name] = args => {
            // Methods executed through `zingchart.exec()`
            return window.zingchart.exec(this.chartId, name, args);
          };
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
});

// CONCATENATED MODULE: ./ZingChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var ZingChartvue_type_script_lang_js_ = (lib_vue_loader_options_ZingChartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./ZingChart.vue





/* normalize component */

var component = normalizeComponent(
  ZingChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ZingChart = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (ZingChart);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=zingchartVue.umd.js.map