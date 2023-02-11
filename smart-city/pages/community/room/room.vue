<template>
  <view class="content">
	  <u-divider color="#333">房间环境</u-divider>
    <!-- 从页面整洁度及代码可阅读性上来看，不再推荐使用原生canvas写法来调用uCharts -->
    <canvas canvasId="canvasLine" id="canvasLine" class="charts" @tap="tap($event,'canvasLine')"/>
	
	<u-divider color="#333">老人身体状况</u-divider>
	<view class="charts-box">
	  <qiun-data-charts type="pie" :chartData="chartsDataPie1"/>
	</view>
  </view>
</template>

<script>
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
var uChartsInstance = {};

//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';


export default {
  data() {
    return {
      cWidth:350,
      cHeight:300,
      pixelRatio:1,
	  chartsDataPie1:{},
    };
  },
  onLoad() {
  	this.cWidth=uni.upx2px(750);
  	this.cHeight=uni.upx2px(500);
  	this.getServerData();
  },
  onReady() {
    this.getServerData()
  },
  methods: {
    //模拟从服务器获取数据
    getServerData() {
      setTimeout(() => {
        // 需要自行拼接chartsData
        let chartsData=JSON.parse(JSON.stringify(demodata.Line))
		this.chartsDataPie1=JSON.parse(JSON.stringify(demodata.PieA))
        this.drawCharts("canvasLine",chartsData);
		// this.drawCharts1("canvasLine1",chartsData1);
      }, 500);
    },
    drawCharts(id,data){
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id]=new uCharts({
        type: 'line',
        context:ctx,//v2.0版本必须要传context
        fontSize:11,
        padding:[15,15,0,15],
        dataLabel:true,
        categories: data.categories,
        series: data.series,
        animation: true,
        width: this.cWidth,
        height: this.cHeight,
        extra: {
        	line:{
        		type: 'straight'
        	}
        }
      });
    },
	// drawCharts1(id,data){
	//   const ctx = uni.createCanvasContext(id, this);
	//   uChartsInstance[id]=new uCharts({
	//     type: 'pie',
	//     context:ctx,//v2.0版本必须要传context
	//     fontSize:11,
	//     padding:[15,15,0,15],
	//     dataLabel:true,
	//     categories: data.categories,
	//     series: data.series,
	//     animation: true,
	//     width: this.cWidth,
	//     height: this.cHeight,
	//     extra: {
	//     	line:{
	//     		type: 'straight'
	//     	}
	//     }
	//   });
	// },
    tap(e,id){
      uChartsInstance[id].showToolTip(e)
    }
  }
}
  
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 40px;
}
.charts{
  width: 750rpx;
  height: 500rpx;
}
</style>
