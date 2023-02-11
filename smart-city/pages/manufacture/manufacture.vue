<template>
	<view class="containner">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220502cs17.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220502cs18.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220502cs19.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220502cs20.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220502cs21.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="manList">
			<u-divider marginTop="60">厂商列表</u-divider>
			<u-sticky>
				<u-tabs :list="list" :current="current" @change="change"></u-tabs>
			</u-sticky>
			<view class="content">
				<view class="IDcard01" v-if="current==0">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
					</view>
					<view class="txt">
						中国航天科技集团有限公司是中国航天科技工业的主导力量，主要从事运载火箭、各类卫星、载人飞船、货运飞船、深空探测器、空间站等宇航产品和战略、战术导弹武器系统的研究、设计、生产、试验和发射服务。中国航天科技集团有限公司也是中国唯一的洲际战略核导弹研制生产单位。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>
				<view class="IDcard01" v-if="current==1">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs02.jpg" mode=""></image>
					</view>
					<view class="txt">
						华为消费者业务产品全面覆盖手机、移动宽带终端、终端云等，凭借自身的全球化网络优势、全球化运营能力，致力于将最新的科技带给消费者，让世界各地享受到技术进步的喜悦，以行践言，实现梦想。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>
				<view class="IDcard01" v-if="current==2">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs03.jpg" mode=""></image>
					</view>
					<view class="txt">
						中芯国际（证券代码：00981.HK/688981.SH）是世界领先的集成电路晶圆代工企业之一，也是中国大陆集成电路制造业领导者，拥有领先的工艺制造能力、产能优势、服务配套，向全球客户提供0.35微米到14纳米不同技术节点的晶圆代工与技术服务。中芯国际总部位于中国上海，拥有全球化的制造和服务基地，在上海、北京、天津、深圳建有三座8吋晶圆厂和三座12吋晶圆厂；在上海、北京、深圳各有一座12吋晶圆厂在建中。中芯国际还在美国、欧洲、日本和中国台湾设立营销办事处、提供客户服务，同时在中国香港设立了代表处。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>
				<view class="IDcard01" v-if="current==3">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs04.jpg" mode=""></image>
					</view>
					<view class="txt">
						中国商用飞机有限责任公司（简称中国商飞，英文名称CommercialAircraftCorporationofChinaLtd，缩写COMAC），于2008年5月11日在中国上海成立，是我国实施国家大型飞机重大专项中大型客机项目的主体，也是统筹干线飞机和支线飞机发展、实现我国民用飞机产业化的主要载体。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>
				<view class="IDcard01" v-if="current==4">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs05.jpg" mode=""></image>
					</view>
					<view class="txt">
						比亚迪股份有限公司（简称“比亚迪”）成立于1995年2月，总部位于广东省深圳市。公司现有员工超过22万人，业务横跨汽车、轨道交通、新能源和电子四大产业。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>
				<view class="IDcard01" v-if="current==5">
					<view class="pic">
						<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs06.jpg" mode=""></image>
					</view>
					<view class="txt">
						中国船舶重工集团有限公司（ChinaShipbuildingIndustryGroupCo.,Ltd.）成立于1999年7月1日，是国务院国有资产监督管理委员会管理的中央企业。前身是1963年9月国务院决定将船舶工业从第三机械工业部分出来成立的第六机械工业部。
					</view>
					<button type="primary" @click="show = true">厂商入住</button>
				</view>

			</view>
		</view>
		<u-popup v-model="show" mode="top" border-radius="14" width="500rpx" height="300px">
			<view class="title">
				厂商入驻信息
			</view>
			<view class="ipt">
				<input type="text" placeholder="请输入商家入住号">
				<input type="text" placeholder="请输入商家名称">
				<button type="primary" @click="showModel">厂家入住</button>
			</view>

		</u-popup>
		
		<view class="manList">
			<u-divider marginTop="60">产品列表</u-divider>
			<u-sticky>
				<u-tabs :list="result" :current="current01" @change="change01"></u-tabs>
			</u-sticky>
			<view class="IDcard01" v-if="current01==0">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						智慧边海防整体解决方案
					</view>
					<view>
						智慧边海防整体解决方案则利用物联网、大数据、云计算、边缘计算、人工智能、移动互联网等新一代信息技术，构建基于陆、海、空、天并结合边民大众的五类立体化感知系统。将多种航天高性能、高质量和高可靠性的智能化装备应用到了海域防护方面。
					</view>

				</view>
			</view>
			<view class="IDcard01" v-if="current01==1">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						晶圆代工解决方案
					</view>
					<view>
						园区是工作与生活的载体，是经济发展的核心抓手，是构建万物互联的智能世界的落脚点。
						传统园区的信息化往往是孤立的烟囱式子系统建设，数据不互通，业务难融合，长期面临着服务体验差、综合安防弱、运营效率低、管理成本高、业务创新难等痛点。
						华为智慧园区解决方案源于自身管理变革和数字化转型实践，依托数字平台，联合生态伙伴，实现园区整体智慧化，使能业务创新，提升运营效率，引领至简体验。
					</view>
				</view>
			</view>
			<view class="IDcard01" v-if="current01==2">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						中国商飞语音通信解决方案
					</view>
					<view>客户需求
						随着航空业不断发展，中国商飞对现代化办公通信提出了更高的要求，其分布于全球各地的各个下辖机构之间、办事处之间的日 常沟通也对公司通信成本带来了很大压力，公司迫切需要升级原有的内部办公通信系统。
						解决方案
						中国商飞部署了几百台亿联SIP-T27P与SIP-T21P E2话机，用于各机构、各办事处之间的通讯交流，有效应对业务增长带来的各种沟通挑战， 同时又大大节约了通讯成本。</view>

				</view>
			</view>
			<view class="IDcard01" v-if="current01==3">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						绿色交通解决方案
					</view>
					<view>
						用轨道交通、特别是“云轨”这样的中小运量的轨道交通产品，与现有的公共交通系统充分结合，打造地下、地面和空中的立体化交通网络，才能从根源解决城市拥堵问题，保障经济持续高速发展和城市形象提升，最终实现无碳排放。
						为实现绿色出行愿景，比亚迪与菲律宾就推广由“电动乘用车、电动商用车、电动叉车和轨道交通”组成的3.0交通解决方案达成合作，实现菲律宾与全球电动车领先技术接轨。</view>

				</view>
			</view>
			<view class="IDcard01" v-if="current01==4">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						自主可控工业计算机（IPC）
					</view>
					<view>· 2U机架式工业计算机
						· 采用飞腾新四核处理器 FT-2000/4，标配银河麒麟操作系统
						· 单电源/冗余电源可选
						· 支持数据一键自毁功能
						· 支持PCIe卡扩展
						· 适合军工、能源、电力、轨道交通等关键行业中对边缘计算的应用需求</view>

				</view>
			</view>
			<view class="IDcard01" v-if="current01==5">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220501cs01.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						自主可控工业计算机（IPC）
					</view>
					<view>· 2U机架式工业计算机
						· 采用飞腾新四核处理器 FT-2000/4，标配银河麒麟操作系统
						· 单电源/冗余电源可选
						· 支持数据一键自毁功能
						· 支持PCIe卡扩展
						· 适合军工、能源、电力、轨道交通等关键行业中对边缘计算的应用需求</view>
				</view>
			</view>
		</view>
		<view class="manList">
			<u-divider marginTop="60">展会活动</u-divider>
			<view class="IDcard01">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220503cs07.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						12023年第25届中国（广州）国际建筑装饰博览会
					</view>
					<view>
						中国建博会（广州）,全称为中国（广州）国际建筑装饰博览会，是目前世界上该领域里展览面积最大的展览会，由中国对外贸易中心（集团）和中国建筑装饰协会联合主办，中国对外贸易广州展览总公司承办，得到中国林产工业协会、全国工商联家具装饰业商会支持，每年7月8-11日在广州的广交会展馆和广州保利世贸展馆举办。
					</view>
					<button type="primary" @click="click">报名</button>
				</view>
			</view>
			<view class="IDcard01">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220503cs08.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						12023年第25届中国（广州）国际建筑装饰博览会
					</view>
					<view>
						长沙国际工程机械展览会将全方位展示工程机械全产业链领域上下游的新产品、新技术、新材料、新方案，全力打造价值交流平台
					</view>
					<button type="primary" @click="click">报名</button>
				</view>
			</view>
			<view class="IDcard01">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220503cs09.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						12023年第25届中国（广州）国际建筑装饰博览会
					</view>
					<view>
						「CHINAPLAS 国际橡塑展」伴随着中国塑料及橡胶行业成长逾30年，至今已发展成为亚洲最具规模之橡塑业展会，并对中国橡塑业的发展产生了积极的推动作用。目前，「CHINAPLAS 国际橡塑展」不单是亚洲最大型的塑料及橡胶业展览会，业内人士更公认其影响力仅次于全球第一大橡塑展的德国「K展」，成为橡塑业的世界第二大展会
					</view>
					<button type="primary" @click="click">报名</button>
				</view>
			</view>
			<view class="IDcard01">
				<view class="pic">
					<image src="../../static/限选主题-中国制造/图片素材/file_20220503cs10.jpg" mode=""></image>
				</view>
				<view class="txt">
					<view class="title">
						12023年第25届中国（广州）国际建筑装饰博览会
					</view>
					<view>
						（一）劳保用品展区；劳保用品，五金制品，手工具，扎带，电器，等五金劳保。（二）机械焊接展区。建筑机械、焊接机械及焊接设备。 （三）磨料磨具展区。油石砂轮、磨头、油石、砂瓦、白刚玉磨料、黑碳化硅磨料、金刚石锯片，砂带，玻璃工具，切削工具，金刚石制品，单晶刚玉磨料等。
					</view>
					<button type="primary" @click="click">报名</button>
				</view>
			</view>

		</view>
		<view class="manList01">
			<u-divider marginTop="60">厂商招聘</u-divider>
			<button type="primary" @click="show01 = true">需求发布</button>
			
		</view>
		<u-popup v-model="show01" mode="top" border-radius="14" width="500rpx" height="300px">
			<view class="title">
				厂商招聘
			</view>
			<view class="ipt">
				<input type="text" placeholder="招聘需求">
				<button type="primary" @click="showModel01">需求发布</button>
			</view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: "中国航天"
					},
					{
						name: "华为"
					},
					{
						name: "中芯国际"
					},
					{
						name: "中国商飞"
					},
					{
						name: "比亚迪"
					},
					{
						name: "格力电器"
					}
				],
				result: [{
						name: "中国航天"
					},
					{
						name: "华为"
					},
					{
						name: "中芯国际"
					},
					{
						name: "中国商飞"
					},
					{
						name: "比亚迪"
					},
					{
						name: "格力电器"
					}
				],
				current: 0,
				current01: 0,
				show: false,
				show01: false
			};
		},
		methods: {
			change(index) {
				this.current = index
			},
			change01(index) {
				this.current01 = index
			},
			click() {
				uni.showToast({
					title: "报名成功"
				})
			},
			showModel() {
				uni.showToast({
					title: "入住成功"
				})
			},
			showModel01(){
				uni.showToast({
					title: "发布成功"
				})
			}
		}
	}
</script>

<style lang="less">
	.containner {
		padding: 10rpx;
	}

	swiper-item {
		width: 100%;
		height: 300rpx;

		image {
			width: 100%;
			height: 300rpx;
		}
	}

	input {
		padding: 20rpx;
		border: 2rpx solid #ccc;
		border-radius: 12rpx;
		margin-top: 20rpx;
	}

	.ipt {
		padding: 20rpx;

		button {
			margin-top: 40rpx;
		}
	}

	.IDcard01 {
		display: flex;
		align-items: center;

		.pic {
			width: 220rpx;
			padding: 10rpx;

			image {
				width: 220rpx;
			}
		}

		.txt {
			padding: 20rpx;
			text-indent: 2em;
		}
	}

	.title {
		font-weight: 800;
		text-align: center;
		font-size: 18px;
	}

	.manList01 {
		padding-bottom: 150rpx;
	}
</style>
