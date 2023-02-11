<template>
	<view class="feedback-containner">
		<u-input placeholder="请输入标题" v-model="title" :border="true" bgColor=" #d5d5d5"></u-input>
		<view class="textarea_box">
			<textarea class="textarea" placeholder="您有什么好建议可以提出来~" placeholder-style="font-size:28rpx" maxlength="200" @input="descInput" v-model="desc" />
			<view class="num">{{ desc.length }}/200</view>
		</view>
		<u-button style="background-color: #2266be;color: white;font-size: 18px;margin-top: 40rpx;" @tap="setFeed">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				desc: '',
				title:''
			}
		},
		methods: {
			descInput(e) {
				console.log(e.detail.value.length, '输入的字数')
			},
			async setFeed(){
				let obj={
					title:this.title,
					content:this.desc
				}
				let feedData = await this.$u.api.getFeedback(obj)
				console.log(feedData);
			}
		},
		onLoad() {
			
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
