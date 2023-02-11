<template>
	<view>
		<view class="pic">
			<image :src="data.imgUrl" mode=""></image>
		</view>
		<view class="content">
		<view class="content-top">
			<view class="avatar">
				<image :src="data.author.avatar" mode=""></image>
			</view>
			<view class="pl">
				配料:{{data.ingredients}}
			</view>
		</view>
		<view class="icon">
			<u-icon name="star" size="22px" ref="icons"  @click="likes"></u-icon>
			<u-icon name="heart" size="22px" ref="iconh" @click="likeH"></u-icon>
		</view>
			<view class="txt" v-for="(item,index) in data.stepList">
				<view class="item">
					第{{index+1}}步,{{item.content}}
				</view>
				<view class="txt-pic">
					<image :src="item.imgUrl" mode=""></image>
				</view>
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
				let {data} =  await this.$u.api.geKCtDatail(id)
				console.log(data);
				data.imgUrl = this.$baseUrl + data.imgUrl
				data.author.avatar = this.$baseUrl + data.author.avatar
				data.stepList.forEach(item=>{
					item.imgUrl = this.$baseUrl + item.imgUrl
				})
				this.data = data
			},
			likes(){
				this.data.myCollectionState = !this.data.myCollectionState
				if(this.data.myCollectionState){
					this.$refs.icons.name = "star-fill"
					return 
				}else{
					return this.$refs.icons.name = "star"
				}
				
			},
			likeH(){
				this.data.myLikeState = !this.data.myLikeState
				if(this.data.myLikeState){
					this.$refs.iconh.name = "heart-fill"
					return
				}else{
					this.$refs.iconh.name = "heart"
				}
			}
		},
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="less">
.pic{
	width: 100%;
	image{
		width: 100%;
	}
}
.avatar{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	image{
		width: 100rpx;
		height: 100rpx;
	}
}
.pl{
	padding-left: 20rpx;
}
.content-top{
	display: flex;
}
.txt{
	display: flex;
	justify-content: center;
	margin-top: 20rpx;
	align-items: center;
	flex-direction: column;
	.txt-pic{
		width: 300rpx;
		height: 300rpx;
	}
	image{
		width: 100%;	
		height: 100%;
	}
}
.icon{
	float: right;
}
</style>
