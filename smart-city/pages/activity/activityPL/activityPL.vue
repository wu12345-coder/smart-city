<template>
	<view class="containner">
		<view class="ipt">
			<u-input type="text" v-model="ipt" placeholder="请说说你的看法" height="80" border/>
			<u-button type="primary" @click="getSure">发表</u-button>
		</view>
		
		<view class="pingLun" v-for="item in list">
			<view class="user">
				<view class="user-pic">
					<u-icon name="account-fill" size="60"></u-icon>
				</view>
				<text>{{item.userName}}</text>
			</view>
			<view class="content">
				<view class="user-content">
					{{item.content}}
				</view>
				<view class="updata-time">
					{{item.commentDate}}
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				ipt:"",
				newId:"",
				id:""
			};
		},
		methods:{
			async getSure(){
				let obj = {
					activityId:this.id,
					content:this.ipt
				}
				let data = await this.$u.api.getAddActivityPLList(obj)
				uni.showToast({
					title:"发表成功"
				})
				this.ipt=""
				let id = this.id
				this.getPingLun(id)
			},
			async getPingLun(id){
				let obj={
					activityId:this.id
				}
				let {rows} = await this.$u.api.getActivityPLList(obj)
				console.log(rows);
				this.list = rows
			}
		},
		onLoad(option) {
			this.id = option.id
			console.log(option.id);
			this.getPingLun(option.id)
		}
	}
</script>

<style lang="less" scoped>
	.containner{
			width: 100%;
			padding-bottom: calc(var(--window-bottom) - 50px);
			padding: 30rpx 50rpx;
		}
.ipt{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.btn{
		height: 80rpx;
		display: flex;
		align-items: center;
	}
}
.pingLun{
	margin-top: 20rpx;
	height: 180rpx;
	border: 2rpx solid #ccc;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10rpx;
	.user{
		width: 120rpx;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content:center;
		.user-pic{
			width: 80rpx;
			height: 80rpx;
			background-color: #ccc;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		text{
			text-align: center;
		}
	}
	.content{
		flex: 2;
		display: flex;
		flex-direction: column;
		.user-content{
			height: 80rpx;
		}
		.updata-time{
			width: 100%;
			text-align: right;
		}
	}
}

</style>
