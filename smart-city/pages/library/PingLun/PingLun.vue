<template>
	<view class="containner">
		<view class="ipt">
			<u-input type="text" v-model="ipt" placeholder="请说说你的看法" height="80" border/>
			<u-button type="primary" @click="getSure">发表</u-button>
		</view>
		
		<view class="pingLun" v-for="(item,index) in list">
			<view class="user">
				<view class="user-pic">
					<u-icon name="account-fill" size="60"></u-icon>
				</view>
				<text>{{item.userName}}</text>
			</view>
			<view class="content">
				<view class="user-content">
					<!-- heart-fill -->
					<text>{{item.content}}</text>
					<u-icon name="heart" ref="icon" class="icon" @click="getStatus(index)"></u-icon>
				</view>
				<view class="updata-time">
					{{item.createTime}}
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:1,
				pageSize:5,
				ipt:"",
				list:[],
				id:""
			};
		},
		methods:{
			async getSure(){
				let obj = {
					libraryId:this.id,
					content:this.ipt
				}
				console.log(obj);
				let data = await this.$u.api.setPinglun(obj)
				console.log(data);
				this.init()
			},
			async init(){
				let obj={
					libraryId:this.id,
					pageNum:this.pageNum,
					pageSize:this.pageSize
					
				}
				console.log(obj);
				let {data} = await this.$u.api.getlibraryPL(obj)
				this.list = data
				console.log(data);
			},
			async getStatus(index){
				this.list[index].myLikeState = !this.list[index].myLikeState
				if(this.list[index].myLikeState){
					this.$refs.icon[index].name='heart-fill';
					return
				}
				this.$refs.icon[index].name='heart';
			}
		},
		onLoad(option) {
			this.id = option.libraryId
			this.init()
		}
	}
</script>

<style lang="less">
.containner{
			width: 100%;
			padding-bottom: calc(var(--window-bottom) - 50px);
			padding: 30rpx 50rpx;
		}
.ipt{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.btn{
		height: 80rpx;
		display: flex;
		align-items: center;
	}
}
.pingLun{
	margin-top: 20rpx;
	height: 180rpx;
	border: 2rpx solid #ccc;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10rpx;
	.user{
		width: 120rpx;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content:center;
		.user-pic{
			width: 80rpx;
			height: 80rpx;
			background-color: #ccc;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		text{
			text-align: center;
		}
	}
	.content{
		flex: 2;
		display: flex;
		flex-direction: column;
		.user-content{
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			.icon{
				width: 10%;
			}
		}
		.updata-time{
			width: 100%;
			text-align: right;
		}
	}
}
</style>
