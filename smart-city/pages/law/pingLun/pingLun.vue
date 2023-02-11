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
				id:"",
				legalExpertiseId:""
			};
		},
		methods:{
			async getSure(){
				let obj = {
					content:this.ipt,
					lawyerId:this.id,
					legalExpertiseId:this.legalExpertiseId,
					imageUrls:"/dev-api/profile/upload/image/2022/02/25/19d10a51-2950-46b0-ad70-daf7c5160320.jpg,/dev-api/profile/upload/image/2022/02/25/7dd5505a-8ffb49d5-81e2-58a66f08d34a.png",
					phone: "18842656666"
				}
				console.log(obj);
				let data = await this.$u.api.setAdvice(obj)
				uni.showToast({
					title:"发表成功"
				})
				this.ipt=""
				this.getPingLun()
			},
			async getPingLun(){
				let {rows} = await this.$u.api.getAdviceList()
				this.list = rows
				console.log(this.list);
				
			}
		},
		onLoad(option) {
			this.id = option.id
			this.legalExpertiseId = option.legalExpertiseId
			this.getPingLun()
		}
	}
</script>

<style lang="less">
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
