<template>
	<view>
		<view class="content">
			<view class="title">
				{{data.title}}
			</view>
			<view class="item">
				时间:{{data.createTime}}
			</view>
			<view class="content" v-html="data.content">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				data:[]
			};
		},
		methods:{
			async init(){
				let id =this.id
				let {data} = await this.$u.api.getYouthListDetail(id)
				this.data  = data
				console.log(data);
			},
			goDetail(id){
				uni.navigateTo({
					url:"../policyDetail/policyDetail?id="+id
				})
			}
		},
		onLoad(option) {
			this.id = option.id
			this.init()
		}
	}
</script>

<style lang="less">
.title{
		font-weight: 800;
		font-size: 18px;
		text-align: center;
		line-height: 60rpx;
	}
	.item{
		text-indent: 2em;
		text-align: center;
		padding: 20rpx;
	}
	.content{
		padding: 20rpx;
	}
</style>
