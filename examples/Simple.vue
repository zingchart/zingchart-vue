<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }


</style>

<template>
  <div>
    <h1>
      ZingChart Height Bug
    </h1>
    
    
    <div style="height: 800px;">
      <zingchart :data="chartData" :height="'100%'" :width="hundred" ref="myChart" ></zingchart>
    </div>
  
    
  </div>
</template>

<script>

export default {

  data () {
    return {
      chartData: {},
      hundred: '100%',
    }
  },
  mounted() {
    this.test();
  },
  methods: {
    eventTrigger() {
      alert('hello!');
    },
    test() {
      let bgColor = '#004280';
      let bordercolor = '#00AEEF';

      let g1_summary = {
        backgroundColor: bgColor,
        type: null,

        plotarea: {
          border: `1px solid ${bordercolor}`,
          margin: '10 25 10 25'
        },

        height: '300px',
        width: '100%',
        x: '0%',
        y: '0%',

        labels: [
          {
            text: 'Transactions',
            align: 'center',
            fontColor: '#FFDA00',
            fontSize: 35,
            width: '33%',
            x: '0%',
            y: '20%'
          },
          {
            text: '###',
            align: 'center',
            fontColor: '#FFF',
            fontSize: 11,
            fontWeight: 'normal',
            width: '33%',
            x: '0%',
            y: '60%'
          },
          {
            borderRight: `1px solid ${bordercolor}`,
            height: '50%',
            x: '33%',
            y: '25%'
          },
          {
            text: 'Licenses',
            align: 'center',
            fontColor: '#FFDA00',
            fontSize: 35,
            width: '33%',
            x: '33%',
            y: '20%'
          },
          {
            text: '###',
            align: 'center',
            fontColor: '#FFF',
            fontSize: 11,
            fontWeight: 'normal',
            width: '33%',
            x: '33%',
            y: '60%'
          },
          {
            borderRight: `1px solid ${bordercolor}`,
            height: '50%',
            x: '66%',
            y: '25%'
          },
          {
            text: 'Customers',
            align: 'center',
            fontColor: '#FFDA00',
            fontSize: 35,
            width: '33%',
            x: '66%',
            y: '20%'
          },
          {
            text: '###',
            align: 'center',
            fontColor: '#FFF',
            fontSize: 11,
            fontWeight: 'normal',
            width: '33%',
            x: '66%',
            y: '60%'
          },
        ]
      };

      let g2_license_overview = {
        backgroundColor: bgColor,
        type: 'pie',

        plotarea: {
          border: '1px solid #00AEEF',
          margin: '10 25 10 25'
        },

        height: '750px',
        width: '100%',
        x: '0%',
        y: '300px',

        title: {
          text: 'Licenses',
          fontSize: 16,
          fontColor: '#FFF',
          align: 'left',
          paddingLeft: 20
        },
        
        legend: {},
        
        guide:{},

        tooltip: {
          text: '%node-value%'
        },

        plot: {
          'barWidth': '70%',
          valueBox: {
            text: '%node-value%',
            fontSize: 10,
            fontWeight: 'normal',
            color: '#FFF'
          }
        },

        scaleX: {
          values: ['professional degree', 'doctorat degree', 'masters degree', '4-year college degree', '2-year college degree', 'some college', 'high school/GED', 'less than high school'],
          lineWidth: 0,
          itemsOverlap: true,
          item: {
            'fontColor': '#FFF',
            textAlign: 'center',
            'fontWeight': 'normal',
            'fontSize': 10,
            'offsetX': -5
          },
          tick: {
            visible: false
          },
          guide: {
            visible: false
          }

        },
        scaleY: {
          minValue: 0,
          maxValue: 25,
          'lineWidth': 0,
          item: {
            visible: false
          },
          guide: {
            visible: false
          },
          tick: {
            visible: false
          }
        },

        series: [{
          values: [2, 2, 9, 25, 14, 25, 21, 2],
          backgroundColor: '#FFA300'
        }]
      };


      let chartConfig = {
        graphset: [g1_summary, g2_license_overview],
      };


      this.chartData = chartConfig;
    }
  }
}
</script>
