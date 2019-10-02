<template>
  <div>
    <h3>A simple example with a line chart config</h3>
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
export default {
  data() {
    return {
      chartData: {
        type: "line",
        series: [
          {
            values: [6,4,3,4,6,6,4]
          }
        ]
      },
    }
  }
}
</script>