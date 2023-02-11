<template>
	<view class="containner">
		<view class="nav-content">
			<view class="nav-content-item">
				<view class="title">工作列表</view>
				<view class="descripion"><text class="item">职业名称:</text>{{data.name}}</view>
				<view class="descripion"><text class="item">职业描述:</text><text>{{data.need}}</text></view>
				<view class="descripion"><text class="item">工作地址:</text><text>{{data.address}}</text></view>
				<view class="descripion"><text class="item">单位地址:</text>{{data.address}}</view>
				<view class="descripion"><text class="item">联系人:</text>{{data.contacts}}</view>
				<view class="descripion"><text class="item">工作描述:</text><text>{{data.obligation}}</text></view>
				<view class="descripion"><text
						class="item">薪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酬:</text>{{data.salary}}元</view>
			</view>
			<view class="nav-content-item">
				<view class="title">公司信息</view>
				<view class="descripion"><text class="item">公司名称:</text>{{GsData.companyName}}</view>
				<view class="descripion"><text class="item">公司简介:</text><text>{{GsData.introductory}}</text></view>
			</view>
			<view class="btn">
				<button type="primary" @click="getJL">
					提交简历
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{},
				GsData:{}
			};
		},
		methods: {
			async init(id) {
				let {data} = await this.$u.api.goJobDetail(id)
				this.data = data
			},
			async goGsDetail(id){
				let {data} = await this.$u.api.goGsDetail(id)
				this.GsData = data
			},
			getJL(){
				uni.showToast({
					title:"提交成功"
				})
			}
		},
		onLoad(option) {
			let id = option.id
			this.init(id)
			this.goGsDetail(id)
		}
	}
</script>

<style lang="less">
.nav-content{
		.nav-content-item{
			padding: 20rpx;
			line-height: 60rpx;
			// background-color: #f7f7f7;
			border-bottom: 2rpx solid #ccc;
		}
		.title{
			font-weight: 800;
			text-align: center;
			font-size: 18px
		}
		.descripion{
			display: flex;
			.item{
				width: 20%;
			}
			text{
				width: 80%;
			}
		}
		.btn{
			margin-top: 40rpx;
		}
	}
</style>
