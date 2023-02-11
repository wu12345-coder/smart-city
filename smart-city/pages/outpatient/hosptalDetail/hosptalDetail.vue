<template>
	<view class="datail-container">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="width:100%;height:100%;" v-for="(item,index) in list" :key="index">
					<view class="swiper-item" style="width:100%;height:100%;">
						<image style="width:100%;height:100%;" :src="item.imgUrl"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="detail" v-html="brief">
			{{brief}}
		</view>
		<u-button bgColor="#ccc" @click="goMake" class="btn">预约挂号</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brief:"",
				id:"",
				list:[]
			};
		},
		methods: {
			async init(){
				let obj={
					hospitalId:this.id
				} 
				let {data} = await this.$u.api.getHospitalBanner(obj)
				this.list = data
				let baseUrl = "http://10.16.67.7:10001"
				this.list.forEach((item)=>{
					 item.imgUrl = baseUrl + item.imgUrl
									 
				})
				console.log(data);
			},
			goMake(){
				uni.navigateTo({
					url:"../hosptalMake/hosptalMake"
				})
			}
		},
		onLoad(option) {
			this.brief = option.brief
			this.id = option.id
			console.log(option.id);
			this.init()
		}
		
	}
</script>

<style lang="less">
.banner{
	width: 100%;
	height: 300rpx;
	margin: 0 auto;
	border-radius: 25rpx;
	overflow: hidden;
}
.datail-container{
	padding: 20rpx;
}
.detail{
	width: 100%;
	padding: 40rpx;
	margin-top: 50rpx;
	border-radius: 25rpx;
	box-shadow: #ccc 2px 2px 10px;
	text-indent: 2em;
	line-height: 40rpx;
}
.btn{
	background-color: #1c9afa;
	color: white;
	font-size: 18px;
	margin-top: 20rpx;
}
</style>
