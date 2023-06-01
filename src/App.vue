<script setup>
  import {onMounted, ref} from 'vue';

  import MethodsView from './views/Methods.vue';
  import EventsView from './views/Events.vue';
  import DynamicView from './views/Dynamic.vue';
  import SimpleView from './views/Simple.vue';
  import LicenseView from './views/License.vue';
  import ModulesView from './views/Modules.vue';

  let activeDemo = ref('simple');
</script>

<template>
  <div>
    <h1>zingchart-vue playground</h1>
    <p>A simple example of binding data, mutations with methods, and listening to events</p>
    <header>
      <a href="#" class="button" @click="activeDemo = 'simple'">Simple</a>
      <a href="#" class="button" @click="activeDemo = 'dynamic'">Dynamic Config</a>
      <a href="#" class="button" @click="activeDemo = 'methods'">Methods</a>
      <a href="#" class="button" @click="activeDemo = 'events'">Events</a>
      <a href="#" class="button" @click="activeDemo = 'license'">License</a>
      <a href="#" class="button" @click="activeDemo = 'modules'">Modules</a>
    </header>
    <SimpleView v-show="activeDemo === 'simple'" />
    <DynamicView v-show="activeDemo === 'dynamic'" />
    <MethodsView v-show="activeDemo === 'methods'" />
    <EventsView v-show="activeDemo === 'events'" />
    <LicenseView v-show="activeDemo === 'license'" />
    <ModulesView v-show="activeDemo === 'modules'" />
  </div>
</template>