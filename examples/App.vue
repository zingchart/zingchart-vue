<template>
  <div>
    <h1>vue-zingchart playground</h1>
    <p>A simple example of binding data, mutations with methods, and listening to events</p>
    <header>
      <a href="#" class="button" @click="activeDemo = 'simple'">Simple</a>
      <a href="#" class="button" @click="activeDemo = 'dynamic'">Dynamic Config</a>
      <a href="#" class="button" @click="activeDemo = 'methods'">Methods</a>
      <a href="#" class="button" @click="activeDemo = 'events'">Events</a>
      <a href="#" class="button" @click="activeDemo = 'license'">License</a>
      <a href="#" class="button" @click="activeDemo = 'modules'">Modules</a>
    </header>
    <simple-view v-show="activeDemo === 'simple'"/>
    <dynamic-view v-show="activeDemo === 'dynamic'"/>
    <methods-view v-show="activeDemo === 'methods'"/>
    <events-view v-show="activeDemo === 'events'"/>
    <license-view v-show="activeDemo === 'license'"/>
    <modules-view v-show="activeDemo === 'modules'"/>
  </div>
</template>

<script>
import Vue from 'vue';
import zingchartVue from '../ZingChart.vue';
import MethodsView from './Methods.vue';
import EventsView from './Events.vue';
import DynamicView from './Dynamic.vue';
import SimpleView from './Simple.vue';
import LicenseView from './License.vue';
import ModulesView from './Modules.vue';

// register just the component and load ZingChart at the component level
// OR loa Zingchart at the global level if many pages use charts.
Vue.component('zingchart', zingchartVue);

export default {
  components: {
    SimpleView,
    DynamicView,
    MethodsView,
    EventsView,
    LicenseView,
    ModulesView,
  },
  data() {
    return {
      activeDemo: 'simple',
      nodeCount: 10,
    };
  },
};

</script>