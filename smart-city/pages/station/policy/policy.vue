<template>
	<view>
		<view class="IdCard" v-for="item in list" @click="goDetail(item.id)">
			<view class="txt">
				<view class="title">
					{{item.title}}
				</view>
				<view class="item">
					政策发布人:{{item.author}}
				</view>
				<view class="item">
					时间:{{item.createTime}}
				</view>
			</view>
		</view>
		<button type="primary" @click="goMore">显示更多</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				list:[],
				pageNum:1,
				pageSize:5,
			};
		},
		methods:{
			async init(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					areaId:this.id
				}
				let {data} = await this.$u.api.getYouthList(obj)
				this.list  = data
				console.log(data);
			},
			goMore(){
				this.pageSize += 5
				this.init()
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
.IdCard{
	display: flex;
	padding: 40rpx;
	align-items: center;
	border-bottom:2rpx solid #ccc ;
	.txt{
		padding-left: 20rpx;
		.title{
			font-weight: 800;
			line-height: 60rpx;
			font-size: 18px;
			width:600rpx;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
	.item{
		line-height: 60rpx;
	}
	
}
</style>
