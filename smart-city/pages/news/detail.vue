<template>
	<view class="newsDetail-container">
		<view class="content-title">
		</view>
		<view class="content-pic">
			<image :src="obj.cover" mode=""></image>
		</view>
		<view class="content-txt">
			<view class="content" v-html="obj.content">
				{{obj.content}}
			</view>
		</view>
		
		<view class="pinglun" @click="goPingLunDetail">
			<u-icon name="edit-pen" size="40"></u-icon>
			<u-input placeholder="说说你的看法" @click="goPingLunDetail"></u-input>
			<view class="icon">
				<u-icon name="chat-fill" size="40"></u-icon>
				<u-badge :count="count" :offset="[10, 10]"></u-badge>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj:{},
				list:[],
				count:"",
				newId:""
			}
		},
		onLoad(option) {
			this.goNewDetail(option.id)
			let id = option.id
			this.newId = id
			this.getPingLun()
		},
		methods: {
			async goPingLunDetail(){
				uni.navigateTo({
					url:"newDetail/pingLun/pingLun?data="+JSON.stringify(this.list) + "&newId=" + this.newId
				})
			},
			async goNewDetail(id){
				let {data} = await this.$u.api.getNewDetail(id)
				data.cover = this.$baseUrl+data.cover
				this.obj = data
			},
			async getPingLun(){
				let {rows} = await this.$u.api.getNew()
				// this.list = rows
				this.count = this.list.length
			}
		}
	}
</script>

<style lang="less" scoped>
.newsDetail-container{
	width: 100%;
	height: 100%;
	.content-title{
		width: 80%;
		text-align: center;
		margin: 0 auto;
		font-weight: 800;
		font-size: 18px;padding: 20rpx;
	}
	.content-pic{
		width: 500rpx;
		height: 500rpx;
		margin: 50rpx auto;
		image{
			width: 100%;
			height: 100%;
		}
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
