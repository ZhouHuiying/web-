<template>
	<div class="test">
		<div class="button-group">
			<div class="button" v-for="(item, index) in buttonGroupList" :key="index" @click="handleClickTime(item.value)">{{item.label}}</div>
		</div>
		<div class="charts-wrapper">
			<div class="charts" id="cpuCharts"></div>
			<div class="charts" id="diskCharts"></div>
			<div class="charts" id="networkCharts"></div>
		</div>
	</div>
</template>

<script>
import {smoothedLine} from './components/echarts'

export default {
	data() {
		return {
			buttonGroupList: [
				{label: '一小时前', value: 60},
				{label: '3小时前', value: 60 * 3},
				{label: '6小时前', value: 60 * 6},
				{label: '12小时前', value: 60 * 12},
			],
			nowButton: 0,
		}
	},
	mounted() {
		this.handleClickTime(60)
	},
	methods: {
		smoothedLine,
		cpuRender(chartXData, chartYData) {
			this.smoothedLine(this, 'cpuCharts', chartXData, chartYData)
		},
		diskRender(chartXData, chartYData) {
			this.smoothedLine(this, 'diskCharts', chartXData, chartYData)
		},
		networkRender(chartXData, chartYData) {
			this.smoothedLine(this, 'networkCharts', chartXData, chartYData)
		},
		handleClickTime(value) {
			if (value === this.nowButton) return
			let nowTimeStamp = new Date().getTime()
			let startTimeStamp = nowTimeStamp - value * 60 * 1000
			let temp = (nowTimeStamp - startTimeStamp) / 99
			let chartXData = [],
				chartYDataCpu = [],
				chartYDataDisk = [],
				chartYDataNetWork = []
			for (let i = 0; i < 100; i++) {
				let cpuRandom = Math.ceil(Math.random() * 30) + 10
				let diskRandom = Math.ceil(Math.random() * 10) + 30
				let networkRandom = Math.ceil(Math.random() * 20) + 40
				chartXData.push(this.timeStamp2str(startTimeStamp + temp * i))
				chartYDataCpu.push(cpuRandom)
				chartYDataDisk.push(diskRandom)
				chartYDataNetWork.push(networkRandom)
			}
			this.cpuRender(chartXData, chartYDataCpu)
			this.diskRender(chartXData, chartYDataDisk)
			this.networkRender(chartXData, chartYDataNetWork)
		},

		timeStamp2str(timestamp) {
			let timeData = new Date(timestamp)
			let hour = timeData.getHours() > 9 ? timeData.getHours() : '0' + timeData.getHours()
			let min = timeData.getMinutes() > 9 ? timeData.getMinutes() : '0' + timeData.getMinutes()
			let second = timeData.getSeconds() > 9 ? timeData.getSeconds() : '0' + timeData.getSeconds()
			return `${hour}:${min}:${second}`
		}
	},
}
</script>

<style lang="scss" scoped>
.test {
	height: 100vh;
	background-color: #f1f1f1;
	padding: 20px;
}
.button-group {
	display: flex;
	justify-content: center;
	.button {
		margin-right: 20px;
		border: 1px solid black;
		cursor: pointer;
	}
}
.charts-wrapper {
	padding: 40px;
	display: flex;
	height: 400px;
}
.charts {
	flex: 1;
	height: 100%;
}
</style>