<template>
  <div>
    <h3>A simple example with a line chart config</h3>
     <zingchart ref="chart" :config="chartConfig" />
<pre>
&lt;zingchart ref="chart" :config="chartConfig"/&gt;
</pre>
<pre>
chartConfig: {
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
      chartConfig: {
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