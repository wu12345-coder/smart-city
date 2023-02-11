<template>
	<view class="containner">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in bannerList">
					<view class="swiper-item">
						<image :src="item.advImg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="icon-list">
			<view class="icon-item" v-for="item in iconList" @click="goDetail(item.themeName)">
				<view class="icon-item-pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<text>{{item.themeName}}</text>
			</view>
		</view>
		
		
		
		<view class="ipt">
			<u-search @custom="search" placeholder="请输入附近商店名称" v-model="ipt"></u-search>
		</view>
		<view class="content-title">
			附近商家
		</view>
		
		<view class="content">
			<view class="content-tap">
				<view class="IdCard" v-for="item in shopIdList" @click="getFoodsType(item.id)">
					<view class="icon">
						美团专送
					</view>
					<view class="IdCard-pic">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<view class="IdCard-txt">
						<view class="IdCard-txt-name">
							{{item.name}}
						</view>
						<view class="IdCard-txt-shopData" v-if="item.introduction != ''">
							<view class="IdCard-txt-shopData-introduction">
								店铺简介: {{item.introduction}}
							</view>
						</view>
						<view class="IdCard-txt-shopData">
							<view class="IdCard-txt-shopData-left">
								<view class="IdCard-txt-score">
									<u-icon name="star-fill" :label="item.score" color="#ffd435" size="28"></u-icon>
								</view>
								<view class="IdCard-txt-saleQuantity">
									销量:{{item.saleQuantity}}
								</view>
							</view>
							<view class="IdCard-txt-shopData-right">
								<view class="IdCard-txt-deliveryTime">
									{{item.deliveryTime}}分钟
								</view>
								<view class="IdCard-txt-distance">
									{{item.distance}}km
								</view>
							</view>
						</view>
						<view class="IdCard-txt-shopData">
							<view class="IdCard-txt-avgCost">
								人均￥{{item.avgCost}}
							</view>
							<view class="IdCard-txt-adress">
								{{item.address}}
							</view>
						</view>

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
				ipt: "",
				shopIdList: [],
				bannerList:[],
				iconList:[],

			}
		},
		methods: {
			async init() {
				let {
					rows
				} = await this.$u.api.getShopId()
				rows.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.shopIdList = rows
			},
			async getBanner(){
				let {rows}= await this.$u.api.getShopIdBanner()
				this.bannerList = rows
				this.bannerList.forEach((item) => {
					item.advImg = this.$baseUrl + item.advImg
				})
				console.log(this.shopIdList);
			},
			async getIcon(){
				let {data}= await this.$u.api.getShopIdThem()
				this.iconList = data
				this.iconList.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				console.log(this.iconList);
			},
			async getFoodsType(id){
				let obj={
					sellerId:id
				}
				let {data}= await this.$u.api.getFoodsType(obj)
				let list = data
				uni.navigateTo({
					url:"shopIddetail/FoodsDetail/foodsDetail/foodsDetail?data="+JSON.stringify(list)
				})
				console.log(data);
			},
			search(){
				if(this.ipt){
					this.shopIdList = this.shopIdList.filter(i=>{return i.name.indexOf(this.ipt)>-1} )
				}else{
					this.init()
				}
				
			},
			goDetail(themeName){
				uni.navigateTo({
					url:"shopIddetail/shopIddetail?themeName="+themeName
				})
			}
		},
		onLoad() {
			this.init()
			this.getBanner()
			this.getIcon()
		}
	}
</script>

<style lang="less">
	swiper{
		height:300rpx;
		.swiper-item{
			width: 100%;
			height:480rpx;
			image{
				width: 100%;
				height:300rpx ;
			}
		}
	}
	.icon-list{
		width: 100%;
		height: 180rpx;
		display:flex;
		justify-content: space-between;
		padding: 20rpx;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		background-color: #fff;
		.icon-item{
			display: flex;
			align-items: center;
			flex-direction: column;
			.icon-item-pic{
				image{
					width: 80rpx;
					height: 80rpx;
				}
			}
			
		}
	}
	.content-title {
		font-weight: 800;
		font-size: 18px;
		// line-height: 60rpx;
		height: 60rpx;
		padding-left: 20rpx;
		background-color: #fff;
	}
	
	.containner {
		background-color: #f5f5f5;
		padding: 10rpx;
	}

	.ipt {
		background-color: #fff;
		padding: 10rpx;
	}

	.content {
		margin-top: 10rpx;
		background-color: #fff;

		

		.IdCard {
			width: 100%;
			height: 300rpx;
			border-radius: 15rpx;
			padding: 10rpx 10rpx 20rpx 10rpx;
			display: flex;
			position: relative;
			justify-content: space-between;
			border-bottom: 2rpx solid #ccc;
			.icon{
				position: absolute;
				top:5%;
				right: 10%;
				background-color: #ffd435;
				border-radius: 15rpx;
				font-size: 10px;
			}
			.IdCard-pic {
				width: 200rpx;
				height: 100%;
				display: flex;
				padding: 10rpx;

				image {
					width: 100%;
					height: 200rpx;
				}
			}

			.IdCard-txt {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.IdCard-txt-name {
				width: 100%;
				height: 40rpx;
				line-height: 40rpx;
				font-weight: 800;
				font-size: 16px
			}

			.IdCard-txt-shopData,
				{
				height: 30%;
				display: flex;
				justify-content: space-between;

				.IdCard-txt-shopData-introduction {
					height: 100%;
					font-size: 12px
				}

				.IdCard-txt-shopData-left,
				.IdCard-txt-shopData-right {
					display: flex;
					width: 40%;
					justify-content: space-around;
				}
			}
			.IdCard-txt-avgCost,.IdCard-txt-adress{
				font-size: 10px
			}



		}

	}
</style>
