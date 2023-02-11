<template>
	<view>
		<u-sticky>
			<u-tabs :list="list" @change="change" :current="current"></u-tabs>
		</u-sticky>
		<view class="job" v-if="current == 0">
			<uni-search-bar placeholder="搜索" v-model="wordsSearch" @confirm="search"></uni-search-bar>
			<u-divider>热门职位</u-divider>
			<!-- <view class="Grid">
				<view class="Grid-Item" v-for="item in jobList">
					<view class="GStitle">{{item.professionName}}</view>
				</view>
			</view> -->
			<scroll-view scroll-x="true">
				<view class="scroll-box">
					<view class="nav" v-for="item in jobList" @click="click(item.id)"
						:class="{active:activeIndex==item.id}">
						{{item.professionName}}
					</view>

				</view>
			</scroll-view>
			<u-divider>职位列表</u-divider>
			<view class="nav-content">
				<view class="nav-content-item" v-for="item in jobIdList" @click="goJobDetail(item.id)">
					<view class="descripion"><text class="item">职业名称:</text>{{item.professionName}}</view>
					<view class="descripion"><text class="item">职业描述:</text><text>{{item.obligation}}</text></view>
					<view class="descripion"><text class="item">单位地址:</text>{{item.address}}</view>
					<view class="descripion"><text
							class="item">酬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪:</text>{{item.salary}}</view>
				</view>
			</view>
		</view>

		<view class="jilu" v-if="current == 1">
			<view class="nav-content">
				<view class="nav-content-item" v-for="item in JLList">
					<view class="descripion"><text class="item">公司名称:</text>{{item.companyName}}</view>
					<view class="descripion"><text
							class="item">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间:</text><text>{{item.satrTime}}</text>
					</view>
					<view class="descripion"><text
							class="item">用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户:</text>{{item.userName}}</view>
					<view class="descripion"><text
							class="item">酬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪:</text>{{item.money}}元</view>
				</view>
				<view class="btn">
					<button type="primary" @click="goMore">显示更多</button>
				</view>
			</view>
		</view>
		<view class="jianli" v-if="current == 2">
			<view class="pic">
				<u-icon name="account-fill" size="150" color="#ffffff"></u-icon>
			</view>
			<view class="items">
				<text>昵称:</text>
				<text class="text01">{{uerInfo.nickName}}</text>
			</view>
			<view class="items">
				<text>性别:</text>
				<text class="text01">{{uerInfo.sex}}</text>
			</view>
			<view class="items">
				<text>Email:</text>
				<text class="text01">{{uerInfo.email}}</text>
			</view>
			<view class="items">
				<text>电话号码:</text>
				<text class="text01">{{uerInfo.phonenumber}}</text>
			</view>
			<view class="btn">
				<button type="primary" @click="goJLSetting">个人简历管理</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: "找工作"
					},
					{
						name: "投递记录"
					},
					{
						name: "个人简历"
					}
				],
				wordsSearch: "",
				current: 0,
				jobList: [],
				scrollLeft: 0,
				activeIndex: 1,
				jobIdList: [],
				pageNum: 1,
				pageSize: 5,
				JLList: [],
				uerInfo: {}
			}
		},
		methods: {
			change(index) {
				this.current = index
			},
			async getJobPosition() {
				let {
					rows
				} = await this.$u.api.getJobPosition()
				this.jobList = rows
				// console.log(this.jobList);
			},
			async click(id) {
				// console.log(e);
				this.activeIndex = id
				let obj = {
					professionId: id
				}
				let {
					rows
				} = await this.$u.api.getjobList(obj)
				this.jobIdList = rows
			},
			async search(e) { //这是错误的这个吗？
				console.log("e------", e, "e.value------", e.value);
				
				console.log("this.jobIdList------111-", this.jobIdList);
				console.log(typeof this.jobIdList,typeof e.value);
				let {
					rows
				} = await this.$u.api.getjobList()
				this.jobIdList = rows
				this.jobIdList = this.jobIdList.filter((item) => {
					if(item.professionName){
						return item.professionName.indexOf(e.value) >= 0;
					}
					
				})
			},
			goJobDetail(id) {
				uni.navigateTo({
					url: "./jobDetail/jobDetail?id=" + id
				})
			},
			async getJL() {
				let obj = {
					pageNum: this.pageNum,
					pageSize: this.pageSize
				}
				let {
					rows
				} = await this.$u.api.getJL(obj)
				this.JLList = rows
			},
			goMore() {
				this.pageSize += 5
				this.getJL()
			},
			async getINfo() {
				let {
					user
				} = await this.$u.api.getSearchUser()
				this.uerInfo = user
			},
			goJLSetting() {
				uni.navigateTo({
					url: "JlSetting/JlSetting"
				})
			}
		},
		onLoad() {
			this.getJobPosition()
			this.click()
			this.getJL()
			this.getINfo()
		}
	}
</script>

<style lang="less">
	.pic {
		border-radius: 50%;
		width: 180rpx;
		height: 180rpx;
		background-color: #67bcf4;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 50rpx auto;
	}

	.items {
		width: 40%;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		line-height: 70rpx;

	}

	.Grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		background: #f7f7f7;
		padding: 40rpx 20rpx;

		.Grid-Item {
			width: 25%;
			height: 213rpx;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 1rpx solid #ccc;

			.GStitle {
				width: 100%;
				height: 34rpx;
				line-height: 34rpx;
				color: #06121e;
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
	}

	scroll-view {
		white-space: nowrap;

		.scroll-box {
			width: 100%;
			display: flex;

			.nav {
				width: 300rpx;
				padding: 10rpx;
				text-align: center;
			}

		}

	}

	.nav-content {
		.nav-content-item {
			padding: 20rpx;
			line-height: 80rpx;
			// background-color: #f7f7f7;
			border-bottom: 2rpx solid #ccc;
		}

		.descripion {
			display: flex;

			.item {
				width: 20%;
			}

			text {
				width: 80%;
			}
		}
	}

	.active {
		color: #497ccc;
		font-weight: 800;
	}
</style>
