<template>
	<view class="shuttle-container">
		<view class="IdCard" v-for="item in list" @tap="goDeatil(item.id)">
			<u-button size="mini" style="margin: 0 auto;" class="btnDemo">{{item.name}}</u-button>
			<view class="price-content">
				<view class="btn">
					
				</view>
				<view class="icon">
					<view class="icon1">
						{{item.first}}
					</view>
					<view class="icon1">
						—————>
					</view>
					<view class="icon1">
						{{item.end}}
					</view>
				</view>
				<view class="price">
					<view class="price-txt">
						票价:￥{{item.price}}
					</view>
					<view class="price-txt">
						{{item.startTime}}
					</view>
				</view>
				<view class="price">
					<view class="price-txt">
						里程:{{item.mileage}}
					</view>
					<view class="price-txt">
						{{item.endTime}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				value:"25555",
				contentList:[],
			}
		},
		methods: {
			async init(){
				let {rows} = await this.$u.api.getCarListData()
				this.list = rows
				console.log(this.list);
			},
			goDeatil(id){
				console.log(id);
				uni.navigateTo({
					url:"customDetail/customDetail?id="+id
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
	.shuttle-container {
		width: 100%;
		height: calc(100vh - 90rpx);
		padding: 40rpx;
	}

	.btnDemo {
		width: 150rpx;
		height: 65rpx;
		background-color: #4aa3f0;
		color: white;
		font-size: 16px
	}

	.IdCard {
		border: 2rpx #ccc solid;
		border-radius: 25rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40rpx;
		background: linear-gradient(#ffffff 10%, #4d91cc);
		box-shadow: #ccc 2px 2px 10px;
		margin-top: 50rpx;

		.icon1 {
			font-weight: 800;
			color: #5598cc;
			font-size: 16px
		}

		.price-txt {
			color: white;
			font-size: 16px
		}

		.content-txt {
			color: white;
			font-size: 16px
		}
	}

	.icon,
	.btn,
	.price {
		display: flex;
		justify-content: space-evenly;
	}
	.title{
		font-size: 20px;
		color: #4d91cc;
	}

	.price-content {
		height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.content{
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		align-items: center;
		.name{
			color: #fffbfc;
		}
	}
	.crile{
		width: 40rpx;
		height: 40rpx;
		background-color: white;
		border-radius: 50%;
	}
</style>
