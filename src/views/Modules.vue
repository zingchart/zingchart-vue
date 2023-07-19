
<script setup>
  import { ref } from 'vue';
  import 'zingchart/es6';
  import ZingChartVue from '../ZingChart.vue';
  // import chart modules used on that page
  import 'zingchart/modules-es6/zingchart-maps.min.js';
  import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

  const chartData = ref({
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK','HI']
        }
      }
    ]
  });
</script>

<template>
  <div>
    <h3>A maps module demo.</h3>
     <ZingChartVue ref="chart" :data="chartData" height="700px" />
     <pre>
      &lt;ZingChartVue ref="chart" :data="chartData"/&gt;
    </pre>
    <pre>
      // import chart modules used on that page
      import 'zingchart/modules-es6/zingchart-maps.min.js';
      import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

      const chartData = ref({
        shapes: [
          {
            type: 'zingchart.maps',
            options: {
              name: 'usa',
              ignore: ['AK','HI']
            }
          }
        ]
      });
    </pre>
  </div>
</template>
