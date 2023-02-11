<template>
	<view>
		<view class="pic">
			<image :src="userData.avatar" mode=""></image>
			<view class="pic_txt">
				{{userData.nickName}}
			</view>
		</view>
		<view class="content">
			<u-cell-group>
					<u-cell-item icon="setting-fill" title="个人设置" @tap="goMyselfSetting"></u-cell-item>
					<u-cell-item icon="order" title="我的订单" @tap="goMyOrder"></u-cell-item>
					<u-cell-item icon="lock" title="修改密码" @tap = "goModifyPwd"></u-cell-item>
					<u-cell-item icon="email" title="意见反馈" @tap = "goFeedback"></u-cell-item>
				</u-cell-group>
		</view>
		<view class="back">
			<u-button type="error" @tap="goOut()">退出</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData:{}
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			// 个人设置
			goMyselfSetting(){
				uni.navigateTo({
					url:"./myselfSetting?data=" + encodeURIComponent(JSON.stringify(this.userData)),
				})
			},
			// 我的订单
			goMyOrder(){
				uni.navigateTo({
					url:"./myOrder"
				})
			},
			// 修改密码
			goModifyPwd(){
				uni.navigateTo({
					url:"./modifyPwd"
				})
			},
			// 意见反馈
			goFeedback(){
				uni.navigateTo({
					url:"./feedback"
				})
			},
			
			async init(){
				const baseUrl = "http://10.16.67.7:10001/prod-api"
				let {user} =await this.$u.api.getSearchUser();
					user.avatar=baseUrl + user.avatar
					this.userData = user
				console.log(this.userData);
			},
			goOut(){
				uni.removeStorageSync("token")
				uni.reLaunch({
					url:'../login/login'
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pic{
		width: 250rpx;
		height: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin:  10rpx auto;
		image{
			margin: 0 auto;
			width: 150rpx;
			height: 150rpx;
		}
		.pic_txt{
			width: 100%;
			height: 40rpx;
			margin-top: 20rpx;
			text-align: center;
		}
	}
	.back{
		margin-top: 50rpx;
	}

</style>
