<template>

	<view class="containner">
		<view class="nav">
			<u-sticky>
				<u-tabs :list="listNav" @change="change" :current="current"></u-tabs>
			</u-sticky>
		</view>
		<view v-if="current == 0">
			<view class="IdCard">
				<view class="IdCard-item" v-for="item in dataList">
					<view class="IdCard-item-top">
						<view class="pic">
							<image :src="item.cover" mode=""></image>
						</view>
						<view class="tips">
							<view class="title">
								{{item.name}}
							</view>
							<view class="score">
								评分:<u-rate :current="item.score" disabled></u-rate>
							</view>
							<view class="item">
								<view class="city">
									语言:{{item.language}}
								</view>
								<view class="distance">
									时长:{{item.duration}}min
								</view>
							</view>
						</view>
						<view class="btn">
							<button type="warn" @click="goBuyMovice(item.id)">购票</button>
						</view>
					</view>
					<view class="introduction">
						<uni-collapse accordion="true">
							<uni-collapse-item title="简介:">
								<view class="content" v-html="item.introduction"></view>
							</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goMore">更多电影</button>
			</view>
		</view>
		<view v-if="current == 1">
			<view class="IdCard">
				<view class="IdCard-item" v-for="item in vedioList">
					<view class="IdCard-item-title">
						{{item.name}}
					</view>
					<view class="IdCard-list">
						<view class="pic">
							<video :src="item.video" :poster="item.cover" controls></video>
						</view>
					</view>
					<view class="introduction">
						<view class="updataTime">
							播出时间:{{item.playDate}}
						</view>
					</view>
					<view class="introduction">
						<uni-collapse accordion="true">
							<uni-collapse-item title="简介:">
								<view class="content" v-html="item.introduction"></view>
							</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goMore">更多电影</button>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				dataList: [],
				pageNum: 1,
				pageSize: 5,
				listNav: [{
						name: "正在热映",
					},
					{
						name: "即将上映",
					}
				],
				vedioList: [],
				current: 0,
				id :""
			};
		},
		methods: {
			change(index) {
				console.log(index);
				this.current = index
				if (index == 1) {
					this.getVideo()
				}
			},
			async getVideo() {
				let obj = {
					pageNum: this.pageNum,
					pageSize: this.pageSize,
				}
				let {
					rows
				} = await this.$u.api.getVideo(obj)
				rows.forEach(item => {
					item.cover = this.$baseUrl + item.cover
					item.video = this.$baseUrl + item.video
				})
				this.vedioList = rows
				console.log(rows);
			},
			async init(id) {
				this.id = id
				let obj = {
					theaterId: id
				}
				let {
					rows
				} = await this.$u.api.getMoviceWhereList(obj);



			},
			async getMoive() {
				let obj = {
					pageNum: this.pageNum,
					pageSize: this.pageSize,
				}
				let {
					rows
				} = await this.$u.api.getMoviceDataList(obj);
				rows.forEach(item => {
					item.cover = this.$baseUrl + item.cover
				})
				this.dataList = rows
			},
			goMore() {
				this.pageSize += 3
				if(this.current==0){
					this.getMoive()
				}else{
					this.getVideo()
				}
			},
			goBuyMovice(ids) {
				let id = this.id
				uni.navigateTo({
					url: "../buyMovice/buyMovice?ids="+ids +"&id="+id
				})
			}
		},
		onLoad(option) {
			this.init(option.id)
			this.getMoive()
		}
	}
</script>

<style lang="less">
	.containner {
		width: 100%;
.IdCard-list{
	width: 100%;
}
		video {
			width: 100%;
			height: 400rpx;
		}
		.IdCard-item-title{
			text-align: center;
			font-weight: 800;
			font-size: 18px;
			line-height: 35px;
		}
		.updataTime{
			width: 100%;
			text-align: center;
			font-weight: 700;
		}

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
							font-weight: 800;
							font-size: 18px;
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


	}
</style>
