<template>
  <div>
    <h3>A graphset example with ZC and zingchart objects.</h3>
     <zingchart ref="chart" :data="chartData" />
<pre>
&lt;zingchart ref="chart" :data="chartData"/&gt;
</pre>
<pre>
chartData: {
  type: "line",
  series: [
    {
      values: [6,4,3,4,6,6,4]
    }
  ]
},
</pre>
  </div>
</template>

<script>
import {ZC, zingchart} from '../ZingChart.vue';

// zingchart object for performance flags
zingchart.DEV.KEEPSOURCE = 0; // prevents lib from storing the original data package
zingchart.DEV.COPYDATA = 0; // prevents lib from creating a copy of the data package 

// ZC object for license key
ZC.LICENSEKEY = ['abcdefghijklmnopqrstuvwxy'];


export default {
  data() {
    return {
      chartData: {
        /* Graphset array */
        graphset: [
          { /* Object containing chart data */
            type: 'line',
            /* Size your chart using height/width attributes */
            height: '200px',
            width: '100%',
            /* Position your chart using x/y attributes */
            x: '5%',
            y: '5%',
            series:[
              {
                values:[76,23,15,85,13]
              },
              {
                values:[36,53,65,25,45]
              }
            ]
          },
          { /* Object containing chart data */
            type: 'funnel',
            height: '55%',
            width: '50%',
            x: '5%',
            y: '200px',
            series:[
              {values:[30]},
              {values:[15]},
              {values:[5]},
              {values:[3]}
            ]
          },
          {
            type: 'pie',
            height: '55%',
            width: '50%',
            x: '50%',
            y: '200px',
            series:[
              {values:[15]},
              {values:[30]},
              {values:[34]}
            ]
          }
        ]
      },
    }
  }
}
</script>