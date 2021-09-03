涂鸦智能第一面（电话）

1、vue双向绑定原理？
2、vue3了解过吗？你觉得vue3跟2比区别在哪里？
3、vue3的实现原理和2有什么不同？  直答出了proxy ？
4、diff算法原理？
5、v-for为什么key不建议设置为index？
6、vueX是什么？
7、为什么使用vueX，使用localstorage和他有什么区别？
8、网络七层模型？
9、http位于哪一层？
10、dns基于tcp还是udp？
11、tcp udp区别？
12、为什么接收方能保证tcp报文不错乱？
13、防抖节流
14、dom操作和css3动画有什么区别？
15、你觉得你到现在遇到比较困难的点是什么？

总结：vdom说的不到位、vue3实现不了解、diff算法实现不会、dns基于什么协议不会、

应用层 表示层 会话层 传输层 网络层 数据链路层 物理层 http位于应用层！



字节中台（视频）
1、自我介绍
2、Tcp怎么保证可靠连接
3、什么是跨域
4、怎么解决跨域
5、移动端1px划线 @media screen and (-webkit-min-device-pixel-ratio: 2)
6、Cookies大小和数目 4kb 我的电脑谷歌163个
7、Cookies属性、后台setcookies底层原理
8、前端安全 只回答了xss攻击； iframe 后台使用x-frame-options 前台使用top != window；csrf攻击：复制a站点登录成功的cookies去b站点使用，解决方法：加一个站点检查、token方式
9、闭包
10、浏览器缓存
11、事件循环
setTimeout(function () {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function () {
  console.log(4)；
});
console.log(5);


12、给定一个无序整形数组，找出排序后连续出现的数字区间（不是下标区间）

var list = [7,2,11,1,0,1,4,5,10,13,14,15]
function summaryRanges(list){
   // 补全代码
}
var result = summaryRanges(list);
console.log(result) // ["0->2", "4->5", "7", "10->11", "13->15"]


var list = [7,2,11,1,0,1,4,5,10,13,14,15]
function summaryRanges(list){
  list.sort((a, b) => {return a - b})
let arr = [...new Set(list)]

let res = []
let before = 0, count = 0

for (let i = 0; i < arr.length; i++) {
if (arr[i] + 1 == arr[i + 1]) {
count++
} else {
if (count == 0) {
res.push(`${arr[before]}`)
} else {
res.push(`${arr[before]}->${arr[before + count]}`)
}

before = i + 1
count = 0
}
}
return res
}
var result = summaryRanges(list);
console.log(result) // ["0->2", "4->5", "7", "10->11", "13->15"]


滴滴第一轮（视频）

1、算法：怎么判断链表有环
2、计算根号3的第n位小数是多少
3、什么是xss csrf攻击？怎么解决
4、http keepalive chunk 是什么
5、http状态码301 302分别是什么
6、http 强缓存协商缓存
7、什么是函数式编程
8、聊一下vue、react
9、如何不用代理的方法实现vue数据绑定


滴滴第二轮（视频面试）
1、自我介绍
2、Vue this.data=xxx后执行的操作
3、Diff算法
4、Vue-router的实现
5、缓存
6、Cookies、localStorage、sessionStorage、token
7、单点登录实现
8、Js异步操作有哪些
9、Node有写过中间件吗
10、Token基于什么技术
11、Jwt三个部分分别是什么
12、跨域问题
13、Vue jq的区别
14、有什么要问的


微医第一轮（电话面试）
1、自我介绍
2、最近做的项目
3、数组哪些操作会改变原数组，哪些不改变原数组
4、浏览器缓存机制
5、寻找无序数组中的第k大的数（冒泡排序）


兑吧第一轮（现场面试）
1、自我介绍
2、聊项目
3、Jq和vue react之间有什么区别
4、浏览器缓存机制
5、浏览器渲染html的过程
6、浏览器输入一段url后的操作
7、Webpack plugin和loader的区别
8、Webpack plugin的执行时机是怎么样的？有去了解过内部的原理吗


兑把第二轮（现场面试）
1、项目中最困难的点是什么
2、前端模块化方案
3、<div>
<span></span>
         <input />      
</div> 把span和input上下左右居中对齐的方法，尽可能多的说
4、vuecli 是怎么实现热更新的
5、有什么我们没问到你还想展示的吗？（因为说了刷算法题又聊了一下算法）
