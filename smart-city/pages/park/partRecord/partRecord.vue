<template>
	<view>
		<view class="stopCard-card">
			<view class="search">
				<input type="text" v-model="RdataTime" class="RdataIime" placeholder='请输入入场时间'>
				<input type="text" v-model="CdataTime" class="CdataIime" placeholder='请输入出场时间'>
				<u-button style="margin-top: 20rpx;" @tap="iptValue">搜索</u-button>
			</view>
			<view class="Card-containner" v-for="(item,index) in list" :key="index">
				<view class="title">
					<text>{{item.plateNumber}}</text>
					<text>收费金额 : {{item.monetary}}</text>
				</view>
				<u-line color="#186fcc"></u-line>
				<view class="card-content">
					<view class="content-left">
						<text>入场时间 : {{item.entryTime}}</text>
						<view>出场时间 : {{item.outTime}}</view>
						<view>停车场名称 : {{item.parkName}}</view>
					</view>
					<view class="content">
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<u-button class="btn-more" @tap="getMore">加载更多</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carList:[],
				index:2,
				list:[],
				RdataTime:'',
				CdataTime:'',
				result:" "
			}
		},
		methods: {
			async init(){
				let {rows} = await this.$u.api.getStopCarList()
				this.carList = rows
				this.carList.forEach((item)=>{
					const baseUrl = "http://10.16.67.7:10001"
					item.imgUrl = baseUrl + item.imgUrl
				})
				this.getMore()
			},
			
			getMore(){
				this.index += 2 ;
				this.result = this.carList.filter((i)=>{ var j = i.id < this.index; return j });
				this.list = this.result
				console.log(this.list);
			},
			iptValue(){
				if(this.RdataTime=='' && this.CdataTime ==''){
					this.list = this.result
				}
				let data = this.carList.filter((i)=>{var j = i.entryTime == this.RdataTime && i.outTime == this.CdataTime; return j })
				this.list = data			
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
.stop-containner{
	width: 100%;
}
.stopCard-card {
		width: 100%;
		padding: 20rpx 40rpx;
	}

	.Card-containner {
		width: 100%;
		height: 280rpx;
		background: linear-gradient(#9bbdff 5%, #fff 50%, #fff 90%);
		border-radius: 25rpx;
		border: 2rpx solid #ccc;
		margin-top: 20rpx;

		.title {
			padding: 10rpx;
			height: 80rpx;
			line-height: 80rpx;
			display: flex;
			justify-content: space-around;
		}

		.card-content {
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			text {
				line-height: 80rpx;
			}

			.content {
				width: 40rpx;
				height: 40rpx;
				border: 2rpx solid #ccc;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.parkName{
		font-weight: 800;
		font-size: 18px
	}
	.btn{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.btn-park{
			
		}
		.btn-more{
			
		}
	}
	.search{
		width: 80%;
		margin: 0 auto;
		.RdataIime,.CdataIime{
			width: 100%;
			height: 45rpx;
			padding: 15rpx;
			border: 2rpx solid #ccc;
			margin-top: 20rpx;
		}
	}
	
</style>
