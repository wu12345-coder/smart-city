<template>
	<view>
		<view class="feedback-containner">
			<view class="textarea_box">
				<textarea class="textarea" placeholder="请说明您的退款理由~" placeholder-style="font-size:28rpx" maxlength="200" v-model="desc" />
				<view class="num">{{ desc.length }}/200</view>
			</view>
			<u-button style="background-color: #e72e3a;color: white;font-size: 18px;margin-top: 40rpx;" @tap="getSure">退款</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				desc: '',
				orderNo:""
			};
		},
		methods:{
			async getSure(){
				let obj={
					orderNo:this.orderNo,
					reason:this.desc
				}
				console.log(obj);
				let data = await this.$u.api.getRefound(obj)
				console.log(data);
				if(data.code==200){
					uni.showToast({
						title:"退款成功"
					})
				}
				setTimeout(()=>{
					uni.navigateTo({
						url:"../../myself/myOrder"
					})
				},3000)
				
			}
		},
		onLoad(option) {
			console.log(option.orderNo);
			this.orderNo = option.orderNo
		}
	}
</script>

<style lang="less">
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
</style>
