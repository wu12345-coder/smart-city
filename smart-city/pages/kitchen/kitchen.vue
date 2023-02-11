<template>
	<view>
		<uni-search-bar placeholder="请输入菜品" v-model="ipt" @input="search"></uni-search-bar>
		<view class="IdCard u-flex flex-r" style="background-color: #f5f5f5;padding: 20rpx;margin-top: 20rpx;" v-for="item in foodsList" @click="getData(item.id)">
			<view class="pic u-flex-1">
				<image :src="item.imgUrl" mode=""></image>
			</view>
			<view class="txt u-flex-5">
				<view class="title">
					{{item.name}}
				</view>
				<view class="ingredients">
					菜品配料表{{item.ingredients}}
				</view>
			</view>
		</view>
		<button type="primary" @click="gpMore">显示更多</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ipt:"",
				pageSize:10,
				pageNum:1,
				foodsList:[]
			};
		},
		methods:{
			async init(){
				let obj={
					name:this.ipt,
					pageSize:this.pageSize,
					pageNum:this.pageNum
				}
				let {rows} = await this.$u.api.FoodsList(obj)
				rows.forEach(item =>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.foodsList = rows
				console.log(rows);
			},
			getData(id){
				uni.navigateTo({
					url:"kcDetail/kcDetail?id="+id
				})
			},
			search(){
				if(this.ipt == '') return this.init()
				this.foodsList = this.foodsList.filter(item=>{return item.name.indexOf(this.ipt) > -1 })
				console.log(this.foodsList);
			},
			gpMore(){
				this.pageSize += 4
				this.init()
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
	display: flex;
	justify-content: center;
	align-items: center;
	image{
		width: 120rpx;
		height: 120rpx;
	}
}
.txt{
	padding-left: 20rpx;
	.title{
		font-weight: 800;
		font-size: 15px;
	}
}
</style>
