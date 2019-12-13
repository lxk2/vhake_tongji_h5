// import Highcharts from 'highcharts/highstock'
// import HighchartsMore from 'highcharts/highcharts-more'
// import HighchartsDrilldown from 'highcharts/modules/drilldown'
// import Highcharts3D from 'highcharts/highcharts-3d'
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts)
// Highcharts3D(Highcharts)
import echarts from 'echarts'
export default {
  // initChart () {
  //   this.chart = new Highcharts.Chart('container', {
  //     chart: {
  //       type: 'line'
  //     },
  //     title: {
  //       text: '平均访问量'
  //     },
  //     subtitle: {
  //       text: '数据来源: WorldClimate.com'
  //     },
  //     xAxis: {
  //       categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  //     },
  //     yAxis: {
  //       title: {
  //         text: '访问量'
  //       }
  //     },
  //     plotOptions: {
  //       line: {
  //         dataLabels: {
  //           // 开启数据标签
  //           enabled: true
  //         },
  //         // 关闭鼠标跟踪，对应的提示框、点击事件会失效
  //         enableMouseTracking: true
  //       }
  //     },
  //     series: [{
  //       name: 'PV',
  //       data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  //     }, {
  //       name: 'UV',
  //       data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  //     }]
  //   })
  // }
  initEchart () {
    this.chart = echarts.init(this.$refs.echart)
    let options = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['今日点击量', '昨日点击量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '今日点击量',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '昨日点击量',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }
    this.chart.setOption(options)
  }
}
