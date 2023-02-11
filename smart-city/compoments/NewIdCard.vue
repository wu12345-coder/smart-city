<template>
	<view class="newsIdCard-containner">
		<view class="new-containner" v-for="item in newList" :key="item.id">
			<view class="content" @tap="goNewDetail(item.id)">
				<view class="new-pic">
					<image :src="item.cover" mode=""></image>
				</view>
				<text class="txt">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"NewIdCard",
		data() {
			return {
			};
		},
		props: {
			newList: {
				type: Array,
				default:[]
			}
		},
		onLoad() {
			
		},
		methods:{
			 goNewDetail(id){
				
				uni.navigateTo({
					url:'/pages/news/detail?id='+id
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.newsIdCard-containner{
		display: flex;
		flex-flow:wrap;
		justify-content: space-evenly;
	}
.new-containner{
	width: 45%;
	height: 340rpx;
	border-radius: 50rpx;
	background-color: aliceblue;
	margin-top: 20rpx;
	position: relative;
	overflow: hidden;
	box-shadow: 2rpx 2rpx 2rpx #acacac;
}
.txt{
	padding:0 20rpx 0 20rpx;
	overflow: hidden;
	text-align: center;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	position: absolute;
	bottom:20rpx;
	text-indent: 2em;
}
.new-pic{
	height: 200rpx;
	border-radius: 15rpx;
	border:2rpx #ccc solid;
	margin: 0 auto; 
	overflow: hidden;
	image{
		width: 100%;
		height: 100%;
	}
}

</style>