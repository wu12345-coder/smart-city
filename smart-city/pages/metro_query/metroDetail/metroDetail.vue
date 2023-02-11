<template>
	<view class="detail-tainner">
		<view class="IdCard">
				<view class="title">
					{{obj.first}}
				</view>
				<u-icon name="arrow-rightward" color="#2c8ccc" size="80rpx" style="font-size: 20px;"></u-icon>
				<view class="title">
					{{obj.end}}
				</view>
		</view>
		<view class="IdCard">
				<view class="title">
					<view class="minuter">
						{{obj.remainingTime}}分钟
					</view> 
					<view class="txt">
						{{obj.stationsNumber}}站/{{obj.km}}km
					</view>
				</view>
		</view>
		<view class="IdCardX">
			<scroll-view scroll-x="true">
				<view class="item">
					<view v-for="item in obj.metroStepList" class="itemL">
						<view class="crire"></view>
						<view class="crire-content">{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj:{}
			}
		},
		methods: {
			 async init(id){
				// 地铁详情
				let {data} = await this.$u.api.getMetroAllDetail(id)
				this.obj = data
				console.log(data);
			}
		},
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="less"> 
	.detail-tainner{
		width: 100%;
		height: calc(100vh - 90rpx);
		background-color: #ececec;
		padding-top: 20rpx;
		.IdCard{
			width: 90%;
			margin: 20rpx auto;
			height: 200rpx;
			background-color: #ffffff;
			border-radius: 15rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		.title{
			font-weight: 800;
			font-size: 18px
		}
		.minuter{
			width: 100%;
			color: #31a4ec;
			font-size: 22px;
			font-weight: 500;
			text-align: center;
		}
		.txt{
			width: 100%;
			font-size: 16px;
			line-height: 70rpx;
			color: #64cc79;
			font-weight: 500;
			text-align: center;
		}
		
		}
	.IdCardX{
		width: 90%;
		height: 400rpx;
		margin: 20rpx auto;
		background-color: #ffffff;
		border-radius: 15rpx;
	}
	scroll-view{
		width: 100%;
		height: 300rpx;
	}
		.item{
			width: 250%;
			height: 100%;
			margin-top: 40rpx;
			display: flex;
			align-items: flex-start;
			justify-content: space-around;
			.crire{
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				background-color: #28a8ec;
			}
			.crire-content{
				width: 50rpx;
				height: 100%;
				text-align: center;
				font-weight: 800;
			}
			.itemL{
				float: left;
				margin: 10rpx;
			}
		}
</style>
