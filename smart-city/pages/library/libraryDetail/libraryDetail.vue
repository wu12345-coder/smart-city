<template>
	<view>
		<view class="map-pic">
			<image :src="data.mapUrl" mode=""></image>
		</view>
		<view class="pic">
			<image :src="data.imgUrl" mode=""></image>
		</view>
		<view class="content">
			<view class="title">
				{{data.name}}
			</view>
			<view class="item">
				开放时间:{{data.businessHours}}
			</view>
			<view class="item">
				地址:{{data.address}}
			</view>
			<view class="item">
				<text class="item-title">简介:</text>
				<text>{{data.description}}</text>
			</view>
		</view>
		<view class="pinglun" @click="goPingLunDetail">
			<u-icon name="edit-pen" size="40"></u-icon>
			<u-input placeholder="说说你的看法" @click="goPingLunDetail"></u-input>
			<view class="icon">
				<u-icon name="chat-fill" size="40"></u-icon>
				<u-badge :offset="[10, 10]"></u-badge>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			};
		},
		methods:{
			async init(id){
				let {data} = await this.$u.api.getlibraryListDetail(id)
				data.imgUrl = this.$baseUrl + data.imgUrl
				data.mapUrl = this.$baseUrl + data.mapUrl
				data.mapUrl=data.mapUrl.replace("dev-api","prod-api")
				console.log(data);
				this.data = data
			},
			goPingLunDetail(){
				uni.navigateTo({
					url:"/pages/library/PingLun/PingLun?libraryId="+this.data.id
				})
			}
		},
		
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="less">
.map-pic{
	width: 100%;
	height: 400rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
.pic{
	width: 100%;
	display: flex;
	justify-content: center;
	image{
		width: 320rpx;
		height: 320rpx;
	}
}
.content{
	padding: 20rpx;
	.title{
		font-weight: 800;
		font-size: 18px;
		line-height: 80rpx;
		text-align: center;
	}
	.item{
		line-height: 80rpx;
		display: flex;
		.item-title{
			width: 10%;
		}
		text{
			width: 80%;
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
