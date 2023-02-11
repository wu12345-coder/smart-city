<template>
	<view class="banner-container">
		<view class="banner" >
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="width:100%;height:100%;border-radius: 25rpx;" v-for="(item,index) in list" :key="index">
					<view class="swiper-item" style="width:100%;height:100%;">
						<image style="width:100%;height:100%;" :src="item.advImg"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="tip">
			转眼已经到了五月,人们如果需要生活缴费、医院挂号和医疗资讯等服务,则需要顶着烈日在街上来回奔波了.生活和缴费挂号功能正式上线,解决了大家这一难题。登陆进入"便利店",动动手指就可以全部搞定。
		</view>
		<view class="content">
			<view class="btn" v-for="item in btnList" @tap="goDetail(item.id)">
				<view class="btnList">
					<image :src="item.imgUrl" mode="" class="pic"></image>
					<view class="txt">{{item.liveName}}</view>
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
				btnList:[]
			}
		},
		methods: {
			async init(){
				let {rows} = await this.$u.api.getLivingList()
				this.list = rows;
				const baseUrl = "http://10.16.67.7:10001"
				this.list.forEach((item)=>{
					item.advImg = baseUrl + item.advImg 
				})
				
				// 查询缴费分类
				let {data} = await this.$u.api.getCategoryList()
				data.forEach((item)=>{
					item.imgUrl = baseUrl + item.imgUrl
				})
				this.btnList = data
				console.log(this.btnList);
			},
			goDetail(id){
				console.log(id);
				switch(id){
					case 1:{
						uni.navigateTo({
							url:"phone/phone"
						})
						break
					}
					case 2:{
						uni.navigateTo({
							url:"electricity/electricity?id="+id
						})
						break
					}
					case 3:{
						uni.navigateTo({
							url:"electricity/electricity?id="+id
						})
						break
					}
					case 4:{
						uni.navigateTo({
							url:"electricity/electricity?id="+id
						})
						break
					}
					
				} 
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less" scoped>
	.banner-container{
		width: 100%;
		height: calc(100vh - 90rpx);
		background-color: #f0f0f0;
		overflow: hidden;
	}
	.tip{
		width: 90%;
		padding: 20rpx;
		text-indent: 2em;
		font-size: 15px;
		line-height: 60rpx;
		margin: 0 auto;
		background-color: #ececec;
	}
	.content{
		width: 90%;
		margin: 0 auto;
		height: 400rpx;
		background-color: #ececec;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.pic{
			width: 100rpx;
			height: 100rpx;
		}
		.txt{
			width: 100%;
			text-align: center;
		}
	}
</style>
