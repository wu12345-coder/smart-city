<template>
	<view class="pwd-containner">
		<view class="ipt">
			<view class="ipt-content">
				<u-icon name="lock"></u-icon>
				<u-input style="padding-left: 20rpx;"placeholder="请输入原始密码" v-model="oldPassword"></u-input>
			</view>
			<u-line color="#717171"></u-line>
		</view>
		<view class="ipt">
			<view class="ipt-content">
				<u-icon name="lock"></u-icon>
				<u-input style="padding-left: 20rpx;" placeholder="请输入新密码" v-model="newPassword"></u-input>
			</view>
			<u-line color="#717171"></u-line>
		</view>
		<view class="ipt">
			<view class="ipt-content">
				<u-icon name="lock"></u-icon>
				<u-input style="padding-left: 20rpx;" placeholder="请输入确认新密码"></u-input>
			</view>
			<u-line color="#717171"></u-line>
		</view>
		<u-button @tap="ModifyPwd" style="background-color: #2266be;color: white;font-size: 18px;">确认</u-button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newPassword:"",
				oldPassword:""
			}
		},
		methods: {
			async ModifyPwd(){
				let obj = {
					newPassword:this.newPassword,
					oldPassword:this.oldPassword
				}
				let pwdData = await this.$u.api.getModifyPwd(obj)
				if(pwdData.code == 200){
					uni.showToast({
						title:"修改成功"
					})
				}else{
					uni.showToast({
						title:"密码输入错误"
					})
				}
			}
		},
		onLoad() {
		}
	}
</script>

<style>
	.pwd-containner{
		padding: 20rpx;
	}
	.ipt{
		padding: 20rpx 10rpx;
	}
	.ipt-content{
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-left: 10rpx;
	}
	.ipt-pwd{
		padding-left: 50rpx;
	}

</style>
