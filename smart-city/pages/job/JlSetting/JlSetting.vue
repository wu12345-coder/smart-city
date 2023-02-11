<template>
	<view class="myselfsetting-containner">
		<!-- 个人设置 -->
		<view class="setting-containner">
			<view class="item">
				<text class="item_name">最高学历</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.nickName">
			</view>
			<view class="item">
				<text class="item_name">教育经历</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.phonenumber">
			</view>
			<view class="item">
				<text class="item_name">居住地址</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.phonenumber">
			</view>
			<view class="item">
				<text class="item_name">工作经验</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.phonenumber">
			</view>
			<view class="item">
				<text class="item_name">个人简介</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.individualResume">
			</view>
			<view class="item">
				<text class="item_name">期望薪资</text>
				<input class="item_txt ipt_name" type="text" v-model="userData.money">
			</view>
			<view class="item">
				<text class="item_name">个人简历</text>
				<text class="item_txt ipt_name"><uni-file-picker file-mediatype="all" @select="select"  v-model="userData.file"></uni-file-picker></text>
			</view>
			<view class="item">
				<text><picker :range="jobList" @change="change">请选择</picker></text>
				<text class="item_txt ipt_name">{{jobList[chooseIndex]}}</text>
			</view>
		</view>
		<u-button type="primary" style="margin-top: 50rpx;" @tap="getData">确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData: {
					files:""
				},
				jobList:[],
				chooseIndex:""
			};
		},
		methods: {
			async setData(){
				let {rows}= await this.$u.api.getJobPosition()
				rows.forEach(item=>{
					this.jobList.push(item.professionName)
				})
				console.log(this.jobList);
			},
			getData(){
				uni.showToast({
					title:"提交成功"
				})
				setTimeout(
				()=>{
					uni.navigateTo({
						url:"/pages/job/index"
					})
				}
				,3000)
			},
			change(e){
				this.chooseIndex = e.detail.value
			}
		},
		onLoad(){
			this.setData()
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

		image {
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

	.ipt_name {
		text-align: right;
	}
</style>
