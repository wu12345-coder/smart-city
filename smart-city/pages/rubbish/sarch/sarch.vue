<template>
	<view>
		<view class="search">
			<uni-search-bar placeholder="请输入关键词" @input="init" v-model="ipt" @focus="search"></uni-search-bar>
		</view>
		<text class="search-txt">历史记录</text>
		<view class="searchHot" v-if="flag">
			<view class="words" v-for="item in words">
				{{item.keyword}}
			</view>
		</view>
		<view class="content">
			<view class="IdCard" v-for="item in list" @click="goDetail(item.id)">
				<view class="pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="txt">
					<view class="name">
						{{item.name}}
					</view>
					<view class="introduce">
						<b>垃圾分类介绍:</b>{{item.introduce}}
					</view>
					<view class="guide">
						<b>投放指导:</b>{{item.guide}}
					</view>
				</view>
			</view>
			<button type="primary" @click="goMore">显示更多</button>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:1,
				pageSize:10,
				ipt:"",
				list:[],
				flag:false,
				words:""
			};
		},
		methods:{
			async init(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					Name:this.ipt
				}
				this.flag = false
				let {rows} =await this.$u.api.getSearchBish(obj)
				
				rows.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.list = rows
				console.log(rows);
			},
			goMore(){
				this.pageNum += 1
				this.init()
			},
			goDetail(id){
				uni.navigateTo({
					url:"searchDetail/searchDetail?id="+id
				})
			},
			async search(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
				}
				let {data} = await this.$u.api.getSearchHotBish(obj)
				this.flag = true
				this.words = data
				console.log(data);
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
.pic{
	width: 120rpx;
	image{
		width: 120rpx;
		height: 120rpx;
	}
}
.IdCard{
	padding: 20rpx;
	display: flex;
	margin-top: 20rpx;
	.txt{
		padding-left: 20rpx;
		.name{
			font-weight: 800;
			font-size: 18px;
		}
	}
}
.searchHot{
	display: flex;
	flex-wrap: wrap;
	.words{
		width: 180rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: aliceblue;
		border-radius: 15rpx;
	}
}
.search-txt{
	line-height: 80rpx;
	padding: 20rpx;
}

</style>
