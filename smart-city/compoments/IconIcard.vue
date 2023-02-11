<!-- <template>
	<view class="icon-containner">
		<view class="title">
			生活服务
		</view>
		<u-line color="#ccc"></u-line>
		<view class="icon">
			<view class="icon-item" v-for="(item,index) in list" :key="index" @tap="goPage(item.path)"> 
				<view class="icon-pic">
					<image :src="item.Surl" mode=""></image>
				</view>
				<view class="text">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"IconIcard",
		data() {
			return {
				newslist:[],
				arr:[],
				list:[
					{
						Surl:"../static/pic/停哪儿@2x.png",
						title:'停哪里',
						path:'../park/index'
					},
					{
						Surl:'../static/pic/城市地铁@2x.png',
						title:'智慧交警',
						path:'../stopwhere/stopwhere'
					},
					{
						Surl:'../static/pic/城市地铁@2x.png',
						title:'智慧交警',
						path:'../stopwhere/stopwhere'
					},
					{
						Surl:'../static/pic/城市地铁@2x.png',
						title:'智慧交警',
						path:'../stopwhere/stopwhere'
					},
					{
						Surl:'../static/pic/城市地铁@2x.png',
						title:'智慧交警',
						path:'../stopwhere/stopwhere'
					}
				]
			};
		},
		methods:{
			goPage(path){
				uni.navigateTo({
					url:path
				})
			},
			async getService(){
				let {rows} = await this.$u.api.getAllLocation();
				for (var i in rows) {
					this.arr.push(rows[i])
				}
				this.arr.forEach((item)=>{
					const baseUrl = "http://10.16.67.7"
					item.imgUrl = baseUrl + item.imgUrl
					item.link = "../" + item.link
					this.newslist.push(item.serviceType)
				})
				// const set = new Set(this.newslist)
				// this.newslist = [...set];
				// console.log(this.newslist);
				// console.log(this.newslist);
				// console.log(typeof(this.arr));
				// console.log(typeof(rows));
			}
		},
		created() {
			this.getService()
		}
	}
</script>

<style lang="less">
	.icon-containner{
		width: 100%;
		height: 100%;
	}
	.title{
		width: 100%;
		padding: 10rpx;
	}
	.icon{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items:center;
		flex-flow: wrap;
		align-content:flex-start;
	}
	.icon-item{
		width: 150rpx;
		height: 150rpx;
		background-color: aliceblue;
		margin-top: 50rpx;
		image{
			width: 100rpx;
			height: 100%;
			margin: 0 auto;
		}
		.text{
			width: 100%;
			height: 40rpx;
			text-align: center;
			line-height: 50rpx;
		}
	}
	.icon-pic{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
	}
</style> -->