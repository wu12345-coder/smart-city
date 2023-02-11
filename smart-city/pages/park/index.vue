<template>
	<view class="stop-containner">
		<view class="stopCard-card">
			<view class="Card-containner" v-for="(item,index) in list" :key="index" @tap="goCardDetail(item.id)">
				<view class="title">
					<text>共有{{item.vacancy}}空位</text>
					<text>价格{{item.priceCaps}}元/个</text>
				</view>
				<u-line color="#186fcc"></u-line>
				<view class="card-content">
					<view class="content-left">
						<text>{{item.address}}</text>
						<view class="parkName">{{item.parkName}}</view>
					</view>
					<view class="content">
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<u-button class="btn-park" @tap="goPart()">停车记录</u-button>
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
				list:[]
			}
		},
		methods: {
			async init(){
				let {rows} = await this.$u.api.getCarList()
				this.carList = rows
				this.carList.forEach((item)=>{
					const baseUrl = "http://10.16.67.7:10001"
					item.imgUrl = baseUrl + item.imgUrl
				})
				this.getMore()
			},
			goCardDetail(index) {
				uni.navigateTo({
					url: './stopdetail/stopdetail?data='+ JSON.stringify(this.carList)+"&id="+index
				})
			},
			getMore(){
				this.index += 2 ;
				let result = this.carList.filter((i)=>{ var j = i.id < this.index; return j });
				this.list = result
			},
			goPart(){
				uni.navigateTo({
					url:'partRecord/partRecord'
				})
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
</style>
