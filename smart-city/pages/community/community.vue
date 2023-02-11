<template>
	<view>
		<u-divider>养老机构查询</u-divider>
		<uni-search-bar placeholder="请输入养老机构名称" v-model="ipt" @input="search"></uni-search-bar>
		<view class="content-box">
			<view class="Idcard1" v-for="item in searchList" @click="goDetail">
				<view class="pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="txt">
					<view class="txt-name">
						{{item.name}}
					</view>
					<view class="txt-title">
						{{item.title}}
					</view>
					<view class="txt-time">
						成立时间:{{item.time}}
					</view>
				</view>
			</view>
		</view>
		<u-divider>养老机构推荐</u-divider>
		<view class="content">
			<view class="Idcard" v-for="item in conmendLsit" @click="goDetail">
				<view class="pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="txt">
					<view class="txt-name">
						{{item.name}}
					</view>
					<view class="txt-title">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="goSetting">健康评估</button>
			<button type="primary" @click="goLook">查看全所有老人健康情况</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				comList:[
					{
						id:1,
						name:"程哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:2,
						name:"大哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:3,
						name:"二哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:4,
						name:"三哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:5,
						name:"四哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:6,
						name:"五哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:7,
						name:"六哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
				],
				searchList:[],
				conmendLsit:[
					{
						id:1,
						name:"程哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:2,
						name:"大哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09",
					},
					{
						id:3,
						name:"二哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					},
					{
						id:4,
						name:"三哥养老院",
						title:"给老人一个温馨的家",
						imgUrl:"../../static/logo.png",
						time:"2020-08-09"
					}
				],
				ipt:""
			};
		},
		methods:{
			search(){
				if(this.ipt == "") return this.searchList = this.comList;
				this.searchList = this.comList.filter(item=>{
					return item.name.indexOf(this.ipt)>-1})
			},
			init(){
				this.searchList = this.comList
			},
			goDetail(){
				uni.navigateTo({
					url:"detail/detail"
				})
			},
			goSetting(){
				uni.navigateTo({
					url:"mysetting/mysetting"
				})
			},
			goLook(){
				uni.navigateTo({
					url:"lookAll/lookAll"
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="less">
	.content-box{
		padding-left: 40rpx;
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
	}
	.Idcard{
		width: 50%;
		display: flex;
		margin-top: 10rpx;
		
		.pic{
			width: 40%;
			image{
				width: 100%;
				height: 120rpx;
			}
		}
		.txt{
			padding-left: 40rpx;
			.txt-name{
				font-weight: 800;
			}
		}
	}
	.Idcard1{
		display: flex;
		margin-top: 10rpx;
		justify-content: space-evenly;
		.pic{
			image{
				width:120rpx;
				height: 120rpx;
			}
		}
		.txt{
			.txt-name{
				font-weight: 800;
			}
		}
	}
	.btn{
		display: flex;
	}

</style>
