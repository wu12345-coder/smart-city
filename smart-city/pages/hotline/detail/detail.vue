<template>
	<view>
		<view class="title">
			{{data.title}}
		</view>
		<view class="name">
			{{data.undertaker}}
		</view>
		<view class="pic">
			<image :src="data.imgUrl" mode=""></image>
		</view>
		
		<view class="item">
			{{data.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			};
		},
		methods:{
			async init(id){
				let {data}= await this.$u.api.getHotlineDetail(id);
				this.data = data
				console.log(data);
				data.imgUrl = this.$baseUrl+"/prod-api" + data.imgUrl
				console.log(data);
			}
		},
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="less">
	.title{
		font-weight: 800;
		font-size: 18px;
		text-align: center;
		line-height: 80rpx;
	}
	.name{
		float: right;
		margin-right: 20%;
		margin-bottom: 20rpx;
	}
	.item{
		text-indent: 2em;
	}
.pic{
	width: 100%;
	image{
		width: 100%;
	}
}
</style>
