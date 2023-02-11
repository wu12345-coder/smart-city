<template>
	<view class="containner">
		<view class="content">
			<view class="IdCard">
				<view class="IdCard-item" v-for="item in shopIdList">
					<view class="IdCard-item-top">
						<view class="pic">
							<image :src="item.pic" mode=""></image>
						</view>
						<view class="tips">
							<view class="title">
								{{item.sourceName}}
							</view>
							
							<view class="item">
								<view class="distance">
									联系方式:{{item.tel}}
								</view>
							</view>
							<view class="item">
								价格:{{item.price}}
							</view>
							<view class="item">
								面积:{{item.areaSize}}
							</view>
						</view>
						<view class="btn">
							<button type="primary" @click="goBuyMovice(item.id)">购买</button>
						</view>
					</view>
					<view class="introduction">
						地址:{{item.address}}
					</view>
					<view class="introduction">
						<uni-collapse accordion="true">
							<uni-collapse-item title="简介:">
								<view class="content" v-html="item.description"></view>
							</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goMore">更多房源</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 1,
				pageSize: 5,
				shopIdList: []
			}
		},
		methods: {
			async init() {
				let obj = {
					pageNum: this.pageNum,
					pageSize: this.pageSize,
				}
				let {
					rows
				} = await this.$u.api.getHomeList(obj)
				console.log(rows);
				rows.forEach((item) => {
					item.pic = this.$baseUrl + item.pic
				})
				this.shopIdList = rows
			},
			goMore() {
				this.pageSize += 3
				this.init()
			},
			goBuyMovice(ids) {
				uni.navigateTo({
					url:"houseDetail/houseDetail?ids="+ids
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
	.IdCard {
		margin: 10rpx auto;
		width: 90%;
		display: flex;
		flex-direction: column;

		.IdCard-item {
			padding: 20rpx;
			border-radius: 20rpx;
			margin-top: 10rpx;
			display: flex;
			flex-direction: column;
			background-color: #f5f5f5;

			.IdCard-item-top {
				display: flex;

				.pic {
					display: flex;

					image {
						width: 200rpx;
						height: 200rpx;
					}

				}

				.tips {
					width: 100%;
					padding-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						width: 300rpx;
						font-weight: 800;
						font-size: 18px;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}

					.btn {
						display: flex;
						align-items: flex-start;
					}

				}
			}

			.introduction {
				width: 100%;
				display: flex;
				line-height: 60rpx;
				text-indent: 2em;

				text {
					width: 20%;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					background-color: #f5f5f5;
				}

				.content {
					width: 100%;
					background-color: #f5f5f5;
				}
			}
		}
	}
</style>
