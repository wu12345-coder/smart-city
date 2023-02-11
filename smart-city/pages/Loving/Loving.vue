<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<uni-search-bar placeholder="请输入公益名称" @input="search"></uni-search-bar>
		<u-sticky>
			<u-tabs :list="listType" :current="current" @change="change"></u-tabs>
		</u-sticky>
		<view class="content">
			<view class="IdCard" v-for="item in listContent">
				<view class="pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="txt">
					<view class="txt-name">
						{{item.name}}
					</view>
					<view class="author">
						类型:{{item.author}}
					</view>
					<view class="time">
						<view>开始时间:{{item.createTime}}</view>
						<view>结束时间:{{item.activityAt}}</view>
					</view>
				</view>
				<view class="btn">
					<button type="primary" @click="getDonate(item.id,item.name)">发起捐助</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listType:[],
				listContent:[],
				bannerList:[],
				current:0,
				id:10,
				pageNum:1,
				pageSize:5
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getwelfareList();
				data.forEach((item)=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.listType = data
				console.log(data);
			},
			change(index){
				this.current = index
				this.id = this.listType[index].id
				console.log(this.id);
				this.getContent()
			},
			async getContent(){
				let obj={
					typeId:this.id,
					name:this.ipt,
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				let {rows} = await this.$u.api.getfareListContent(obj);
				rows.forEach(item=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.listContent = rows
				console.log(rows);
			},
			async getBanner(){
				let {data} = await this.$u.api.getfareListBanner();
				data.forEach(item=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.bannerList = data
				console.log(data);
			}, 
			search(){
				this.getContent()
			},
			getDonate(id,name){
				uni.navigateTo({
					url:"donate/donate?id="+id+"&name="+name
				})
			}
		},
		onLoad() {
			this.init()
			this.getContent()
			this.getBanner()
		}
	}
</script>

<style lang="less">
	swiper-item{
		width: 100%;
		height: 400rpx;
		image{
			width: 100%;
			height: 400rpx;
		}
	}
	.IdCard{
		display: flex;
		padding: 20rpx;
	}
	.pic{
		width: 220rpx;
		height: 100%;
		image{
			width: 220rpx;
			height: 220rpx;
		}
	}
	.txt{
		padding-left: 20rpx;
		.txt-name{
			font-weight: 800;
			font-size: 18px;
		}
	}
</style>
