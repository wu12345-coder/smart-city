<template>
	<view class="metro-container">
		<view class="search">
				<u-search placeholder="请输入您当前的位置" class="search-ipt" ref="ipt" @focus="focusValue" search-icon-center="true" :clearable="true" :show-action="flag" action-text="取消" :animation="true" margin="20rpx" v-model="ipt" @change="search"></u-search>
		</view>
		
		<view class="content">
			<view style="margin-bottom: 20rpx;font-weight: 800;font-size: 22px;">{{title}}</view>
			<view class="content-containner">
				<view class="content-item" v-for="item in list" @tap="goMetroDetail(item.lineId)">
						<view class="content-left">
							<view class="content-tietle">{{item.lineName}}</view>
							<view> 下一站 ：{{item.nextStep.name}}</view>
						</view>
						<view class="content-right"> {{item.reachTime}}分钟后</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false,
				list:"",
				title:"",
				ipt:""
			}
		},
		methods: {
			focusValue(){
				this.flag=true
			},
			async init(){
				let obj
				
				// 首页地铁查询
				if(this.ipt == ""){
					 obj = {currentName:"建国门"}
				}else{
					 obj = {currentName:this.ipt}
				}
				let {data} = await this.$u.api.getMetroLineDetail(obj)
				this.list = data
				this.title=data[0].currentName
				console.log(data);
			},
			goMetroDetail(id){
				uni.navigateTo({
					url:'./metroDetail/metroDetail?id='+id
				})
			},
			search(){
				this.init()
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
	.metro-container{
		width: 100%;
		height: calc(100vh - 90rpx);
		background-color: #f9f9f9;
		font-size: 18px;
	}
	.search{
		width: 90%;
		height: 80rpx;
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		background-color: white;
	}
	.content{
		width: 90%;
		height: 800rpx;
		background-color: white;
		margin: 40rpx auto; 
		overflow: hidden;
		border-radius: 25rpx;
		box-shadow: #cfcfcf 2px 2px 2px;
		padding: 30rpx;
		.content-tietle{
			height: 50rpx;
			line-height: 50rpx;
		}
		.content-item{
			height: 170rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom:2rpx solid #cfcfcf ;
		}
		
		.content-containner{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.content-right{
			color: #2a7fcf;
		}
	}
</style>
