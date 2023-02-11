<template>
	<view class="phone-container">
		<view class="content">
			<view class="content-item">
				<text style="padding-right: 20rpx;">城镇居民缴费</text>
			</view>
			<u-line color="#ccc"></u-line>
			<view class="content-item">
				<u-search placeholder="缴费编号" v-model="num" shape="square" bg-color="#fff" @change="change" actionText="编号" @custom="search" clearable="true"></u-search>
			</view>
			<u-line color="#ccc"></u-line>
			<u-button class="btn" @tap="getData">查询账单</u-button>
		</view>
		
		<view class="content1" v-if="flag">
			<view class="content-item1">
				<view class="txt">
					账单单号:{{list.billNo}}
				</view>
				<view class="txt">
					收费单位:{{list.chargeUnit}}
				</view>
				<view class="txt">
					缴费编号:{{list.paymentNo}}
				</view>
				<view class="txt">
					缴费金额:{{list.amount}}
				</view>
				<view class="txt btn">
					<u-button type="success" v-if="list.payStatus=='1'">已支付</u-button>
					<u-button type="warning" v-if="list.payStatus=='0'">未支付</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:"",
				list:{},
				flag:false,
				typeId:""
			}
		},
		methods: {
			async getData(){
				if(this.typeId == ""){
					uni.navigateTo({
						url:"./pages/living_expenses/index"
					})
				}
				let obj = {
					categoryId:this.typeId,
					paymentNo:this.num
				}
				let data = await this.$u.api.getBillData(obj)
				if(data.code != 200){
					uni.showToast({
						title:"查询失败"
					})
				}
				this.list = data.data
				console.log(this.list);
				this.flag = true
			},
			change(){
				this.flag = false
			},
			search(){
				uni.navigateTo({
					url:"searchNum/searchNum?id="+this.typeId
				})
			}
		},
		onLoad(option) {
			option.id
			this.typeId = option.id
		}
	}
</script>

<style lang="less" scoped>
	.phone-container{
		padding-top: 80rpx;
		font-size: 16px
	}
	.content,.content1 {
		width: 80%;
		height: 480rpx;
		margin: 20rpx auto;
		border-radius: 25rpx;
		overflow: hidden;
		background-color: #ffffff;
		padding: 20rpx;
		border:2rpx solid #ccc;
		box-shadow: #b5b5b5 1px 2px 10px 1px;
	}
	.content1{
		height: 580rpx;
	}
	.content-item {
		height: 100rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.txt {
			padding-left: 20rpx;
			padding-right: 20rpx;
		}
	}
	.content-item1{
		display: flex;
		flex-direction: column;
		height: 100rpx;
		line-height: 100rpx;
	}
	
	.btn {
		margin-top: 40rpx;
		background-color: #3884cc;
		color: white;
		font-weight: 600;
	}
	.btn-phone{
		width: 90%;
		margin:0 auto;
		.btn{
			background-color: #5193cc;
		}
	}
</style>
