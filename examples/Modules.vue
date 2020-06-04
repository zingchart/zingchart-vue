<template>
  <div>
    <h3>A maps module demo.</h3>
     <zingchart ref="chart" :data="chartData" height="700px" />
  </div>
</template>

<script>
import 'zingchart/es6';
// import chart modules used on that page
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';


export default {
  data() {
    return {
      chartData: {
        shapes: [
          {
            type: 'zingchart.maps',
            options: {
              name: 'usa',
              ignore: ['AK','HI']
            }
          }
        ]
      }
    }
  }
}
</script>