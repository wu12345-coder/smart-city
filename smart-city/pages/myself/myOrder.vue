<template>
	<view class="order-containner">
		<view class="tabTitleBox">
			<view class="tabTitle">
				<u-tabs :list="nameList" ref="tab" :is-scroll="false" :current="currentTabIndex" @change="change"
					active-color="#FF5B16" inactive-color="#333333" style="width: 100%;margin-top:15rpx;"></u-tabs>
			</view>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<view class="item-content">
						<view class="IdCard" v-for="item in data">
							<view class="IdCard-top">
								订单号{{item.orderInfo.orderItemList[0].orderNo}}
							</view>
							<view class="IdCard-botton">
								<view class="IdCard-botton-left">
									<image :src="item.sellerInfo.imgUrl" mode=""></image>
									<button type="primary" size="mini"
										@click="changeStatus(item.orderInfo.orderItemList[0].orderNo,item.orderInfo.sellerId)">{{status}}</button>
								</view>
								<view class="IdCard-botton-right" @click="goOrderDatail(item.orderInfo.orderItemList[0].orderNo)">
									<view class="item">
										{{item.orderInfo.orderItemList[0].productName}}
									</view>
									<view class="item">
										<view class="item2">
											单价:{{item.orderInfo.orderItemList[0].productPrice}}￥
										</view>
										<view class="item1">
											总价{{item.orderInfo.orderItemList[0].totalPrice}}￥
										</view>
									</view>

									<view class="item">
										支付类型:电子支付
									</view>
									<view class="item">
										派送费:2￥
									</view>
									<view class="item">
										<view class="item2">收货地址:</view>
										<view class="item1">{{item.orderInfo.receiverAddress}}</view>
									</view>
									<view class="item">
										地址标签{{item.orderInfo.receiverLabel}}
									</view>
									<view class="item">
										收货人{{item.orderInfo.receiverName}}
									</view>
									<view class="item">
										联系电话:{{item.orderInfo.receiverPhone}}
									</view>
								</view>
							</view>

						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nameList: [{
						name: '待支付'
					},
					{
						name: '待评价'
					}
				],
				data: [],
				currentTabIndex: 0,
				swiperCurrent: 0,
				status: "",
				sellerId:"",
				orderNo:""
			};
		},


		methods: {
			//
			change(index) {
				if (this.currentTabIndex != index) {
					this.currentTabIndex = index;
				}
				this.init()
			},
			async init() {
				let status = this.nameList[this.currentTabIndex].name;
				this.status = status
				let obj = {
					status: status,
					pageNum: "1",
					pageSize: "8"
				}
				let {
					rows
				} = await this.$u.api.getOrderList(obj)
				this.data = rows
				this.data.forEach((item) => {
					item.sellerInfo.imgUrl = this.$baseUrl + item.sellerInfo.imgUrl
				})
			},
			async changeStatus(orderNo,id) {
				this.sellerId = id
				this.orderNo = orderNo
				if (this.status == "待支付") {
					let obj = {
						orderNo: orderNo,
						paymentType: "电子支付"
					}
					let data = await this.$u.api.getOrder(obj)
					if (data.code == 200) {
						uni.showToast({
							title: " 支付成功"
						})
						setTimeout(this.tap, 3000)

					}
				}
				if (this.status == "待评价") {
					uni.navigateTo({
						url: "../takeout/shopIddetail/setorder/appraise/appraise?id="+id+"&orderNo="+this.orderNo
					})
				}
			},
			goOrderDatail(orderNo){
				this.orderNo = orderNo
				uni.navigateTo({
					url:"../takeout/shopIddetail/setorder/orderDetail/orderDetail?orderNo="+this.orderNo+"&sellerId="+this.sellerId
				})
			},
			tap() {
				uni.navigateTo({
					url: "../takeout/shopIddetail/setorder/appraise/appraise?id="+this.sellerId+"&orderNo="+this.orderNo
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>
<style lang="less">
	.tabTitle {
		width: 100%;
		height: 117rpx;
		display: flex;
		justify-content: space-between;
	}

	.tabTitleBox {
		width: 750rpx;
		background-color: #ffffff;
		margin: 0;
	}

	.order-containner {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	swiper,
	swiper-item {
		height: calc(100vh);
	}

	.item-content {
		padding: 20rpx;

		.IdCard {
			background-color: #ffffff;
			display: flex;
			flex-direction: column;
			padding-bottom: 40rpx;
			padding-top: 40rpx;
			box-shadow: 2px 2px 2px 10px #f5f5f5;

			.IdCard-top {
				line-height: 60rpx;
				font-weight: 800;
				text-align: center;
			}

			.IdCard-botton {
				display: flex;
				align-items: center;

				.IdCard-botton-left {
					width: 40%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;

					image {
						width: 260rpx;
						height: 260rpx;
					}
				}

				.IdCard-botton-right {
					width: 50%;

					.item {
						display: flex;
						justify-content: space-between;

						.item1 {
							width: 60%;
						}
					}
				}

			}
		}

	}
</style>
