<template>
	<view class="containner">
		<view class="IdCard">
				<view class="shopData">
					<view class="title">
						商品信息
					</view>
					<u-line color="#ccc" margin="20rpx 0 0 0"></u-line>
					<view class="shopData-content">
						<view class="shopData-content-left">
							<image :src="data.orderInfo.orderItemList[0].productImage" mode=""></image>
						</view>
						<view class="shopData-content-right">
							<view class="shopData-content-pic item">
								商品名称:{{data.sellerInfo.name}}
							</view>
							<view class="shopData-content-pic adress item">
								<view class="adress01">地点:</view>
								<text>{{data.sellerInfo.address}}</text>
							</view>
							<view class="shopData-content-pic price item">
								<view class="leftData">价格:{{data.orderInfo.orderItemList[0].productPrice}}￥</view>
								<view>X{{data.orderInfo.orderItemList[0].quantity}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="orderData">
					<view class="title">
						订单信息
					</view>
					<u-line color="#ccc" margin="20rpx 0 0 0"></u-line>
					<view class="orderData-content">
						<view class="item">订单编号:{{data.orderInfo.orderItemList[0].orderNo}}</view>
						<view class="item">下单时间:{{data.sellerInfo.updateTime}}</view>
						<view class="item">待付款:￥{{data.orderInfo.orderItemList[0].totalPrice}}</view>
					</view>
					<view class="btn">
						<button size="mini" type="warn" @click="cancel()">{{tap01}}</button>
						<button size="mini" type="primary" @click="payFor()">{{tap02}}</button>
					</view>
					
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderNo:"",
				data:{},
				sellerId:"",
				status:"",
				tap01:"",
				tap02:""
			};
		},
		methods:{
			async init(){
				let orderNo = this.orderNo
				let {data} = await this.$u.api.getOrderNoDetail(orderNo)
				data.sellerInfo.imgUrl = this.$baseUrl + data.sellerInfo.imgUrl
				data.orderInfo.orderItemList[0].productImage = this.$baseUrl + data.orderInfo.orderItemList[0].productImage
				this.data = data
				console.log(data);
				if(data.orderInfo.status=="待支付"){
					this.tap01 = "取消订单"
					this.tap02 = "去支付"
				}else{
					this.tap01 = "退款"
					this.tap02 = "去评价"
				}
			},
			cancel(){
				if(this.tap01 == "取消订单"){
					uni.navigateTo({
						url:"/pages/myself/myOrder"
					})
				}
				if(this.tap01 == "退款"){
					let orderNo = this.orderNo
					uni.navigateTo({
						url:"../../../refund/refund?orderNo="+this.orderNo
					})
				}
				
			},
			async payFor(){
				if(this.tap02 == "去支付"){
					let obj = {
						orderNo: this.orderNo,
						paymentType: "电子支付"
					}
					let data = await this.$u.api.getOrder(obj)
					uni.showToast({
						title: " 支付成功"
					})
					setTimeout(this.tap, 3000)
				}
				if(this.tap02 == "去评价"){
					uni.navigateTo({
						url:"../appraise/appraise"
					})
				}
			},
			tap() {
				uni.navigateTo({
					url:"../appraise/appraise?id="+this.sellerId+"&orderNo="+this.orderNo
				})
			}
		},
		onLoad(option) {
			this.orderNo = option.orderNo
			this.sellerId = option.sellerId
			console.log(this.orderNo );
			this.init()
		}
	}
</script>

<style lang="less">
	.containner{
		background-color: #f5f5f5;
		.IdCard,{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title{
				font-weight: 700;
				font-size: 20px
			}
			.btn{
				display: flex;
				margin-top: 50rpx;
			}
			.shopData,.orderData{
				width: 90%;
				padding:20rpx 40rpx;
				border-radius: 25rpx;
				background-color: #fff;
				margin-top: 50rpx;
				.shopData-content{
					display: flex;
					justify-content: space-between;
					.shopData-content-left{
						width: 40%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-content: center;
						image{
							width: 100%;
							height: 50%;
						}
					}
					.shopData-content-right{
						width: 50%;
						.price{
							color: red;
							font-weight: 800;
							display: flex;
							justify-content: space-between;
							flex-direction: row;
						}
						.adress{
							display: flex;
							.adress01{
								width: 80%;
							}
						}
					}
				}
				.item{
					line-height: 80rpx;
					font-size: 15px;
					
				}
			}
			
		}
	}
	
</style>
