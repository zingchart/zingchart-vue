# zingchart-vue

![](https://img.shields.io/npm/v/zingchart-vue)
![](https://img.shields.io/npm/l/zingchart-vue)
![](https://img.shields.io/npm/dw/zingchart-vue)


![](https://github.com/zingchart/zingchart-vue/workflows/Build/badge.svg?branch=master)
![](https://github.com/zingchart/zingchart-vue/workflows/Test/badge.svg?branch=master)
![](https://img.shields.io/david/zingchart/zingchart-vue)
![](https://img.shields.io/david/dev/zingchart/zingchart-vue)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Quickstart guide

Quickly add charts to your Vue application with our ZingChart component

This guide assumes some basic working knowledge of Vue.

## 1. Install

Install the `zingchart-vue` package via npm

`npm install zingchart-vue`

## 2. Include the `zinchart` package in your project

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
import zingchartVue from 'zingchart-vue';
```

### Globally

In your main app file, add the following lines of code:

```js
import Vue from 'vue';
// import the es6 version
import 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

Vue.component('zingchart', zingchartVue)
```

This will register the zingchart component globally throughout your application. While the easiest installation option, this will load ZingChart immediately on your user's first load of the application - regardless if a chart is on the first page or not. We reccomend this approach if ZingChart is used heavily across multiple pages.


### Locally per component

In each component where ZingChart is being used, include the following in your component's configuration:

```js
import zingchart from 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

{
    ...
    components: {
        zingchart: zingchartVue,
        ...
    }
}
```

**Note:** We recommend this approach if ZingChart is only included in a few, un-related pages across your application. 

## ZingChart Modules

ZingChart comes bundled with your common chart types such as line, column, pie, and scatter. For additional chart types, you will need to import the additional module file.

For example, adding a depth chart to your vue component will require an additional import. Note, you must import from the `modules-es6` directory in the zingchart package.

```js
import zingchart from 'zingchart/es6';
// explicitly import the module
import 'zingchart/modules-es6/zingchart-depth.min.js';
...
import zingchartVue from 'zingchart-vue';
}
```

Here is a full .vue example for loading a map:

```
<template>
  <div style="height:200px">
    <zingchart :height="'100%'" ref="myChart" 
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
	  }" >
    </zingchart>
  </div>
</template>

<script>
import zingchart from 'zingchart/es6';
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

import zingchartVue from 'zingchart-vue';

export default {
  components: {
    zingchart: zingchartVue,
  },
}
</script>
```

## Usage

The `zingchart-vue` component can be included into template as an element. Below is a simple example of a line chart:

```html
<zingchart :data="chartData"></zingchart>
```

```js
...
new Vue({
    ...
    data() {
        return {
            chartData: {
                type: 'line',
                series: [{
                    values: [4,5,3,3,4,4]
                }]
            }
        }
    }
    ...
})
```

## Parameters

The properties, or parameters, you can pass to the `<zingchart>` tag itself.

### `data` [object]

The configuration object to pass to the chart. This can be a `graphset` object (multi-chart shared configuration) or a standard single chart configuration.

```html
<zingchart :data="myData" :series="mySeries"></zingchart>
```

```js
{
    data() {
        return {
            myData: {
                type: 'line',
                title: {
                    text: 'Hello World',
                },
            },
            mySeries: [
                { values: [1,2,4,5,6] }
            ]
        }
    }
}
```

### `series` [array] (optional)
Accepts an array of series objects, and overrides a series if it was supplied into the config object. Varries by chart type used - Refer to the ZingChart documentation for more details.

### `id` [string] (optional)
The id for the DOM element for ZingChart to attach to. If no id is specified, the id will be autogenerated in the form of zingchart-auto-#


### `output` [string] (optional)

The render type of the chart. **The default is `svg`** but you can also pass the string `canvas` to render the charts in canvas. 

### width [string or number] (optional)
The width of the chart. Defaults to 100%

### height [string or number] (optional)
The height of the chart. Defaults to 480px.

### theme [object] (optional)
The theme or 'defaults' object defined by ZingChart. More information available here: https://www.zingchart.com/docs/api/themes

## Events
All zingchart events are readily available on the component to listen to. For example, to listen for the 'complete' event when the chart is finished rendering:

```html
    <zingchart :data="myData" @complete="chartCompleted"/>
```

```js
{
    ...
    methods: {
        chartCompleted(result) {
            console.log(`The chart ${result.id} finished rendering`);
        }
    }
}
```

For a list of all the events that you can listen to, refer to the complete documentation on https://www.zingchart.com/docs/events


### Methods
All zingchart methods are readily available on the component's instance to call. For example, to add a new plot node to the chart:

```html
    <zingchart :data="myData" ref="chart"/>
```

```js
{
    ...
    methods: {
        myCustomAddNode() {
            this.$refs.chart.addnode({
                value: 55,
            });
        }
    }
}
```

For a list of all the methods that you can call and the parameters each method can take, refer to the complete documentation on https://www.zingchart.com/docs/methods

### `ZC` and `zingchart` Global Objects

If you need access to the `window.ZC` and `window.zingchart` objects we have
exported those as well. Here is how to import them.

```javascript
import zingchart from 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

// then you can define global zingchart variables (typically for performance optimization)
zingchart.DEV.SKIPPROGRESS = 1; // skips the intro loading screen (most likely invisible to human eye anyway)
zingchart.DEV.RESOURCES = 0; // indicates to the lib that there are no external resources to load (images)
zingchart.DEV.KEEPSOURCE = 0; // prevents lib from storing the original data package
zingchart.DEV.COPYDATA = 0; // prevents lib from creating a copy of the data package instead of working with the provided one (which can be altered)

export default {...}
```

## Hello World and Examples

This repository contains a sample Vue application to give you an easy way to see the component in action

```
$ npm run dev 
```
