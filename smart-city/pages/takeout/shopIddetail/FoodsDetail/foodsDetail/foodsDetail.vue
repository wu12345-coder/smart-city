<template>
	<view>
		<view class="shopTop">
			<view class="shopTop-pic">
				<image :src="shopList.imgUrl" mode=""></image>
			</view>
			<view class="shopTop-txt">
				<view class="title">
					店铺名称:{{shopList.name}}
				</view>
				<view class="item">
					简介:{{shopList.name}}
				</view>
				<view class="item">
					店铺简介:{{shopList.saleQuantity}}
				</view>
				<view class="item">
					评分:{{shopList.score}} 分
				</view>
				<view class="item">
					配送时间:{{shopList.deliveryTime}}
				</view>
				<view class="item">
					配送距离:{{shopList.distance}}
				</view>
			</view>
		</view>
	
		<view class="nav">
			<block v-for="(item,index) in list">
				<view :class="{'active':current==index}" @click="clickItem(index,item.id,item.sellerId)">
					{{item.name}}
				</view>
			</block>
		</view>
		
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
							<view class="btn">
								<!-- <view class="btn-box">
									<view class="btn-cut">
										<button size="mini" @click="goodcut()">-</button>
									</view>
									<view class="btn-ipt">
										<input type="text" v-model="number">
									</view>
									<view class="btn-add">
										<button size="mini" @click="goodadd()">+</button>
									</view>
								</view> -->
								<button class="btn-good" type="default" @click="setOrder(item.id,item.sellerId,item.price)">购买</button>
							</view>
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
				ipt:"",
				current:0,
				goodnum:1,
				shopIdList:[],
				list:[],
				id:"",
				sellerId:"",
				number:0,
				shopList:[]
			};
		},
		methods:{
			async init(){
				let obj={
					categoryId:this.id,
					sellerId:this.sellerId
				}
				let {data} = await this.$u.api.getShopIdFood(obj)
				data.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.shopIdList = data
				console.log(data);
				this.getShopDeatil()
			},
			clickItem(index,id,sellerId){
				this.current = index
				this.sellerId = sellerId,
				this.id = id
				this.init()
			},
			goodcut(){
				if(this.number>1){
					this.number -= 1
				}
			},
			goodadd(){
				this.number += 1
			},
			setOrder(id,sellerId,price){
				uni.navigateTo({
					url:"../../setorder/setorder?id="+id+"&sellerId="+sellerId+"&price="+price
				})
			},
			async getShopDeatil(){
				let id = this.sellerId
				let {data} = await this.$u.api.getShopIdDetail(id)
				data.imgUrl=this.$baseUrl + data.imgUrl
				this.shopList = data
			}
		},
		onLoad(option) {
			this.list = JSON.parse(option.data);
			this.sellerId = this.list[0].sellerId
			this.id = this.list[0].id
			this.init()
		}
	}
</script>

<style lang="less">
	.shopTop{
		height:400rpx;
		display: flex;
		justify-content: space-between;
		padding: 40rpx;
		.shopTop-pic{
			width: 40%;
			height: 100%;
			background-color: #ccc;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.shopTop-txt{
			width: 55%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-weight: 800;
				font-size: 14px;
			}
		}
	}
	
	.btn{
		width: 80%;
		display: flex;
		.btn-good{
			width: 120rpx;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 15px;
		}
		.btn-box{
			width: 50%;
			height: 80rpx;
			display: flex;
		}
	}
	
	.nav{
		display: flex;
		font-size: 18px;
		justify-content: space-evenly;
		margin-top: 40rpx;
	}
	.active{
		color: royalblue;
	}
	
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
	
			
	
			.IdCard {
				width: 100%;
				height: 300rpx;
				border-radius: 15rpx;
				padding: 10rpx 10rpx 20rpx 10rpx;
				display: flex;
				position: relative;
				justify-content: space-between;
				border-bottom: 2rpx solid #ccc;
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
	
	
	
	
// .item-list{
// 	width: 100%;
// 	height: 200rpx;
// 	display: flex;
// 	overflow: hidden;
// 	justify-content: left;
// 	align-items: center;
// 	border: 2rpx solid #ccc;
// 	padding: 12rpx;
// 	.item-pic{
// 		width: 150rpx;	
// 		height: 150rpx;
// 		overflow: hidden;
// 		image{
// 			width: 100%;
// 			height: 100%;
// 		}
// 	}
// 	.item-txt{
// 		flex: 6;
// 		height: 100%;
// 		margin-left: 20rpx;
// 		font-size: 15px;
// 		text-indent: 2rem;
// 	}
// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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

		

		.IdCard {
			width: 100%;
			height: 300rpx;
			border-radius: 15rpx;
			padding: 10rpx 10rpx 20rpx 10rpx;
			display: flex;
			position: relative;
			justify-content: space-between;
			border-bottom: 2rpx solid #ccc;
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

</style>
