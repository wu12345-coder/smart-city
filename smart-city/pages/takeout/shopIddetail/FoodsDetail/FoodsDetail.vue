<template>
	<view>
		<view class="content">
			<view class="content-tap">
				<view class="IdCard" v-for="item in shopIdList">
					<view class="icon">
						美团专送
					</view>
					<view class="IdCard-pic">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<view class="IdCard-txt">
						<view class="IdCard-txt-name">
							{{item.name}}
						</view>
						<view class="IdCard-txt-shopData">
							详情: 
							<view class="IdCard-txt-shopData-introduction">
								{{item.detail}}
							</view>
						</view>
						<view class="IdCard-txt-shopData">
								<view class="IdCard-txt-score">
									<!-- <u-icon name="star-fill" :label="item.favorRate" color="#ffd435" size="28"></u-icon> -->
									<text>好评率{{item.favorRate}}%</text>
								</view>
								<view class="IdCard-txt-saleQuantity">
									销量:{{item.saleQuantity}}
								</view>
						</view>
						<view class="IdCard-txt-shopData">
							<view class="IdCard-txt-avgCost">
								价格￥{{item.price}}
							</view>
							<view class="IdCard-txt-adress">
								{{item.address}}
							</view>
						</view>
						<view class="btn">
		<button class="btn-good" type="default" @click="setOrder(item.id,item.sellerId,item.price)">购买</button>
					</view>
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
				categoryId:"",
				sellerId:"",
				shopIdList:[]
			};
		},
		methods:{
			async init(){
				let obj={
					categoryId:this.categoryId,
					sellerId:this.sellerId,
				}
				let {data} = await this.$u.api.getShopIdFood(obj)
				data.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.shopIdList = data
				console.log(data);
			},
			setOrder(id,sellerId,price){
				uni.navigateTo({
					url:"../setorder/setorder?id="+id+"&sellerId="+sellerId+"&price="+price
				})
			}
		},
		onLoad(option) {
			this.categoryId=option.categoryId
			this.sellerId=option.sellerId
			this.init()
		}
	}
</script>

<style lang="less">
.content-title {
		font-weight: 800;
		font-size: 18px;
		// line-height: 60rpx;
		height: 60rpx;
		padding-left: 20rpx;
		background-color: #fff;
	}
	
	.containner {
		background-color: #f5f5f5;
		padding: 10rpx;
	}

	.ipt {
		background-color: #fff;
		padding: 10rpx;
	}

	.content {
		margin-top: 10rpx;
		background-color: #fff;
	.btn{
		width: 80%;
		display: flex;
		
			.btn-good{
				width: 120rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 15px;
				position: absolute;
				right: 10%;
				bottom: 10%;
			}
		}
		

		.IdCard {
			width: 100%;
			height: 300rpx;
			border-radius: 15rpx;
			padding: 10rpx 10rpx 20rpx 10rpx;
			display: flex;
			position: relative;
			justify-content: space-between;
			border-bottom: 2rpx solid #ccc;
			position: relative;
			.icon{
				position: absolute;
				top:5%;
				right: 10%;
				background-color: #ffd435;
				border-radius: 15rpx;
				font-size: 10px;
			}
			.IdCard-pic {
				width: 200rpx;
				height: 100%;
				display: flex;
				padding: 10rpx;

				image {
					width: 100%;
					height: 200rpx;
				}
			}

			.IdCard-txt {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.IdCard-txt-name {
				width: 100%;
				height: 40rpx;
				line-height: 40rpx;
				font-weight: 800;
				font-size: 16px
			}

			.IdCard-txt-shopData,
				{
				height: 30%;
				display: flex;
				justify-content: space-between;

				.IdCard-txt-shopData-introduction {
					height: 100%;
					line-height:40rpx;
					width: 80%;
					font-size: 12px
				}

				.IdCard-txt-shopData-left,
				.IdCard-txt-shopData-right {
					display: flex;
					width: 40%;
					justify-content: space-around;
				}
			}
			.IdCard-txt-avgCost,.IdCard-txt-adress{
				font-size: 10px
			}
		}
	}
</style>
