<template>
	<view>
		<view class="title">
			{{contentData.title}}
		</view>
		<view class="pic">
			<image :src="contentData.imgUrl" mode=""></image>
		</view>
		<view class="summary">
			{{contentData.summary}}
		</view>
		<view class="content" v-html="contentData.content">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				contentData:{}
			};
		},
		methods:{
			async getDetail(){
				let id = this.id
				let {data} = await this.$u.api.getVolunteerNewsDetail(id)
				console.log(data);
				data.imgUrl = this.$baseUrl + data.imgUrl
				this.contentData = data
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getDetail()
		}
	}
</script>

<style lang="less">
.title{
	text-align: center;
	font-weight: 800;
	line-height: 80rpx;
}
.summary{
	text-indent: 2em;
}
image{
	width: 100%;
}
</style>
