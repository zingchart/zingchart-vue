![](https://img.shields.io/npm/v/zingchart-vue)
![](https://img.shields.io/npm/l/zingchart-vue)
![](https://img.shields.io/npm/dw/zingchart-vue)


![](https://github.com/zingchart/zingchart-vue/workflows/Build/badge.svg?branch=master)
![](https://github.com/zingchart/zingchart-vue/workflows/Test/badge.svg?branch=master)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![](https://d2ddoduugvun08.cloudfront.net/items/2u3R031j3O3M2A3c3V0w/Screen%20Recording%202020-06-04%20at%2002.24%20PM.gif?X-CloudApp-Visitor-Id=3179966)


## Quickstart guide

Quickly add charts to your Vue application with our ZingChart component.

This guide assumes some basic working knowledge of Vue.

## 1. Install


Install the `zingchart` package via npm:
```
npm install zingchart
```

Install the `zingchart-vue` package via npm:
```
npm install zingchart-vue
```

## 2. Include the `zingchart` package in your project

The `zingchart` package is a **DIRECT** dependency of `zingchart-vue` but you can also update this package outside of this component. Meaning the wrapper is no longer tied to a ZingChart library version, but just the component itself.

You can import the library like so:

```javascript
// import the es6 version
import 'zingchart/es6';
```

## 3. Include the component in your project 

You can either include the `zingchart-vue` component to your project globally or locally per component. **Import the component AFTER ZingChart since it is a DIRECT dependency.**

```js
// import the es6 version
import 'zingchart/es6';
// import the component AFTER ZingChart since it is a DIRECT dependency
import ZingChartVue from 'zingchart-vue';
```

### Globally

In your main app file, add the following lines of code:

```js
import { createApp } from 'vue';
import App from './App.vue';
import ZingChartVue from './ZingChart.vue';

const app = createApp(App);
app.component('ZingChartVue', ZingChartVue);
app.mount('#app');
```

This will register the zingchart component globally throughout your application. While the easiest installation option, this will load ZingChart immediately on your user's first load of the application - regardless if a chart is on the first page or not. We recommend this approach if ZingChart is used heavily across multiple pages.



### Globally and locally

You can also register the `ZingChartVue` component globally and then import just `zingchart/es6` locally per each component that uses charts. 

```js
import { createApp } from 'vue';
import App from './App.vue';
import ZingChartVue from './ZingChart.vue';

const app = createApp(App);
// install globally to app
app.component('ZingChartVue', ZingChartVue);
app.mount('#app');
```

Then inside the component you import the `zingchart/zingchart-es6` library.

```js
import 'zingchart/es6';
```

### Locally per component

In each component where ZingChart is being used, include the following in your component's configuration:

```js
import 'zingchart/es6';
import ZingChartVue from 'zingchart-vue';
```

**Note:** We recommend this approach if ZingChart is only included in a few, un-related pages across your application. 

## ZingChart Modules

ZingChart comes bundled with your common chart types such as line, column, pie, and scatter. For additional chart types, you will need to import the additional module file.

For example, adding a depth chart to your vue component will require an additional import. Note, you must import from the `modules-es6` directory in the zingchart package.

```js
// explicitly import the module
import 'zingchart/modules-es6/zingchart-depth.min.js';

```

Here is a full .vue example for loading a map:

```
<script setup>
    // import library
    import ZingChartVue from 'zingchart-vue';

    // import chart modules used on that page
    import 'zingchart/modules-es6/zingchart-maps.min.js';
    import 'zingchart/modules-es6/zingchart-maps-usa.min.js';
</script>

<template>
    <ZingChartVue
        ref="myChart"
        :data="{
            shapes: [
            {
                type: 'zingchart.maps',
                options: {
                    name: 'usa',
                    ignore: ['AK','HI']
                }
            }
        ]
    }" />
</template>
```


### `zingchart` Global Objects

If you need access to the `zingchart` objects for licensing or development flags.

```javascript
import ZingChartVue from 'zingchart-vue';

// zingchart object for performance flags
zingchart.DEV.KEEPSOURCE = 0; // prevents lib from storing the original data package
zingchart.DEV.COPYDATA = 0; // prevents lib from creating a copy of the data package 

// ZC object for license key
zingchart.LICENSE = ['abcdefghijklmnopqrstuvwxy'];
```


## Usage

The `zingchart-vue` component can be included into template as an element. Below is a simple example of a line chart:

```html
<ZingChartVue :data="chartData" />
```

```js
<script setup>
    import { ref } from 'vue';
    import ZingChartVue from 'zingchart-vue';
    
    const chartData = ref({
        type: "line",
            series: [
            {
                values: [6,4,3,4,6,6,4]
            }
        ]
    });
</script>
```

## Parameters

The properties, or parameters, you can pass to the `<ZingChartVue>` tag itself.

### `data` [object]

The configuration object to pass to the chart. This can be a `graphset` object (multi-chart shared configuration) or a standard single chart configuration.

```html
<ZingChartVue :data="myData" :series="mySeries" />
```

```js
<script setup>
    import { ref } from 'vue';
    import ZingChartVue from '../ZingChart.vue';

    const myData = ref({
        type: 'line',
        title: {
            text: 'Hello World',
        },
    });
    
    const mySeries = ref([
        { values: [1,2,4,5,6] }
    ]);
}
</script>
```

### `series` [array] (optional)

Accepts an array of series objects, and overrides a series if it was supplied into the config object. Varries by chart type used - Refer to the ZingChart documentation for more details.

### `id` [string] (optional)

The id for the DOM element for ZingChart to attach to. If no id is specified, the id will be autogenerated in the form of zingchart-auto-#.

### `output` [string] (optional)

The render type of the chart. **The default is `svg`** but you can also pass the string `canvas` to render the charts in canvas. 

### `width` [string or number] (optional)

The width of the chart. Defaults to 100%.

### `height` [string or number] (optional)

The height of the chart. Defaults to 480px.

### `theme` [object] (optional)

The theme or 'defaults' object defined by ZingChart. More information available here: https://www.zingchart.com/docs/api/themes

### `modules` [string or array] (optional)
An option to add the name of modules being loaded, into ZingChart's render object. Necessary for certain modules including the 'scalableYAxis'.

### `forceRender` [string] (optional)
The addition of this property will force ZingChart to re-render on all configuration changes. This isn't optimally performant, but some ZingChart features will require a full re-render of the chart, rather than an internal data update change. Only use this option when necessary.


## Events

All zingchart events are readily available on the component to listen to. For example, to listen for the 'complete' event when the chart is finished rendering:

```html
    <ZingChartVue :data="myData" @complete="chartCompleted" />
```

```js
{
    function chartCompleted(result) {
        console.log(`The chart ${result.id} finished rendering`);
    }
}
```

For a list of all the events that you can listen to, refer to the complete documentation on https://www.zingchart.com/docs/api/events.
Note that the event names are translated to camel-case:
- complete => @complete
- node_mouseover => @nodeMouseover
- legend_marker_click => @legendMarkerClick


### Methods

All zingchart methods are readily available on the component's instance to call. For example, to add a new plot node to the chart:

```html
    <ZingChartVue ref="chart" :data="myData" />
```

```js
{
    const chart = ref();

    function myCustomAddNode() {
        chart.value.addnode({
            value: 55,
        });
    }

    function myCustomMapZoom() {
        // Example of usage when method name contains member (.) operator
        chart.value['zingchart.maps.viewAll']({
            value: 55,
        });
    }
}
```

For a list of all the methods that you can call and the parameters each method can take, refer to the complete documentation on https://www.zingchart.com/docs/api/methods


## Working Example

This repository contains a sample Vue application to give you an easy way to see the component in action

```
npm run dev 
```
