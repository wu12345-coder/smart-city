<template>
	<view class="allservice">
		<!-- 左侧tab按钮 -->
		<view class="tab-nav">
			<view class="tab-box" v-for="(item,index) in tabar" :key="index" :current="swiperIndex">
				<view :class="index==swiperIndex ? 'select-item' : 'item'" @tap="tab(index)">
					{{item}}
				</view>
			</view>
		</view>
		
		<!-- 右侧swiper按钮 -->
		<swiper class="swiper-box" :current="swiperIndex">
			<swiper-item v-for="(item,index) in list" @touchmove.stop>
				<scroll-view scroll-y="true" class="s-item">
					<view class="item-list">
						<view class="title">
							{{item[0].serviceType}}
						</view>
						<u-line color="#ccc"></u-line>
						<view class="icon">
							<view class="icon-item" v-for="(i,index) in item" :key="index" @tap ="goPage(i.link,i)">
								
								<view class="icon-pic">
									<image :src="i.imgUrl" mode="aspectFit"></image>
								</view>
								
								<view class="text">
									{{i.serviceName}}
								</view>
								
							</view>
						</view>
						
					</view>
				</scroll-view>
			</swiper-item>
		</swiper> 
	</view>
</template>
<script>
	export default{
		data(){
			return{
				tabList:[],
				current:0,
				swiperIndex:0,
				tabar:[],
				list:[]
			}
		},
		methods:{
			// tab栏切换
			tab(index) {
				this.swiperIndex = index;
			},
			getData(){
				console.log(this.tabar);
			},
			goPage(path,i){
				console.log(path,i);
				// 医疗服务
				if(i.id==29){
					uni.navigateTo({
						url:"../medical/index"
					})
					return 
				}
				//  数字图书馆
				if(i.id==30){
					uni.navigateTo({
						url:"../library/library"
					})
					return 
				}
				// 厨房助手
				if(i.id==34){
					uni.navigateTo({
						url:"../kitchen/kitchen"
					})
					return 
				}
				// 垃圾分类
				if(i.id==36){
					uni.navigateTo({
						url:"../rubbish/rubbish"
					})
					return 
				}
				// 爱心捐赠
				if(i.id==25){
					uni.navigateTo({
						url:"../Loving/Loving"
					})
					return 
				}
				// 法律咨询
				if(i.id==31){
					uni.navigateTo({
						url:"../law/law"
					})
					return 
				}
				
				//  自愿者服务
				if(i.id==33){
					uni.navigateTo({
						url:"../voluntary/voluntary"
					})
					return 
				}
				
				// 物流查询
				if(i.id==24){
					uni.navigateTo({
						url:"../logistics/logistics"
					})
					return 
				}
				
				//  青年驿站
				if(i.id==26){
					uni.navigateTo({
						url:"../station/station"
					})
					return 
				}
				
				// 政府热线
				if(i.id==35){
					uni.navigateTo({
						url:"../hotline/hotline"
					})
					return 
				}
				
				// 数据分析
				if(i.id==27){
					uni.navigateTo({
						url:"../analysis/analysis"
					})
					return 
				}
				
				// 教育
				if(i.id==28){
					uni.navigateTo({
						url:"../education/education"
					})
					return 
				}
				
				uni.navigateTo({
					url:path
				})
				
				
			},
			async getService(){
				let {rows} = await this.$u.api.getAllLocation();
				rows.forEach((item)=>{
					item.imgUrl =this.$baseUrl + item.imgUrl
					item.link = "../" + item.link
					this.tabar.push(item.serviceType)
				})
				this.tabList = rows
				
				const set = new Set(this.tabar)
				this.tabar = [...set];
				
				let carService = this.tabList.filter((i)=>{ var j = i.serviceType === "车主服务"; return j })
				let lifeService = this.tabList.filter((i)=>{ var j = i.serviceType === "生活服务"; return j })
				let manService = this.tabList.filter((i)=>{ var j = i.serviceType === "便民服务"; return j })
				
				this.list = [carService,lifeService,manService]
				console.log(this.list);
			}
		},
		onLoad() {
			this.getService();
		},
	}
</script>
<style lang="less">
	.allservice{
		width: 100%;
		height: calc(100vh);
		display: flex;
		justify-content: space-between;
	}
	.tab-nav{
		width: 150rpx;
		height: 100%;
		background-color: aliceblue;
	}
	.swiper-box{
		width: 80%;
		height: 100%;
		border: 2rpx solid #ccc;
	}
	.tab-box,.item{
		width: 100%;
		height: 80rpx;
		color: white;
		line-height: 80rpx;
		text-align: center;
		background-color: #3766ff;
	}
	.select-item{
		width: 100%;
		height: 80rpx;
		background-color: #3db2cc;
		text-align: center;
		line-height: 80rpx;
	}
	.s-item,.item-list{
		width: 100%;
		height: 100%;
	}
	.icon-containner{
		width: 100%;
		height: 100%;
	}
	.title{
		width: 100%;
		padding: 10rpx;
	}
	.icon{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items:center;
		flex-flow: wrap;
		align-content:flex-start;
	}
	.icon-item{
		width: 180rpx;
		height: 180rpx;
		background-color: aliceblue;
		border-radius: 50%;
		margin-top: 50rpx;
		image{
			width: 100rpx;
			height: 100%;
			margin: 20rpx auto;
		}
		.text{
			width: 100%;
			height: 40rpx;
			text-align: center;
			line-height: 50rpx;
		}
	}
	.icon-pic{
		width: 100%;
		height: 100rpx;
		image{
			width: 100%;
			height: 100rpx;
			display: block;
		}
	}
</style>