<template>
	<view>
		<u-navbar :title-bold="true"  back-icon-color="#fff" title-color="#fff" :background="background" is-fixed @custom-back="goBack" :title="themeName"></u-navbar>
		<view class="ipt">
			<u-search @custom="search" placeholder="请输入美食名称" v-model="ipt"></u-search>
		</view>
		<view class="content">
			<view class="content-tap">
				<view class="IdCard" v-for="item in shopIdList" @click="goFoodsDetails(item.productList[0].categoryId,item.productList[0].sellerId)">
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
				themeName:"",
				background:{backgroundColor: '#2578F4',},
				color:{ color: '#f0f5ff' },
				shopIdList: [],
				ipt:"",
				pageNum:1,
				pageSize:8,
				keyword:"",
				list:[]
			};
		},
		methods:{
			async init(){
				let {rows} = await this.$u.api.getShopIdList()
				rows.forEach((item) => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.shopIdList = rows
			
			},
			goBack(){
				uni.navigateTo({
					url:"../index"
				})
			},
			async getFoodsList(){
				// keyword=披萨
				let arr = ["汉堡","披萨","炸鸡","面","饮品","美食"]
				arr.forEach(item=>{
					if(this.themeName.indexOf(item)>-1){
						this.list.push(item)
					}
				})
				if(this.list.length==0){
					this.init()
				}else{
					this.keyword = this.list[0]
					let obj={
						keyword:this.keyword,
						pageNum:this.pageNum,
						pageSize:this.pageSize
					}
					let {rows} = await this.$u.api.getFoodsList(obj)
					rows.forEach((item) => {
						item.imgUrl = this.$baseUrl + item.imgUrl
					})
					this.shopIdList = rows
				}
			},
			goFoodsDetails(categoryId,sellerId){
				uni.navigateTo({
					url:"./FoodsDetail/FoodsDetail?categoryId="+categoryId+"&sellerId="+sellerId
				})
				console.log(categoryId,sellerId);
			}
		},
		onLoad(option) {
			this.themeName = option.themeName
			// console.log(JSON.parse(option.data));
			this.getFoodsList()
		}
	}
</script>

<style lang="less">
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
