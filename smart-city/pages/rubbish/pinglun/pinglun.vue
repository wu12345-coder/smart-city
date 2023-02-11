<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in list">
					<view class="swiper-item">
						<image :src="item.imgUrl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="ipt">
			<u-input type="text" v-model="ipt" placeholder="请说说你的看法" height="80" border/>
			<u-button type="primary" @click="getSure">发表</u-button>
		</view>
		
		<view class="pingLun" v-for="item in PLlist">
			<view class="user">
				<view class="user-pic">
					<u-icon name="account-fill" size="60"></u-icon>
				</view>
				<text>{{item.userName}}</text>
			</view>
			<view class="content">
				<view class="user-content">
					{{item.content}}
				</view>
				<view class="updata-time">
					{{item.commentDate}}
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				pageNum:1,
				pageSize:5,
				ipt:"",
				PLlist:[],
				id:""
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getBannerrubbishList()
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.list = data
				console.log(data);
			},
			async getNewsList(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					newsId:this.id
				}
				let {rows} = await this.$u.api.getNewsList(obj)
				this.PLlist = rows
				console.log(rows);
			},
			async getSure(){
				let obj = {
					newsId:this.id,
					content:this.ipt
				}
				console.log(obj);
				let data = await this.$u.api.getNewsPLList(obj)
				console.log(data);
				uni.showToast({
					title:"发表成功"
				})
				this.ipt=""
				this.getNewsList()
			}
			
		},
		onLoad(option) {
			this.init(),
			this.id = option.id
			this.getNewsList()
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
.ipt{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.btn{
		height: 80rpx;
		display: flex;
		align-items: center;
	}
}
.pingLun{
	margin-top: 20rpx;
	height: 180rpx;
	border: 2rpx solid #ccc;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10rpx;
	.user{
		width: 120rpx;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content:center;
		.user-pic{
			width: 80rpx;
			height: 80rpx;
			background-color: #ccc;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		text{
			text-align: center;
		}
	}
	.content{
		flex: 2;
		display: flex;
		flex-direction: column;
		.user-content{
			height: 80rpx;
		}
		.updata-time{
			width: 100%;
			text-align: right;
		}
	}
}
</style>
