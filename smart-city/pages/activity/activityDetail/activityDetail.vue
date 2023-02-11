<template>
	<view class="containner">
		<view class="title">
			{{data.name}}
		</view>
		<view class="content" v-html="data.content">

		</view>
		<view class="btn">
			<button type="primary" @click="goRegister">立即报名</button>
		</view>
		
		<view class="pinglun" @click="goPingLunDetail">
			<u-icon name="edit-pen" size="40"></u-icon>
			<u-input placeholder="说说你的看法" @click="goPingLunDetail"></u-input>
			<view class="icon">
				<u-icon name="chat-fill" size="40"></u-icon>
				<u-badge :count="count" :offset="[10, 10]"></u-badge>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				count:""
			};
		},
		methods: {
			async init(id) {
				let {
					data
				} = await this.$u.api.getActivityIdDetail(id)
				this.data = data
				console.log(data);
			},
			async goRegister() {
				let obj = {
					activityId: this.data.id
				}
				let data01 = await this.$u.api.getActivityStatus(obj)
				console.log(data01);
				if(data01.isSignup) return uni.showToast({
					title:"已经报过名啦"
				})
				let data = await this.$u.api.goRegister(obj)
				console.log(data);
				if (data.code == 200) {
					uni.showToast({
						title: "报名成功"
					})
					
					
					
					setTimeout(() => {
						uni.navigateTo({
							url: "/pages/activity/index"
						})
					}, 2000)
				} else {
					uni.showToast({
						title: "报名失败"
					})
				}
			},
			async goPingLunDetail(){
				uni.navigateTo({
					url:"../activityPL/activityPL?id=" + this.data.id
				})
			},
			async getPLNum(id){
				let obj = {
					activityId: id
				}
				let {commentNum} = await this.$u.api.getActivityPLnumber(obj)
				this.count = commentNum
				console.log(this.count);
			}
		},
		onLoad(option) {
			this.init(option.id)
			this.getPLNum(option.id)
		}
	}
</script>

<style lang="less">
	.containner {
		padding: 20rpx;
	}

	.title {
		text-align: center;
		font-size: 22px;
		font-weight: 800;
	}
	.pinglun{
		width: 100%;
		padding: 20rpx;
		height: 80rpx;
		display: flex;
		border-top: 2rpx solid #ccc;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		bottom: 0;
	}
	.btn{
		padding-bottom: 100rpx;
	}
</style>
