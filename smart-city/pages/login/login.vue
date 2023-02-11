<template>
	<view class="login-containner">
		<view class="ipt">
			<u-input v-model="username" type="text" :border="true" placeholder="请输入账号"/>
			<u-input v-model="password" type="password" :border="true" placeholder="请输入密码"/>
			<u-button type="primary" class="save" @tap="goHome">登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			async goHome(){
				let username = this.username
				let password = this.password
				let res = await this.$u.api.getLogin({username,password});
				let data = uni.setStorageSync("token",res.token)
				if(uni.getStorageSync("token")){
					uni.showToast({
						title:'操作成功'
					}),
					uni.switchTab({
						url:'/pages/home/home'
					})
				}
					
			}
		}
	}
</script>

<style>
	.login-containner{
		width: 100%;
		padding: 40rpx;
	}
	.containner{
		width: 100%;
		
	}
</style>
