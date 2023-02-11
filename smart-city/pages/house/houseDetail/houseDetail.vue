<template>
	<view class="containner">
		<view class="pic">
			<image :src="data.pic" mode=""></image>
		</view>
		<view class="content">
			<view class="title">
				{{data.sourceName}}
			</view>
			<view class="price item">
				价格:{{data.price}}
			</view>
			<view class="areaSize item">
				面积:{{data.areaSize}}
			</view>
			<view class="tel item">
				联系方式:{{data.tel}}
			</view>
			<view class="description item">
				简介:{{data.description}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[]
			};
		},
		methods:{
			async init(id) {
				let {data} = await this.$u.api.goHourstDetail(id)
				data.pic = this.$baseUrl + data.pic
				this.data = data
				console.log(data);
			},
		},
		onLoad(option) {
			this.init(option.ids)
		}
	}
</script>

<style lang="less">
.containner{
	.pic{
		width: 100%;
		image{
			width: 100%;
		}
	}
	.content{
		padding: 40rpx;
		.title{
			font-weight: 800;
			line-height: 80rpx;
		}
		.item{
			line-height: 80rpx;
		}
	}
}
</style>
