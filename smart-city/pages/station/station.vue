<template>
	<view>
		<u-sticky>
			<u-tabs :current="current" @change="change" :list="tabs"></u-tabs>
		</u-sticky>
		
		<view class="IdCard" v-if="current == 0" v-for="item in list" @click="goDetail(item.id)">
			<view class="pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			<view class="txt">
				<view class="title">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="IdCard" v-if="current == 1" v-for="item in list" @click="goDetails(item.id)">
			<view class="pic">
				<image :src="item.coverImgUrl" mode=""></image>
			</view>
			<view class="txt">
				<view class="title">
					{{item.name}}
				</view>
				<view class="item">
					电话:{{item.phone}}
				</view>
				<view class="item">
					营业时间:{{item.workTime}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				tabs:[
					{name:"人才政策"},
					{name:"驿站"}
				],
				current:0
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getYouth()
				data.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.list = data
				console.log(data);
			},
			async getYouthInnList(){
				let {rows} = await this.$u.api.getYouthInnList()
				rows.forEach(item=>{
					item.coverImgUrl = this.$baseUrl + item.coverImgUrl
				})
				this.list = rows
				console.log(rows);
			},
			goDetail(id){
				uni.navigateTo({
					url:"detail/detail?id=" + id
				})
			},
			goDetails(id){
				uni.navigateTo({
					url:"details/details?id=" + id
				})
			},
			change(index){
				this.current = index
				if(index==0){
					this.init()
				}
				if(index==1){
					this.getYouthInnList()
				}
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
	padding: 40rpx;
	align-items: center;
	.pic{
		width: 20%;
		image{
			width: 120rpx;
			height: 120rpx;
		}
	}
	.txt{
		padding-left: 20rpx;
		.title{
			font-weight: 800;
			line-height: 60rpx;
			font-size: 18px;
		}
	}
	
}
</style>
