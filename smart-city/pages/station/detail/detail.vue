<template>
	<view class="content">
		<view class="title">
			{{data.name}}
		</view>
		<view class="pic">
			<image :src="data.imgUrl" mode=""></image>
		</view>
		
		<view class="introduce">
			{{data.introduce}}
		</view>
		
		<view class="btn">
			<button type="primary" @click="goSure">查看政策</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				data:{}
			};
		},
		methods:{
			async init(id){
				let {data} = await this.$u.api.getYouthDetail(id)
				data.imgUrl = this.$baseUrl + data.imgUrl
				this.data = data
				console.log(data);
			},
			goSure(){
				uni.navigateTo({
					url:"../policy/policy?id="+ this.id
				})
			}
		},
		onLoad(option) {
			this.id = option.id
			this.init(option.id)
		}
	}
</script>

<style lang="less">
.pic{
	width: 100%;
		image{
			width: 100%;
		}
	}
	.title{
		font-weight: 800;
		font-size: 18px;
		text-align: center;
		line-height: 80rpx;
	}
	.introduce{
		text-indent: 2em;
		line-height: 50rpx;
		padding: 20rpx;
	}
</style>
