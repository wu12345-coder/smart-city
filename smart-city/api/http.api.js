// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

	// 此处没有使用传入的params参数
	let getSearch = (params = {}) => vm.$u.get(hotSearchUrl, {
		id: 2
	});
	//  查询当前用户
	let getSearchUser = (params = {}) => vm.$u.get('/prod-api/api/common/user/getInfo', params)

	// 修改电子钱包
	let getWallet = (params = {}) => vm.$u.get('/prod-api/api/common/balance/list', params);

	// 查询意见反馈列表
	let getFeedbackLilst = (params = {}) => vm.$u.get('/prod-api/api/common/feedback/list', params);

	// 获取意见反馈详情
	let getFeedbackDetail = (id = {}) => vm.$u.get(`/prod-api/api/common/feedback/${id}`);

	// 获取通用模块新闻分类
	let getNewLike = (params = {}) => vm.$u.get('/prod-api/press/category/list', params);

	// 获取新闻评论列表
	let getNew = (params = {}) => vm.$u.get('/prod-api/press/comments/list', params);

	// // 获取新闻详细信息
	// let getNewListDetail = (id) => vm.$u.get(`/prod-api/press/comments/${id}`);

	// 获取新闻列表
	let getNewList = (params = {}) => vm.$u.get('/prod-api/press/press/list', params);


	// 获取新闻详细信息
	let getNewDetail = (id = {}) => vm.$u.get(`/prod-api/press/press/${id}`);

	// 广告轮播
	let getBannner = (params = {}) => vm.$u.get('/prod-api/api/rotation/list', params);

	// 广告轮播
	let getArea = (params = {}) => vm.$u.get('/prod-api/api/common/gps/area', params);

	// 获取当前地理位置
	let getLocation = (params = {}) => vm.$u.get('/prod-api/api/common/gps/location', params);

	// 获取全国省份
	let getCLocation = (params = {}) => vm.$u.get('/prod-api/api/common/gps/province', params);

	// 获取系统全部服务
	let getAllLocation = (params = {}) => vm.$u.get('/prod-api/api/service/list', params);

	// 获取系统当前人全部订单
	let getLocationOrder = (params = {}) => vm.$u.get('/prod-api/api/allorder/list', params);

	// 获取停车场列表 
	let getCarList = (params = {}) => vm.$u.get('/prod-api/api/park/lot/list', params);

	// 查询停车记录列表
	let getStopCarList = (params = {}) => vm.$u.get('/prod-api/api/park/lot/record/list', params);

	// 智慧交管 查询广告列表
	let getManageList = (params = {}) => vm.$u.get('/prod-api/api/traffic/rotation/list', params);

	// 查询车辆信息
	let getCartData = (params = {}) => vm.$u.get('/prod-api/api/park/car/my', params);

	// 根据站点名和线路编号查找站点
	let getMetroLine = (params = {}) => vm.$u.get('/prod-api/api/metro/line', params);

	// 首页地铁站点查询
	let getMetroLineDetail = (params = {}) => vm.$u.get('/prod-api/api/metro/list', params);

	// 用户乘车记录
	let getMetroLinerecord = (params = {}) => vm.$u.get('/prod-api/api/metro/record/list?pageNum=1&pageNum=5',
		params);

	// 查询城市的所有地铁站详情
	let getMetroAllDetail = (id = {}) => vm.$u.get(`/prod-api/api/metro/line/${id}`);


	// 生活缴费首页
	let getLivingList = (params = {}) => vm.$u.get('/prod-api/api/living/rotation/list', params);

	// 查询缴费分类
	let getCategoryList = (params = {}) => vm.$u.get('/prod-api/api/living/category/list', params);

	//查询话费信息
	let getPhone = (params = {}) => vm.$u.get('/prod-api/api/living/phone', params);

	// 查询当前用户的话费充值记录
	let getRecordList = (params = {}) => vm.$u.get('/prod-api/api/living/phone/record/list', params);

	// 根据缴费编号查询缴费账单
	let getBillData = (params = {}) => vm.$u.get('/prod-api/api/living/bill', params);

	// 根据身份证查询
	let getIdData = (params = {}) => vm.$u.get('/prod-api/api/living/account/list', params);

	// 智慧巴士列表
	let getCarData = (params = {}) => vm.$u.get('/prod-api/api/bus/stop/list', params);

	// 巴士站点列表
	let getCarListData = (params = {}) => vm.$u.get('/prod-api/api/bus/line/list', params);

	// 停车站点
	let getCarStopListData = (id = {}) => vm.$u.get(
		`/prod-api/api/bus/stop/list?linesId=${id}&pageNum=1&pageSize=8`);

	// 线路站点详情
	let getCarStopListDetail = (id = {}) => vm.$u.get(`/prod-api/api/bus/line/${id}`);

	// 医院详情轮播图
	let getHospitalBanner = (params = {}) => vm.$u.get("/prod-api/api/hospital/banner/list", params);

	// 医院列表
	let getHospitaList = (params = {}) => vm.$u.get("/prod-api/api/hospital/hospital/list", params);

	// 查询当下人员的就诊人卡片
	let getHospitaIdCard = (params = {}) => vm.$u.get("/prod-api/api/hospital/patient/list", params);

	// 预约挂号
	let getNum = (num = {}) => vm.$u.get(`/prod-api/api/hospital/category/list?type=${num}&pageNum=1&pageSize=8`);

	// 生成预约详情
	let getHospitaId = (id = {}) => vm.$u.get(`/prod-api/api/hospital/reservation/${id}`);

	// 生成预约列表
	let getHospitaIdList = (params = {}) => vm.$u.get(
		'/prod-api/api/hospital/reservation/list?pageNum=1&pageSize=6', params);

	// 查询附近商家
	let getShopId = (params = {}) => vm.$u.get('/prod-api/api/takeout/seller/near', params);

	// 查询店铺详情
	let getShopIdDetail = (id = {}) => vm.$u.get(`/prod-api/api/takeout/seller/${id}`);

	// 查询店铺菜系
	let getShopIdFood = (params = {}) => vm.$u.get("/prod-api/api/takeout/product/list", params);

	// 查询店铺轮播
	let getShopIdBanner = (params = {}) => vm.$u.get("/prod-api/api/takeout/rotation/list", params);

	// 查询店铺主题
	let getShopIdThem = (params = {}) => vm.$u.get("/prod-api/api/takeout/theme/list", params);

	// 查询店铺列表
	let getShopIdList = (params = {}) => vm.$u.get("/prod-api/api/takeout/seller/list", params);

	// 查询美食列表
	let getFoodsList = (params = {}) => vm.$u.get("/prod-api/api/takeout/search", params);

	// 查询店家菜品类别
	let getFoodsType = (params = {}) => vm.$u.get("/prod-api/api/takeout/category/list", params);

	// 查询店家菜品类别
	let getData = (id = {}) => vm.$u.get(`/prod-api/api/takeout/seller/${id}`);

	// 查询工作列表
	let getjobList = (params = {}) => vm.$u.get("/prod-api/api/job/post/list", params);

	// 查询职位详情
	let goJobDetail = (id = {}) => vm.$u.get(`/prod-api/api/job/post/${id}`);

	// 查询公司详情
	let goGsDetail = (id = {}) => vm.$u.get(`/prod-api/api/job/company/${id}`);

	// 图书馆列表
	let getlibraryList = (params = {}) => vm.$u.get("/prod-api/api/digital-library/library/list", params);
  
  // 查询图书馆详情
  let getlibraryListDetail = (id = {}) => vm.$u.get(`/prod-api/api/digital-library/library/${id}`);

	// 获得评论列表
	let getlibraryPL = (params = {}) => vm.$u.get("/prod-api/api/digital-library/library-comment/list", params);
  



	// 查询订单
	let getOrderList = (params = {}) => vm.$u.get("/prod-api/api/takeout/order/list", params);
	// 查询评论
	let getPingLun = (params = {}) => vm.$u.get("/prod-api/press/comments/list", params);
	// 添加评论
	let getShopPingLun = (params = {}) => vm.$u.get("/prod-api/api/takeout/comment/list", params);
	// 获得菜单详情图
	let getOrderNoDetail = (orderNo = {}) => vm.$u.get(`/prod-api/api/takeout/order/${orderNo}`);
	// 获得当前名下违章列表
	let getOrderNoIllegalList = (params = {}) => vm.$u.get('/prod-api/api/traffic/illegal/list', params);
	// 获得影院轮播图
	let getMovice = (params = {}) => vm.$u.get('/prod-api/api/movie/rotation/list', params);
	// 获取影院信息
	let getMoviceWhere = (params = {}) => vm.$u.get('/prod-api/api/movie/theatre/list', params);
	// 获取影厅信息列表
	let getMoviceWhereList = (params = {}) => vm.$u.get('/prod-api/api/movie/theatre/room/list', params);
	// 获取影片信息列表
	let getMoviceDataList = (params = {}) => vm.$u.get('/prod-api/api/movie/film/list', params);
	// 获取预告片列表
	let getVideo = (params = {}) => vm.$u.get("/prod-api/api/movie/film/preview/list", params);
	// 获取影片详情
	let getBuyMovice = (id = {}) => vm.$u.get(`/prod-api/api/movie/film/detail/${id}`);
	// 获取职位列表
	let getJobPosition = (params = {}) => vm.$u.get("/prod-api/api/job/profession/list", params);
	// 查看投递历史
	let getJL = (params = {}) => vm.$u.get("/prod-api/api/job/deliver/list", params);
	// 查看活动管理轮播
	let getActivityBanner = (params = {}) => vm.$u.get("/prod-api/api/activity/rotation/list", params);
	// 查看活动管理轮播
	let getActivityList = (params = {}) => vm.$u.get("/prod-api/api/activity/category/list", params);
	// 查看活动列表
	let getActivityResultList = (params = {}) => vm.$u.get("/prod-api/api/activity/activity/list", params);
	// 查看或活动详情
	let getActivityIdDetail = (id = {}) => vm.$u.get(`/prod-api/api/activity/activity/${id}`);

// 查看活动列表
	let getActivityStatus = (params = {}) => vm.$u.get("/prod-api/api/activity/signup/check", params);

// 查看活动评论数
	let getActivityPLnumber = (params = {}) => vm.$u.get("/prod-api/api/activity/comment/number", params);
 
 // 查看活动评论l列表
 	let getActivityPLList = (params = {}) => vm.$u.get("/prod-api/api/activity/comment/list", params);
 
// 添加活动评论列表
 	let getAddActivityPLList = (params = {}) => vm.$u.get("/prod-api/api/activity/comment", params);

// 查询房源列表
 	let getHomeList = (params = {}) => vm.$u.get("/prod-api/api/house/housing/list", params);
//  获取房源详情
 let goHourstDetail = (id = {}) => vm.$u.get(`/prod-api/api/house/housing/${id}`);
// 查询宠物列表
 	let getpetList = (params = {}) => vm.$u.get("/prod-api/api/pet-hospital/pet-type/list", params);

// 查询宠物列表
 	let getPetDocter = (params = {}) => vm.$u.get("/prod-api/api/pet-hospital/pet-doctor/list", params);

// 查询宠物问诊记录
 	let getPetDocterRecord = (params = {}) => vm.$u.get("/prod-api/api/pet-hospital/inquiry/my-list", params);
 
// 查询宠物问诊案例
 	let getPetDocterDemo= (params = {}) => vm.$u.get("/prod-api/api/pet-hospital/inquiry/list", params);

// 查询菜品
 	let FoodsList= (params = {}) => vm.$u.get("/prod-api/api/kitchen-helper/dishes/list", params);

 // 获得厨房助手详情
 	let geKCtDatail = (id = {}) => vm.$u.get(`/prod-api/api/kitchen-helper/dishes/${id}`);

// 查询垃圾分类
 	let rubbishList= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/news-type/list", params);
  
  // 查询垃圾分类
   	let rubbishContentList= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/news/list", params);
  
  // 查询垃圾分类详情
  	let rubbishContentListDetail = (id = {}) => vm.$u.get(`/prod-api/api/garbage-classification/news/${id}`);
   
  // 查询搜索垃圾分类
   	let getSearchBish= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/garbage-classification/list", params);
	 
  // 垃圾分类热词
  let getSearchHotBish= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/garbage-classification/hot/list", params);
  
	// 查询某一分类下面的案例
	 let getSearchBishDemo= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/garbage-example/list", params);
	 
// 查询某一分类下面的案例
	 let getBannerrubbish= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/ad-banner/list", params);

// 获取宣传海报
	 let getBannerrubbishList= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/poster/list", params);
 
// 获取宣传海报
	 let getNewsList= (params = {}) => vm.$u.get("/prod-api/api/garbage-classification/news-comment/list", params);

// 获取所有公益分类
	 let getwelfareList= (params = {}) => vm.$u.get("/prod-api/api/public-welfare/public-welfare-type/list", params);
 
 // 获取所有公益分类
 	 let getfareListContent= (params = {}) => vm.$u.get("/prod-api/api/public-welfare/public-welfare-activity/list", params);
  
  // 获取所有公益分类
  	 let getfareListRecord= (params = {}) => vm.$u.get("/prod-api/api/public-welfare/donate-record/list", params);
  
  // 获取所有公益轮播
  	 let getfareListBanner= (params = {}) => vm.$u.get("/prod-api/api/public-welfare/ad-banner/list", params);
 
 // 获取所有法律轮播
 	 let getLawBanner= (params = {}) => vm.$u.get("/prod-api/api/lawyer-consultation/ad-banner/list", params);
 
// 获取所有法律列表
 	 let getLawList= (params = {}) => vm.$u.get("/prod-api/api/lawyer-consultation/legal-expertise/list", params);
 
 // 获取所有律师列表
  	 let getLawManList= (params = {}) => vm.$u.get("/prod-api/api/lawyer-consultation/lawyer/list", params);
  
  // 获取所有律师详细资料
   	 let getLawManListDetail= (id = {}) => vm.$u.get(`/prod-api/api/lawyer-consultation/lawyer/${id}`);
 
 // 获取律师咨询列表
   	 let getAdviceList= (params = {}) => vm.$u.get("/prod-api/api/lawyer-consultation/legal-advice/list", params);
  
 // 获取律师咨询列表
   	 let getVolunteerBanner= (params = {}) => vm.$u.get("/prod-api/api/volunteer-service/ad-banner/list", params);
 
  // 获取自愿者新闻列表
	let getVolunteerNewsList= (params = {}) => vm.$u.get("/prod-api/api/volunteer-service/news/list", params);
  
  
  // 获取自愿者新闻列表
  	let getVolunteerNewsDetail= (id = {}) => vm.$u.get(`/prod-api/api/volunteer-service/news/${id}`);
  
  // 获取自愿者活动列表
  	let getVolunteerActivityList= (params = {}) => vm.$u.get("/prod-api/api/volunteer-service/activity/list",params);
 
 // 获取自愿者活动列表
 	let getVolunteerActivityDetail= (id = {}) => vm.$u.get(`/prod-api/api/volunteer-service/activity/${id}`);
  
// 获取热线分类
 	let getHotlineType= (params = {}) => vm.$u.get("/prod-api/api/gov-service-hotline/appeal-category/list", params);
 
 // 获取热线内容
 	let getHotlineContent= (params = {}) => vm.$u.get("/prod-api/api/gov-service-hotline/appeal/list", params);
   
   // 获取热线详情
   	let getHotlineDetail= (id = {}) => vm.$u.get(`/prod-api/api/gov-service-hotline/appeal/${id}`);
  
 // 获取热线内容
 	let getHotLineBanner= (params = {}) => vm.$u.get("/prod-api/api/gov-service-hotline/ad-banner/list", params);
  
  // 获取所有物流公司
  	let getLogisticsList= (params = {}) => vm.$u.get("/prod-api/api/logistics-inquiry/logistics_company/list", params);
   
   // 获取热线内容
   	let getLogisticsDetail= (id = {}) => vm.$u.get(`/prod-api/api/logistics-inquiry/logistics_company/${id}`);
   
   // 获取所有投诉
   	let getComplaint= (params = {}) => vm.$u.get("/prod-api/api/logistics-inquiry/logistics_complaint/my-list", params);
  
  // 获取所有投诉
  	let getLogisticsBanner= (params = {}) => vm.$u.get("/prod-api/api/logistics-inquiry/ad-banner/list", params);
   
   
  // 获取人才政策区域
  	let getYouth= (params = {}) => vm.$u.get("/prod-api/api/youth-inn/talent-policy-area/list", params);
   
  // 获取人才政策详情
  	let getYouthDetail= (id = {}) => vm.$u.get(`/prod-api/api/youth-inn/talent-policy-area/${id}`);
  
  // 获取人才政策区域
  	let getYouthList= (params = {}) => vm.$u.get("/prod-api/api/youth-inn/talent-policy/list", params);
  
 // 获取指定人才政策详情
 	let getYouthListDetail= (id = {}) => vm.$u.get(`/prod-api/api/youth-inn/talent-policy/${id}`);
  
 // 分页获取所有驿站列表
	let getYouthInnList= (params = {}) => vm.$u.get("/prod-api/api/youth-inn/youth-inn/list", params);
 
 // 获取指定驿站的详情
 	let getYouthInnListDetail= (id = {}) => vm.$u.get(`/prod-api/api/youth-inn/youth-inn/${id}`);
  
 
 
 
 // 报名
 	let getVolunteerRegister= (params = {}) => vm.$u.post("/prod-api/api/volunteer-service/register", params);
	
 // 提交咨询
 	 let setAdvice= (params = {}) => vm.$u.post("/prod-api/api/lawyer-consultation/legal-advice", params);
  
 // 发起捐助
 	 let getDonate= (params = {}) => vm.$u.post("/prod-api/api/public-welfare/donate-record", params);

// 提交垃圾分类列表评论
	 let getNewsPLList= (params = {}) => vm.$u.post("/prod-api/api/garbage-classification/news-comment", params);

// 提交宠物咨询
 	let getStatus = (params = {}) => vm.$u.post("/prod-api/api/digital-library/library-comment/like", params);
 
 
// 提交宠物咨询
 	let getPetDocterDetail = (params = {}) => vm.$u.post("/prod-api/api/pet-hospital/inquiry", params);
	
	// 发表新闻评论
	let getPressComment = (params = {}) => vm.$u.post('/prod-api/press/pressComment', params);

	// 用户登录
	let getLogin = (params = {}) => vm.$u.post('/prod-api/api/login', params);

	// 充值
	let getRecharge = (params = {}) => vm.$u.post('/prod-api/api/common/balance/recharge', params);

	// 意见反馈
	let getFeedback = (params = {}) => vm.$u.post('/prod-api/api/common/feedback', params);

	// 通用上传接口
	let getUpload = (params = {}) => vm.$u.post('/prod-api/common/upload', params);

	// 通用上传接口
	let getCity = (params = {}) => vm.$u.post('/prod-api/api/common/gps/city', params);

	// 话费充值
	let getPhoneRecharge = (params = {}) => vm.$u.post('/prod-api/api/living/phone/recharge', params);

	// 修改就诊人名片
	let getAddUser = (params = {}) => vm.$u.post('/prod-api/api/hospital/patient', params);

	// 生成预约单
	let setHospital = (params = {}) => vm.$u.post('/prod-api/api/hospital', params);

	// 创建订单
	let setOrder = (params = {}) => vm.$u.post('/prod-api/api/takeout/order/create', params);

	// 支付订单
	let getOrder = (params = {}) => vm.$u.post('/prod-api/api/takeout/pay', params);

	let getComment = (params = {}) => vm.$u.post("/prod-api/press/pressComment", params);

	let getShopComment = (params = {}) => vm.$u.post("prod-api/api/takeout/comment", params);

	let getRefound = (params = {}) => vm.$u.post("/prod-api/api/takeout/order/refound", params);

	let getMoiveOrder = (params = {}) => vm.$u.post("/prod-api/api/movie/ticket", params);

	let goRegister = (params = {}) => vm.$u.post("/prod-api/api/activity/signup", params);
	
let setPinglun = (params = {}) => vm.$u.post("/prod-api/api/digital-library/library-comment", params);

let setAppeal = (params = {}) => vm.$u.post("/prod-api/api/gov-service-hotline/appeal", params);

let setInquiry = (params = {}) => vm.$u.post("/prod-api/api/logistics-inquiry/logistics_complaint", params);
 
 

	// 修改个人信息
	let getModifyData = (params = {}) => vm.$u.put('/prod-api/api/common/user', params)

	// 修改用户密码
	let getModifyPwd = (params = {}) => vm.$u.put('/prod-api/api/common/user/resetPwd', params);

	// 新闻点赞
	let getNewsLike = (params = {}) => vm.$u.put('/prod-api/press/press/like/{id}', params);

	// 评论点赞
	let getCommentsLike = (params = {}) => vm.$u.put('/prod-api/press/pressComment/like/{id}', params);

	// 修改就诊人
	let getPatient = (params = {}) => vm.$u.put('/prod-api/api/hospital/patient', params);


	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		getSearch,
		getSearchUser,
		getLogin,
		getBannner,
		getAllLocation,
		getNew,
		getNewList,
		getNewDetail,
		getNewLike,
		getModifyPwd,
		getModifyData,
		getFeedback,
		getCarList,
		getStopCarList,
		getManageList,
		getCartData,
		getMetroLine,
		getMetroLineDetail,
		getMetroLinerecord,
		getMetroAllDetail,
		getLivingList,
		getCategoryList,
		getPhone,
		getPhoneRecharge,
		getRecordList,
		getBillData,
		getIdData,
		getCarData,
		getCarListData,
		getCarStopListData,
		getCarStopListDetail,
		getHospitalBanner,
		getHospitaList,
		getAddUser,
		getHospitaIdCard,
		getPatient,
		getNum,
		getHospitaId,
		setHospital,
		getHospitaIdList,
		getShopId,
		getShopIdDetail,
		getShopIdFood,
		getShopIdBanner,
		getShopIdThem,
		getShopIdList,
		getFoodsList,
		getFoodsType,
		getData,
		setOrder,
		getOrderList,
		getOrder,
		getComment,
		getPingLun,
		getShopPingLun,
		getShopComment,
		getOrderNoDetail,
		getRefound,
		getOrderNoIllegalList,
		getMovice,
		getMoviceWhere,
		getMoviceWhereList,
		getMoviceDataList,
		getVideo,
		getBuyMovice,
		getMoiveOrder,
		getJobPosition,
		getjobList,
		goJobDetail,
		goGsDetail,
		getJL,
		getActivityBanner,
		getActivityList,
		getActivityResultList,
		getActivityIdDetail,
		goRegister,
		getActivityStatus,
		getActivityPLnumber,
		getActivityPLList,
		getAddActivityPLList,
		getHomeList,
		goHourstDetail,
		getpetList,
		getPetDocter,
		getPetDocterDetail,
		getPetDocterRecord,
		getPetDocterDemo,
		getlibraryList,
		getlibraryListDetail,
		getlibraryPL,
		getStatus,
		setPinglun,
		FoodsList,
		geKCtDatail,
		rubbishList,
		rubbishContentList,
		getSearchHotBish,
		rubbishContentListDetail,
		getSearchBish,
		getSearchBishDemo,
		getBannerrubbish,
		getBannerrubbishList,
		getNewsList,
		getNewsPLList,
		getwelfareList,
		getfareListContent,
		getDonate,
		getfareListRecord,
		getfareListBanner,
		getLawBanner,
		getLawList,
		getLawManList,
		getLawManListDetail,
		getAdviceList,
		setAdvice,
		getVolunteerBanner,
		getVolunteerNewsList,
		getVolunteerNewsDetail,
		getVolunteerActivityList,
		getVolunteerActivityDetail,
		getVolunteerRegister,
		getHotlineType,
		getHotlineContent,
		getHotlineDetail,
		setAppeal,
		getHotLineBanner,
		getLogisticsList,
		getLogisticsDetail,
		setInquiry,
		getComplaint,
		getLogisticsBanner,
		
		getYouth,
		getYouthDetail,
		getYouthListDetail,
		getYouthList,
		getYouthInnListDetail,
		getYouthInnList
	};
}

export default {
	install
}
