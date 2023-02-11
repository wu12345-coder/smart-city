<template>
	<view class="phone-container">
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
			<u-button class="btn" @tap="search">查询</u-button>
		</view>
		
		
		<view class="content" v-if="flag">
			<view class="content-item1">
				<view class="txt">
					电话号码:{{tel}}
				</view>
				<view class="txt">
					运营厂商:{{value}}
				</view>
				<view class="txt">
					话费余额:{{list.balance}}元
				</view>
			</view>
		</view>
		<view class="btn-phone">
			<u-button class="btn" @tap="recharge">立即充值</u-button>
			<u-button class="btn" @tap="donePhone">充值记录</u-button>
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
				plateNo:'',
				obj:{},
				list:{},
				flag:false
			}
		},
		methods: {
			change() {
				this.flag=false
				if (this.show == true) {
					this.show = false
				} else {
					this.show = true
				}
			},
			confirm(e){
				this.value = this.selector[e]
			},
			async getPhone(){
				let getPhone = await this.$u.api.getPhone(this.obj)
				this.list = getPhone.data
				this.flag=true
				console.log(getPhone.data);
				if(getPhone.code == 404){
					uni.showToast({
						title:getPhone.msg,
					})
				}
			},
			search(){
				this.obj = {
					phonenumber:this.tel,
					operator:this.value
				}
				this.getPhone()
			},
			donePhone(){
				// 跳转到充值记录页面
				uni.navigateTo({
					url:"donePhone/donePhone"
				})
			},
			recharge(){
				// 跳转到立即充值页面
				uni.navigateTo({
					url:"recharge/recharge"
				})
			}
			
		}
	}
</script>

<style lang="less" scoped>
	.phone-container{
		padding-top: 80rpx;
		font-size: 16px
	}
	.content {
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
	.content-item {
		height: 100rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	
		text {
			padding-left: 20rpx;
			padding-right: 20rpx;
		}
	}
	.content-item1{
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
