<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in bannerList">
					<view class="swiper-item">
						<image :src="item.advImg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="content">
			<u-sticky>
				<u-tabs :list="typeList" :current="current" clickTab="click" @change="change($event)"></u-tabs>
			</u-sticky>
			<view class="content-result">
				<view class="IdCard" v-for="item in typeResultList" @click="goDetail(item.id)">
					<view class="IdCard-pic">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<view class="IdCard-txt">
						<view class="title">名称:{{item.name}}</view>
						<view>报名人数:{{item.signupNum}}</view>
						<view v-if="item.status==0">活动状态:不开放</view>
						<view v-if="item.status==1">活动状态:开放</view>
						<view>{{item.publishTime}}</view>
					</view>

					<!-- 	<view class="IdCard-txt">
						<text v-html="item.content"></text>
					</view> -->
				</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				typeList: [],
				typeResultList: [],
				current: 0,
				sort: 1
			}
		},
		methods: {
			async getActivityBanner() {
				let {
					rows
				} = await this.$u.api.getActivityBanner()
				rows.forEach(item => {
					item.advImg = this.$baseUrl + item.advImg
				})
				this.bannerList = rows
			},
			async getActivityList() {
				let {
					data
				} = await this.$u.api.getActivityList()
				this.typeList = data
			},
			async getActivityResultList() {
				let obj = {
					categoryId: this.sort
				}
				let {
					rows
				} = await this.$u.api.getActivityResultList(obj)
				this.typeResultList = rows
				rows.forEach(item => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				console.log(this.typeResultList);
			},
			change(index) {
				this.current = index
				this.typeList[index].sort
				this.sort = this.typeList[index].sort
				this.getActivityResultList()
			},
			goDetail(id){
				uni.navigateTo({
					url:"activityDetail/activityDetail?id="+id
				})
			}
		},
		onLoad() {
			this.getActivityBanner()
			this.getActivityList(),
			this.getActivityResultList()
		}
	}
</script>

<style lang="less">
	.swiper-item {
		width: 100%;
		height: 400rpx;
	}

	.content-result {
		display: flex;
		flex-direction: column;
	}

	.IdCard {
		padding-bottom: 20rpx;
		display: flex;
	}

	.IdCard-pic {
		width: 100%;
		image {
			width: 100%;
			height: 200rpx;
		}
	}

	.IdCard-txt {
		width: 100%;
		padding-left: 20rpx;
		view {
			font-weight: 800;
			font-size: 16px;
		}

		.title {
			width: 400rpx;
			font-weight: 800;
			font-size: 18px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}

	}
</style>
