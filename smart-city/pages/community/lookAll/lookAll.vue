<template>
	<view>
		<u-divider color="#333">年龄分布</u-divider>
		<view class="charts-box">
		  <qiun-data-charts type="pie" :chartData="chartsDataPie1"/>
		</view>
		<u-divider color="#333">平均运动量</u-divider>
		<view class="charts-box">
		  <qiun-data-charts type="pie" :chartData="chartsDataPie2"/>
		</view>
		<u-divider color="#333">户外运动时间</u-divider>
		<view class="charts-box">
		  <qiun-data-charts type="pie" :chartData="chartsDataPie3"/>
		</view>
	</view>
</template>

<script>
import demodata from '@/mockdata/demodata.json';
import mapdata from '@/mockdata/mapdata.json'
	export default {
		data() {
			return {
				chartsDataPie1:{},
				chartsDataPie2:{},
				chartsDataPie3:{}
			};
		},
		onReady() {
			//模拟从服务器获取数据
			this.getServerData()
		},
		methods: {
			getServerData() {
				setTimeout(() => {
					this.chartsDataPie1=JSON.parse(JSON.stringify(demodata.Pie))
					this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.Pie1))
					this.chartsDataPie3=JSON.parse(JSON.stringify(demodata.Pie2))
				}, 1500);
			}
		},
	}
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.charts-box {
  width: 100%;
  height: 300px;
}
</style>
