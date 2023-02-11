<template>
	<view>
		<view class="IdCard" v-for="item in list" @click="goDetail(item.id)">
			<view class="IdCard-pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			<view class="IdCard-text">
				<view class="title">
					{{item.name}}
				</view>
				<view class="item">
					地址:{{item.address}}
				</view>
				<view class="item">
					开放时间:{{item.businessHours}}
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="goMore">加载更多</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:1,
				pageSize:5,
				list:[]
			};
		},
		methods:{
			async init(){
				let obj = {
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				let {rows} = await this.$u.api.getlibraryList(obj)
				rows.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				console.log(rows);
				this.list = rows
			},
			goMore(){
				this.pageSize += 4
				this.init()
			},
			goDetail(id){
				uni.navigateTo({
					url:"libraryDetail/libraryDetail?id="+id
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
.IdCard{
	display: flex;
	align-items: center;
	.IdCard-pic{
		width: 20%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		image{
			width: 100%;
			height: 120rpx;
		}
	}
	.IdCard-text{
		width: 80%;
		padding-left: 20rpx;
		.title{
			font-weight: 800;
			font-style: 18px;
			line-height: 80rpx;
		}
	}
	
}
</style>
