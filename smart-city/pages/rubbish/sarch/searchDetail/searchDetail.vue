<template>
	<view>
		<view class="IdCard" v-for="item in list" @click="goDetail(item.id)">
			
			<view class="pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			
			<view class="txt">
				<view class="txt-title">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="goMore">显示更多</button>
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
			async init(id){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					appealCategoryId:id
				}
				let {rows} =await this.$u.api.getSearchBishDemo(obj)
				rows.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.list = rows
				console.log(rows);
			},
			goMore(){
				this.pageSize += 5
				this.init()
			}
		},
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="less">
.IdCard{
	padding: 20rpx;
	display: flex;
	margin-top: 20rpx;
	.pic{
		width: 120rpx;
		image{
			width: 100%;
			height: 120rpx;
		}
	}
	.txt{
		padding-left: 20rpx;
		.name{
			font-weight: 800;
			font-size: 18px;
		}
	}
}
</style>
