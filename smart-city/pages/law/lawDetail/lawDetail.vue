<template>
	<view>
		<view class="pic">
			<image :src="data.certificateImgUrl" mode=""></image>
			<image :src="data.avatarUrl" mode=""></image>
		</view>
		<view class="item">
			教育背景：{{data.eduInfo}}
		</view>
		<view class="item">
			简介：{{data.baseInfo}}
		</view>
		<view class="ipt">
			<u-icon name="edit-pen" size="40" @click="goPingLunDetail"></u-icon>
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
				id:"",
				data:{},
				legalExpertiseId:""
			};
		},
		methods: {
			async init() {
				let id = this.id
				let {data} = await this.$u.api.getLawManListDetail(id);
				this.data = data
				data.avatarUrl = this.$baseUrl + data.avatarUrl 
				data.certificateImgUrl = this.$baseUrl + data.certificateImgUrl 
				data.certificateImgUrl = data.certificateImgUrl.replace("dev-api","prod-api")
				console.log(data);
				this.legalExpertiseId = data.legalExpertiseId
			},
			goPingLunDetail(){
				uni.navigateTo({
					url:"/pages/law/pingLun/pingLun?id="+this.id+"&legalExpertiseId="+this.legalExpertiseId
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
.pic{
	width: 100%;
	image{
		width: 100%;
	}
}
.item{
	text-indent: 2em;
	line-height: 60rpx;
}
.ipt{
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
