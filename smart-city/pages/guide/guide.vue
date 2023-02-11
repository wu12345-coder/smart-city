<template>
	<view class="guide-containner">
		<swiper :indicator-dots="true" :style="{'height':windowHeight}" indicator-active-color="#fff">
			<swiper-item>
				<view class="swiper-item" :style="{'height':windowHeight}">
					<image src="../../static/pic/0-引导图1.jpg" mode="" ></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :style="{'height':windowHeight}">
					<image src="../../static/pic/0-引导图2.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :style="{'height':windowHeight}">
					<image src="../../static/pic/0-引导图3.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :style="{'height':windowHeight}">
					<image src="../../static/pic/0-引导图4.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :style="{'height':windowHeight}">
					<view class="txt" @tap="goSetting">
						IP端接口设置
					</view>
					<image src="../../static/pic/0-引导图5.jpg" mode=""></image>
					<u-button class="goHome" type="primary" :plain="true" @tap="goHome">立即体验</u-button>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:'603px'
			}
		},
		methods: {
			
			goSetting(){
				uni.navigateTo({
					url:'../setting/setting'
				})
			},
			goHome(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		},
		onLoad() {
			var _me = this
			uni.getSystemInfo({
				success(res) {
					_me.windowHeight = res.windowHeight + 'px';
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	swiper{
		width: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.goHome{
		position: fixed;
		left: 50%;
		margin-left: -15%;
		bottom: 8%;
	}
	.txt{
		position: fixed;
		color: #55ffff;
		top: 2%;
		z-index: 999;
		right: 5%;
	}
</style>
