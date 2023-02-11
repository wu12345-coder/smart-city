<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in bannerList">
					<view class="swiper-item">
						<image :src="item.imgUrl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="search">
			<uni-search-bar placeholder="请输入关键词" @focus="search" @click="search"></uni-search-bar>
		</view>
		<u-sticky>
			<u-tabs :list="listTab" :current = "current" @change="change"></u-tabs>
		</u-sticky>
		<view class="content">
			<view class="IdCard" v-for="item in listContent" @click="goDetail(item.id)">
				
				<view class="pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				
				<view class="txt">
					<view class="txt-title">
						{{item.title}}
					</view>
					<view class="txt-name">
						{{item.author}}
					</view>
					<view class="txt-time">
						更新时间:{{item.createTime}}
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goMore">显示更多</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listTab:[],
				listContent:[],
				current:0,
				sort:7,
				pageNum:1,
				pageSize:5,
				bannerList:[]
			};
		},
		methods:{
			async init(){
				let {rows} = await this.$u.api.rubbishList()
				this.listTab = rows
				console.log(rows);
			},
			change(index){
				// console.log(index);
				this.current = index
				this.sort = this.listTab[index].id
				this.getData()
			},
			async getData(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					type:this.sort
				}
				let {rows} = await this.$u.api.rubbishContentList(obj)
				rows.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.listContent = rows
				console.log(rows);
			},
			goMore(){
				this.pageSize += 5
				this.getData()
			},
			goDetail(id){
				uni.navigateTo({
					url:"detail/detail?id=" + id
				})
			},
			search(){
				uni.navigateTo({
					url:"sarch/sarch"
				})
			},
			async getBanner(){
				let {data} = await this.$u.api.getBannerrubbish()
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.bannerList = data
				console.log(data);
			}
		},
		onLoad() {
			this.init()
			this.getData()
			this.getBanner()
		}
	}
</script>

<style lang="less">
	.IdCard{
		display: flex;
		padding: 20rpx;
	}
.pic{
	image{
		width: 120rpx;
		height: 120rpx;
	}
}
.txt{
	padding-left: 20rpx;
	.txt-title{
		font-weight: 800;
		
	}
}
swiper-item{
	width: 100%;
	image{
		width: 100%;
	}
}
</style>
