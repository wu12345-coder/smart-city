<template>
	<view class="containner">
		<u-search placeholder="请输入医生名字" v-model="ipt" @input="search"></u-search>
		<view class="item" v-for="item in petDocterList">
			<view class="item-pic">
				<image :src="item.avatar" mode=""></image>
			</view>
			<view class="item-txt">
				<view class="item-name list">
					{{item.name}}
				</view>
				<view class="item-jobName list">
					职位:{{item.jobName}}
				</view>
				<view class="item-workingYears list">
					工作年限:{{item.workingYears}}年
				</view>
				<view class="item-introduction list">
					介绍:{{item.goodAt}}
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="goCheck(item.id)">问诊</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				pageNum:1,
				pageSize:5,
				petDocterList:[],
				ipt:""
			};
		},
		methods:{
			async init(){
				let obj = {
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					typeId:this.id,
					name:this.ipt
				}
				let {rows} = await this.$u.api.getPetDocter(obj)
				rows.forEach(item=>{
					item.avatar = this.$baseUrl + item.avatar
				})
				this.petDocterList = rows
				console.log(rows);
			},
			async search(){
				this.init()
			},
			goCheck(id){
				uni.navigateTo({
					url:"../docterCheck/docterCheck?id="+id
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
	.containner{
		padding: 20rpx;
	}
.item{
	padding-top: 10rpx;
	padding-bottom: 20rpx;
	display: flex;
	.item-pic{
		width: 20%;
		height: 200rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.list{
		line-height: 60rpx;
	}
	.item-txt{
		width: 80%;
		padding-left: 20rpx;
		.item-name{
			font-weight: 800;
			font-size: 16px;
		}
	}
}
</style>
