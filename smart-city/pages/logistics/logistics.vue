<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="IdCard" v-for="item in logisticsList">
			<view class="pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			<view class="txt">
				<view class="txt-name">
					{{item.name}}
				</view>
				<view class="txt-phone">
					  电话:{{item.phone}}
				</view>
			</view>
			<view class="btn">
				<button type="default" @click="goDetail(item.id)">查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logisticsList:[],
				bannerList:[]
			};
		},
		methods:{
			async getLogisticsList(){
				let {data} = await this.$u.api.getLogisticsList();
				data.forEach((item)=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.logisticsList = data
			},
			goDetail(id){
				uni.navigateTo({
					url:"detail/detail?id="+id
				})
			},
			async init(){
				let {data} = await this.$u.api.getLogisticsBanner();
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl 
				})
				this.bannerList = data
			}
		},
		onLoad() {
			this.getLogisticsList();
			this.init()
		},
	}
</script>

<style lang="less">
	.IdCard{
		display: flex;
		padding: 20rpx;
		background-color: #f5f5f5;
		margin-top: 20rpx;
		.txt{
			display: flex;
			flex-direction: column;
			.txt-name{
				font-weight: 800;
				line-height: 80rpx;
			}
		}
	}
.pic{
	width: 30%;
	padding-left: 20rpx;
	image{
		width: 120rpx;
		height: 120rpx;
	}
}
swiper{
	width: 100%;
	height: 400rpx;
	image{
		width: 100%;
		height: 400rpx;
	}
}
</style>
