<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<uni-search-bar placeholder="请输入律师名字" v-model="ipt" @input="search"></uni-search-bar>
			<u-sticky>
				<u-tabs :list="list" :current="current" @change="change"></u-tabs>
			</u-sticky>
			<view class="content">
				<view class="IdCard" v-for="item in manList">
					<view class="top" @click="goDetail(item.id)">
						<view class="pic">
							<image :src="item.avatarUrl" mode=""></image>
						</view>
						<view class="txt">
							<view class="txt-name">
								{{item.name}}
							</view>
							<view class="licenseNo">
								执业证编号:{{item.licenseNo}}
							</view>
							<view class="timer">
								工作起始时间{{item.workStartAt}}
							</view>
							<view class="favorableRate">
								好评率:{{item.favorableRate}}%
								
							</view>
						</view>
					</view>
					<view class="item">
						<uni-collapse accordion="true">
							<uni-collapse-item title="简介:">
								<view>{{item.baseInfo}}</view>
							</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList:[],
				list:[],
				manList:[],
				current:10,
				id:10,
				ipt:"",
				pageSize:5,
				pageNum:1
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getLawBanner();
				data.forEach((item)=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.bannerList = data
			},
			async getList(){
				let {rows} = await this.$u.api.getLawList();
				rows.forEach((item)=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
				})
				this.list = rows
				console.log(this.list);
			},
			async getManList(){
				let obj={
					legalExpertiseId:this.id,
					name:this.ipt
				}
				console.log(obj);
				let {rows} = await this.$u.api.getLawManList(obj);
				rows.forEach((item)=>{
					item.avatarUrl =this.$baseUrl + item.avatarUrl
				})
				this.manList = rows
				console.log(this.manList);
			},
			change(index){
				this.current = index
				this.id = this.list[index].id
				this.getManList()
			},
			search(){
				this.getManList()
			},
			goDetail(id){
				uni.navigateTo({
					url:"lawDetail/lawDetail?id="+id
				})
				
			}
		},
		onLoad() {
			this.init()
			this.getList()
			this.getManList()
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
	flex-direction: column;
	.top{
		display: flex;
	}
	.pic{
		width: 220rpx;
		image{
			width: 220rpx;
			height: 220rpx;
		}
	}
	.txt{
		padding-left: 20rpx;
	}
}
</style>
