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
    };
  },
};

</script>