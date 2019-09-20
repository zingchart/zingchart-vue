
<template>
	<div> 
		<zingchart 
			ref="chart" 
			:config="chartConfig" 
			@complete="chartDone"
			@node_mouseover="nodeInfo"
			/>

		<h2>Example methods</h2>
		<button @click="addPlot">Add a plot</button>
		<button @click="addNodes">Add a node to each plot</button>

		<h2>Output from events</h2>
		<h3>Events bound:</h3>
		<ul>
			<li v-for="item in listOfEventListeners">{{item}}</li>
		</ul>
		<textarea ref="output" cols="50" rows="10"></textarea>
	</div>
</template>

<script>

import ZingChart from  '../ZingChart.vue';
export default {
	components: {
		'zingchart': ZingChart,
	},
	data() {
		return {
			nodeCount: 10,
			chartConfig: {
				type:'line',
				series: [{
					values: randomData(10)
				}]
			},
			listOfEventListeners: [],
		};
	},
	mounted() {
		this.listOfEventListeners = Object.keys(this.$refs.chart.$listeners);
	},
	methods: {
		// Add a new plot
		addPlot() {
			this.$refs.chart.addplot({
				data: {
					values: randomData(this.nodeCount),
					text: "My new plot"
				}
			});
		},
		addNodes() {
			const newValues = this.$refs.chart.getseriesvalues().map((series, index) => {
				series.push(Math.floor(Math.random() * 10));
				return series;
			});
			this.nodeCount++;
			this.$refs.chart.setseriesvalues({
				values: newValues,
			});
		},
		chartDone() {
			this.$refs.output.innerHTML = `Event "Complete" - The chart is rendered\n`;
		},
		nodeInfo(result) {
			// Strip the event object to stringify properly 
			delete result.ev;
			this.$refs.output.innerHTML = `Node Info \n` + JSON.stringify(result) + '\n';
		},
	
	}
}

// Random numbers from 0-100
function randomData(count) {
	return Array.from(new Array(count)).map(() => {
		return Math.floor(Math.random() * 10);
	});
}
</script>