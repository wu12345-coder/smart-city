<template>
	<view class="containner">
		<view class="pic">
			<image :src="data.cover" mode=""></image>
			<view class="pic-title">
				<text class="pic-name">{{data.name}}</text>
				<text>时长:{{data.duration}}min</text>
				<text>上映时间:{{data.playDate}}</text>
				<text>
					<u-rate :current="data.score"></u-rate>
				</text>
				<text>语言:{{data.language}}</text>
				<view class="num">
					<text class="yes">看过:{{data.favoriteNum}}</text>
					<text class="no">想看:{{data.likeNum}}</text>
				</view>
			</view>
		</view>
		<view class="content">
			简介:<text v-html="data.introduction"></text>
		</view>
		<view class="chooseNumber">
			<view class="chooseNumber-title">
				选座表
			</view>
			<view class="row" v-for="(item,row) in 8">
				<view class="column" v-for="(column,i) in 8" @click="choose(row,column)"
					:class="{active : aciveRow == row && aciveColumn== column}">
					<view class="seat" v-if="aciveRow == row && aciveColumn== column">
						<u-icon name="account-fill" size="50"></u-icon>
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="getData">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				aciveRow: 0,
				aciveColumn: 0,
				flag: true,
				arr: [],
				id: 0,
				ids: 0
			};
		},
		methods: {
			async init(id) {
				this.id = id
				let {
					data
				} = await this.$u.api.getBuyMovice(id)
				data.cover = this.$baseUrl + data.cover
				this.data = data
				console.log(data);
			},
			async choose(row, column) {
				console.log(row, column);
				if (this.flag) {
					this.flag = !this.flag
					// 两次点击相同取消并去除
					if (row == this.row && column == this.column) {
						console.log("111");
						this.aciveColumn = 0,
							this.aciveRow = 0
						return
					}
				}
				this.row = row,
					this.column = column,
					this.aciveColumn = column,
					this.aciveRow = row
				this.flag = !this.flag
			},
			async getData(){
				let obj = {
					movieId: Number(this.ids),
					theaterId: Number(this.id),
					roomId: 1,
					orderItems: [
						{
							seatId: 1,
							seatCol: this.aciveColumn,
							seatRow: this.aciveRow
						}
					],
					timesId:21
				}
				console.log(obj);
				let data = await this.$u.api.getMoiveOrder(obj)
				console.log(data);
			}
		},
		watch: {
			// aciveColumn(newVal,oldVal){
			// 	console.log(newVal,oldVal);
			// 	// this.flag = true
			// 	this.aciveColumn = this.column
			// 	console.log("333");
			// },
			// aciveRow(newVal,oldVal){
			// 	this.aciveRow = this.row
			// 	console.log(newVal,oldVal);
			// 	// this.flag = true
			// 	console.log("444");
			// }
		},
		onLoad(option) {
			this.ids = option.ids
			this.id = option.id
			this.init(option.id)
		}
	}
</script>

<style lang="less">
	.pic {
		width: 100%;
		height: 400rpx;
		display: flex;

		image {
			width: 40%;
			height: 400rpx;
		}

		.pic-title {
			width: 60%;
			padding-left: 20rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			.pic-name {
				font-weight: 800;
				font-size: 18px;
			}

			text {}
		}
	}

	.num {
		display: flex;
		justify-content: space-between;
		text-align: left;

		.yes {
			color: #cc2114;
		}

		.no {
			width: 50%;
			color: #ff9b29;
		}
	}


	.content {
		padding-left: 20rpx;

		text {
			text-indent: 2rem;
		}
	}

	.chooseNumber {
		width: 80%;
		height: 400rpx;
		background-color: #fff;
		margin: 20rpx auto;

		.chooseNumber-title {
			text-align: center;
			font-weight: 800;
			font-size: 18px;
			line-height: 80rpx;
		}

		.row {
			display: flex;
		}

		.column {
			width: 80rpx;
			height: 80rpx;
			background-color: #ccc;
			border: #fff solid 2rpx;
			display: flex;
			align-content: center;
			justify-content: center;
		}

		.active {
			width: 80rpx;
			height: 80rpx;
			background-color: #29a6cc;
			border: #fff solid 2rpx;
			display: flex;
			align-content: center;
			justify-content: center;
		}

		.seat {
			display: flex;
			align-content: center;
			justify-content: center;
		}

		.btn {
			margin-top: 50rpx;
		}
	}
</style>
