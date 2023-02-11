<template>
	<view class="containner">
			<view class="feedback-containner">
				<view class="start">
					<u-rate v-model="count"></u-rate>
				</view>
				<view class="textarea_box">
					<textarea class="textarea" placeholder="您有什么好建议可以提出来~" placeholder-style="font-size:28rpx" maxlength="200" v-model="desc" />
					<view class="num">{{ desc.length }}/200</view>
				</view>
				<u-button style="background-color: #2266be;color: white;font-size: 18px;margin-top: 40rpx;" @tap="getSure">发表</u-button>
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
				id:"",
				orderNo:"",
				desc: '',
				count:""
			};
		},
		methods:{
			async getSure(){
				let obj = {
					content:this.desc,
					score:this.count,
					orderNo:this.orderNo
				}
				let data = await this.$u.api.getShopComment(obj)
				console.log(data);
				if(data.code == 200){
					uni.showToast({
					title:"发表成功"
					})
					this.ipt=""
					this.getPingLun()
				}
			
			},
			async getPingLun(){
				let {rows} = await this.$u.api.getShopPingLun()
				this.list = rows
				
			}
		},
		onLoad(option) {
			this.id = option.id
			this.orderNo = option.orderNo
			this.getPingLun()
		}
	}
</script>

<style lang="less" scoped>
	.feedback-containner{
		padding: 40rpx;
	}
	.textarea_box{
		padding: 20rpx;
		background-color: #F2F2F2;
		border-radius: 15rpx;
		/deep/ .uni-textarea-textarea{
			font-size: 28rpx;
			line-height: 45rpx;
		}
		.num{
			width: 100%;
			height: 40rpx;
			text-align: right;
			color: gray
		}
	}
	.containner{
			width: 100%;
			padding-bottom: calc(var(--window-bottom) - 50px);
			padding: 30rpx 50rpx;
		}
.ipt{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 280rpx;
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
