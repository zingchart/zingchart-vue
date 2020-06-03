module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ef7657-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./ZingChart.vue?vue&type=template&id=8c548746&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"chart"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ZingChart.vue?vue&type=template&id=8c548746&

// CONCATENATED MODULE: ./node_modules/zingchart-constants/events.js
/* harmony default export */ var events = ([
  'about_hide',
  'about_show',
  'animation_end',
  'animation_start',
  'animation_step',
  'beforedestroy',
  'bugreport_hide',
  'bugreport_show',
  'click',
  'complete',
  'data_export',
  'dataexport',
  'dataload',
  'dataparse',
  'dataready',
  'destroy',
  'dimension_change',
  'error',
  'feed_clear',
  'feed_interval_modify',
  'feed_start',
  'feed_stop',
  'gcomplete',
  'gload',
  'gparse',
  'guide_mousemove',
  'guide_mouseout',
  'guide_mouseout',
  'heatmap.mousemove',
  'history_back',
  'history_forward',
  'image_save',
  'label_click',
  'label_mousedown',
  'label_mouseout',
  'label_mouseover',
  'label_mouseup',
  'legend_hide',
  'legend_item_click',
  'legend_item_mousemove',
  'legend_item_mouseout',
  'legend_item_mouseout',
  'legend_item_mouseover',
  'legend_marker_click',
  'legend_marker_click',
  'legend_maximize',
  'legend_minimize',
  'legend_minimize_click',
  'legend_pagination_click',
  'legend_show',
  'legend-drag_mousedown',
  'lens_hide',
  'lens_show',
  'load',
  'maps.zoom',
  'menu_item_click',
  'modify',
  'modulesready',
  'mousewheel',
  'node_add',
  'node_click',
  'node_deselect',
  'node_doubleclick',
  'node_mousedown',
  'node_mouseout',
  'node_mouseover',
  'node_mouseup',
  'node_remove',
  'node_select',
  'node_set',
  'objectsinit',
  'objectsready',
  'overscroll',
  'plot_add',
  'plot_click',
  'plot_deselect',
  'plot_doubleclick',
  'plot_hide',
  'plot_modify',
  'plot_mouseout',
  'plot_mouseover',
  'plot_remove',
  'plot_select',
  'plot_show',
  'postzoom',
  'print',
  'reload',
  'render',
  'resize',
  'setdata',
  'shape_click',
  'shape_mousedown',
  'shape_mouseout',
  'shape_mouseover',
  'shape_mouseup',
  'source_hide',
  'source_show',
  'swipe',
  'touchemove',
  'touchend',
  'touchstart',
  'zingchart.plugins.selection-tool.mouseup',
  'zingchart.plugins.selection-tool.selection',
  'zoom'
]);

// CONCATENATED MODULE: ./node_modules/zingchart-constants/methods.js
/* harmony default export */ var methods = ([
  'addgraph',
  'addmenuitem',
  'addnode',
  'addnote',
  'addobject',
  'addplot',
  'addrule',
  'addscalevalue',
  'appendseriesdata',
  'appendseriesvalues',
  'clearfeed',
  'clearscroll',
  'clearselection',
  'clicknode',
  'clicknode',
  'closemodal',
  'closemodal',
  'destroy/zcdestroy',
  'disable',
  'downloadCSV',
  'downloadRAW',
  'downloadXLS',
  'exitfullscreen',
  'exportdata',
  'exportimage',
  'fullscreen',
  'get3dview',
  'getbubblesize',
  'getcharttype',
  'getdata',
  'getgraphlength',
  'getimagedata',
  'getinterval',
  'getnodelength',
  'getnodevalue',
  'getobjectinfo',
  'getoriginaljson',
  'getpage',
  'getplotlength',
  'getplotvalues',
  'getrender',
  'getrules',
  'getscaleinfo',
  'getscales',
  'getselection',
  'getseriesdata',
  'getseriesdata',
  'getseriesvalues',
  'getversion',
  'getxyinfo',
  'goback',
  'goforward',
  'hideguide',
  'hidemenu',
  'hideplot/plothide',
  'hidetooltip',
  'legendmaximize',
  'legendminimize',
  'legendscroll',
  'load',
  'loadstorage',
  'locktooltip',
  'mapdata',
  'mapdata',
  'modify',
  'modifyplot',
  'openmodal',
  'print',
  'reload',
  'removegraph',
  'removenode',
  'removenote',
  'removeobject',
  'removeplot',
  'removerule',
  'removescalevalue',
  'repaintobjects',
  'resize',
  'saveasimage',
  'set3dview',
  'setcharttype',
  'setdata',
  'setguide',
  'setinterval',
  'setmode',
  'setnodevalue',
  'setpage',
  'setscalevalues',
  'setselection',
  'setseriesdata',
  'setseriesvalues',
  'showhoverstate',
  'showmenu',
  'showplot/plotshow',
  'showtooltip',
  'startfeed',
  'stopfeed',
  'togglebugreport',
  'toggledimension',
  'togglelegend',
  'toggleplot',
  'togglesource',
  'unbinddocument',
  'unlocktooltip',
  'update',
  'updatenote',
  'updateobject',
  'updaterule',
  'viewDataTable',
  'zoomin',
  'zoomout',
  'zoomto',
  'zoomtovalues'
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
//
//
//
//

// Import the zingchart library to be used globally (MUST BE DONE EXPLICITLY BEFORE THIS COMPONENT)
// import zingchart from 'zingchart/es6';

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
    }
  },
  data() {
    return {
      chartId: null,
      instance: null,
      EVENT_NAMES,
      METHOD_NAMES,
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
      this.$el.style.width = this.$props.width;
      this.$el.style.height = this.$props.height;
      // Set the id for zingchart to render to
      if (this.$props.id) {
        this.chartId = this.$props.id;
      } else {
        this.chartId = 'zingchart-vue-' + window.ZCVUE.count++;
      }
      this.$refs.chart.setAttribute('id', this.chartId);

      const renderObject = {
        id: this.chartId,
        data: this.chartData,
        height: this.$props.height,
        width: this.$props.width,
        output: this.$props.output,
      };

      if(this.$props.theme) {
        renderObject.defaults = this.$props.theme;
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
      window.zingchart.render(renderObject);

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
      window.zingchart.exec(this.chartId, 'setdata', {
        data: this.chartData,
      });
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

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
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
//# sourceMappingURL=zingchartVue.common.js.map