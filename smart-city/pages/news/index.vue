<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item style="width:100%;height:100%;" v-for="(item,index) in list" :key="index">
				<view class="swiper-item" style="width:100%;height:100%;">
					<image style="width:100%;height:100%;" :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<News ref="news" :newType="newType"></News>
		<!-- <view class="pinglun" @click="goPingLunDetail">
			<u-icon name="edit-pen" size="40"></u-icon>
			<u-input placeholder="说说你的看法" @click="goPingLunDetail"></u-input>
			<view class="icon">
				<u-icon name="chat-fill" size="40"></u-icon>
				<u-badge :count="count" :offset="[10, 10]"></u-badge>
			</view>
		</view> -->
	</view>
</template>

<script>
	import News from '@/compoments/News.vue'
	export default {
		data() {
			return {
				newList: [],
				newType:[],
				newsList:[],
				list:[]
			}
		},
		methods: {
			async init(){
				let {rows}= await this.$u.api.getNewList();
				let {data} = await this.$u.api.getNewLike();
				let res = await this.$u.api.getBannner();
				// 获取新闻列表
				rows.forEach((item) => {
					if(this.newList.length<4){
						this.newList.push(item)
					item.cover = this.$baseUrl + item.cover
					}
				})
				// 轮播图地址
				res.rows.forEach((item) => {
					var item = this.$baseUrl + item.advImg
					this.list.push(item)
				})
				
				//新闻种类 
				data.forEach((item) => {
					this.newType.push(item)
					this.$refs.news.change(0);
				})
				
				data.forEach((item)=>{
					let arr = {}
					rows.forEach((i)=>{
						if(item.sort == i.type){
							var obj = {tab:item,content:i}
							arr = this.newsList.push(obj)
						}
					})
				})
			}
			
			
			
			
		},
		onLoad() {
			this.init()
		},
		components:{
			News
		}
	}
</script>

<style>

</style>
