import echarts from 'echarts';


export const smoothedLine = (that, el, chartXData, chartYData) => {
    let chart = echarts.init(document.getElementById(el));
    let option = {
        xAxis: {
            type: 'category',
            data: chartXData
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: chartYData,
            type: 'line',
            smooth: true
        }]
    };
    chart.setOption(option);
}