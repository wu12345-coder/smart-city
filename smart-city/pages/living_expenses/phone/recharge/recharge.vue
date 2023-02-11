<template>
	<view class="recharge-container">
		<view class="content">
			<view class="content-item">
				<text style="padding-right: 20rpx;">运营厂商</text>
					<u-input placeholder="请输入要查询号码的运营厂商" v-model="value" @tap="change"></u-input>
					<u-picker mode="selector" v-model="show" :range="selector" @confirm="confirm" ></u-picker>
			</view>
			<u-line color="#ccc"></u-line>
			<view class="content-item">
				<text style="padding-right: 20rpx;">充值号码</text>
				<u-input placeholder="请输入要查询的手机号码" v-model="tel"></u-input>
			</view>
			<u-line color="#ccc"></u-line>
			<view class="content-item">
				<text style="padding-right: 20rpx;">充值金额</text>
				<u-input placeholder="请输入要充值的金额" v-model="money"></u-input>
			</view>
			<u-line color="#ccc"></u-line>
			<u-button class="btn" @tap="charge">充值</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				selector: ["中国联通", "中国移动", "中国电信"],
				value:"",
				tel:"",
				money:'',
				obj:{},
			}
		},
		methods: {
			change() {
				if (this.show == true) {
					this.show = false
				} else {
					this.show = true
				}
			},
			confirm(e){
				this.value = this.selector[e]
			},
			async charge(){
				var obj = {
					paymentType:"电子支付",
					phonenumber:this.tel,
					rechargeAmount:this.money,
					type:"1",
				}
				console.log(obj);
				let getPhoneRecharge = await this.$u.api.getPhoneRecharge(obj)
					uni.showToast({
						title:getPhoneRecharge.msg
					})
				
				console.log(getPhoneRecharge);
			}
		}
	}
</script>

<style lang="less" scoped>
	.recharge-container{
		font-size: 20px
	}
	.content {
		width: 80%;
		height: 680rpx;
		margin: 20rpx auto;
		border-radius: 25rpx;
		overflow: hidden;
		background-color: #ffffff;
		padding: 20rpx;
		border:2rpx solid #ccc;
		box-shadow: #b5b5b5 1px 2px 10px 1px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.content-item {
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		
		.txt {
			height: 150rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			line-height: 140rpx;
			.txt-content{
				display: flex;
			}
		}
	}

</style>
