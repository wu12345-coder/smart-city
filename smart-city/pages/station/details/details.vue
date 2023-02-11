<template>
	<view class="content">
		
		<view class="title">
			{{data.name}}
		</view>
		<view class="pic">
			<image :src="data.coverImgUrl" mode=""></image>
		</view>
		<view class="address">
			地址:{{data.address}}
		</view>
		<view class="introduce">
			{{data.introduce}}
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList">
				<view class="swiper-item">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				data:{},
				bannerList:[]
			};
		},
		methods:{
			async init(id){
				let {data} = await this.$u.api.getYouthInnListDetail(id)
				data.coverImgUrl = this.$baseUrl + data.coverImgUrl
				console.log(data.imageUrls);
				data.imageUrlList.forEach(item=>{
					item = this.$baseUrl + item
					this.bannerList.push(item)
				})
				this.data = data
				console.log(data);
			}
		},
		onLoad(option) {
			this.id = option.id
			this.init(option.id)
		}
	}
</script>

<style lang="less">
	swiper{
		width: 100%;
		height: 400rpx;
		image{
			width: 100%;
			height: 400rpx;
		}
	}
.pic{
	width: 100%;
		image{
			width: 100%;
		}
	}
	.title{
		font-weight: 800;
		font-size: 18px;
		text-align: center;
		line-height: 80rpx;
	}
	.introduce{
		text-indent: 2em;
		line-height: 50rpx;
		padding: 20rpx;
	}
	.address{
		text-align: center;
		font-weight: 800;
		font-size: 16px;
	}
</style>
