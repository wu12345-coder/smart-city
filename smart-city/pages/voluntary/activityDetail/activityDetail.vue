<template>
	<view class="IdCard">
		<view class="title">
			{{contentData.title}}
		</view>
		<view class="undertaker item">
			单位:{{contentData.undertaker}}
		</view>
		<view class="txt item">
			条件:{{contentData.requireText}}
		</view>
		<view class="detail item">
			详情:
			<view v-html="contentData.detail">
			</view>
		</view>
		<button type="primary" @click="goSure">立即报名</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				contentData:{}
			};
		},
		methods:{
			async getDetail(){
				let id = this.id
				let {data}= await this.$u.api.getVolunteerActivityDetail(id)
				this.contentData = data
				console.log(data);
			},
			async goSure(){
				let obj={
					activityId:this.id,
					newState: true
				}
				console.log(obj);
				let data= await this.$u.api.getVolunteerRegister(obj)
				uni.showToast({
					title:data.msg
				})
				console.log(data);
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getDetail()
		}
	}
</script>

<style lang="less">
.title{
	font-weight: 800;
	font-size: 18px;
	text-align: center;
}
.IdCard{
	padding: 20rpx;
}
.item{
	line-height: 80rpx;
}
</style>
