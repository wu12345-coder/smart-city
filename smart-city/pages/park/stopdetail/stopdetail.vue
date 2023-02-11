<template>
	<view class="cardDdetail-containner">
		<view class="stopCard-card">
			<view class="Card-containner" v-for="item in list">
				<view class="title">
					<text>{{item.address}}</text>
					<text>{{item.distance}}公里</text>
				</view>
				<u-line color="#186fcc"></u-line>
				<view class="card-content">
					<view class="content-left">
						<text><u-icon name="map"></u-icon>{{item.address}}</text>
					</view>
					<u-line color="#cccccc"></u-line>
					<view class="content">
						<text>车位信息</text>
						<view class="cart-content">
							<view class="cart-title">
								<view>停车费</view>
								<view>剩余车位</view>
							</view>
							<view class="cart-title-content">
								<view class="parkCart">{{item.rates}}元/小时</view>
								<view class="price">{{item.vacancy}}个/{{item.allPark}}</view>
							</view>
						</view>
					</view>
					
					
				</view>
			<view class="floor">
				<view>收费参考</view>
				<view>每小时5元,最高30一天</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			init(id){
				let data = this.list.filter((i)=>{var j = i.id == id; return j })
				this.list = data
				console.log(data);
			}
		},
		onLoad(option) {
			this.list = JSON.parse(option.data)
			let id = JSON.parse(option.id)
			this.init(id)
		}
	}
</script>

<style lang="less" scoped>
.stopCard-card {
		width: 100%;
		padding: 20rpx 40rpx;
	}

	.Card-containner {
		width: 100%;
		height: 480rpx;
		background: linear-gradient(#9bbdff 5%, #fff 50%, #fff 90%);
		border-radius: 25rpx;
		border: 2rpx solid #ccc;
		margin-top: 20rpx;
		overflow: hidden;

		.title {
			padding: 10rpx;
			height: 80rpx;
			line-height: 80rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #4561ff;
		}

		.card-content {
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			padding:0 20px 0 20px;
			text {
				line-height: 80rpx;
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
	}
	.content{
		width: 100%;
		height: 200rpx;
		background: transparent;
		.cart-title{
			width: 100%;
			height: 45rpx;
			display: flex;
			justify-content: space-around;
		}
		.cart-title-content{
			width: 100%;
			height: 150rpx;
			display: flex;
			justify-content: space-around;
			.parkCart{
				color: #ffbf58;
				font-size: 20px;
			}
			.price{
				color: #4561ff;
				font-size: 20px;
			}
		}
	}
	.floor{
		width: 100%;
		height: 150rpx;
		background: linear-gradient(#fff -9%, #9bbdff 96%, #fff 95%);
		color: #fff;
		font-weight: 700;
		padding: 15rpx 40rpx 10rpx 40rpx;
		line-height: 40rpx;
		font-size: 13px
	}
	
</style>
