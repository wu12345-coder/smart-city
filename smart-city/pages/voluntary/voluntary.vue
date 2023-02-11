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
			<u-tabs :list="tabList" :current="current" @change = "change"></u-tabs>
		</u-sticky>
		
		<view class="IdCard" v-if="current==0" v-for="item in newsList" @click="goDetail(item.id)">
			<view class="pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			<view class="txt">
				<view class="title">
					{{item.title}}
				</view>
				<view class="content">
					{{item.summary}}
				</view>
				<view class="timer">
					{{item.createTime}}
				</view>
			</view>
			
			
		</view>
		
		<view class="IdCard"  v-if="current==1"  v-for="item in newsList">
			<view class="txt">
				<view class="title">
					{{item.title}}
				</view>
				<view class="content">
					地点:{{item.undertaker}}
				</view>
				<view class="content">
					条件:{{item.requireText}}
				</view>
				<view class="timer">
					开始时间:{{item.startAt}}
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goActivityDetail(item.id)">查看详情</button>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList:[],
				newsList:[],
				tabList:[
					{name:"新闻列表"},
					{name:"活动列表"}
				],
				current:0
			};
		},
		methods:{
			async getBanner(){
				let {data} = await this.$u.api.getVolunteerBanner()
				this.bannerList = data
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
			},
			async getVolunteerNewsList(){
				let {rows} = await this.$u.api.getVolunteerNewsList()
				rows.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.newsList = rows
				console.log(rows);
			},
			async getVolunteerActivityList(){
				let {rows} = await this.$u.api.getVolunteerActivityList()
				this.newsList = rows
				console.log(rows);
			},
			goDetail(id){
				uni.navigateTo({
					url:"detail/detail?id=" + id
				})
			},
			change(index){
				this.current = index
				if(index==0){
					this.getVolunteerNewsList()
				}
				if(index==1){
					this.getVolunteerActivityList()
				}
			},
			goActivityDetail(id){
				uni.navigateTo({
					url:"activityDetail/activityDetail?id="+ id
				})
			}
			
		},
		onLoad() {
			this.getBanner()
			this.getVolunteerNewsList()
		}
	}
</script>

<style lang="less">
swiper-item{
	width: 100%;
	image{
		width: 100%;
	}
}
.IdCard{
	padding: 20rpx;
	display: flex;
	justify-content: space-between;
	.pic{
		width: 220rpx;
		height: 220rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		width: 60%;
		padding-left: 20rpx;
		.title{
			font-weight: 800;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.content{
			text-indent: 2em;
		}
		.timer{
			text-align: right;
		}
	}
}
</style>
