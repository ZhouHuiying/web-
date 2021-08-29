### 
#### NProgress:
NProgress是页面跳转是出现在浏览器顶部的进度条;
https://blog.csdn.net/wn1245343496/article/details/82151273
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

#### Vue.use 和 Vue.prototype.$
https://segmentfault.com/a/1190000019611146
Vue.prototype.$ELEMENT = { size };

### router
(case-main/router)

index.ts: genRouter

intercepters.ts:
checkPrivilege:√ 用于页面权限的校验
checkPrivilegeByUser：
getMainRoute
routeIntercept
RouteInterceptConfig.beforePartFunc meta.authDisabled meta.authFunc()

menu.ts: 生成左侧目录 buildMenu  buildMenu(routes, mainMenuTitles);

### store 

pageMenu.ts: storePageMenu storePageMenuOption

userInfo.ts:initStoreUserInfo updateStoreUserInfo rmStoreUserInfo

errorMsgChannel.ts:storeErrMsg  pushErrMsg pushMsgErr submitErrChanel clearErrMsg

currentRoute.ts:  storeCurrentRoute  updateStoreCurrentRoute

### types
bean.ts: 一些 interface

### request 
index.ts: getBaseUrl; RequestConfig  errHandle  postService postServiceRet mesPostUntilSuccess  download  upload  uploadService

interceptors.ts: AxiosInterceptConfig- responseRejectFunc/requestPartFunc  axiosIntercept(?)

### directive
v-drag

### filter

date-time.ts:  Vue.filter()

### plugins
element 
v-chart
composition-api

### service
use-decrator.ts: useLoading useLoadingDirect useConfirm useLoadingStore

use-pagination.ts:  usePagination

use-search.ts: search  useSearch

### types

common.ts

echart.ts

visual.ts

### utils
index.ts: generateID  generateUUID pipe  deepMerge debounce kebabToPascal pascalToCamel sleep assert isRefType leftFill0 deepClone(??)

array.ts: findIndexOfArray listContainsOr listContainAnd 

date.ts: formatMilliseconds formatDate formatTime formatTimeHM  formatDateTime
clearHMS getClock getWeekDaysRange

is.ts: isNil isDate datePlus

math.ts:hexTransfer

pinyin-map.ts: mapToPinyin mapToHanz 

regex.ts: regexPhone regexIP ruleCheckIP

validator.ts: validateDateRange