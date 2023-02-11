<template>
	<view class="containner">
		<u-divider margin-top="50" margin-bottom="50">宠物种类</u-divider>
		<view class="pet-box">
			<view class="item" v-for="item in petList" @click="goDetail(item.id)">
				<view class="item-pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="item-title">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				petList:[]
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getpetList()
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.petList = data
				console.log(this.petList);
			},
			goDetail(id){
				uni.navigateTo({
					url:"petDetail/petDetail?id="+id
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
.pet-box{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	.item{
		width: 33.3%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.item-pic{
			width: 120rpx;
			height: 120rpx;
			background-color: aliceblue;
			border-radius: 50%;
		}
		image{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		.item-title{
			text-align: center;
		}
	}
}
</style>
