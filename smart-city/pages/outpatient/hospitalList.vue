<template>
	<view class="hospitaList-container">
		
		<u-search :show-action="true" action-text="搜索" v-model="iptName"  placeholder="请输入医院名称" :animation="true" @change = "change"></u-search>
		
		<!-- 内容 -->
		<view class="list" v-for="item in this.list" @tap="tapList(item.brief,item.id)">
			<view class="list-pic">
				<image :src="item.imgUrl" mode=""></image>
			</view>
		
				<view class="list-name">
					{{item.hospitalName}}
				</view>
			<u-rate :count="count" :value="item.level" active-color="#f7e705" disabled></u-rate>
			<u-icon name="arrow-right"></u-icon>
		</view>
		
		
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count:5,
				value:2,
				list:[],
				iptName:""
			}
		},
		methods: {
			async init(){
				 let {rows} = await this.$u.api.getHospitaList();
				 this.list = rows
				 console.log(this.list);
				 let baseUrl = "http://10.16.67.7:10001"
				 this.list.forEach((item)=>{
					 item.imgUrl = baseUrl + item.imgUrl
					 
				 })
			},
			change(){
				console.log(this.iptName);
				if(this.iptName == ""){
					this.init()
				}
				let data = this.list.filter((item)=>{ var i = item.hospitalName.indexOf(this.iptName)>-1; return i   			
				})
				console.log(data);
				this.list = data
			},
			tapList(brief,id){
				uni.navigateTo({
					url:`./hosptalDetail/hosptalDetail?brief=${brief}&id=${id}`
				})
				console.log(brief);
			}
		},
		onLoad() {
			this.init();
		}
	}
</script>

<style lang="less" scoped>
	.hospitaList-container{
		width: 100%;
		padding: 20rpx;
	}
	.list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		height: 100rpx;
		.list-name{
			width: 40%;
		}
		image{
			width: 120rpx;
			height: 60rpx;
		}
	}

</style>
