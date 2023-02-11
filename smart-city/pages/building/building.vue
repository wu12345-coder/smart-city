<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic/限选主题-智慧党建/banner1.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic/限选主题-智慧党建/hospital2.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/pic/限选主题-智慧党建/hospital-4.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<u-divider>党建动态</u-divider>
		<u-sticky>
			<u-tabs :list="list" :current="current" @change="change2"></u-tabs>
		</u-sticky>
		<view class="IdCard" v-for="item in list[current].content">
				<view class="title">
					{{item.title}}
				</view>
				<view class="content">
					{{item.content}}
				</view>
			
		</view>
		<u-divider>党员学习</u-divider>
		<u-sticky>
			<u-tabs :list="buildingList" :current="currentIndex" @change="change1"></u-tabs>
		</u-sticky>
		<view v-if="currentIndex == 0">
			<u-collapse>
				<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
					{{item.body}}
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="videoContent" v-if="currentIndex == 1">
			<view class="item">
				<video>
					<source src="myVideo.mp4" type="video/mp4">
				</video>
				<view class="title">
					学习视频
				</view>
			</view>
			<view class="item">
				<video>
					<source src="myVideo.mp4" type="video/mp4">
				</video>
				<view class="title">
					学习视频
				</view>
			</view>
			<view class="item">
				<video>
					<source src="myVideo.mp4" type="video/mp4">
				</video>
				<view class="title">
					学习视频
				</view>
			</view>
			<view class="item">
				<video>
					<source src="myVideo.mp4" type="video/mp4">
				</video>
				<view class="title">
					学习视频
				</view>
			</view>
			
		</view>
		<view v-if="currentIndex == 2">
			<u-collapse>
				<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
					<view class="item" @click="goContentDetail">
						{{item.body}}
					</view> 
				</u-collapse-item>
			</u-collapse>
		</view>
		<u-divider>建言献策</u-divider>
		<textarea cols="30" rows="10" placeholder="请输入您的建议或意见"></textarea>
		<button type="primary" @click="click">提交意见</button>
		<u-divider>随手拍</u-divider>
		<u-upload action="xxxx"></u-upload>
		<u-divider>组织活动</u-divider>
		<button type="primary" @click="click">提交</button>
		<view class="content">
			<u-sticky>
				<u-tabs :list="typeList" :current="currentID" clickTab="click" @change="change($event)"></u-tabs>
			</u-sticky>
			<view class="content-result">
				<view class="IdCard" v-for="item in typeResultList" @click="goDetail(item.id)">
					<view class="IdCard-pic">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<view class="IdCard-txt">
						<view class="title">名称:{{item.name}}</view>
						<view>报名人数:{{item.signupNum}}</view>
						<view v-if="item.status==0">活动状态:不开放</view>
						<view v-if="item.status==1">活动状态:开放</view>
						<view>{{item.publishTime}}</view>
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
				list:[
					{
						name:"政治建设",
						content:[
							{
								title:"政治建设",
								content:"旨在通过正确的政治纲领、政治路线、政治立场、政治目标，以及严明的政治纪律，保证全体党员具有高度的政治觉悟，坚持正确政治方向，维护党的团结统一，实现党肩负的政治使命。"
							},
							{
								title:"全心全意为人民服务",
								content:"旨在通过正确的政治纲领、政治路线、政治立场、政治目标，以及严明的政治纪律，保证全体党员具有高度的政治觉悟，坚持正确政治方向，维护党的团结统一，实现党肩负的政治使命。"
							},
							{
								title:"全心全意为人民服务",
								content:"旨在通过正确的政治纲领、政治路线、政治立场、政治目标，以及严明的政治纪律，保证全体党员具有高度的政治觉悟，坚持正确政治方向，维护党的团结统一，实现党肩负的政治使命。"
							},
							{
								title:"全心全意为人民服务",
								content:"旨在通过正确的政治纲领、政治路线、政治立场、政治目标，以及严明的政治纪律，保证全体党员具有高度的政治觉悟，坚持正确政治方向，维护党的团结统一，实现党肩负的政治使命。"
							}
						]
					},
					{
						name:"思想建设",
						content:[
							{
								title:"思想建设",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							}
							
						]
					},
					{
						name:"组织建设",
						content:[
							{
								title:"组织建设",
								content:"实现全面建成小康社会奋斗目标、实现中华民族伟大复兴的中国梦，关键在于培养造就一支具有铁一般信仰、铁一般信念、铁一般纪律、铁一般担当的干部队伍。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							}
						]
					},
					{
						name:"作风建设",
						content:[
							{
								title:"作风建设",
								content:"中国共产党的发展历程中，领导革命、建设和改革取得胜利和成就的经验中都贯穿着加强党的作风建设的实践，都把建设党的事业与建设良好的作风紧紧地联系在一起。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							},
							{
								title:"全心全意为人民服务",
								content:"强化马克思主义理论武装，对党员进行党的基本理论、基本路线、基本方略的教育，保持全党在思想上政治上行动上的高度一致，保持党的先进性、纯洁性。"
							}
						]
					}
				],
				current:0,
				itemList:[{
					head:"第一节",
					body:"学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美"
				},
				{
					head:"第二节",
					body:"学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美"
				},
				{
					head:"第三节",
					body:"学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美"
				}
					
				],
				buildingList:[
					{name:"政治"},
					{name:"政策"},
					{name:"二十大精神"},
				],
				currentIndex:0,
				typeList: [],
				typeResultList: [],
				currentID: 0,
				sort: 1
			};
		},
		methods:{
			change(index){
				this.current = index
			},
			change2(index){
				this.current = index
			},
			change1(index){
				this.currentIndex = index
			},
			goContentDetail(){
				uni.navigateTo({
					url:"contentDetail/contentDetail"
				})
			},
			async getActivityList() {
				let {
					data
				} = await this.$u.api.getActivityList()
				this.typeList = data
			},
			async getActivityResultList() {
				let obj = {
					categoryId: this.sort
				}
				let {
					rows
				} = await this.$u.api.getActivityResultList(obj)
				this.typeResultList = rows
				rows.forEach(item => {
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				console.log(this.typeResultList);
			},
			change(index) {
				this.currentID = index
				this.typeList[index].sort
				this.sort = this.typeList[index].sort
				this.getActivityResultList()
			},
			goDetail(id){
				uni.navigateTo({
					url:"../activity/activityDetail/activityDetail?id="+id
				})
			},
			click(){
				uni.showToast({
					title:"提交成功"
				})
			}
		},
		onLoad() {
			this.getActivityList(),
			this.getActivityResultList()
		}
	}
</script>

<style lang="less">
swiper-item{
	width: 100%;
	image{
		width: 100%;
		height: 400rpx;
	}
}
.IdCard{
	padding: 20rpx;
	.title{
		font-weight: 800;
		font-size: 18px
	}
}
.videoContent{
	display: flex;
	padding: 20rpx;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	.item{
		width: 40%;
		video{
			width: 100%;
			height: 200rpx;
		}
		.title{
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-weight: 800;
		}
	}
}
textarea{
	width: 90%;
	margin: 0 auto;
	padding: 20rpx;
	border: 2rpx solid #333;
	border-radius:15rpx;
}
</style>
