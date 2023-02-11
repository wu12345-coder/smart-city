<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<u-sticky>
			<u-tabs :list="listType" :current="current" @change="change"></u-tabs>
		</u-sticky>
		<view class="content">
			<view class="IdCard" v-for="item in listContent">
				<view class="txt">
					<view class="txt-name">
						{{item.title}}
					</view>
					<view class="author">
						类型:{{item.appealCategoryName}}
					</view>
					<view class="undertaker">
						{{item.undertaker}}
					</view>
					<view class="time">
						<view>开始时间:{{item.createTime}}</view>
					</view>
				</view>
				<view class="btn">
					<button type="primary" @click="getDonate(item.id)">查看详情</button>
				</view>
			</view>
			<button type="primary" @click="setAppeal">创建诉求</button>
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
				id:8,
				pageNum:1,
				pageSize:5
			};
		},
		methods:{
			async init(){
				let {rows}= await this.$u.api.getHotlineType();
				this.listType = rows
			},
			async getHotLineBanner(){
				let {data}= await this.$u.api.getHotLineBanner();
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.bannerList = data
				console.log(data);
			},
			change(index){
				this.current = index
				this.id = this.listType[index].id
				this.getContent()
			},
			async getContent(){
				let obj={
					appealCategoryId:this.id,
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				let {rows} = await this.$u.api.getHotlineContent(obj);
				console.log(rows);
				this.listContent = rows
			},
			async getDonate(id){
				uni.navigateTo({
					url:"detail/detail?id="+id
				})
			},
			async setAppeal(){
				let id = this.id
				uni.navigateTo({
					url:"setAppeal/setAppeal?id="+id
				})
			}
		},
		onLoad() {
			this.init()
			this.getContent()
			this.getHotLineBanner()
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
