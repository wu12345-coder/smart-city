<template>
	<view class="containner">
		<view class="IdCard">
			<input type="text" v-model="title" placeholder="请输入诉求标题">
			<textarea v-model="content" cols="30" rows="10" placeholder="请输入诉求内容"></textarea>
			<input type="text" v-model="undertaker" placeholder="请输入承办单位">
			<u-upload action="http://10.16.67.7:10001/prod-api/common/upload" :header="header" @on-success="change"></u-upload>
		</view>
		
		<button type="primary" @click="setAppeal">创建诉求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				content:"",
				title:"",
				header:{
					Authorization:'Bearer ' + uni.getStorageSync('token')
				},
				imgUrl:"",
				undertaker:""
			};
		},
		methods:{
			async setAppeal(){
				let obj={
					appealCategoryId:this.id,
					title: this.title,
					content:this.content,
					undertaker: "大连市政府",
					imgUrl:this.imgUrl
				}
				let data = await this.$u.api.setAppeal(obj);
				console.log(data);
				uni.showToast({
					title:data.msg
				})
				setTimeout(()=>{
					if(data.code==200){
						uni.redirectTo({
							url:"../hotline"
						})
					}
				},2000)
				
			},
			change(data){
				console.log(data);
				this.imgUrl=data.fileName
			}
		},
		onLoad(option) {
			this.id = option.id
		}
	}
</script>

<style lang="less">
	.containner{
		padding: 20rpx;
	}
input{
	padding: 20rpx;
	border-bottom: 2rpx solid #ccc;
	border-radius: 12rpx;
	margin-bottom: 10rpx;
}
textarea{
	width: 95%;
	margin: 0 auto;
	padding-left: 20rpx;
	border: 2rpx solid #ccc;
}
</style>
