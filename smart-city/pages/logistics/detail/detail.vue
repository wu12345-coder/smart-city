<template>
	<view>
		<view class="pic">
			<image :src="detailList.imgUrl" mode=""></image>
		</view>
		<view class="content">
			<view class="introduction">
				<view>
					电话:{{detailList.phone}}
				</view>
				<view>
					运输方式:{{detailList.shippingMethod}}
				</view>
			</view>
			<view class="introduce">
				简介:{{detailList.introduce}}
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="goDetail">物流投诉</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailList:[]
			};
		},
		methods:{
			async getLogisticsDetail(id){
				let {data} = await this.$u.api.getLogisticsDetail(id);
				data.imgUrl =this.$baseUrl + data.imgUrl
				this.detailList = data
				console.log(data);
			},
			goDetail(){
				uni.navigateTo({
					url:"../logisticsDetail/logisticsDetail?id="+this.detailList.id
				})
			}
		},
		onLoad(option) {
			this.getLogisticsDetail(option.id);
		},
	}
</script>

<style lang="less">
.pic{
	image{
		width: 100%;
	}
}
.content{
	padding: 30rpx;
	.introduction{
		font-weight: 800;
		font-size: 16px;
	}
}
</style>
