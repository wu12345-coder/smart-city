<template>
	<view class="myselfsetting-containner">
		<!-- 个人设置 -->
		<view class="setting-containner">
			<view class="item">
				<text class="item_name">头像</text>
				<view class="pic">
					<image :src="userData.avatar" mode=""></image>
				</view>
			</view>
			<view class="item">
				<text class="item_name">昵称</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.nickName" :value="userData.nickName">
			</view>
			<view class="item">
				<text class="item_name">性别</text>
				<radio-group v-model="sex" class="check item_txt" @change="sexData">
					<label class="radio">
						<radio value="0" :checked="userData.sex=='0' ? true:false"/><text>女</text>
					</label>
					<label class="radio" >
						<radio value="1" :checked="userData.sex=='1' ? true:false"/><text>男</text>
					</label>
				</radio-group>
			</view>
			<view class="item">
				<text class="item_name">证件号</text>
				<input class="item_txt ipt_name" type="text" :value="userData.idCard" v-model="userData.idCard">
			</view>
			<view class="item">
				<text class="item_name">手机号</text>
				<input class="item_txt ipt_name" type="text" :value="userData.phonenumber" v-model="userData.phonenumber">
			</view>
		</view>
		<u-button type="primary" style="margin-top: 50rpx;" @tap="setData">确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData:{},
				sex:''
			}
		},
		methods: {
			sexData(e){
				// console.log(e);
				this.sex = e.detail.value
			},
			async setData(){
				let obj = {
					nickName:this.userData.nickName,
					sex:this.sex,
					phonenumber:this.userData.phonenumber,
					idCard:this.userData.idCard,
					email:this.userData.email,
				}
				// if(this.sex == ""){
				// 	obj.sex = this.userData.sex
				// } 
				console.log(obj);
				let ModifyData = await this.$u.api.getModifyData(obj)
				uni.showToast({
					title:"修改成功"
				})
				setTimeout(this.pageSx,3000)
				console.log(this.sex);
			},
			pageSx(){
				uni.switchTab({
					url:'../myself/myself',
					success() {
						var pages = getCurrentPages(); //获取所有页面的数组对象
						var currPage = pages[pages.length - 1]; //当前页面
						uni.reLaunch({
						    url: currPage.$page.fullPath
						   })
					}
				})
			},
		},
		
		onLoad(option) {
			let userData = JSON.parse(decodeURIComponent(option.data))
			// console.log(userData);
			this.userData = userData
		}
	}
</script>

<style lang="less">
	.item {
		width: 100%;
		height: 100rpx;
		border-bottom: 2rpx solid #ccc;
		display: flex;
		padding-left: 40rpx;
		padding-right: 40rpx;
		justify-content: space-evenly;
		align-items: center;
	}

	.pic {
		width: 80rpx;
		height: 80rpx;
		display: block;
		background-color: #ccc;
		border-radius: 50%;
		image{
			width: 100%;
			height: 100%;
		}
	}

	.txt {
		float: right;
	}

	.item_name {
		flex: 1;
	}

	.item_txt {
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
	.ipt_name{
		text-align: right;
	}
</style>
