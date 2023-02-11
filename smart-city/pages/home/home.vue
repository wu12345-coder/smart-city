<template>
	<view class="home-containner">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="width:100%;height:100%;" v-for="(item,index) in list" :key="index">
					<view class="swiper-item" style="width:100%;height:100%;">
						<image style="width:100%;height:100%;" :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="recommoned">
			<u-divider color="#000000" bg-color="transparent" class="line" height="80" margin-top="2">推荐服务</u-divider>
			<scroll-view scroll-x="true" class="Sview">
				<view class="recommoned-title-content">
					<view class="icons">
						<view class="icon" v-for="(item,index) in icon" :key="index">
							<view class="icon-containner" @tap="goPath(item.link)">
								<image :src="item.imgUrl" mode=""></image>
							</view>
							<view class="icon-title">
								{{item.serviceName}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<u-divider color="#000000" bg-color="transparent" class="line" height="80" margin-top="20">专题</u-divider>
		<NewIdCard :newList="newList"></NewIdCard>
		<view class="recommoned">
			<u-divider color="#000000" bg-color="transparent" class="line" height="80" margin-top="20">新闻热点</u-divider>
			<News ref="news" :newType="newType"></News>
		</view>
	</view>
</template>

<script>
	import NewIdCard from '@/compoments/NewIdCard.vue'
	import News from '@/compoments/News.vue'
	export default {
		data() {
			return {
				list: [],
				icon: [],
				newList: [],
				newType:[],
				newsList:[]
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			// 获取轮播图
			async init() {
				let res = await this.$u.api.getBannner();
				let icon = await this.$u.api.getAllLocation();
				let {rows}= await this.$u.api.getNewList();
				let {data} = await this.$u.api.getNewLike();
				this.icon = icon.rows.slice(0,5)
				console.log(this.icon);
				// 轮播图地址
				res.rows.forEach((item) => {
					var item = this.$baseUrl + item.advImg
					this.list.push(item)
				})
				// 图标地址
				this.icon.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
					item.link = '../' + item.link
				})

				// 获取新闻列表
				rows.forEach((item) => {
					if(this.newList.length<4){
						this.newList.push(item)
					item.cover = this.$baseUrl + item.cover
					}
				})
				// console.log(rows);
				//新闻种类 
				data.forEach((item) => {
					this.newType.push(item)
					// console.log("ref....");
					// console.log(this.$refs.news);
					this.$refs.news.change(0);
				})
			},
			goPath(path) {
				uni.navigateTo({
					url: path
				})
			}
		},
		components: {
			NewIdCard,
			News
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx;
	}

	.recommoned-title {
		padding-left: 30rpx;
		padding-bottom: 20rpx;
		font-weight: 700;
	}

	.icons {
		display: flex;
		width: 100%;
		padding: 20rpx;
		display: flex;
	}

	.icon {
		width: 140rpx;
		height: 140rpx;
		margin: 0 20rpx;

		.icon-containner {
			width: 120rpx;
			height: 120rpx;
			background-color: #4b90ff;
			border-radius: 50%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin: 0 auto;

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}

		.icon-title {
			width: 100%;
			height: 106rpx;
			text-align: center;
			padding-top: 10rpx;
			font-size: 12px;
		}
	}

	.Sview {
		width: 90%;
		height: 206rpx;
		margin: 0 auto;
	}
</style>
