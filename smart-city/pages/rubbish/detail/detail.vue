<template>
	<view class="containner">
		<view class="title">
			{{data.title}}
		</view>
		<view class="name">
			作者:{{data.author}}
		</view>
		<view class="pic">
			<image :src="data.imgUrl" mode=""></image>
		</view>
		<view class="content" v-html="data.content"></view>
		<view class="pinglun" @click="goPingLunDetail">
			<u-icon name="edit-pen" size="40"></u-icon>
			<u-input placeholder="说说你的看法" @click="goPingLunDetail"></u-input>
			<view class="icon">
				<u-icon name="chat-fill" size="40"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				id:""
			};
		},
		methods: {
			async init(id) {
				let {
					data
				} = await this.$u.api.rubbishContentListDetail(id)
				data.imgUrl = this.$baseUrl + data.imgUrl
				this.data = data
				console.log(data);
			},
			goPingLunDetail(){
				uni.navigateTo({
					url:"../pinglun/pinglun?id="+this.id
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
	.title {
		font-weight: 800;
		font-size: 18px;
		text-align: center;
	}
	.name{
		float: right;
		padding-right: 20%;
	}
	.pic{
		image{
			width: 100%;
		}
	}
	.pinglun{
		width: 100%;
		padding: 20rpx;
		height: 80rpx;
		display: flex;
		border-top: 2rpx solid #ccc;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		bottom: 0;
	}
	
</style>
