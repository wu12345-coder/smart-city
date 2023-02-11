<template>
	<view class="containner">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="width:100%;height:100%;" v-for="(item,index) in list" :key="index">
					<view class="swiper-item" style="width:100%;height:100%;">
						<image style="width:100%;height:100%;" :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<u-divider margin-bottom="50" margin-top="50">相关影院</u-divider>
		<!-- <button @click="show = true">请选择地区</button>
		<u-picker mode="region" v-model="show"  @confirm = "change"></u-picker> -->
		<view class="IdCard">
			<view class="IdCard-item" v-for="item in whereList" @click="goMoiveDetail(item.id)">
				<view class="pic">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="tips">
					<view class="title">
						{{item.name}}
					</view>
					<view class="score">
						<u-rate count="count" :current="item.score" disabled></u-rate>
					</view>
					<view class="item">
						<view class="city">
							城市:{{item.city}}
						</view>
						<view class="distance">
							距离:{{item.distance}}
						</view>
					</view>
					<view class="item address">
						地址:{{item.address}}
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="goMore">更多影院</button>
		</view>







	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				whereList: [],
				pageNum: 1,
				pageSize: 5,
				show: false,
				value: '',
				area:""
			}
		},
		methods: {
			async init() {
				let res = await this.$u.api.getMovice();
				// 轮播图地址
				res.rows.forEach((item) => {
					var item = this.$baseUrl + item.advImg
					this.list.push(item)
				})
			},
			async initWhere() {
				let obj = {
					pageNum: this.pageNum,
					pageSize: this.pageSize,
					status:"Y"
				}
				let {
					rows
				} = await this.$u.api.getMoviceWhere(obj);
				rows.forEach(item => {
					item.cover = this.$baseUrl + item.cover
				})
				this.whereList = rows
				console.log(rows);
			},
			goMore() {
				this.pageSize += 3
				this.initWhere()
			},
			goMoiveDetail(id){
				uni.navigateTo({
					url:"moiveDetail/moiveDetail?id="+id
				})
			}
			// change(e) {
			// 	console.log(e);
			// 	let area = e.province.label + e.city.label + e.area.label
			// 	this.area = area
			// 	console.log(area);
			// }
		},
		onLoad() {
			this.init()
			this.initWhere()
		}
	}
</script>

<style lang="less">
	.containner {
		width: 100%;


		.IdCard {
			margin: 10rpx auto;
			width: 90%;

			.IdCard-item {
				padding: 20rpx;
				border-radius: 20rpx;
				margin-top: 10rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				background-color: #f5f5f5;
			}

			.pic {
				align-items: center;
				display: flex;

				image {
					width: 200rpx;
					height: 200rpx;
				}
			}

			.tips {
				padding-left: 20rpx;
			}
		}

		.btn {
			display: flex;
		}
	}
</style>
