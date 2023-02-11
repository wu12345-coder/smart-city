<template>
	<view class="wrap">
		<view class="u-tabs-box">
		<u-tabs-swiper activeColor="#ffffff" ref="tabs" bg-color="#2E95FF" :current="swiperCurrent" swiperWidth="auto" is-scoll="false" @change="change" :list="newType"></u-tabs-swiper>
		</view>
		
		<view class="content-box">
			<view class="content-item" v-for="item in newsList" @tap="goDetail(item.id)">
				<!-- {{item}} -->
				<view class="content-pic">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="content-txt">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				newsList: [],
				swiperCurrent:0,
			}
		},
		created() {
			//this.change(1)
			console.log("1111");
		},
		methods: {
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				let ele = this.newType[index]
				this.getNewsList(ele.id)
			},
			async getNewsList(id) {
				let {rows} = await this.$u.api.getNewList({
					type: id
				})
				this.newsList = []
				rows.forEach((item)=>{
					const baseUrl = "http://10.16.67.7:10001"
					item.cover=baseUrl + item.cover
					this.newsList.push(item)
				})
				// console.log(this.newsList);
			},
			goDetail(id){
				console.log(id);
				uni.navigateTo({
					url:'/pages/news/detail?id='+id
				})
			}
			
		},
		props:{
			newType:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="less" scoped>
	/* #ifndef H5 */
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	/* #endif */
	.u-tabs-box {
		background-color: #2E95FF;
	}
	.content-box{
		background-color: #a1d7ff;
	}
	.content-item{
		width: 100%;
		height: 250rpx;
		// background-color: #a1d7ff;
		border-radius: 25rpx;
		// margin-top: 10rpx;
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	}
	.content-pic{
		width: 200rpx;
		height: 200rpx;
		background-color: #ebf9ff;
		border-radius: 25rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
			border-radius: 25rpx;
		}
	}
	.content-txt{
		height: 100%;
		flex: 1;
		border-radius: 25rpx;
		text-indent: 2em;
		display: flex;
		padding: 0 10rpx 0 10rpx;
		align-items: center;
	}
</style>
