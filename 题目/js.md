## JavaScript 面试知识点总结

本部分主要是笔者在复习 JavaScript 相关知识和一些相关面试题时所做的笔记，如果出现错误，希望大家指出！

### 目录

- [1. 介绍 js 的基本数据类型。](#1-介绍-js-的基本数据类型)
- [2. JavaScript 有几种类型的值？你能画一下他们的内存图吗？](#2-javascript-有几种类型的值你能画一下他们的内存图吗)
- [3. 什么是堆？什么是栈？它们之间有什么区别和联系？](#3-什么是堆什么是栈它们之间有什么区别和联系)
- [4. 内部属性 [[Class]] 是什么？](#4-内部属性-class-是什么)
- [5. 介绍 js 有哪些内置对象？](#5-介绍-js-有哪些内置对象)
- [6. undefined 与 undeclared 的区别？](#6-undefined-与-undeclared-的区别)
- [7. null 和 undefined 的区别？](#7-null-和-undefined-的区别)
- [8. 如何获取安全的 undefined 值？](#8-如何获取安全的-undefined-值)
- [9. 说几条写 JavaScript 的基本规范？](#9-说几条写-javascript-的基本规范)
- [10. JavaScript 原型，原型链？ 有什么特点？](#10-javascript-原型原型链-有什么特点)
- [11. js 获取原型的方法？](#11-js-获取原型的方法)
- [12. 在 js 中不同进制数字的表示方式](#12-在-js-中不同进制数字的表示方式)
- [13. js 中整数的安全范围是多少？](#13-js-中整数的安全范围是多少)
- [14. typeof NaN 的结果是什么？](#14-typeof-nan-的结果是什么)
- [15. isNaN 和 Number.isNaN 函数的区别？](#15-isnan-和-numberisnan-函数的区别)
- [16. Array 构造函数只有一个参数值时的表现？](#16-array-构造函数只有一个参数值时的表现)
- [17. 其他值到字符串的转换规则？](#17-其他值到字符串的转换规则)
- [18. 其他值到数字值的转换规则？](#18-其他值到数字值的转换规则)
- [19. 其他值到布尔类型的值的转换规则？](#19-其他值到布尔类型的值的转换规则)
- [20. {} 和 [] 的 valueOf 和 toString 的结果是什么？](#20--和--的-valueof-和-tostring-的结果是什么)
- [21. 什么是假值对象？](#21-什么是假值对象)
- [22. ~ 操作符的作用？](#22--操作符的作用)
- [23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？](#23-解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字它们之间的区别是什么)
- [24. 操作符什么时候用于字符串的拼接？](#24--操作符什么时候用于字符串的拼接)
- [25. 什么情况下会发生布尔值的隐式强制类型转换？](#25-什么情况下会发生布尔值的隐式强制类型转换)
- [26. || 和 &amp;&amp; 操作符的返回值？](#26--和--操作符的返回值)
- [27. Symbol 值的强制类型转换？](#27-symbol-值的强制类型转换)
- [28. == 操作符的强制类型转换规则？](#28--操作符的强制类型转换规则)
- [29. 如何将字符串转化为数字，例如 '12.3b'?](#29-如何将字符串转化为数字例如-123b)
- [30. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?](#30-如何将浮点数点左边的数每三位添加一个逗号如1200000011转化为1200000011)
- [31. 常用正则表达式](#31-常用正则表达式)
- [32. 生成随机数的各种方法？](#32-生成随机数的各种方法)
- [33. 如何实现数组的随机排序？](#33-如何实现数组的随机排序)
- [34. javascript 创建对象的几种方式？](#34-javascript-创建对象的几种方式)
- [35. JavaScript 继承的几种实现方式？](#35-javascript-继承的几种实现方式)
- [36. 寄生式组合继承的实现？](#36-寄生式组合继承的实现)
- [37. Javascript 的作用域链？](#37-javascript-的作用域链)
- [38. 谈谈 This 对象的理解。](#38-谈谈-this-对象的理解)
- [39. eval 是做什么的？](#39-eval-是做什么的)
- [40. 什么是 DOM 和 BOM？](#40-什么是-dom-和-bom)
- [41. 写一个通用的事件侦听器函数。](#41-写一个通用的事件侦听器函数)
- [42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？](#42-事件是什么ie-与火狐的事件机制有什么区别-如何阻止冒泡)
- [43. 三种事件模型是什么？](#43-三种事件模型是什么)
- [44. 事件委托是什么？](#44-事件委托是什么)
- [45. ["1", "2", "3"].map(parseInt) 答案是多少？](#45-1-2-3mapparseint-答案是多少)
- [46. 什么是闭包，为什么要用它？](#46-什么是闭包为什么要用它)
- [47. javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？](#47-javascript-代码中的-use-strict-是什么意思--使用它区别是什么)
- [48. 如何判断一个对象是否属于某个类？](#48-如何判断一个对象是否属于某个类)
- [49. instanceof 的作用？](#49-instanceof-的作用)
- [50. new 操作符具体干了什么呢？如何实现？](#50-new-操作符具体干了什么呢如何实现)
- [51. Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？](#51-javascript中有一个函数执行时对象查找时永远不会去查找原型这个函数是)
- [52. 对于 JSON 的了解？](#52-对于-json-的了解)
- [53. [].forEach.call(\$\$("<em>"),function(a){a.style.outline="1px solid #" (~~(Math.random()</em>(1&lt;&lt;24))).toString(16)}) 能解释一下这段代码的意思吗？](#53-foreachcallfunctionaastyleoutline1px-solid-mathrandom124tostring16-能解释一下这段代码的意思吗)
- [54. js 延迟加载的方式有哪些？](#54-js-延迟加载的方式有哪些)
- [55. Ajax 是什么? 如何创建一个 Ajax？](#55-ajax-是什么-如何创建一个ajax)
- [56. 谈一谈浏览器的缓存机制？](#56-谈一谈浏览器的缓存机制)
- [57. Ajax 解决浏览器缓存问题？](#57-ajax-解决浏览器缓存问题)
- [58. 同步和异步的区别？](#58-同步和异步的区别)
- [59. 什么是浏览器的同源政策？](#59-什么是浏览器的同源政策)
- [60. 如何解决跨域问题？](#60-如何解决跨域问题)
- [61. 服务器代理转发时，该如何处理 cookie？](#61-服务器代理转发时该如何处理-cookie)
- [62. 简单谈一下 cookie ？](#62-简单谈一下-cookie-)
- [63. 模块化开发怎么做？](#63-模块化开发怎么做)
- [64. js 的几种模块规范？](#64-js-的几种模块规范)
- [65. AMD 和 CMD 规范的区别？](#65-amd-和-cmd-规范的区别)
- [66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。](#66-es6-模块与-commonjs-模块amdcmd-的差异)
- [67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）](#67-requirejs-的核心原理是什么如何动态加载的如何避免多次加载的如何-缓存的)
- [68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？](#68-js-模块加载器的轮子怎么造也就是如何实现一个模块加载器)
- [69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?](#69-ecmascript6-怎么写-class为什么会出现-class-这种东西)
- [70. documen.write 和 innerHTML 的区别？](#70-documenwrite-和-innerhtml-的区别)
- [71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？](#71-dom-操作怎样添加移除移动复制创建和查找节点)
- [72. innerHTML 与 outerHTML 的区别？](#72-innerhtml-与-outerhtml-的区别)
- [73. .call() 和 .apply() 的区别？](#73-call-和-apply-的区别)
- [74. JavaScript 类数组对象的定义？](#74-javascript-类数组对象的定义)
- [75. 数组和对象有哪些原生方法，列举一下？](#75-数组和对象有哪些原生方法列举一下)
- [76. 数组的 fill 方法？](#76-数组的-fill-方法)
- [77. [,,,] 的长度？](#77--的长度)
- [78. JavaScript 中的作用域与变量声明提升？](#78-javascript-中的作用域与变量声明提升)
- [79. 如何编写高性能的 Javascript ？](#79-如何编写高性能的-javascript-)
- [80. 简单介绍一下 V8 引擎的垃圾回收机制](#80-简单介绍一下-v8-引擎的垃圾回收机制)
- [81. 哪些操作会造成内存泄漏？](#81-哪些操作会造成内存泄漏)
- [82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？](#82-需求实现一个页面操作不会整页刷新的网站并且能在浏览器前进后退时正确响应给出你的技术实现方案)
- [83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）](#83-如何判断当前脚本运行在浏览器还是-node-环境中阿里)
- [84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？](#84-把-script-标签放在页面的最底部的-body-封闭之前和封闭之后有什么区别浏览器会如何解析它们)
- [85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？](#85-移动端的点击事件的有延迟时间是多久为什么会有-怎么解决这个延时)
- [86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？](#86-什么是前端路由什么时候适合使用前端路由前端路由有哪些优点和缺点)
- [87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？](#87-如何测试前端代码么-知道-bdd-tdd-unit-test-么-知道怎么测试你的前端工程么mocha-sinon-jasmin-qunit)
- [88. 检测浏览器版本版本有哪些方式？](#88-检测浏览器版本版本有哪些方式)
- [89. 什么是 Polyfill ？](#89-什么是-polyfill-)
- [90. 使用 JS 实现获取文件扩展名？](#90-使用-js-实现获取文件扩展名)
- [91. 介绍一下 js 的节流与防抖？](#91-介绍一下-js-的节流与防抖)
- [92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？](#92-objectis-与原来的比较操作符--的区别)
- [93. escape,encodeURI,encodeURIComponent 有什么区别？](#93-escapeencodeuriencodeuricomponent-有什么区别)
- [94. Unicode 和 UTF-8 之间的关系？](#94-unicode-和-utf-8-之间的关系)
- [95. js 的事件循环是什么？](#95-js-的事件循环是什么)
- [96. js 中的深浅拷贝实现？](#96-js-中的深浅拷贝实现)
- [97. 手写 call、apply 及 bind 函数](#97-手写-callapply-及-bind-函数)
- [98. 函数柯里化的实现](#98-函数柯里化的实现)
- [99. 为什么 0.1 0.2 != 0.3？如何解决这个问题？](#99-为什么-01--02--03如何解决这个问题)
- [100. 原码、反码和补码的介绍](#100-原码反码和补码的介绍)
- [101. toPrecision 和 toFixed 和 Math.round 的区别？](#101-toprecision-和-tofixed-和-mathround-的区别)
- [102. 什么是 XSS 攻击？如何防范 XSS 攻击？](#102-什么是-xss-攻击如何防范-xss-攻击)
- [103. 什么是 CSP？](#103-什么是-csp)
- [104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？](#104-什么是-csrf-攻击如何防范-csrf-攻击)
- [105. 什么是 Samesite Cookie 属性？](#105-什么是-samesite-cookie-属性)
- [106. 什么是点击劫持？如何防范点击劫持？](#106-什么是点击劫持如何防范点击劫持)
- [107. SQL 注入攻击？](#107-sql-注入攻击)
- [108. 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？](#108-什么是-mvvm比之-mvc-有什么区别什么又是-mvp-)
- [109. vue 双向数据绑定原理？](#109-vue-双向数据绑定原理)
- [112. 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？](#112-什么是-virtual-dom为什么-virtual-dom-比原生-dom-快)
- [113. 如何比较两个 DOM 树的差异？](#113-如何比较两个-dom-树的差异)
- [115. 谈谈你对 webpack 的看法](#115-谈谈你对-webpack-的看法)
- [116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？](#116-offsetwidthoffsetheightclientwidthclientheight-与-scrollwidthscrollheight-的区别)
- [117. 谈一谈你理解的函数式编程？](#117-谈一谈你理解的函数式编程)
- [118. 异步编程的实现方式？](#118-异步编程的实现方式)
- [119. Js 动画与 CSS 动画区别及相应实现](#119-js-动画与-css-动画区别及相应实现)
- [120. get 请求传参长度的误区](#120-get-请求传参长度的误区)
- [121. URL 和 URI 的区别？](#121-url-和-uri-的区别)
- [122. get 和 post 请求在缓存方面的区别](#122-get-和-post-请求在缓存方面的区别)
- [123. 图片的懒加载和预加载](#123-图片的懒加载和预加载)
- [124. mouseover 和 mouseenter 的区别？](#124-mouseover-和-mouseenter-的区别)
- [125. js 拖拽功能的实现](#125-js-拖拽功能的实现)
- [126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？](#126-为什么使用-settimeout-实现-setinterval怎么模拟)
- [127. let 和 const 的注意点？](#127-let-和-const-的注意点)
- [128. 什么是 rest 参数？](#128-什么是-rest-参数)
- [129. 什么是尾调用，使用尾调用有什么好处？](#129-什么是尾调用使用尾调用有什么好处)
- [130. Symbol 类型的注意点？](#130-symbol-类型的注意点)
- [131. Set 和 WeakSet 结构？](#131-set-和-weakset-结构)
- [132. Map 和 WeakMap 结构？](#132-map-和-weakmap-结构)
- [133. 什么是 Proxy ？](#133-什么是-proxy-)
- [134. Reflect 对象创建目的？](#134-reflect-对象创建目的)
- [135. require 模块引入的查找方式？](#135-require-模块引入的查找方式)
- [136. 什么是 Promise 对象，什么是 Promises/A 规范？](#136-什么是-promise-对象什么是-promisesa-规范)
- [137. 手写一个 Promise](#137-手写一个-promise)
- [138. 如何检测浏览器所支持的最小字体大小？](#138-如何检测浏览器所支持的最小字体大小)
- [139. 怎么做 JS 代码 Error 统计？](#139-怎么做-js-代码-error-统计)
- [140. js设计模式](#140-js设计模式)
- [146. Vue 的生命周期是什么？](#146-vue-的生命周期是什么)
- [147. Vue 的各个生命阶段是什么？](#147-vue-的各个生命阶段是什么)
- [148. Vue 组件间的参数传递方式？](#148-vue-组件间的参数传递方式)
- [149. computed 和 watch 的差异？](#149-computed-和-watch-的差异)
- [157. 开发中常用的几种 Content-Type ？](#157-开发中常用的几种-content-type-)
- [158. 如何封装一个 javascript 的类型判断函数？](#158-如何封装一个-javascript-的类型判断函数)
- [159. 如何判断一个对象是否为空对象？](#159-如何判断一个对象是否为空对象)
- [160. 使用闭包实现每隔一秒打印 1,2,3,4](#160-使用闭包实现每隔一秒打印-1234)
- [161. 手写一个 jsonp](#161-手写一个-jsonp)
- [162. 手写一个观察者模式？](#162-手写一个观察者模式)
- [163. EventEmitter 实现](#163-eventemitter-实现)
- [164. 一道常被人轻视的前端 JS 面试题](#164-一道常被人轻视的前端js面试题)
- [165. 如何确定页面的可用性时间，什么是 Performance API？](#165-如何确定页面的可用性时间什么是-performance-api)
- [166. js 中的命名规则](#166-js-中的命名规则)
- [167. js 语句末尾分号是否可以省略？](#167-js-语句末尾分号是否可以省略)
- [168. Object.assign()](#168-objectassign)
- [169. Math.ceil 和 Math.floor](#169-mathceil-和-mathfloor)
- [170. js for 循环注意点](#170-js-for-循环注意点)
- [171. 一个列表，假设有 100000 个数据，这个该怎么办？](#171-一个列表假设有100000个数据这个该怎么办)
- [172. js 中倒计时的纠偏实现？](#172-js-中倒计时的纠偏实现)
- [173. 进程间通信的方式？](#173-进程间通信的方式)
- [174. 如何查找一篇英文文章中出现频率最高的单词？](#174-如何查找一篇英文文章中出现频率最高的单词)

#### 1. 介绍 js 的基本数据类型。

```
js 一共有六种基本数据类型，分别是 Undefined、Null、Boolean、Number、String，还有在 ES6 中新增的 Symbol 和 ES10 中新增的 BigInt 类型。

Symbol 代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。

BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。


Undefined:
    使用var声明变量但未对其进行初始化，这个变量的值就是undefined。
Null：
  表示一个空对象指针，使用typeof操作符检测null会返回object
Boolean：
  true false
Number:
  十进制、八进制0、十六进制0x NaN:非数值 
  将非数值转换为数值：Number()-可以用于任何数据类型；parseInt() parseFloat() -专门用于把字符串转换成数值；
String
Object：
  var o = new Object()
symbol（ES6 新增的）
BigInt（ES2020）

```

null === null  // true
{} === {}  // false
undefined === undefined  // true

#### 2. JavaScript 有几种类型的值？你能画一下他们的内存图吗？

涉及知识点：

- 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

```
两种类型的区别是：存储位置不同。
原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在
栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实
体。
```

回答：

```
js 可以分为两种类型的值，一种是基本数据类型，一种是复杂数据类型。

基本数据类型....（参考1）

复杂数据类型指的是 Object 类型，所有其他的如 Array、Date 等数据类型都可以理解为 Object 类型的子类。

两种类型间的主要区别是它们的存储位置不同，基本数据类型的值直接保存在栈中，而复杂数据类型的值保存在堆中，通过使用在栈中
保存对应的指针来获取堆中的值。
```

详细资料可以参考：
[《JavaScript 有几种类型的值？》](https://blog.csdn.net/lxcao/article/details/52749421)
[《JavaScript 有几种类型的值？能否画一下它们的内存图；》](https://blog.csdn.net/jiangjuanjaun/article/details/80327342)

#### 3. 什么是堆？什么是栈？它们之间有什么区别和联系？

```
堆和栈的概念存在于数据结构中和操作系统内存中。

在数据结构中，栈中数据的存取方式为先进后出。
而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。

在操作系统中，内存被分为栈区和堆区。

栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。

堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。
```

详细资料可以参考：
[《什么是堆？什么是栈？他们之间有什么区别和联系？》](https://www.zhihu.com/question/19729973)

#### 4. 内部属性 [[Class]] 是什么？

```
所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非
传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查看。例如：

Object.prototype.toString.call( [1,2,3] );
// "[object Array]"

Object.prototype.toString.call( /regex-literal/i );
// "[object RegExp]"

// 我们自己创建的类就不会有这份特殊待遇，因为 toString() 找不到 toStringTag 属性时只好返回默认的 Object 标签
// 默认情况类的[[Class]]返回[object Object]
class Class1 {}
Object.prototype.toString.call(new Class1()); // "[object Object]"
// 需要定制[[Class]]
class Class2 {
  get [Symbol.toStringTag]() {
    return "Class2";
  }
}
Object.prototype.toString.call(new Class2()); // "[object Class2]"
```

- Object.prototype.toString.call
在JavaScript里使用typeof判断数据类型，只能区分基本类型，即：number、string、undefined、boolean、object。
对于null、array、function、object来说，使用typeof都会统一返回object字符串。
要想区分对象、数组、函数、单纯使用typeof是不行的。在JS中，可以通过Object.prototype.toString方法，判断某个对象之属于哪种内置类型。

将前面的this指向后面的元素，改变this指向；

  Object.prototype.toString.call('aaa')
  "[object String]"
  Object.prototype.toString.call(1)
  "[object Number]"
  Object.prototype.toString.call(null)
  "[object Null]"
  Object.prototype.toString.call({})
  "[object Object]"
  Object.prototype.toString.call(true)
  "[object Boolean]"

#### 5. 介绍 js 有哪些内置对象？

涉及知识点：

```
全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在
全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

标准内置对象的分类

（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。

例如 Infinity、NaN、undefined、null 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 eval()、parseFloat()、parseInt() 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments

```

回答：

```
js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函
数对象。一般我们经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构
造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。
```

详细资料可以参考：
[《标准内置对象的分类》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
[《JS 所有内置对象属性和方法汇总》](https://segmentfault.com/a/1190000011467723#articleHeader24)

#### 6. undefined 与 undeclared 的区别？

```
已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。

对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typ
eof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
```

#### 7. null 和 undefined 的区别？

```
首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null
主要用于赋值给一些可能会返回对象的变量，作为初始化。

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它
会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址,当使用完一个比较大的对象时，需要对其进行释放内存时，设置为null。
  共同点：都是原始类型，变量保存在栈中；
  不同点：undefined——表示变量声明过但并未赋过值。它是所有未赋值变量默认值。
          null表示一个变量将来可能指向一个对象。一般用于主动释放指向对象的引用。


当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等
号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。
```

详细资料可以参考：
[《JavaScript 深入理解之 undefined 与 null》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8Bundefined%E4%B8%8Enull.html)

#### 8. 如何获取安全的 undefined 值？

```
因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。

表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。

按惯例我们用 void 0 来获得 undefined。
```

#### 9. 说几条写 JavaScript 的基本规范？

```
在平常项目开发中，我们遵守一些这样的基本规范，比如说：

（1）一个函数作用域中所有的变量声明应该尽量提到函数首部，用一个 var 声明，不允许出现两个连续的 var 声明，声明时
    如果变量没有值，应该给该变量赋值对应类型的初始值，便于他人阅读代码时，能够一目了然的知道变量对应的类型值。

（2）代码中出现地址、时间等字符串时需要使用常量代替。

（3）在进行比较的时候吧，尽量使用'===', '!=='代替'==', '!='。

（4）不要在内置对象的原型上添加方法，如 Array, Date。

（5）switch 语句必须带有 default 分支。

（6）for 循环必须使用大括号。

（7）if 语句必须使用大括号。
```

#### 10. JavaScript 原型，原型链？ 有什么特点？

```
在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对
象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
当我们使用构造函数新建一个对象后，在这个对象的内部
将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们
是不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，但是我们最好不要使用这
个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对
象的原型。


当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又
会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就
是我们新建的对象为什么能够使用 toString() 等方法的原因。

特点：

JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与
之相关的对象也会继承这一改变。
```

详细资料可以参考：
[《JavaScript 深入理解之原型与原型链》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.html)

#### prototype 是啥，什么是原型，什么是实例原型，说说你的理解
(C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\04-JavaScript基础\26-对象的创建&构造函数.md)
(C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\04-JavaScript基础\原型对象.md)

创建自定义对象的几种方法：
  对象字面量：{}
  工厂模式：new Object();
  构造函数；

一般的对象它们的原型链的顶点是Object.prototype。

原型链的顶端是null;
typeof null  // 'object'
为什么？
  一方面，你没法访问null的属性，所以起到了终止原型链的作用；
  另一方面，null在某种意义上也是一种对象，即空对象，因为null一开始就是为表示一个“空”的对象存在的。这样一来，就不会违反“原型链上只能有对象”的约定；

重写 Person 原型的toString方法。针对 Person 的所有实例生效：
  function Person(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    Person.prototype.toString = function() {
      return (
        "Person[name=" +
        this.name +
        ",age=" +
        this.age +
        ",gender=" +
        this.gender +
        "]"
      );
    };

#### 什么是作用域
ES5 中只存在两种作用域：全局作用域和函数作用域。在 JavaScript 中，我们将作用域定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套子作用域中根据标识符名称进行变量（变量名或者函数名）查找；

#### 什么是作用域链
首先要了解作用域链，当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止。
而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。 

#### 闭包产生的本质
当前环境中存在指向父级作用域的引用

#### 什么是闭包
闭包是一种特殊的对象，它由两部分组成：执行上下文（代号 A），以及在该执行上下文中创建的函数 （代号 B），当 B 执行时，如果访问了 A 中变量对象的值，那么闭包就会产生，且在 Chrome 中使用这个执行上下文 A 的函数名代指闭包。

#### 一般如何产生闭包
  返回函数;
  函数当做参数传递;

```js
  function fn1() {
      let a = 20;

      function fn2() {
          console.log(a);
      }
      return fn2;
  }

  const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数
  foo();
```
上方代码中，foo 代表的就是整个 fn2 函数。当执行了 `foo()` 语句之后（相当于执行了 ），fn1 函数内就产生了闭包。

一般来说，在 fn1 函数执行完毕后，它里面的变量 a 会立即销毁。但此时由于产生了闭包，所以 **fn1 函数中的变量 a 不会立即销毁，因为 fn2 函数还要继续调用变量 a**。只有等所有函数把变量 a 调用完了，变量 a 才会销毁。

而且，可以看出， 在执行 `foo()`语句之后，竟然能够打印出 `20`，这就完美通过闭包实现了：全局作用局成功访问到了局部作用域中的变量 a。

因此，我们可以看出，闭包的主要作用就是：延伸了变量的作用范围。

#### 构造函数是什么

  构造函数：是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。

  new方法实现了什么？
    (1) 创建一个新对象；
    (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
    (3) 执行构造函数中的代码（为这个新对象添加属性） ；
    (4) 返回新对象。

#### 构造函数和普通函数的区别

  (1) 调用方式不一样。作用也不一样（构造函数用来新建实例对象）;
    普通函数的调用方式：直接调用 person();
    构造函数的调用方式：需要使用new关键字来调用 new Person();内部用this 来构造属性和方法;

  (2) this 的指向也有所不同：
  -   1.以函数的形式调用时，this 永远都是 window。比如`fun();`相当于`window.fun();`
  -   2.以方法的形式调用时，this 是调用方法的那个对象
  -   3.以构造函数的形式调用时，this 是新创建的实例对象

  构造函数的实例可以通过实例的constructor访问对应的构造函数；

#### 箭头函数
  const fn2 = (a, b) => a + b;  //只有一条语句，所以可以不用加{}

  箭头函数特点：
    箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
    箭头函数它作为一个函数，它是没有prototype属性的。

  箭头函数可以让函数写起来更简洁优雅。还有一个很大的作用是与 this 的指向有关。
    ES6 的箭头函数中：**箭头函数本身不绑定 this**，this 指向的是**箭头函数定义位置的 this**（也就是说，箭头函数在哪个位置定义的，this 就跟这个位置的 this 指向相同）。
    
    不能使用call方法修改里面的this (原因：函数的this可以用call方法来手动指定，而为了减少this的复杂性，箭头函数无法用call方法来指定this)

  (!!!)
    所有的引用类型都有__ proto __属性;
    只有函数对象有prototype属性;
    所有的引用类型的__ proto __属性值均指向它的构造函数的prototype的属性值;
    当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去他的__ proto __(即它的构造函数的prototype）中寻找;

#### 箭头函数能不能做构造函数，为什么？
(https://blog.csdn.net/weixin_42798473/article/details/105319353)

#### new 一个函数发生了什么
- 创造一个全新的对象
- 这个对象会被执行 [[Prototype]] 连接，将这个新对象的 [[Prototype]] 链接到这个构造函数.prototype 所指向的对象
- 这个新对象会绑定到函数调用的 this
- 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象

#### 变量提升
  函数在运行的时候，会首先创建执行上下文，然后将执行上下文入栈，然后当此执行上下文处于栈顶时，开始运行执行上下文。

  在创建执行上下文的过程中会做三件事：
    创建变量对象，
    创建作用域链，
    确定 this 指向，

  其中创建变量对象的过程中，首先会为 arguments 创建一个属性，值为 arguments，然后会扫码 function 函数声明，创建一个同名属性，值为函数的引用，接着会扫码 var 变量声明，创建一个同名属性，值为 undefined，这就是变量提升。

#### 执行上下文

- 全局执行上下文

在执行全局代码前将window确定为全局执行上下文。

（1）对全局数据进行预处理：（并没有赋值）

- var定义的全局变量==>undefined, 添加为window的属性

- function声明的全局函数==>赋值(fun), 添加为window的方法

- this==>赋值(window)

（2）开始执行全局代码

- 函数执行上下文

在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)。

（1）对局部数据进行预处理：

- 形参变量==>赋值(实参)==>添加为执行上下文的属性

- arguments==>赋值(实参列表), 添加为执行上下文的属性

- var定义的局部变量==>undefined, 添加为执行上下文的属性

- function声明的函数 ==>赋值(fun), 添加为执行上下文的方法

- this==>赋值(调用函数的对象)

（2）开始执行函数体代码

#### 原型概念
我们所创建的每一个函数，解析器都会向函数中添加一个属性 prototype。这个属性是一个指针,指向一个对象，这个对象就是我们所谓的原型对象。原型对象的本质也是一个对象。
如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的实例对象中都会有一个隐含的属性，指向该构造函数的原型，我们可以通过__proto__来访问该属性。

#### 原型链
原型链的原理：让一个引用类型继承另一个引用类型的属性和方法；
原型对象通过constructor属性指向构造函数，实例通过Prototype属性指向原型对象；

什么是原型链？
  原型对象也是对象，所以它也有原型，当我们使用或访问一个对象的属性或方法时：
  - 它会先在对象自身中寻找，如果有则直接使用；
  - 如果没有则会去原型对象中寻找，如果找到则直接使用；
  - 如果没有则去原型的原型中寻找，直到找到Object对象的原型。
  - Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回 null

#### 11. js 获取原型的方法？

- p.\_\_proto\_\_
- p.constructor.prototype
- Object.getPrototypeOf(p)

#### 12. 在 js 中不同进制数字的表示方式

- 以 0X、0x 开头的表示为十六进制。

- 以 0、0O、0o 开头的表示为八进制。

- 以 0B、0b 开头的表示为二进制格式。

#### 13. js 中整数的安全范围是多少？

```
通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52），最大安全数字是 Math.pow(2, 53) - 1；
Number() 的存储空间：Math.pow(2, 53) ，53 为有效数字；如果后台发送一个超过自己最大的数字，会发生截断等于JS 能支持的最大数字；


安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现精度丢失，能够被“安全”呈现的最大整数是 2^53 - 1，
即9007199254740991，在 ES6 中被定义为 Number.MAX_SAFE_INTEGER。最小整数是-9007199254740991，在 ES6 中
被定义为 Number.MIN_SAFE_INTEGER。

如果某次计算的结果得到了一个超过 JavaScript 数值范围的值，那么这个值会被自动转换为特殊的 Infinity 值。如果某次
计算返回了正或负的 Infinity 值，那么该值将无法参与下一次的计算。判断一个数是不是有穷的，可以使用 isFinite 函数
来判断。
```

#### 14. typeof NaN / typeof null的结果是什么？

```
NaN 意指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出
数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

typeof NaN; // "number"
typeof NaN === 'number'

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN
为 true。

typeof null // 'object'

```
- 
  NaN === NaN  Not a Number, 不是数字的情况有很多种   // false
  {} === {}  //  false
#### 15. isNaN 和 Number.isNaN 函数的区别？

``` 
函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会
返回 true ，会影响 NaN 的判断。

函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，这种方法对于 NaN 的判断更为
准确。
```

#### 16. Array 构造函数只有一个参数值时的表现？

```
Array 构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素。这样
创建出来的只是一个空数组，只不过它的 length 属性被设置成了指定的值。

构造函数 Array(..) 不要求必须带 new 关键字。不带时，它会被自动补上。
```

#### 17. 其他值到字符串的转换规则？

```
规范的 9.8 节中定义了抽象操作 ToString ，它负责处理非字符串到字符串的强制类型转换。

（1）Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，

（2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。

（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。

（5）对普通对象来说，Dg() 方法，否则会调用 toString()（Object.prototype.toString()）
    来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会
    调用该方法并使用其返回值。
```

#### 18. 其他值到数字值的转换规则？

```
有时我们需要将非数字值当作数字来使用，比如数学运算。为此 ES5 规范在 9.3 节定义了抽象操作 ToNumber。

（1）Undefined 类型的值转换为 NaN。

（2）Null 类型的值转换为 0。

（3）Boolean 类型的值，true 转换为 1，false 转换为 0。

（4）String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

（5）Symbol 类型的值不能转换为数字，会报错。

（6）对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf() 方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。

如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。

<!-- --- -->
valueOf() 方法返回 Array 对象的原始值。

该原始值由 Array 对象派生的所有对象继承。

valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

```

#### 19. 其他值到布尔类型的值的转换规则？

```
ES5 规范 9.2 节中定义了抽象操作 ToBoolean，列举了布尔强制类型转换所有可能出现的结果。

以下这些是假值：
• undefined
• null
• false
• +0、-0 和 NaN
• ""

假值的布尔强制类型转换结果为 false。从逻辑上说，假值列表以外的都应该是真值。
```

#### 20. {} 和 [] 的 valueOf 和 toString 的结果是什么？

```
{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""
```

#### 21. 什么是假值对象？

```
浏览器在某些特定情况下，在常规 JavaScript 语法基础上自己创建了一些外来值，这些就是“假值对象”。假值对象看起来和
普通对象并无二致（都有属性，等等），但将它们强制类型转换为布尔值时结果为 false 最常见的例子是 document.all，它
是一个类数组对象，包含了页面上的所有元素，由 DOM（而不是 JavaScript 引擎）提供给 JavaScript 程序使用。
```

#### 22. ~ 操作符的作用？

```
~ 返回 2 的补码，并且 ~ 会将数字转换为 32 位整数，因此我们可以使用 ~ 来进行取整操作。

~x 大致等同于 -(x+1)。
```

#### 23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？

```
解析允许字符串（如 parseInt() ）中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。而转换（如 Nu
mber ()）不允许出现非数字字符，否则会失败并返回 NaN。
```

#### 24. `+` 操作符什么时候用于字符串的拼接？

```
根据 ES5 规范 11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其
中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作，该抽象操作再调用 [[DefaultValue]]，以
数字作为上下文。如果不能转换为字符串，则会将其转换为数字类型来进行计算。

简单来说就是，如果 + 的其中一个操作数是字符串（或者通过以上步骤最终得到字符串），则执行字符串拼接，否则执行数字
加法。

那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字。
```

#### 25. 什么情况下会发生布尔值的隐式强制类型转换？

```
（1） if (..) 语句中的条件判断表达式。
（2） for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
（3） while (..) 和 do..while(..) 循环中的条件判断表达式。
（4） ? : 中的条件判断表达式。
（5） 逻辑运算符 ||（逻辑或）和 &&（逻辑与）左边的操作数（作为条件判断表达式）。
```

#### 26. || 和 && 操作符的返回值？

```
|| 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件
判断。

对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

&& 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 && 返回它们其中一个操作数的值，而非条件判断的结果
```

#### 27. Symbol 值的强制类型转换？

```
ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误。

Symbol 值不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果
都是 true ）。
```

#### 28. == 操作符的强制类型转换规则？

```
（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。

（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。

（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。

（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。

（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。

（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。
```

详细资料可以参考：
[《JavaScript 字符串间的比较》](https://www.jeffjade.com/2015/08/28/2015-09-02-js-string-compare/)

#### 29. 如何将字符串转化为数字，例如 '12.3b'?

```
（1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。

（2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

（3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。

（4）使用 + 操作符的隐式转换。
```

详细资料可以参考：
[《详解 JS 中 Number()、parseInt() 和 parseFloat() 的区别》](https://blog.csdn.net/m0_38099607/article/details/72638678)

#### 30. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?

```js
// 方法一
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
  return Intl.NumberFormat().format(number)
}
// 方法三
function format2(number) {
  return number.toLocaleString('en')
}
```

#### 31. 常用正则表达式

```js
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;
```

详细资料可以参考：
[《前端表单验证常用的 15 个 JS 正则表达式》](http://caibaojian.com/form-regexp.html)
[《JS 常用正则汇总》](https://www.jianshu.com/p/1cb5229325a7)

#### 32. 生成随机数的各种方法？

[《JS - 生成随机数的方法汇总（不同范围、类型的随机数）》](http://www.hangge.com/blog/cache/detail_1872.html)

#### 33. 如何实现数组的随机排序？

```js
// （1）使用数组 sort 方法对数组元素随机排序，让 Math.random() 出来的数与 0.5 比较，如果大于就返回 1 交换位置，如果小于就返回 -1，不交换位置。

function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}

//  缺点：每个元素被派到新数组的位置不是随机的，原因是 sort() 方法是依次比较的。

// （2）随机从原数组抽取一个元素，加入到新数组

function randomSort(arr) {
  var result = [];

  while (arr.length > 0) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }

  return result;
}

// （3）随机交换数组内的元素（洗牌算法类似）

function randomSort(arr) {
  var index,
    randomIndex,
    temp,
    len = arr.length;

  for (index = 0; index < len; index++) {
    randomIndex = Math.floor(Math.random() * (len - index)) + index;

    temp = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

// es6
function randomSort(array) {
  let length = array.length;

  if (!Array.isArray(array) || length <= 1) return;

  for (let index = 0; index < length - 1; index++) {
    let randomIndex = Math.floor(Math.random() * (length - index)) + index;

    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }

  return array;
}
```

详细资料可以参考：
[《Fisher and Yates 的原始版》](https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/#top)
[《javascript 实现数组随机排序?》](https://www.zhihu.com/question/32303195)
[《JavaScript 学习笔记：数组随机排序》](https://www.w3cplus.com/javascript/how-to-randomize-shuffle-a-javascript-array.html)

#### 34. javascript 创建对象的几种方式？

我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js
和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象
创建方式，我了解到的方式有这么几种：

字面量：
 var p = {
        name: 'Tom',
        age: 12,
        setName: function (name) {
            this.name = name
        }
    }

工厂模式/构造函数/原型模式/构造函数+原型模式/动态原型模式/寄生构造函数模式

- （1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。
    function createPerson(name, age) { //返回一个对象的函数===>工厂函数
      var obj = {
          name: name,
          age: age,
          setName: function (name) {
              this.name = name
          }
      }
      return obj;
    }

    // 创建2个人
    var p1 = createPerson('Tom', 12)
    var p2 = createPerson('Bob', 13)

（2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。
  function Person(name, age) {
        this.name = name
        this.age = age
        this.setName = function (name) {
            this.name = name
        }
    }

    var p1 = new Person('Tom', 12)

（3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

嗯我目前了解到的就是这么几种方式。


详细资料可以参考：
[《JavaScript 深入理解之对象创建》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%AF%B9%E8%B1%A1%E5%88%9B%E5%BB%BA.html)

#### 35. JavaScript 继承的几种实现方式？

```
我了解的 js 中实现继承的几种方式有：

（1）第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

（2）第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

（3）第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
```

详细资料可以参考：
[《JavaScript 深入理解之继承》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E7%BB%A7%E6%89%BF.html)

#### 36. 寄生式组合继承的实现？

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log("My name is " + this.name + ".");
};

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayMyGrade = function() {
  console.log("My grade is " + this.grade + ".");
};
```

#### 37. Javascript 的作用域链？

```
作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和
函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前
端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。

作用域链的创建过程跟执行上下文的建立有关。
```

详细资料可以参考：
[《JavaScript 深入理解之作用域链》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.html)

#### 作用域

F:\笔记\Web\07-JavaScript进阶\作用域和闭包.md ！！！！！

作用域指一个变量的**作用范围**。它是静态的(相对于上下文对象), 在编写代码时就确定了。

- 全局作用域  ： 变量的声明提前var, 函数的声明提前-> 使用`函数声明`的形式创建的函数`function foo(){}`，**会被声明提前**

直接编写在script标签中的JS代码，都在全局作用域。

在全局作用域中：

- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用。

- 创建的变量都会作为window对象的属性保存。

- 创建的函数都会作为window对象的方法保存。

全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问到。

- 函数作用域
**调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁。**

每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的。

在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量。


在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用`window.a`）

#### 作用域与执行上下文的区别

区别1：

- 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时

- 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建

- 函数执行上下文是在调用函数时, 函数体代码执行之前创建

区别2：

- 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化

- 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放

联系：

  * 执行上下文(对象)是从属于所在的作用域

  * 全局上下文环境==>全局作用域

  * 函数上下文环境==>对应的函数使用域

#### 38. 谈谈 This 对象的理解  this指向

this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模
式来判断。

- 1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
  ```javascript
      function fn() {
          console.log(this); //this === window
      }

      fn();
  ```

- 2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
  ```javascript
      var obj = {
          name: 'A',
          printName: function () {
              console.log(this.name);
          }
      }

      obj.printName();

  ```

- 3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。构造函数函数执行。
  ```javascript
    function Foo(name) {
        //this = {};
        this.name = name;
        //return this;
    }

    var foo = new Foo();

- 4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

这四种方式，使用构造器调用模式的优先级最高，然后是 apply 、 call 和 bind 调用模式，然后是方法调用模式，然后
是函数调用模式。

#### 严格模式下的this指向？

- 全局作用域中的this
  在严格模式下，在全局作用域中，this指向window对象

- 全局作用域中函数中的this
  在严格模式下，这种函数中的this等于undefined

- 对象的函数（方法）中的this
  在严格模式下，对象的函数中的this指向调用函数的对象实例

- 构造函数的this
  在严格模式下，构造函数中的this指向构造函数创建的对象实例。

- 事件处理函数中的this
  在严格模式下，在事件处理函数中，this指向触发事件的目标对象。

#### 39. eval 是做什么的？

```
它的功能是把对应的字符串解析成 JS 代码并运行。

应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）。
```

详细资料可以参考：
[《eval()》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

#### 40. 什么是 DOM 和 BOM？

```
DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM
的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）
对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 locati
on 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对
象的子对象。
```

详细资料可以参考：
[《DOM, DOCUMENT, BOM, WINDOW 有什么区别?》](https://www.zhihu.com/question/33453164)
[《Window 对象》](http://www.w3school.com.cn/jsref/dom_obj_window.asp)
[《DOM 与 BOM 分别是什么，有何关联？》](https://www.zhihu.com/question/20724662)
[《JavaScript 学习总结（三）BOM 和 DOM 详解》](https://segmentfault.com/a/1190000000654274#articleHeader21)

#### 41. 写一个通用的事件侦听器函数。

```js
const EventUtils = {
  // 视能力分别使用 dom0||dom2||IE方式 来绑定事件
  // 添加事件
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  // 移除事件
  removeEvent: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },

  // 获取事件目标
  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
  getEvent: function(event) {
    return event || window.event;
  },

  // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  // 取消事件的默认行为
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};
```

详细资料可以参考：
[《JS 事件模型》](https://segmentfault.com/a/1190000006934031#articleHeader6)

#### 42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？

- 1.事件是用户操作网页时发生的交互动作，比如 click/move， 事件除了用户触发的动作外，还可以是文档加载，窗口滚动和大小调整。事件被封装成一个 event 对象，包含了该事件发生时的所有相关信息（ event 的属性）以及可以对事件进行的操作（ event 的方法）。

- 2.事件处理机制：IE 支持事件冒泡、Firefox 同时支持两种事件模型，也就是：事件冒泡和事件捕获。

- 3.event.stopPropagation() 或者 ie 下的方法 event.cancelBubble = true;

详细资料可以参考：
[《Javascript 事件模型系列（一）事件及事件的三种模型》](https://www.cnblogs.com/lvdabao/p/3265870.html)
[《Javascript 事件模型：事件捕获和事件冒泡》](https://blog.csdn.net/wuseyukui/article/details/13771493)

#### 43. 三种事件模型是什么？

```
事件是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型。

第一种事件模型是最早的 DOM0 级模型，这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实
现，它可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。这种方式是所有浏览器都兼容的。

第二种事件模型是 IE 事件模型，在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到 document，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。

第三种是 DOM2 级事件模型，在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行。
```

详细资料可以参考：
[《一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获》](https://blog.csdn.net/u013217071/article/details/77613706)

##### 事件传播三个阶段

事件传播的三个阶段是：事件捕获阶段、处于目标阶段、事件冒泡阶段。 

首先发生的事件捕获，为截获事件提供机会。然后是事件的目标接受事件。最后一个阶段是事件冒泡阶段，可以在这个阶段对事件做出响应。 虽然捕获阶段在规范中规定不允许响应事件，但是实际上还是会执行，所以有两次机会获取到目标对象。

#### 事件捕获
addEventListener可以捕获事件

```javascript
    box1.addEventListener("click", function () {
        alert("捕获 box3");
    }, true);
```
上面的方法中，参数为true，代表事件在捕获阶段执行。

**重点**：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。
这几个元素在事件捕获阶段的完整写法是：

```javascript
    window.addEventListener("click", function () {
        alert("捕获 window");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 document");
    }, true);

    document.documentElement.addEventListener("click", function () {
        alert("捕获 html");
    }, true);

    document.body.addEventListener("click", function () {
        alert("捕获 body");
    }, true);

    fatherBox.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    childBox.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

```

#### 事件冒泡
**事件冒泡**: 当一个元素上的事件被触发的时候（比如说鼠标点击了一个按钮），同样的事件将会在那个元素的所有**祖先元素**中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。

通俗来讲，冒泡指的是：**子元素的事件被触发时，父元素的同样的事件也会被触发**。取消冒泡就是取消这种机制。
```javascript
    //事件冒泡
    box3.onclick = function () {
        alert("child");
    }

    box2.onclick = function () {
        alert("father");
    }

    box1.onclick = function () {
        alert("grandfather");
    }

    document.onclick = function () {
        alert("body");
    }

```
当我点击子元素 box3 的时候，它的父元素box2、box1、body都依次被触发了。即使我改变代码的顺序，也不会影响效果的顺序。

冒泡顺序：div -> body -> html -> document -> window

##### 不是所有的事件都能冒泡

以下事件不冒泡：blur、focus、load、unload、onmouseenter、onmouseleave。意思是，事件不会往父元素那里传递。
我们检查一个元素是否会冒泡，可以通过事件的以下参数：
```javascript
    event.bubbles
```
如果返回值为true，说明该事件会冒泡；反之则相反。

##### 阻止冒泡
event.stopPropagation();

#### 事件委托
事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素。

比如说有一个列表 ul，列表之中有大量的列表项 `<a>`标签：

```html
<ul id="parent-list">
    <li><a href="javascript:;" class="my_link">超链接一</a></li>
    <li><a href="javascript:;" class="my_link">超链接二</a></li>
    <li><a href="javascript:;" class="my_link">超链接三</a></li>
</ul>
```

当我们的鼠标移到`<a>`标签上的时候，需要获取此`<a>`的相关信息并飘出悬浮窗以显示详细信息，或者当某个`<a>`被点击的时候需要触发相应的处理事件。我们通常的写法，是为每个`<a>`都绑定类似onMouseOver或者onClick之类的事件监听：

```javascript
    window.onload = function(){
        var parentNode = document.getElementById("parent-list");
        var aNodes = parentNode.getElementByTagName("a");
        for(var i=0, l = aNodes.length; i < l; i++){

            aNodes[i].onclick = function() {
                console.log('我是超链接 a 的单击相应函数');
            }
        }
    }
```

但是，上面的做法过于消耗内存和性能。**我们希望，只绑定一次事件，即可应用到多个元素上**，即使元素是后来添加的。

因此，比较好的方法就是把这个点击事件绑定到他的父层，也就是 `ul` 上，然后在执行事件函数的时候再去匹配判断目标元素。如下：

```html
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title></title>
        <script type="text/javascript">
            window.onload = function() {

                // 获取父节点，并为它绑定click单击事件。 false 表示事件在冒泡阶段触发（默认）
                document.getElementById('parent-list').addEventListener('click', function(event) {
                    event = event || window.event;

                    // e.target 表示：触发事件的对象
                    //如果触发事件的对象是我们期望的元素，则执行，否则不执行
                    if (event.target && event.target.className == 'link') {
                    // 或者写成 if (event.target && event.target.nodeName.toUpperCase() == 'A') {
                        console.log('我是ul的单击响应函数');
                    }
                }, false);
            };
        </script>
    </head>
    <body>
        <ul id="parent-list" style="background-color: #bfa;">
            <li>
                <p>我是p元素</p>
            </li>
            <li><a href="javascript:;" class="link">超链接一</a></li>
            <li><a href="javascript:;" class="link">超链接二</a></li>
            <li><a href="javascript:;" class="link">超链接三</a></li>
        </ul>
    </body>
```

上方代码，为父节点注册 click 事件，当子节点被点击的时候，click事件会从子节点开始**向父节点冒泡**。**父节点捕获到事件**之后，开始执行方法体里的内容：通过判断 event.target 拿到了被点击的子节点`<a>`。从而可以获取到相应的信息，并作处理。

换而言之，参数为false，说明事件是在冒泡阶段触发（子元素向父元素传递事件）。而父节点注册了事件函数，子节点没有注册事件函数，此时，会在父节点中执行函数体里的代码。

**总结**：事件委托是利用了冒泡机制，减少了事件绑定的次数，减少内存消耗，提高性能。

- Event.target 和 event.currentTarget 区别

  event.target返回触发事件的元素
  event.currentTarget返回绑定事件的元素

#### 自定义事件
自定义事件的代码如下：
```javascript
    var myEvent = new Event('clickTest');
    element.addEventListener('clickTest', function () {
        console.log('smyhvae');
    });

	//元素注册事件
    element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest

```

#### 44. 事件委托是什么？

```
事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到
目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。
```

详细资料可以参考：
[《JavaScript 事件委托详解》](https://zhuanlan.zhihu.com/p/26536815)

#### 45. ["1", "2", "3"].map(parseInt) 答案是多少？
 
  [1, NaN, NaN]

```
parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，其中 radix 表示要解析的数字的基数。（该值介于 2 ~ 36 之间，并且字符串中的数字不能大于 radix 才能正确返回数字结果值）。

数组的map方法： map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

此处 map 传了 3 个参数 (element, index, array)，默认第三个参数被忽略掉，因此三次传入的参数分别为 "1-0", "2-1", "3-2"

因为字符串的值不能大于基数，因此后面两次调用均失败，返回 NaN ，第一次基数为 0 ，按十进制解析返回 1。
```

详细资料可以参考：
[《为什么 ["1", "2", "3"].map(parseInt) 返回 [1,NaN,NaN]？》](https://blog.csdn.net/justjavac/article/details/19473199)

#### 46. 什么是闭包，为什么要用它？

```
JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。
  编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。
  执行阶段由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以
访问到当前函数的局部变量。

「函数」和「函数内部能访问到的变量」的总和，就是一个闭包。

闭包有两个常用的用途。

闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外
部访问到函数内部的变量，可以使用这种方法来创建私有变量。

函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以
这个变量对象不会被回收。

其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。

闭包是 JS 函数作用域的副产品。换句话说，正是由于 JS 的函数内部可以使用函数外部的变量，所以这段代码正好符合了闭包的定义。而不是 JS 故意要使用闭包。

```

详细资料可以参考：
[《JavaScript 深入理解之闭包》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E9%97%AD%E5%8C%85.html)

#### 47. javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？

相关知识点：

```
use strict 是一种 ECMAscript5 添加的（严格）运行模式，这种模式使得 Javascript 在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

```

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

区别：

- 1.禁止使用 with 语句。
- 2.禁止 this 关键字指向全局对象。
- 3.对象不能有重名的属性。

回答：

```
use strict 指的是严格运行模式，在这种模式对 js 的使用添加了一些限制。比如说禁止 this 指向全局对象，还有禁止使
用 with 语句等。设立严格模式的目的，主要是为了消除代码使用中的一些不安全的使用方式，也是为了消除 js 语法本身的一
些不合理的地方，以此来减少一些运行时的怪异的行为。同时使用严格运行模式也能够提高编译的效率，从而提高代码的运行速度。
我认为严格模式代表了 js 一种更合理、更安全、更严谨的发展方向。
```

详细资料可以参考：
[《Javascript 严格模式详解》](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)


#### 严格模式特点

- 【严谨】对语法要求更规范，消除js语法的一些不合理、不严谨之处，减少一些怪异行为
- 【安全】消除代码运行的一些不安全之处
- 【高效】提高编译器效率，增加运行速度
- 【扩展性】为未来新版本js做好铺垫

调用方式：在代码最前面添加一行代码（"use strice";）
- 针对整个脚本文件
- 针对单个函数


改变：
  - 全局变量显式声明：不能省略 var/const/let 关键词
  - 静态绑定：让属性和方法在编译阶段就确定指向哪个对象
    - 禁止使用with语句
    - 创设eval作用域
  - 增强字全措施：
    - 禁止this 指向全局对象
    - 禁止在函数内部遍历调用栈
  - 禁止删除变量（除非configurable 属性为true）
  - 显式报错：
    - 只读属性赋值
    - 对禁止扩展的对象添加新属性: 
    - 删除一个不可删除的属性： delete  object.prototype
  - 重名错误
  - 对象不能重名的属性（之前是覆盖）
  - 函数不能有重名的参数
  - 禁止八进制表示法
  - arguments对象的限制：arguments是函数的参数，对它的使用做了限制
    - 不允许对arguments赋值
    - arguments 不再追踪参数的变化
    - 禁止使用arguments.callee:  无法在匿名函数内部调用自身
  - 函数必须声明在顶层：不允许在非函数的代码块内声明函数（比如if,for），只允许在全局作用域或函数作用域的顶层声明函数
  - 保留字：新增了一些保留字，向将来js新版本过渡
    - let ,private,public,static ,package,yield,interface,protected,implements

#### 48. 如何判断一个对象是否属于某个类？

```
第一种方式是使用 instanceof 运算符来判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

第二种方式可以通过对象的 constructor 属性来判断，对象的 constructor 属性指向该对象的构造函数，但是这种方式不是很安全，因为 constructor 属性可以被改写。

第三种方式，如果需要判断的是某个内置的引用类型的话，可以使用 Object.prototype.toString() 方法来打印对象的
[[Class]] 属性来进行判断。
```

详细资料可以参考：
[《js 判断一个对象是否属于某一类》](https://blog.csdn.net/haitunmin/article/details/78418522)

#### 49. instanceof 的作用？

```js
// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

// 实现：
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
    prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
```

#### typeof 和 instanceof 区别

js是一个弱类型的语言，所以一般想知道当前变量是哪一种类型必须判断类型，都知道判断类型的两种方式：typeof、 instanceof

它们各有缺点：
  typeof适用于基础数据类型判断，引用类型判断都是object。 

  instanceof的用途是判断一个对象是否在某个对象原型链上。或者说判断一个对象是某个对象的实例。    
    a instanceof b：判断a是否为b的实例，可以用于继承关系中。

#### 50. new 操作符具体干了什么呢？如何实现？

```js
// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

// 实现:

function objectFactory() {
  let newObject = null,
    constructor = Array.prototype.shift.call(arguments),
    result = null;

  // 参数判断
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }

  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);

  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);

  // 判断返回对象
  let flag =
    result && (typeof result === "object" || typeof result === "function");

  // 判断返回结果
  return flag ? result : newObject;
}

// 使用方法
// objectFactory(构造函数, 初始化参数);
```

详细资料可以参考：
[《new 操作符具体干了什么？》](https://segmentfault.com/a/1190000008576048)
[《JavaScript 深入之 new 的模拟实现》](https://github.com/mqyqingfeng/Blog/issues/13)

#### 51. Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

```
hasOwnProperty

所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性，和
in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
```

详细资料可以参考：
[《Object.prototype.hasOwnProperty()》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

#### 52. 对于 JSON 的了解？

相关知识点：

```
JSON 是一种数据交换格式，基于文本，优于轻量，用于交换数据。

JSON 可以表示数字、布尔值、字符串、null、数组（值的有序序列），以及由这些值（或数组、对象）所组成的对象（字符串与
值的映射）。

JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。文本可以被任何编程语言读取及作为数据格式传递。
```

回答：

```
JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

在项目开发中，我们使用 JSON 作为前后端数据交换的方式。在前端我们通过将一个符合 JSON 格式的数据结构序列化为 JSON 字符串，然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是我们应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

在 js 中提供了两个函数来实现 js 数据结构和 JSON 格式的转换处理，一个是 JSON.stringify 函数，通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。在前端向后端发送数据时，我们可以调用这个函数将数据对象转化为 JSON 格式的字符串。

另一个函数 JSON.parse() 函数，这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。当我们从后端接收到 JSON 格式的字符串时，我们可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。
```

详细资料可以参考：
[《深入了解 JavaScript 中的 JSON 》](https://my.oschina.net/u/3284240/blog/874368)

#### 53. [].forEach.call(\$\$("_"),function(a){a.style.outline="1px solid #"+(~~(Math.random()_(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？

```
（1）选取页面所有 DOM 元素。在浏览器的控制台中可以使用$$()方法来获取页面中相应的元素，这是现代浏览器提供的一个命令行 API 相当于 document.querySelectorAll 方法。

（2）循环遍历 DOM 元素

（3）给元素添加 outline 。由于渲染的 outline 是不在 CSS 盒模型中的，所以为元素添加 outline 并不会影响元素的大小和页面的布局。

（4）生成随机颜色函数。Math.random()*(1<<24) 可以得到 0~2^24 - 1 之间的随机数，因为得到的是一个浮点数，但我们只需要整数部分，使用取反操作符 ~ 连续两次取反获得整数部分，然后再用 toString(16) 的方式，转换为一个十六进制的字符串。
```

详细资料可以参考：
[《通过一行代码学 JavaScript》](https://2008winstar.iteye.com/blog/2128290)

#### 54. js 延迟加载的方式有哪些？

相关知识点：

```
js 延迟加载，也就是等页面加载完成之后再加载 JavaScript 文件。
js 延迟加载有助于提高页面加载速度。
```

一般有以下几种方式：

- defer 属性
- async 属性
- 动态创建 DOM 方式
- 使用 setTimeout 延迟方法
- 让 JS 最后加载

回答：

```
js 的加载、解析和执行会阻塞页面的渲染过程，因此我们希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。

我了解到的几种方式是：

第一种方式是我们一般采用的是将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。

第二种方式是给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

第三种方式是给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

第四种方式是动态创建 DOM 标签的方式，我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
```

文档的加载事件: load()和.ready()
  .load():为JavaScript的“load”事件绑定一个处理函数。
  .ready():当DOW准备就绪时，指定一个函数来执行。
#### defer和async的区别

- defer：
    立即下载，但延迟执行
    
    中文意思是延迟。用途是表示脚本会被延迟到整个页面都解析完毕后再运行。因此，在 < script>元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。
    HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行,但执行脚本之间存在依赖，需要有执行的先后顺序时，就可以使用defer,延迟执行。

- async：中文意思是异步，这个属性与defer类似，都用于改变处理脚本的行为。同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。

但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。
指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容,这使用于之间互不依赖的各脚本。

#### 55. Ajax 是什么? 如何创建一个 Ajax？

相关知识点：

2005 年 2 月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的
异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。

具体来说，AJAX 包括以下几个步骤。

- 1.创建 XMLHttpRequest 对象，也就是创建一个异步调用对象
- 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL 及验证信息
- 3.设置响应 HTTP 请求状态变化的函数
- 4.发送 HTTP 请求
- 5.获取异步调用返回的数据 
- 6.使用 JavaScript 和 DOM 实现局部刷新

一般实现：

```js
const SERVER_URL = "/server";

let xhr = new XMLHttpRequest();

// 创建 Http 请求
xhr.open("GET", SERVER_URL, true);

// 设置状态监听函数
xhr.onreadystatechange = function() {
  if (this.readyState !== 4) return;
  // 当请求成功时
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};

// 设置请求失败时的监听函数
xhr.onerror = function() {
  console.error(this.statusText);
};

// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");

// 发送 Http 请求
xhr.send(null);

// promise 封装实现：

function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    // 新建一个 http 请求
    xhr.open("GET", url, true);

    // 设置状态的监听函数
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;

      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    // 设置错误监听函数
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };

    // 设置响应的数据类型
    xhr.responseType = "json";

    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");

    // 发送 http 请求
    xhr.send(null);
  });

  return promise;
}
```

回答：

```
我对 ajax 的理解是，它是一种异步通信的方法，通过直接由 js 脚本向服务器发起 http 通信，然后根据服务器返回的数据，更新网页的相应部分，而不用刷新整个页面的一种方法。

创建一个 ajax 有这样几个步骤

首先是创建一个 XMLHttpRequest 对象。

然后在这个对象上使用 open 方法创建一个 http 请求，open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息。

在发起请求前，我们可以为这个对象添加一些信息和监听函数。比如说我们可以通过 setRequestHeader 方法来为请求添加头信息。我们还可以为这个对象添加一个状态监听函数。一个 XMLHttpRequest 对象一共有 5 个状态，当它的状态变化时会触发onreadystatechange 事件，我们可以通过设置监听函数，来处理请求成功后的结果。当对象的 readyState 变为 4 的时候，代表服务器返回的数据接收完成，这个时候我们可以通过判断请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。这个时候我们就可以通过 response 中的数据来对页面进行更新了。

当对象的属性和监听函数设置完成后，最后我们调用 sent 方法来向服务器发起请求，可以传入参数作为发送的数据体。
```

详细资料可以参考：
[《XMLHttpRequest 对象》](https://wangdoc.com/javascript/bom/xmlhttprequest.html)
[《从 ajax 到 fetch、axios》](https://juejin.im/post/5acde23c5188255cb32e7e76)
[《Fetch 入门》](https://juejin.im/post/5c160937f265da61180199b2)
[《传统 Ajax 已死，Fetch 永生》](https://segmentfault.com/a/1190000003810652)

##### ajax 和 axios 

ajax - jQuery ajax - axios - fetch

- axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：
  1.从浏览器中创建 XMLHttpRequest
  2.支持 Promise API
  3.客户端支持防止CSRF
  4.提供了一些并发请求的接口（重要，方便了很多的操作）
  5.从 node.js 创建 http 请求
  6.拦截请求和响应
  7.转换请求和响应数据
  8.取消请求
  9.自动转换JSON数据

  PS:防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。

  ```javascript
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  ```
- fetch

  fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。fetch 是一个比较新的API，用来实现CORS通信。

  fetch的优点：
  1.符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
  2.更好更方便的写法

  ```javascript
    try {
      let response = await fetch(url);
      let data = response.json();
      console.log(data);
    } catch(e) {
      console.log("Oops, error", e);
    }
  ```

  用法如下：
    ```javascript
          // url（必选），options（可选）
          fetch('/some/url/', {
              method: 'get',
          }).then(function (response) {  //类似于 ES6中的promise

          }).catch(function (err) {
            // 出错了，等价于 then 的第二个参数，但这样更好用更直观
          });
    ```
  当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
  默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。

  - fetch示例

    export const getReport = (reportKey: string) => {
      return fetch(`/api/report?reportKey=${reportKey}`)
        .then(response => response.json())
        .then(data => data.res);
    }

  -  fetch发送2次请求的原因？
    fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？
    原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。

#### 56. 谈一谈浏览器的缓存机制？

```
浏览器的缓存机制指的是通过在一段时间内保留已接收到的 web 资源的一个副本，
如果在资源的有效时间内，发起了对这个资源的再一次请求，那么浏览器会直接使用缓存的副本，而不是向服务器发起请求。
使用 web 缓存可以有效地提高页面的打开速度，减少不必要的网络带宽的消耗。

web 资源的缓存策略一般由服务器来指定，可以分为两种，分别是强缓存策略和协商缓存策略。

- 使用强缓存策略时，如果缓存资源有效，则直接使用缓存资源，不必再向服务器发起请求。
  强缓存策略可以通过两种方式来设置，分别是 http 头信息中的 Expires 属性和 Cache-Control 属性。

  服务器通过在响应头中添加 Expires 属性，来指定资源的过期时间。在过期时间以内，该资源可以被缓存使用，不必再向服务器发送请求。这个时间是一个绝对时间，它是服务器的时间，因此可能存在这样的问题，就是客户端的时间和服务器端的时间不一致，或者用户可以对客户端时间进行修改的情况，这样就可能会影响缓存命中的结果。
  Expires 是 http1.0 中的方式，因为它的一些缺点，在 http 1.1 中提出了一个新的头部属性就是 Cache-Control 属性，
  它提供了对资源的缓存的更精确的控制。它有很多不同的值，
    常用的比如我们可以通过设置 max-age 来指定资源能够被缓存的时间的大小，这是一个相对的时间，它会根据这个时间的大小和资源第一次请求时的时间来计算出资源过期的时间，因此相对于 Expires来说，这种方式更加有效一些。
    常用的还有比如 private ，用来规定资源只能被客户端缓存，不能够代理服务器所缓存。
    还有如 no-store ，用来指定资源不能够被缓存，no-cache 代表该资源能够被缓存，但是立即失效，每次都需要向服务器发起请求。

  一般来说只需要设置其中一种方式就可以实现强缓存策略，当两种方式一起使用时，Cache-Control 的优先级要高于 Expires 。


- 使用协商缓存策略时，会先向服务器发送一个请求，如果资源没有发生修改，则返回一个 304 状态，让浏览器使用本地的缓存副本。
 如果资源发生了修改，则返回修改后的资源。协商缓存也可以通过两种方式来设置，分别是 http 头信息中的 Etag 和 Last-Modified 属性。

  服务器通过在响应头中添加 Last-Modified 属性来指出资源最后一次修改的时间，当浏览器下一次发起请求时，会在请求头中添加一个 If-Modified-Since 的属性，属性值为上一次资源返回时的 Last-Modified 的值。当请求发送到服务器后服务器会通过这个属性来和资源的最后一次的修改时间来进行比较，以此来判断资源是否做了修改。如果资源没有修改，那么返回 304 状态，让客户端使用本地的缓存。如果资源已经被修改了，则返回修改后的资源。使用这种方法有一个缺点，就是 Last-Modified 标注的最后修改时间只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，那么文件已将改变了但是 Last-Modified 却没有改变，这样会造成缓存命中的不准确。

  因为 Last-Modified 的这种可能发生的不准确性，http 中提供了另外一种方式，那就是 Etag 属性。服务器在返回资源的时候，在头信息中添加了 Etag 属性，这个属性是资源生成的唯一标识符，当资源发生改变的时候，这个值也会发生改变。在下一次资源请求时，浏览器会在请求头中添加一个 If-None-Match 属性，这个属性的值就是上次返回的资源的 Etag 的值。服务接收到请求后会根据这个值来和资源当前的 Etag 的值来进行比较，以此来判断资源是否发生改变，是否需要返回资源。通过这种方式，比 Last-Modified 的方式更加精确。

  当 Last-Modified 和 Etag 属性同时出现的时候，Etag 的优先级更高。
    使用协商缓存的时候，服务器需要考虑负载平衡的问题，因此多个服务器上资源的 Last-Modified 应该保持一致，因为每个服务器上 Etag 的值都不一样，因此在考虑负载平衡时，最好不要设置 Etag 属性。
   
    Last-Modified 属性来指出资源最后一次修改的时间，当我们在服务器上只是访问了这个资源，但是并没有进行修改，Last-Modified的值也进行了改变，这样还需要从服务端获取资源，其实资源并没有改变；


强缓存策略和协商缓存策略在缓存命中时都会直接使用本地的缓存副本，区别只在于协商缓存会向服务器发送一次请求。它们缓存不命中时，都会向服务器发送请求来获取资源。在实际的缓存机制中，强缓存策略和协商缓存策略是一起合作使用的。浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则浏览器返回最新的资源给浏览器。
```

详细资料可以参考：
[《浅谈浏览器缓存》](https://segmentfault.com/a/1190000012573337)
[《前端优化：浏览器缓存技术介绍》](https://juejin.im/post/5b9346dcf265da0aac6fbe57#heading-3)
[《请求头中的 Cache-Control》](https://www.web-tinker.com/article/21221.html)
[《Cache-Control 字段值详解》](https://juejin.im/post/5c2d6c9ae51d450cf4195a08)

#### 57. Ajax 解决浏览器缓存问题？

- 1.在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

- 2.在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

- 3.在 URL 后面加上一个随机数： "fresh=" + Math.random();。

- 4.在 URL 后面加上时间戳："nowtime=" + new Date().getTime();。

- 5.如果是使用 jQuery，直接这样就可以了\$.ajaxSetup({cache:false})。这样页面的所有 ajax 都会执行这条语句就是不需要保存缓存记录。

详细资料可以参考：
[《Ajax 中浏览器的缓存问题解决方法》](https://www.cnblogs.com/cwzqianduan/p/8632009.html)
[《浅谈浏览器缓存》](https://segmentfault.com/a/1190000012573337)

#### 58. 同步和异步的区别？

相关知识点：

```
同步，可以理解为在执行完一个函数或方法之后，一直等待系统返回值或消息，这时程序是处于阻塞的，只有接收到返回的值或消息后才往下执行其他的命令。  

异步，执行完函数或方法后，不必阻塞性地等待返回值或消息，只需要向系统委托一个异步过程，那么当系统接收到返回值或消息时，系统会自动触发委托的异步过程，从而完成一个完整的流程。 
```

回答：

```
同步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，那么这个进程会一直等待下去，直到消息返
回为止再继续向下执行。

异步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，这个时候进程会继续往下执行，不会阻塞等
待消息的返回，当消息返回时系统再通知进程进行处理。
```

详细资料可以参考：
[《同步和异步的区别》](https://blog.csdn.net/tennysonsky/article/details/45111623)

#### 59. 什么是浏览器的同源政策？

```
我对浏览器的同源政策的理解是，一个域下的 js 脚本在未经允许的情况下，不能够访问另一个域的内容。这里的同源的指的是两个
域的协议、域名、端口号必须相同，否则则不属于同一个域。

同源政策主要限制了三个方面

  第一个是当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。

  第二个是当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。

  第三个是当前域下 ajax 无法发送跨域请求。

同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者
script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作。
```

#### 60. 如何解决跨域问题？

相关知识点：

- 1. 通过 jsonp 跨域
- 2. document.domain + iframe 跨域
- 3. location.hash + iframe
- 4. window.name + iframe 跨域
- 5. postMessage 跨域
- 6. 跨域资源共享（CORS)
- 7. nginx 代理跨域
- 8. nodejs 中间件代理跨域
- 9. WebSocket 协议跨域

回答：

```
解决跨域的方法我们可以根据我们想要实现的目的来划分。

首先我们如果只是想要实现主域名下的不同子域名的跨域操作，我们可以使用设置 document.domain 来解决。

（1）将 document.domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的 cookie 就能够被子域名所访问。同时如果文档中含有主域名相同，子域名不同的 iframe 的话，我们也可以对这个 iframe 进行操作。

如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进行通信的问题，我们可以使用 location.hash 或者 window.name 或者 postMessage 来解决。

（2）使用 location.hash 的方法，我们可以在主页面动态的修改 iframe 窗口的 hash 值，然后在 iframe 窗口里实现监听函数来实现这样一个单向的通信。因为在 iframe 是没有办法访问到不同源的父级窗口的，所以我们不能直接修改父级窗口的 hash 值来实现通信，我们可以在 iframe 中再加入一个 iframe ，这个 iframe 的内容是和父级页面同源的，所以我们可以 window.parent.parent 来修改最顶级页面的 src，以此来实现双向通信。

（3）使用 window.name 的方法，主要是基于同一个窗口中设置了 window.name 后不同源的页面也可以访问，所以不同源的子页面可以首先在 window.name 中写入数据，然后跳转到一个和父级同源的页面。这个时候级页面就可以访问同源的子页面中 window.name 中的数据了，这种方式的好处是可以传输的数据量大。

（4）使用 postMessage 来解决的方法，这是一个 h5 中新增的一个 api。通过它我们可以实现多窗口间的信息传递，通过获取到指定窗口的引用，然后调用 postMessage 来发送信息，在窗口中我们通过对 message 信息的监听来接收信息，以此来实现不同源间的信息交换。

-------

如果是像解决 ajax 无法提交跨域请求的问题，我们可以使用 jsonp、cors、websocket 协议、服务器代理来解决问题。

（5）使用 jsonp 来实现跨域请求，它的主要原理是通过动态构建 script 标签来实现跨域请求，因为浏览器对 script 标签的引入没有跨域的访问限制 。通过在请求的 url 后指定一个回调函数，然后服务器在返回数据的时候，构建一个 json 数据的包装，这个包装就是回调函数，然后返回给前端，前端接收到数据后，因为请求的是脚本文件，所以会直接执行，这样我们先前定义好的回调函数就可以被调用，从而实现了跨域请求的处理。这种方式只能用于 get 请求。

**JSONP的原理**：通过`<script>`标签的异步加载来实现的。比如说，实际开发中，我们发现，head标签里，可以通过`<script>`标签的src，里面放url，加载很多在线的插件。这就是用到了JSONP。

 具体实现过程：
  - 先在客户端定义一个回调方法，预定义对数据的操作
  - 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的api接口；
  - 服务器api接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
  - 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了

```
<script>

    var util = {};

    //定义方法：动态创建 script 标签
    /**
     * [function 在页面中注入js脚本]
     * @param  {[type]} url     [description]
     * @param  {[type]} charset [description]
     * @return {[type]}         [description]
     */
    util.createScript = function (url, charset) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        charset && script.setAttribute('charset', charset);
        script.setAttribute('src', url);
        script.async = true;
        return script;
    };


    /**
     * [function 处理jsonp]
     * @param  {[type]} url      [description]
     * @param  {[type]} onsucess [description]
     * @param  {[type]} onerror  [description]
     * @param  {[type]} charset  [description]
     * @return {[type]}          [description]
     */
    util.jsonp = function (url, onsuccess, onerror, charset) {
        var callbackName = util.getName('tt_player'); //事先约定好的 函数名
        window[callbackName] = function () {      //根据回调名称注册一个全局的函数
            if (onsuccess && util.isFunction(onsuccess)) {
                onsuccess(arguments[0]);
            }
        };
        var script = util.createScript(url + '&callback=' + callbackName, charset);   //动态创建一个script标签
        script.onload = script.onreadystatechange = function () {   //监听加载成功的事件，获取数据
            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                script.onload = script.onreadystatechange = null;
                // 移除该script的 DOM 对象
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                // 删除函数或变量
                window[callbackName] = null;  //最后不要忘了删除
            }
        };
        script.onerror = function () {
            if (onerror && util.isFunction(onerror)) {
                onerror();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script); //往html中增加这个标签，目的是把请求发送出去
    };

</script>
```

（6）使用 CORS 的方式，CORS 是一个 W3C 标准，全称是"跨域资源共享"。CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，因此我们只需要在服务器端配置就行。

  浏览器将 CORS 请求分成两类：简单请求和非简单请求。

    对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是会在头信息之中，增加一个 Origin 字段。Origin 字段用来说明本次请求来自哪个源。服务器根据这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段，就知道出错了，从而抛出一个错误，ajax 不会收到响应信息。如果成功的话会包含一些以 Access-Control- 开头的字段。

    非简单请求，浏览器会先发出一次预检请求，来判断该域名是否在服务器的白名单中，如果收到肯定回复后才会发起请求。

    CORS 可以理解成是 既可以同步、也可以异步的Ajax 。  -- 题目179

（7）使用 websocket 协议，这个协议没有同源限制。

（8）使用服务器来代理跨域的访问请求，就是有跨域的请求操作时发送请求给后端，让后端代为请求，然后最后将获取的结果发返回。

（9）postMessage()方法
H5中新增的postMessage()方法，可以用来做跨域通信。既然是H5中新增的，那就一定要提到。
```

- 跨域配置（vue cli)
Vue-CLI 是基于 webpack 的，通过 webpack-dev-server 在本地启动脚手架，也就是在本地启动了一个 Node 服务，来实时监听和打包编译静态资源，由于都是封装好的，只需要配置即可，我们在 vue.config.js 中配置代理如下，写法很多，列几个常见的自行选择.
例如：
  module.exports = {
    //...
    devServer: {
      proxy: {
        '/api': 'http://www.hahaha.com'
      }
    }
  }
  如上所示时，当你请求 /api/abc 接口时就会被代理到 http://www.hahaha.com/api/abc

#### 61. 服务器代理转发时，该如何处理 cookie？

详细资料可以参考：
[《深入浅出 Nginx》](https://www.jianshu.com/p/5eab0f83e3b4)

#### 62. 简单谈一下 cookie ？

[https://zhuanlan.zhihu.com/p/395273289?utm_source=com.alibaba.android.rimet&utm_medium=social&utm_oi=626459156618547200]
```
我的理解是 cookie 是服务器提供的一种用于维护会话状态信息的数据，通过服务器发送到浏览器，浏览器保存在本地，当下一次有同源的请求时，将保存的 cookie 值添加到请求头部，发送给服务端。这可以用来实现记录用户登录状态等功能。cookie 一般可以存储 4k 大小的数据，并且只能够被同源的网页所共享访问。

服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。
一条cookie 包括了5个属性值 expires、domain、path、secure、HttpOnly。

expires 指定了 cookie 失效的时间;
domain 是域名、path是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问;
secure 规定了 cookie 只能在确保安全的情况下传输;
HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。

在发生 xhr 的跨域请求的时候，即使是同源下的 cookie，也不会被自动添加到请求头部，除非显示地规定。
```

详细资料可以参考：
[《HTTP cookies》 ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)
[《聊一聊 cookie》 ](https://segmentfault.com/a/1190000004556040)

#### session

浏览器登录发送账号密码，服务端查用户库，校验用户
服务端把用户登录状态存为 Session，生成一个 sessionId
通过登录接口返回，把 sessionId set 到 cookie 上
此后浏览器再请求业务接口，sessionId 随 cookie 带上
服务端查 sessionId 校验 session
成功后正常做业务处理，返回结果

#### token 

token 的流程是这样的：
  用户登录，服务端校验账号密码，获得用户信息
  把用户信息、token 配置编码成 token，通过 cookie set 到浏览器
  此后用户请求业务接口，通过 cookie 携带 token
  接口校验 token 有效性，进行正常业务接口处理

session 和 token ?
session 和 token 都是边界很模糊的概念，就像前面说的，refresh token 也可能以 session 的形式组织维护。
狭义上，我们通常认为 session 是「种在 cookie 上、数据存在服务端」的认证方案，token 是「客户端存哪都行、数据存在 token 里」的认证方案。对 session 和 token 的对比本质上是「客户端存 cookie / 存别地儿」、「服务端存数据 / 不存数据」的对比。
#### JWT 

Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准. 该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。

它是一种成熟的 token 字符串生成方案，包含了我们前面提到的数据、签名。

#### 总结
HTTP 是无状态的，为了维持前后请求，需要前端存储标记；

cookie 是一种完善的标记方式，通过 HTTP 头或 js 操作，有对应的安全策略，是大多数状态管理方案的基石

session 是一种状态管理方案，前端通过 cookie 存储 id，后端存储数据，但后端要处理分布式问题

token 是另一种状态管理方案，相比于 session 不需要后端存储，数据全部存在前端，解放后端，释放灵活性
token 的编码技术，通常基于 base64，或增加加密算法防篡改，jwt 是一种成熟的编码方案

在复杂系统中，token 可通过 service token、refresh token 的分权，同时满足安全性和用户体验
session 和 token 的对比就是「用不用cookie」和「后端存不存」的对比
单点登录要求不同域下的系统「一次登录，全线通用」，通常由独立的 SSO 系统记录登录状态、下发 ticket，各业务系统配合存储和认证 ticket
#### 63. 模块化开发怎么做？

```
我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念
，但随着程序越来越复杂，代码的模块化开发变得越来越重要。

由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污
染，并且模块间没有联系。

后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所
有的所有的模块成员，外部代码可以修改内部属性的值。

现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。
```

详细资料可以参考：
[《浅谈模块化开发》](https://juejin.im/post/5ab378c46fb9a028ce7b824f)
[《Javascript 模块化编程（一）：模块的写法》](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
[《前端模块化：CommonJS，AMD，CMD，ES6》](https://juejin.im/post/5aaa37c8f265da23945f365c)
[《Module 的语法》](http://es6.ruanyifeng.com/#docs/module)

#### 64. js 的几种模块规范？

```
js 中现在比较成熟的有四种模块加载方案。

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是
服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式
加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定
义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js
的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。参考60

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同。参考 61。
```

#### 65. AMD 和 CMD 规范的区别？

它们之间的主要区别有两个方面。

（1）第一个方面是在模块定义时对依赖的处理不同。AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 CMD 推崇
就近依赖，只有在用到某个模块的时候再去 require。

（2）第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于
模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。而 CMD
在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句
的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。

```js
// CMD
define(function(require, exports, module) {
  var a = require("./a");
  a.doSomething();
  // 此处略去 100 行
  var b = require("./b"); // 依赖可以就近书写
  b.doSomething();
  // ...
});

// AMD 默认推荐
define(["./a", "./b"], function(a, b) {
  // 依赖必须一开始就写好
  a.doSomething();
  // 此处略去 100 行
  b.doSomething();
  // ...
});
```

详细资料可以参考：
[《前端模块化，AMD 与 CMD 的区别》](https://juejin.im/post/5a422b036fb9a045211ef789)

#### 66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。

- 1.CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

- 2.CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。CommonJS 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

#### 67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）

```
require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。
```

详细资料可以参考：
[《requireJS 的用法和原理分析》](https://github.com/HRFE/blog/issues/10)
[《requireJS 的核心原理是什么？》](https://zhuanlan.zhihu.com/p/55039478)
[《从 RequireJs 源码剖析脚本加载原理》](https://www.cnblogs.com/dong-xu/p/7160919.html)
[《requireJS 原理分析》](https://www.jianshu.com/p/5a39535909e4)

#### 68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

详细资料可以参考：
[《JS 模块加载器加载原理是怎么样的？》](https://www.zhihu.com/question/21157540)

#### 69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?

```
在我看来 ES6 新添加的 class 只是为了补充 js 中缺少的一些面向对象语言的特性，但本质上来说它只是一种语法糖，不是一个新的东西，其背后还是原型继承的思想。通过加入 class 可以有利于我们更好的组织代码。

在 class 中添加的方法，其实是添加在类的原型上的。
```

详细资料可以参考：
[《ECMAScript 6 实现了 class，对 JavaScript 前端开发有什么意义？》](https://www.zhihu.com/question/29789315)
[《Class 的基本语法》](http://es6.ruanyifeng.com/#docs/class)

#### 70. documen.write 和 innerHTML 的区别？

```
document.write 的内容会代替整个文档内容，会重写整个页面。

innerHTML 的内容只是替代指定元素的内容，只会重写页面中的部分内容。
```

详细资料可以参考：
[《简述 document.write 和 innerHTML 的区别。》](https://www.nowcoder.com/questionTerminal/2c5d8105b2694d85b06eff85e871cf50)

#### 71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？

（1）创建新节点

```js
createDocumentFragment(node);
createElement(node);
createTextNode(text);
```

（2）添加、移除、替换、插入

```js
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)
```

（3）查找

```js
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();
```

（4）属性操作

```js
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```

详细资料可以参考：
[《DOM 概述》](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction#DOM_interfaces)
[《原生 JavaScript 的 DOM 操作汇总》](https://harttle.land/2015/10/01/javascript-dom-api.html)
[《原生 JS 中 DOM 节点相关 API 合集》](https://microzz.com/2017/04/06/jsdom/)

#### 72. innerHTML 与 outerHTML 的区别？

```
对于这样一个 HTML 元素：<div>content<br/></div>。

innerHTML：内部 HTML，content<br/>；
outerHTML：外部 HTML，<div>content<br/></div>；
innerText：内部文本，content ；
outerText：内部文本，content ；
```

#### 73. .call() 和 .apply() 的区别？

```
它们的作用一模一样，区别仅在于传入参数的形式的不同。

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。

call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。
```

详细资料可以参考：
[《apply、call 的区别和用途》](https://juejin.im/entry/58d0a7b22f301e007e5a15ae)

#### call() apply() bind() 共同点
  允许一个对象调用另一个对象的方法；
  apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
  apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
  apply 、 call 、bind 三者都可以利用后续参数传参；

#### 不同点

  bind是返回对应函数，便于稍后调用；apply、call则是立即调用。
  call 立即调用，需要把参数按顺序传递进去。
  apply 立即调用，把参数放在数组里。例如：func.apply(this, [arg1, arg2])。

区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。

#### bind

```javascript
  this.height = '155';    // 在浏览器中，this 指向全局的 "window" 对象

  let user = {
    height: '170',
    getHeight: function() { return this.height; }
  };

  // 自身调用
  user.getHeight(); //user调用getX，此时getX里的this指的是user
  console.log(user.getHeight()); // '170'

  // 赋值调用
  let tianZhen = user.getHeight; //  相当于  tianZhen = function() { return this.height; }
  tianZhen(); // tianZhen函数是在全局作用域中调用的，相当于window.tianZhen()，此时tianZhen = function() { return this.height; }里的this指window
  console.log(tianZhen()); // '155'

  // 赋值绑定调用
  let bindGetH = tianZhen.bind(user); // 把 'this' 绑定到 user 对象，此时bindGetH未立即执行。相当于 tianZhen = function() { return user.height; }
  bindGetH(); //  即使在全局作用域直接调用，window.tianZhen()。function() { return user.height; }，得到user里的height
  console.log(bindGetH()); // '170'

```

- bind的连续调用

在Javascript中，多次 bind() 是无效的。

```
let foo = { x: 3 };
let sed = { x: 4 };
let fiv = { x: 5 };
let bar = function(){
   console.log(this.x);
}
bar(); // undefined

let func = bar.bind(foo);  //这里我们创建了一个新的函数 func，当使用 bind() 创建一个绑定函数之后，它被执行的时候，它的 this 会被设置成 foo ， 而不是像我们调用 bar() 时的全局作用域。
func(); // 3

let func1 = bar.bind(foo).bind(sed);  
func(); // 3

let func2 = bar.bind(foo).bind(sed).bind(fiv);
func2(); // 3
```
#### call apply
 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。

#### 74. JavaScript 类数组对象的定义？

```
一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。

常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length
属性值，代表可接收的参数个数。
```

常见的类数组转换为数组的方法有这样几种：

（1）通过 call 调用数组的 slice 方法来实现转换

```js
Array.prototype.slice.call(arrayLike);
```

（2）通过 call 调用数组的 splice 方法来实现转换

```js
Array.prototype.splice.call(arrayLike, 0);
```

（3）通过 apply 调用数组的 concat 方法来实现转换

```js
Array.prototype.concat.apply([], arrayLike);
```

（4）通过 Array.from 方法来实现转换

```js
Array.from(arrayLike);
```

#### 函数中的arguments是数组吗？

在javascript中所有的函数内部都包含了一个隐藏的变量叫arguments;它存放着所有传递到这个函数中的参数；
```javascript
  (function fn(){
    //arguments接收外面传进来的参数变为数组
  console.log(arguments)
  })(1,2,3,4)    //[1,2,3,4]
```

#### 类数组转数组的方法 ？

类数组转化为数组的方法：

  - 扩展运算符: ... 运算符 
      var args = [ ...arguments ]; 
      要注意是否是 iterable object;

  - Array.from:
      Array.from()是ES6中新增的方法，可以将两类对象转为真正的数组：类数组对象和可遍历（iterable）对象（包括ES6新增的数据结构Set和Map）;

      什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象。
      
      var arrayLike = {
        '0':'a',
        '1':'b',
        '2':'c',
        length:3
      };
      var arr = Array.from(arrayLike);//['a','b','c'];

  - Array.prototype.slice.call(arrayLike)

  - Array.prototype.splice.call(arrayLike, 0);

  - Array.prototype.concat.apply([], arrayLike);

#### 75. 数组和对象有哪些原生方法，列举一下？ 数组方法

```
数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。

数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。

数组首部操作的方法 shift() 和 unshift() 

重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。

数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。

数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。

数组插入方法 splice()，影响原数组查找特定项的索引的方法

indexOf() 和 lastIndexOf() 

迭代方法 every()、some()、filter()、map() 和 forEach() 方法

数组归并方法 reduce() 和 reduceRight() 方法
```

- filter:
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let res = nums.filter((num) => {
    return num > 5;
  });

  console.log(res);  // [6, 7, 8, 9, 10]

- reduce: 
  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    total	必需。初始值, 或者计算结束后的返回值。
    currentValue	必需。当前元素
    currentIndex	可选。当前元素的索引
    arr	可选。当前元素所属的数组对象。
    initialValue	可选。传递给函数的初始值
    
#### 使用 reduce 方法实现 forEach、map、filter 
   ```js

    // forEach
    function forEachUseReduce(array, handler) {
      array.reduce(function (pre, item, index) {
        handler(item, index);
      });
    }
    
    // map
    function mapUseReduce(array, handler) {
      let result = [];
      array.reduce(function (pre, item, index) {
        let mapItem = handler(item, index);
        result.push(mapItem);
      });
      return result;
    }
    
    // filter
    function filterUseReduce(array, handler) {
      let result = [];
      array.reduce(function (pre, item, index) {
        if (handler(item, index)) {
          result.push(item);
        }
      });
      return result;
    }
   ```
#### 76. 数组的 fill 方法？

```
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
fill 方法接受三个参数 value，start 以及 end，start 和 end 参数是可选的，其默认值分别为 0 和 this 对象的 length 属性值。
```

详细资料可以参考：
[《Array.prototype.fill()》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

#### 77. [,,,] 的长度？

```
尾后逗号 （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。这使得版本控制更加清晰，以及代码维护麻烦更少。

JavaScript 一开始就支持数组字面值中的尾后逗号，随后向对象字面值（ECMAScript 5）中添加了尾后逗号。最近（ECMAS
cript 2017），又将其添加到函数参数中。但是 JSON 不支持尾后逗号。

如果使用了多于一个尾后逗号，会产生间隙。 带有间隙的数组叫做稀疏数组（密致数组没有间隙）。稀疏数组的长度为逗号的数
量。
```

详细资料可以参考：
[《尾后逗号》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)

#### 78. JavaScript 中的作用域与变量声明提升？

```
变量提升的表现是，无论我们在函数中何处位置声明的变量，好像都被提升到了函数的首部，我们可以在变量声明前访问到而不会报错。

造成变量声明提升的本质原因是 js 引擎在代码执行前有一个解析的过程，创建了执行上下文，初始化了一些代码执行时需要用到的对象。当我们访问一个变量时，我们会到当前执行上下文中的作用域链中去查找，而作用域链的首端指向的是当前执行上下文的变量对象，这个变量对象是执行上下文的一个属性，它包含了函数的形参、所有的函数和变量声明，这个对象的是在代码解析的时候创建的。这就是会出现变量声明提升的根本原因。
```

详细资料可以参考：
[《JavaScript 深入理解之变量对象》](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1.html)

#### 79. 如何编写高性能的 Javascript ？

- 1.使用位运算代替一些简单的四则运算。
- 2.避免使用过深的嵌套循环。
- 3.不要使用未定义的变量。
- 4.当需要多次访问数组长度时，可以用变量保存起来，避免每次都会去进行属性查找。

详细资料可以参考：
[《如何编写高性能的 Javascript？》](https://zhuanlan.zhihu.com/p/34780474)

#### 80. 简单介绍一下 V8 引擎的垃圾回收机制

```
v8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。

新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。

新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行 Scavenge 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。这个算法分为三步：

（1）首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 To 空间。

（2）如果对象不存活，则释放对象的空间。

（3）最后将 From 空间和 To 空间角色进行交换。

新生代对象晋升到老生代有两个条件：

（1）第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。

（2）第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。

老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决内存碎片的问题引入了标记压缩法。

由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 V8 引入了增量标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行。
```

详细资料可以参考：
[《深入理解 V8 的垃圾回收原理》](https://www.jianshu.com/p/b8ed21e8a4fb)
[《JavaScript 中的垃圾回收》](https://zhuanlan.zhihu.com/p/23992332)

#### 81. 哪些操作会造成内存泄漏？

相关知识点：

- 1.意外的全局变量
- 2.被遗忘的计时器或回调函数
- 3.脱离 DOM 的引用
- 4.闭包

回答：

```
第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留
在内存中，而无法被回收。

第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回
收。

第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
```

详细资料可以参考：
[《JavaScript 内存泄漏教程》](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)
[《4 类 JavaScript 内存泄漏及如何避免》](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/)
[《杜绝 js 中四种内存泄漏类型的发生》](https://juejin.im/entry/5a64366c6fb9a01c9332c706)
[《javascript 典型内存泄漏及 chrome 的排查方法》](https://segmentfault.com/a/1190000008901861)

#### 82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

```
通过使用 pushState + ajax 实现浏览器无刷新前进后退，当一次 ajax 调用成功后我们将一条 state 记录加入到 history
对象中。一条 state 记录包含了 url、title 和 content 属性，在 popstate 事件中可以获取到这个 state 对象，我们可
以使用 content 来传递数据。最后我们通过对 window.onpopstate 事件监听来响应浏览器的前进后退操作。

使用 pushState 来实现有两个问题，一个是打开首页时没有记录，我们可以使用 replaceState 来将首页的记录替换，另一个问
题是当一个页面刷新的时候，仍然会向服务器端请求数据，因此如果请求的 url 需要后端的配合将其重定向到一个页面。
```

详细资料可以参考：
[《pushState + ajax 实现浏览器无刷新前进后退》](http://blog.chenxu.me/post/detail?id=ed4f0732-897f-48e4-9d4f-821e82f17fad)
[《Manipulating the browser history》](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

#### 83. 如何判断当前脚本运行在浏览器还是 node 环境中？

```
this === window ? 'browser' : 'node';

通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中。
```

#### 84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？

详细资料可以参考：
[《为什么把 script 标签放在 body 结束标签之后 html 结束标签之前？》](https://www.zhihu.com/question/20027966)
[《从 Chrome 源码看浏览器如何加载资源》](https://zhuanlan.zhihu.com/p/30558018)

#### 85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

```
移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。
```

有三种办法来解决这个问题：

- 1.通过 meta 标签禁用网页的缩放。
- 2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。
- 3.调用一些 js 库，比如 FastClick

```
click 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听事件，这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击事件，这就是点击穿透。
```

详细资料可以参考：
[《移动端 300ms 点击延迟和点击穿透》](https://juejin.im/post/5b3cc9836fb9a04f9a5cb0e0)

#### 86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？

https://blog.csdn.net/Charissa2017/article/details/104779412

（1）什么是前端路由？

前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。

（2）什么时候使用前端路由？

在单页面应用，大部分页面结构不变，只改变部分内容的使用

（3）前端路由有什么优点和缺点？

优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户

缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。

##### hash模式

使用window.location.hash属性及窗口的onhashchange事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。

hash指的是地址中#号以及后面的字符，也称为散列值。hash也称作锚点，本身是用来做页面跳转定位的。如http://localhost/index.html#abc，这里的#abc就是hash；

散列值是不会随请求发送到服务器端的，所以改变hash，不会重新加载页面；

监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置hash值；

location.hash值的变化会直接反应到浏览器地址栏；

##### history模式

window.history 属性指向 History 对象，它表示当前窗口的浏览历史。当发生改变时，只会改变页面的路径，不会刷新页面。

History 对象保存了当前窗口访问过的所有页面网址。通过 history.length 可以得出当前窗口一共访问过几个网址。
由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航
。
浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。

- history的属性
  History.length：当前窗口访问过的网址数量（包括当前网页）
  History.state：History 堆栈最上层的状态值（详见下文）

- 方法
History.back()、History.forward()、History.go()
History.pushState()：该方法用于在历史中添加一条记录。pushState()方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。
History.replaceState()：该方法用来修改 History 对象的当前记录，用法与 pushState() 方法一样。
popstate 事件：

#### 87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？

详细资料可以参考：
[《浅谈前端单元测试》](https://juejin.im/post/5b2da89cf265da597f1c7cab)

#### 88. 检测浏览器版本版本有哪些方式？

```
检测浏览器版本一共有两种方式：

一种是检测 window.navigator.userAgent 的值，但这种方式很不可靠，因为 userAgent 可以被改写，并且早期的浏览器如 ie，会通过伪装自己的 userAgent 的值为 Mozilla 来躲过服务器的检测。

第二种方式是功能检测，根据每个浏览器独有的特性来进行判断，如 ie 下独有的 ActiveXObject。
```

详细资料可以参考：
[《JavaScript 判断浏览器类型》](https://www.jianshu.com/p/d99f4ca385ac)

#### 89. 什么是 Polyfill ？

```
Polyfill 指的是用于实现浏览器并不支持的原生 API 的代码。

比如说 querySelectorAll 是很多现代浏览器都支持的原生 Web API，但是有些古老的浏览器并不支持，那么假设有人写了一段代码来实现这个功能使这些浏览器也支持了这个功能，那么这就可以成为一个 Polyfill。

一个 shim 是一个库，有自己的 API，而不是单纯实现原生不支持的 API。
```

详细资料可以参考：
[《Web 开发中的“黑话”》](https://segmentfault.com/a/1190000002593432)
[《Polyfill 为何物》](https://juejin.im/post/5a579bc7f265da3e38496ba1)

#### 90. 使用 JS 实现获取文件扩展名？

```js
// String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。

// 对于 'filename' 和 '.hiddenfile' ，lastIndexOf 的返回值分别为 0 和 -1 无符号右移操作符(>>>) 将 -1 转换为 4294967295 ，将 -2 转换为 4294967294 ，这个方法可以保证边缘情况时文件名不变。

// String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。
function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}
```

详细资料可以参考：
[《如何更有效的获取文件扩展名》](https://segmentfault.com/a/1190000004993946)

#### 91. 介绍一下 js 的节流与防抖？

相关知识点：

```js
// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// 函数防抖的实现
function debounce(fn, wait) {
  var timer = null;

  return function() {
    var context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}


// 函数节流的实现;
function throttle(fn, delay) {
  var preTime = Date.now();

  return function() {
    var context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
```

回答：

```
函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
```

详细资料可以参考：
[《轻松理解 JS 函数节流和函数防抖》](https://juejin.im/post/5a35ed25f265da431d3cc1b1)
[《JavaScript 事件节流和事件防抖》](https://juejin.im/post/5aa60b0e518825556b6c6d1a)
[《JS 的防抖与节流》](https://juejin.im/entry/5b1d2d54f265da6e2545bfa4)

#### 滚动条监听的例子
  (监听浏览器滚动事件，返回当前滚条与顶部的距离)
  function showTop(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置' + scrollTop);
    window.onscroll  = showTop;
  }

#### 防抖 debounce
  定义：对于短时间内连续触发的事件，防抖的含义就是让某个时间期限内，事件处理函数只执行一次。

  针对上述问题，可以在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms，然后：
    如果在200ms内没有再次触发滚动事件，那么就执行函数
    如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
    
  function debounce(fn,delay){
      let timer = null //借助闭包
      return function() {
          if(timer){
              clearTimeout(timer) 
          }
          timer = setTimeout(fn,delay) // 简化写法
      }
  }
  function showTop  () {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  　　console.log('滚动条位置：' + scrollTop);
  }
  window.onscroll = debounce(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置

#### 节流 throttle
  设计一种类似控制阀门一样定期开放的函数，也就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活；
  效果：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。

  function throttle(fn,delay){
    let valid = true
    return function() {
      if(!valid){
          //休息时间 暂不接客
          return false 
      }
      // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
  }

#### 应用
  搜索框input实时搜索；
  页面resize(防抖)；

#### 92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？

相关知识点：

```
两等号判等，会在比较时进行类型转换。
三等号判等（判断严格），比较时不进行隐式类型转换，（类型不同则会返回false）。

Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，但 Object.is(NaN, NaN) 会返回 true.

Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。
```

回答：

```
使用双等号进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。

使用三等号进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。

使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 认定为是相等的。
```

#### url 编码和解码

URI (Uniform ResourceIdentifiers,通用资源标识符)进行编码，以便发送给浏览器。有效的URI中不能包含某些字符，例如空格。而这URI编码方法就可以对URI进行编码，它们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器能够接受和理解。

```javascript
    encodeURIComponent();   //把字符串作为 URI 组件进行编码
    decodeURIComponent();   //把字符串作为 URI 组件进行解码
```

举例：

```javascript
    var url = "http://www.cnblogs.com/smyhvae/";

    var str = encodeURIComponent(url);
    console.log(str);                           //打印url的编码
    console.log(decodeURIComponent(str));       //对url进行编码后，再解码，还原为url
```

打印结果：

![](http://img.smyhvae.com/20180202_1432.png)


#### 93. escape,encodeURI,encodeURIComponent 有什么区别？

相关知识点：

```
escape 和 encodeURI 都属于 Percent-encoding，基本功能都是把 URI 非法字符转化成合法字符，转化后形式类似「%*」。
它们的根本区别在于，escape 在处理 0xff 之外字符的时候，是直接使用字符的 unicode 在前面加上一个「%u」，而 encode URI 则是先进行 UTF-8，再在 UTF-8 的每个字节码前加上一个「%」；在处理 0xff 以内字符时，编码方式是一样的（都是「%XX」，XX 为字符的 16 进制 unicode，同时也是字符的 UTF-8），只是范围（即哪些字符编码哪些字符不编码）不一样。
```

回答：

```
encodeURI 是对整个 URI 进行转义，将 URI 中的非法字符转换为合法字符，所以对于一些在 URI 中有特殊意义的字符不会进行转义。

encodeURIComponent 是对 URI 的组成部分进行转义，所以一些特殊字符也会得到转义。

escape 和 encodeURI 的作用相同，不过它们对于 unicode 编码为 0xff 之外字符的时候会有区别，escape 是直接在字符的 unicode 编码前加上 %u，而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %。
```
#### escape,encodeURI,encodeURIComponent 有什么区别？

https://segmentfault.com/a/1190000039764369

- 安全字符不同

下面列出了这三个函数的安全字符（即函数不会对这些字符进行编码）
  escape（69个）：*/@+-._0-9a-zA-Z
  encodeURI（82个）：!#$&'()*+,/:;=?@-._~0-9a-zA-Z
  encodeURIComponent（71个）：!'()*-._~0-9a-zA-Z

- 兼容性不同

  escape函数是从Javascript 1.0的时候就存在了，其他两个函数是在Javascript 1.5才引入的。但是由于Javascript 1.5已经非常普及了，所以实际上使用encodeURI和encodeURIComponent并不会有什么兼容性问题。

- 对Unicode字符的编码方式不同

这三个函数对于ASCII字符的编码方式相同，均是使用百分号+两位十六进制字符来表示。但是对于Unicode字符，escape的编码方式是%uxxxx，其中的xxxx是用来表示unicode字符的4位十六进制字符。这种方式已经被ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。encodeURI和encodeURIComponent则使用UTF-8对非ASCII字符进行编码，然后再进行百分号编码。这是RFC推荐的。因此建议尽可能的使用这两个函数替代escape进行编码。

- 适用场合不同

  1. encodeURI被用作对一个完整的URI进行编码。

  2. encodeURIComponent被用作对URI的一个组件进行编码。从上面提到的安全字符范围表格来看，我们会发现，encodeURIComponent编码的字符范围要比encodeURI的大。

  3. 我们上面提到过，保留字符一般是用来分隔URI组件（一个URI可以被切割成多个组件，参考预备知识一节）或者子组件（如URI中查询参数的分隔符），如：号用于分隔scheme和主机，?号用于分隔主机和路径。
    3.1 由于encodeURI操纵的对象是一个完整的的URI，这些字符在URI中本来就有特殊用途，因此这些保留字符不会被encodeURI编码，否则意义就变了。
    3.2 组件内部有自己的数据表示格式，但是这些数据内部不能包含有分隔组件的保留字符，否则就会导致整个URI中组件的分隔混乱。因此对于单个组件使用encodeURIComponent。


#### 94. Unicode 和 UTF-8 之间的关系？

```
Unicode 是一种字符集合，现在可容纳 100 多万个字符。每个字符对应一个不同的 Unicode 编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。

UTF-8 是一种对 Unicode 的编码方式，它是一种变长的编码方式，可以用 1~4 个字节来表示一个字符。
```

详细资料可以参考：
[《字符编码详解》](https://blog.51cto.com/polaris/377468)
[《字符编码笔记：ASCII，Unicode 和 UTF-8》](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

#### 95. js 的事件循环是什么？

相关知识点：

```
事件队列是一个存储着待执行任务的队列，其中的任务严格按照时间先后顺序执行，排在队头的任务将会率先执行，而排在队尾的任务会最后执行。事件队列每次仅执行一个任务，在该任务执行完毕之后，再执行下一个任务。执行栈则是一个类似于函数调用栈的运行容器，当执行栈为空时，JS 引擎便检查事件队列，如果不为空的话，事件队列便将第一个任务压入执行栈中运行。
```

回答：

```
因为 js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。     当异步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。

微任务包括了 promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。

宏任务包括了 script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲
染等。
```                            

- （背） JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤：

  1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
  2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
  3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  4）主线程不断重复上面的第三步。
#### JS同步和异步 事件循环的定义
  同步：前一个任务结束后再执行后一个任务，程序的执行顺序和任务的排列顺序是一致的、同步的。
  异步：一件事情要花很长时间，在做这件事的同时，还可以去处理其他事情。
  
  同步任务：立即执行的任务，同步任 务一般会直接进入到主线程中执行，形成一个执行栈；
  异步任务：异步执行的任务，比如ajax网络请求，setTimeout定时函数等
    JS的异步是通过回调函数实现的。一般而言，异步任务有以下三种类型：
      1）普通事件：如click、resi状态码e
      2）资源加载：如load、error
      3）定时器：setInterval、setTimeout

  异步任务相关回调函数添加到任务队列中。

  同步任务和异步任务的运行流程图：
  (/image/同步异步.jpg)
    首先判断任务是同步任务还是异步任务，如果是同步任务则将任务放到主线程中执行，主线程中的任务执行完毕后，会读取任务队列中的结果，进入主线程执行；
    异步任务的话，进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就是事件循环。

事件队列其实是一个“先进先出”的数据结构，排在前面的事件会优先被主线程读取。
  
#### 宏任务和微任务

异步任务可以分为微任务和宏任务；
(/image/宏任务微任务.jpg)

- 微任务：
  一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。
  常见的微任务：
    Promise.then
    MutaionObserver
    process.nextTick

- 宏任务：
  宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合
  常见的宏任务： 
    script(外层同步代码)
    setTimeout/setInterval
    UI rendering/UI事件
    postMessage、MessageChannel
    setImmediate、I/O（Node.js）
    
宏任务微任务执行过程：
  执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完。

for (macroTask of macroTaskQueue) {
    // 1. 处理当前的宏任务
    handleMacroTask();
      
    // 2. 处理对应的所有微任务
    for (microTask of microTaskQueue) {
        handleMicroTask(microTask);
    }
}

#### requestAnimationFrame
请求动画帧；

var requestId = requestAnimationFrame(Fn): 在浏览器下次刷新执行Fn
Fn有一个默认参数： 从性能测量开始的毫秒值；performance.now()
setInterval(function(){}, 1000/60): 最佳观赏效果 -> 根据浏览器刷新执行；
cancelAnimationFrame(requestId):   取消requestAnimationFrame

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行;
注意：若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()


合理使用 requestAnimationFrame 动画代替 setTimeout、setInterval
- requestAnimationFrame可以在正确的时间进行渲染，setTimeout（callback）和setInterval（callback）无法保证 callback 回调函数的执行时机。

优点：requestAnimationFrame 比起 setTimeout、setInterval的优势主要有两点：
  1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
  2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的cpu，gpu和内存使用量。

#### 96. js 中的深浅拷贝实现？

相关资料：

```js
// 浅拷贝的实现;

function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== "object") return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

// 深拷贝的实现;

function deepCopy(object) {
  if (!object || typeof object !== "object") return;

  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] =
        typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
    }
  }

  return newObject;
}

```

回答：

```
浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，因此两个对象会有同一个引用类型的引用。浅拷贝可以使用 Object.assign 和展开运算符来实现。

obj2 = Object.assgin(obj2, obj1);

深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用 JSON 的两个函数来实现，但是由于 JSON 的对象格式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败。
```

详细资料可以参考：
[《JavaScript 专题之深浅拷贝》](https://github.com/mqyqingfeng/Blog/issues/32)
[《前端面试之道》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bed40d951882545f73004f6)

#### 概念
  浅拷贝：只拷贝最外面一层的数据；更深层次的对象，只拷贝引用。
  深拷贝：拷贝多层数据；每一层级别的数据都会拷贝。深拷贝会把对象里**所有的数据**重新复制到新的内存空间，是最彻底的拷贝。

#### 浅拷贝的实现方式

##### 用for in 实现浅拷贝
```js
  const obj1 = {
      name: 'qianguyihao',
      age: 28,
      info: {
          desc: '很厉害',
      },
  };
  const obj2 = {};
  //  用 for in 将 obj1 的值拷贝给 obj2
  for (let key in obj1) {
      obj2[key] = obj1[key];
  }
  console.log('obj2:' + JSON.stringify(obj2));
  obj1.info.desc = '永不止步'; // 当修改 obj1 的第二层数据时，obj2的值也会被改变。所以  for in 是浅拷贝
  console.log('obj2:' + JSON.stringify(obj2));
  ```
  上方代码中，用 for in 做拷贝时，只能做到浅拷贝。也就是说，在 obj2 中， name 和 age 这两个属性会单独存放在新的内存地址中，和 obj1 没有关系。但是，`obj2.info` 属性，跟 `obj1.info`属性，**它俩指向的是同一个堆内存地址**。所以，当我修改 `obj1.info` 里的值之后，`obj2.info`的值也会被修改。

##### 用 Object.assgin() 实现浅拷贝
```js
// 语法1
obj2 = Object.assgin(obj2, obj1);

// 语法2
Object.assign(目标对象, 源对象1, 源对象2...);
```
**解释**：将`obj1` 拷贝给 `obj2`。执行完毕后，obj2 的值会被更新。
**作用**：将 obj1 的值追加到 obj2 中。如果对象里的属性名相同，会被覆盖。
从语法2中可以看出，Object.assign() 可以将多个“源对象”拷贝到“目标对象”中。
**例 1**：
```js
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    info: {
        desc: 'hello',
    },
};
// 浅拷贝：把 obj1 拷贝给 obj2。如果 obj1 只有一层数据，那么，obj1 和 obj2 则互不影响
const obj2 = Object.assign({}, obj1);
console.log('obj2:' + JSON.stringify(obj2));
obj1.info.desc = '永不止步'; // 由于 Object.assign() 只是浅拷贝，所以当修改 obj1 的第二层数据时，obj2 对应的值也会被改变。
console.log('obj2:' + JSON.stringify(obj2));
```
代码解释：由于 Object.assign() 只是浅拷贝，所以在当前这个案例中， obj2 中的 name 属性和 age 属性是单独存放在新的堆内存地址中的，和 obj1 没有关系；但是，`obj2.info` 属性，跟 `obj1.info`属性，**它俩指向的是同一个堆内存地址**。所以，当我修改 `obj1.info` 里的值之后，`obj2.info`的值也会被修改。

#### 深拷贝的实现方式
##### 用 for in 递归实现深拷贝
```js
let obj1 = {
    name: 'qianguyihao',
    age: 28,
    info: {
        desc: 'hello',
    },
    color: ['red', 'blue', 'green'],
};
let obj2 = {};

deepCopy(obj2, obj1);
console.log(obj2);
obj1.info.desc = 'github';
console.log(obj2);

// 方法：深拷贝
function deepCopy(newObj, oldObj) {
    for (let key in oldObj) {
        // 获取属性值 oldObj[key]
        let item = oldObj[key];
        // 判断这个值是否是数组
        if (item instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], item);
        } else if (item instanceof Object) {
            // 判断这个值是否是对象
            newObj[key] = {};
            deepCopy(newObj[key], item);
        } else {
            // 简单数据类型，直接赋值
            newObj[key] = item;
        }
    }
}
```
##### JSON 来深拷贝

```javascript
    var a = {...};
    var b = JSON.parse(JSON.stringify(a)); //先将对象转成json字符串，然后再转成对象
```
缺点：JSON 不支持函数、引用、undefined、RegExp、Date……


#### 97. 手写 call、apply 及 bind 函数

相关资料：

```js
// call函数实现
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }

  // 获取参数
  let args = [...arguments].slice(1),
    result = null;

  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;

  // 将调用函数设为对象的方法
  context.fn = this;

  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return result;
};

// apply 函数实现

Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  let result = null;

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;

  // 将函数设为对象的方法
  context.fn = this;

  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  // 将属性删除
  delete context.fn;

  return result;
};

// bind 函数实现
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

回答：

call 函数的实现步骤：

- 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
- 2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
- 3.处理传入的参数，截取第一个参数后的所有参数。
- 4.将函数作为上下文对象的一个属性。
- 5.使用上下文对象来调用这个方法，并保存返回结果。
- 6.删除刚才新增的属性。
- 7.返回结果。

apply 函数的实现步骤：

- 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
- 2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
- 3.将函数作为上下文对象的一个属性。
- 4.判断参数值是否传入
- 4.使用上下文对象来调用这个方法，并保存返回结果。
- 5.删除刚才新增的属性
- 6.返回结果

bind 函数的实现步骤：

- 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
- 2.保存当前函数的引用，获取其余传入参数值。
- 3.创建一个函数返回
- 4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

详细资料可以参考：
[《手写 call、apply 及 bind 函数》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdd0d8e6fb9a04a044073fe)
[《JavaScript 深入之 call 和 apply 的模拟实现》](https://github.com/mqyqingfeng/Blog/issues/11)

#### 98. 函数柯里化的实现

```js
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
```

详细资料可以参考：
[《JavaScript 专题之函数柯里化》](https://github.com/mqyqingfeng/Blog/issues/42)

#### 函数柯里化

含义：把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

eg.
  ```javascript
    // 普通的add函数
    function add(x, y) {
        return x + y
    }
    // Currying后
    function curryingAdd(x) {
        return function (y) {
            return x + y
        }
    }
    add(1, 2)           // 3
    curryingAdd(1)(2)   // 3
  ```
通用的封装方法:
  ```javascript
  // 初步封装
    var currying = function(fn) {
        // args 获取第一个方法内的全部参数
        var args = Array.prototype.slice.call(arguments, 1)
        return function() {
            // 将后面方法里的全部参数和args进行合并
            var newArgs = args.concat(Array.prototype.slice.call(arguments))
            // 把合并后的参数通过apply作为fn的参数并执行
            return fn.apply(this, newArgs)
        }
    }
    // 支持多参数传递
    function progressCurrying(fn, args) {
        var _this = this
        var len = fn.length;
        var args = args || [];
        return function() {
            var _args = Array.prototype.slice.call(arguments);
            Array.prototype.push.apply(args, _args);

            // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
            if (_args.length < len) {
                return progressCurrying.call(_this, fn, _args);
            }

            // 参数收集完毕，则执行fn
            return fn.apply(this, _args);
        }
    }
  ```
例题：
  ```javascript
// 实现一个add方法，使计算结果能够满足如下预期：
  add(1)(2)(3) = 6;
  add(1, 2, 3)(4) = 10;
  add(1)(2)(3)(4)(5) = 15;

  function add() {
      // 第一次执行时，定义一个数组专门用来存储所有的参数
      var _args = Array.prototype.slice.call(arguments);

      // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
      var _adder = function() {
          _args.push(...arguments);
          return _adder;
      };

      // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function () {
          return _args.reduce(function (a, b) {
              return a + b;
          });
      }
      return _adder;
  }

  add(1)(2)(3)                // 6
  add(1, 2, 3)(4)             // 10
  add(1)(2)(3)(4)(5)          // 15
  add(2, 6)(1)                // 9
  ```

#### 99. 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？

```
当计算机计算 0.1+0.2 的时候，实际上计算的是这两个数字在计算机里所存储的二进制，0.1 和 0.2 在转换为二进制表示的时候会出现位数无限循环的情况。js 中是以 64 位双精度格式来存储数字的，只有 53 位的有效数字，超过这个长度的位数会被截取掉这样就造成了精度丢失的问题。这是第一个会造成精度丢失的地方。

在对两个以 64 位双精度格式的数据进行计算的时候，首先会进行对阶的处理，对阶指的是将阶码对齐，也就是将小数点的位置对齐后，再进行计算，一般是小阶向大阶对齐，因此小阶的数在对齐的过程中，有效数字会向右移动，移动后超过有效位数的位会被截取掉，这是第二个可能会出现精度丢失的地方。

当两个数据阶码对齐后，进行相加运算后，得到的结果可能会超过 53 位有效数字，因此超过的位数也会被截取掉，这是可能发生精度丢失的第三个地方。

对于这样的情况，我们可以将其转换为整数后再进行运算，运算后再转换为对应的小数，以这种方式来解决这个问题。

我们还可以将两个数相加的结果和右边相减，如果相减的结果小于一个极小数，那么我们就可以认定结果是相等的，这个极小数可以
使用 es6 的 Number.EPSILON
```
Promise.all
不等于，在两数相加时，会先转换成二进制，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS 引擎对二进制进行截断，所以造成精度丢失。
精度丢失可能出现在进制转换和对阶运算中；


详细资料可以参考：
[《十进制的 0.1 为什么不能用二进制很好的表示？》](https://blog.csdn.net/Lixuanshengchao/article/details/82049191)
[《十进制浮点数转成二进制》](https://blog.csdn.net/zhengyanan815/article/details/78550073)
[《浮点数的二进制表示》](http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html)
[《js 浮点数存储精度丢失原理》](https://juejin.im/post/5b372f106fb9a00e6714aa21)
[《浮点数精度之谜》](https://juejin.im/post/594a31d0a0bb9f006b0b2624)
[《JavaScript 浮点数陷阱及解法》](https://github.com/camsong/blog/issues/9)
[《0.1+0.2 !== 0.3？》](https://juejin.im/post/5bd2f10a51882555e072d0c4)
[《JavaScript 中奇特的~运算符》](https://juejin.im/entry/59cdd7fb6fb9a00a600f8eef)

#### 100. 原码、反码和补码的介绍

```
原码是计算机中对数字的二进制的定点表示方法，最高位表示符号位，其余位表示数值位。优点是易于分辨，缺点是不能够直接参与运算。

正数的反码和其原码一样；负数的反码，符号位为1，数值部分按原码取反。
如 [+7]原 = 00000111，[+7]反 = 00000111； [-7]原 = 10000111，[-7]反 = 11111000。

正数的补码和其原码一样；负数的补码为其反码加1。

例如 [+7]原 = 00000111，[+7]反 = 00000111，[+7]补 = 00000111；
[-7]原 = 10000111，[-7]反 = 11111000，[-7]补 = 11111001

之所以在计算机中使用补码来表示负数的原因是，这样可以将加法运算扩展到所有的数值计算上，因此在数字电路中我们只需要考虑加法器的设计就行了，而不用再为减法设置新的数字电路。
```

详细资料可以参考：
[《关于 2 的补码》](http://www.ruanyifeng.com/blog/2009/08/twos_complement.html)

#### 101. toPrecision 和 toFixed 和 Math.round 的区别？

```
toPrecision 用于处理精度，精度是从左至右第一个不为 0 的数开始数起。
toFixed 是对小数点后指定位数取整，从小数点开始数起。
Math.round 是将一个数字四舍五入到一个整数。
```

#### 102. 什么是 XSS 攻击？如何防范 XSS 攻击？

```
XSS 攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookie 等。

XSS 的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合在一起了，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。

XSS 一般分为存储型、反射型和 DOM 型。

存储型指的是恶意代码提交到了网站的数据库中，当用户请求数据的时候，服务器将其拼接为 HTML 后返回给了用户，从而导致了恶意代码的执行。

反射型指的是攻击者构建了特殊的 URL，当服务器接收到请求后，从 URL 中获取数据，拼接到 HTML 后返回，从而导致了恶意代码的执行。

DOM 型指的是攻击者构建了特殊的 URL，用户打开网站后，js 脚本从 URL 中获取数据，从而导致了恶意代码的执行。

XSS 攻击的预防可以从两个方面入手，一个是恶意代码提交的时候，一个是浏览器执行恶意代码的时候。

对于第一个方面，如果我们对存入数据库的数据都进行的转义处理，但是一个数据可能在多个地方使用，有的地方可能不需要转义，由于我们没有办法判断数据最后的使用场景，所以直接在输入端进行恶意代码的处理，其实是不太可靠的。

因此我们可以从浏览器的执行来进行预防，一种是使用纯前端的方式，不用服务器端拼接后返回。另一种是对需要插入到 HTML 中的代码做好充分的转义。对于 DOM 型的攻击，主要是前端脚本的不可靠而造成的，我们对于数据获取渲染和字符串拼接的时候应该对可能出现的恶意代码情况进行判断。

还有一些方式，比如使用 CSP ，CSP 的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入攻击。

还可以对一些敏感信息进行保护，比如 cookie 使用 http-only ，使得脚本无法获取。也可以使用验证码，避免脚本伪装成用户执行一些操作。
```

详细资料可以参考：
[《前端安全系列（一）：如何防止 XSS 攻击？》](https://juejin.im/post/5bad9140e51d450e935c6d64)

#### 103. 什么是 CSP？

```
CSP 指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截由浏览器自己来实现。

通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 <meta
http-equiv="Content-Security-Policy">
```

详细资料可以参考：
[《内容安全策略（CSP）》](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
[《前端面试之道》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc721851882516c33430a2)

#### 104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？

```
CSRF 攻击指的是跨站请求伪造攻击，攻击者诱导用户进入一个第三方网站，然后该网站向被攻击网站发送跨站请求。如果用户在被
攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台的用户验证，冒充用户向服务器执行一些操作。

CSRF 攻击的本质是利用了 cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。

一般的 CSRF 攻击类型有三种：

第一种是 GET 类型的 CSRF 攻击，比如在网站中的一个 img 标签里构建一个请求，当用户打开这个网站的时候就会自动发起提
交。

第二种是 POST 类型的 CSRF 攻击，比如说构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。

第三种是链接类型的 CSRF 攻击，比如说在 a 标签的 href 属性里构建一个请求，然后诱导用户去点击。

CSRF 可以用下面几种方法来防护：

第一种是同源检测的方法，服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止。这种方式的缺点是有些情况下 referer 可以被伪造。还有就是我们这种方法同时把搜索引擎的链接也给屏蔽了，所以一般网站会允许搜索引擎的页面请求，但是相应的页面请求这种请求方式也可能被攻击者给利用。

第二种方法是使用 CSRF Token 来进行验证，服务器向用户返回一个随机数 Token ，当网站再次发起请求时，在请求参数中加入服务器端返回的 token ，然后服务器对这个 token 进行验证。这种方法解决了使用 cookie 单一验证方式时，可能会被冒用的问题，但是这种方法存在一个缺点就是，我们需要给网站中的所有请求都添加上这个 token，操作比较繁琐。还有一个问题是一般不会只有一台网站服务器，如果我们的请求经过负载平衡转移到了其他的服务器，但是这个服务器的 session 中没有保留这个 token 的话，就没有办法验证了。这种情况我们可以通过改变 token 的构建方式来解决。

第三种方式使用双重 Cookie 验证的办法，服务器在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串，然后当用户再次向服务器发送请求的时候，从 cookie 中取出这个字符串，添加到 URL 参数中，然后服务器通过对 cookie 中的数据和参数中的数据进行比较，来进行验证。使用这种方式是利用了攻击者只能利用 cookie，但是不能访问获取 cookie 的特点。并且这种方法比 CSRF Token 的方法更加方便，并且不涉及到分布式访问的问题。这种方法的缺点是如果网站存在 XSS 漏洞的，那么这种方式会失效。同时这种方式不能做到子域名的隔离。

第四种方式是使用在设置 cookie 属性的时候设置 Samesite ，限制 cookie 不能作为被第三方使用，从而可以避免被攻击者利用。Samesite 一共有两种模式，一种是严格模式，在严格模式下 cookie 在任何情况下都不可能作为第三方 Cookie 使用，在宽松模式下，cookie 可以被请求是 GET 请求，且会发生页面跳转的请求所使用。
```

详细资料可以参考：
[《前端安全系列之二：如何防止 CSRF 攻击？》](https://juejin.im/post/5bc009996fb9a05d0a055192)
[《[ HTTP 趣谈] origin, referer 和 host 区别》](https://www.jianshu.com/p/1f9c71850299)

#### 105. 什么是 Samesite Cookie 属性？

```
Samesite Cookie 表示同站 cookie，避免 cookie 被第三方所利用。

将 Samesite 设为 strict ，这种称为严格模式，表示这个 cookie 在任何情况下都不可能作为第三方 cookie。

将 Samesite 设为 Lax ，这种模式称为宽松模式，如果这个请求是个 GET 请求，并且这个请求改变了当前页面或者打开了新的页面，那么这个 cookie 可以作为第三方 cookie，其余情况下都不能作为第三方 cookie。

使用这种方法的缺点是，因为它不支持子域，所以子域没有办法与主域共享登录信息，每次转入子域的网站，都回重新登录。还有一个问题就是它的兼容性不够好。
```

#### 106. 什么是点击劫持？如何防范点击劫持？

```
点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。

我们可以在 http 相应头中设置 X-FRAME-OPTIONS 来防御用 iframe 嵌套的点击劫持攻击。通过不同的值，可以规定页面在特
定的一些情况才能作为 iframe 来使用。
```

详细资料可以参考：
[《web 安全之--点击劫持攻击与防御技术简介》](https://www.jianshu.com/p/251704d8ff18)

#### 107. SQL 注入攻击？

```
SQL 注入攻击指的是攻击者在 HTTP 请求中注入恶意的 SQL 代码，服务器使用参数构建数据库 SQL 命令时，恶意 SQL 被一起构
造，破坏原有 SQL 结构，并在数据库中执行，达到编写程序时意料之外结果的攻击行为。
```

详细资料可以参考：
[《Web 安全漏洞之 SQL 注入》](https://juejin.im/post/5bd5b820e51d456f72531fa8)
[《如何防范常见的 Web 攻击》](http://blog.720ui.com/2016/security_web/#SQL%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB)


#### 108. 语法糖
语法糖（Syntactic sugar），也译为糖衣语法。指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。

通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。

语法糖”可以给我们带来方便，是一种便捷的写法，编译器会帮我们做转换；而且可以提高开发编码的效率，在性能上也不会带来损失。

##### JS语法糖

对象字面量，箭头函数，数组解构，函数默认参数，扩展运算符，模板字符串，多行字符串，拆包表达式，类，模块开发；

1、对象字面量
let sex1 = 'man', sex2 = ‘woman’
let sex = {man,woman}  

2、箭头函数
let fun = function(params){}
//可以缩写成如下
let fun= params =>{}
//当参数有两个及以上时,如下：
let fun= (params1,params2,,,)=>{}

3、数组解构
let arr = ['a','b','c'];
let {a,b} = arr
console.log(a) // a
//数组解构也允许你跳过你不想用到的值，在对应地方留白即可，举例如下
let {a,,c} = array
console.log(c)  //c

4、函数默认参数
function  getResponse(a,b=0) {
  //常用于请求数据时，设置默认值 
}

5、拓展运算符
function test() {
  return [...arguments]
}
test('a', 'b', 'c') // ['a','b','c']
//扩展符还可以拼合数组
 let all = ['1',...['2','3'],...['4','5'],'6']   // ["1", "2", "3", "4", "5", "6"]

6、模板字符串
let id = '奋斗中的编程菜鸟'
let blog = '博主id是:${a}' // 博主id是是:奋斗中的编程菜鸟

7、多行字符串
//利用反引号实现多行字符串（虽然回车换行也是同一个字符串）
let poem = `A Pledge
	By heaven,
	I shall love you
	To the end of time!
	Till mountains crumble,
	Streams run dry,
	Thunder rumbles in winter,
	Snow falls in summer,
	And the earth mingles with the sky —
	Not till then will I cease to love you!`

8、拆包表达式
const data = {
      a: 'a',
      b: 'b',
      c: 'c'
}
let {a,c} = data
console.log(c); // c 

9、ES6中的类
class helloJs{
  // 构造方法
  constructor(options = {}, data = []) { 
    this.name = '奋斗中的编程菜鸟'
    this.data = data
    this.options = options
  }
  // 成员方法
  getName() { 
      return this.name
  }
}

10、模块化开发
// 新建一个util.js 文件夹
let formatTime = date=>{
	....
}
let endTime = date=>{
	....
}

module.exports = {
   formatTime,
   endTime,
}
//可以用import {名称} from '模块' 
//然后再同级目录创建一个js文件 引入 util.js
//import {endTime} from 'util'
//或者全部引入
//import util from 'util'


#### 117. 谈一谈你理解的函数式编程？

简单说，"函数式编程"是一种"编程范式"（programming paradigm），也就是如何编写程序的方法论。

它具有以下特性：闭包和高阶函数、惰性计算、递归、函数是"第一等公民"、只用"表达式"。

- 函数是"第一等公民"

  所谓"第一等公民"（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为别的函数的返回值。
  举例来说，下面代码中的print变量就是一个函数，可以作为另一个函数的参数。
　　var print = function(i){ console.log(i);};
　　[1,2,3].forEach(print); 

-  只用"表达式"，不用"语句"

  "表达式"（expression）是一个单纯的运算过程，总是有返回值；"语句"（statement）是执行某种操作，没有返回值。函数式编程要求，只使用表达式，不使用语句。也就是说，每一步都是单纯的运算，而且都有返回值。

- 没有"副作用"

  所谓"副作用"（side effect），指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生运算以外的其他结果。
  函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，尤其是不得修改外部变量的值。

- 不修改状态

- 引用透明

  引用透明（Referential transparency），指的是函数的运行不依赖于外部变量或"状态"，只依赖于输入的参数，任何时候只要参数相同，引用函数所得到的返回值总是相同的。

#### 118. 异步编程的实现方式？

相关资料：

```
回调函数
优点：简单、容易理解
缺点：不利于维护，代码耦合高

事件监听（采用事件驱动模式，取决于某个事件是否发生）：
优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
缺点：事件驱动型，流程不够清晰

发布/订阅（观察者模式）
类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者

Promise 对象
优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数；
缺点：编写和理解，相对比较难

Generator 函数
优点：函数体内外的数据交换、错误处理机制
缺点：流程管理不方便

async 函数
优点：内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰。
缺点：错误处理机制
```

回答：

```
js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。
```

#### 回调函数
  回调函数含义：一个函数被作为参数传递给另一个函数（在这里我们把另一个函数叫做“otherFunction”），回调函数在otherFunction中被调用。
 
  eg. click函数
    $("#btn_1").click(function() {
      alert("Btn 1 Clicked");
    });  
    //或者
    function click() { // 它就是回调函数
      alert("Btn 1 Clicked");
    }
    $("#btn_1").click(click);  

  如何运作：因为函数在Javascript中是第一类对象，我们像对待对象一样对待函数，因此我们能像传递变量一样传递函数，在函数中返回函数，在其他函数中使用函数。当我们将一个回调函数作为参数传递给另一个函数是，我们仅仅传递了函数定义。我们并没有在参数中执行函数。我们并不传递像我们平时执行函数一样带有一对执行小括号()的函数。回调函数并不会马上被执行。
  
  优点：简单、容易理解
  缺点：不利于维护，代码耦合高

#### Promise 对象  
  
  Promise对象特点：  
    1）对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：pending-初始状态；fulfilled-操作成功完成；rejected-操作失败；只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
    2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。

  创建Promise:
    var promise = new Promise(function(resolve, reject) {
      // 异步处理
      // 处理结束后、调用resolve 或 reject
    });

  优点：可以利用 then 方法，进行链式写法；(可以把原本的多层嵌套调用改进为链式调用**)可以书写错误时的回调函数；可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。
  缺点：编写和理解，相对比较难。

#### Generator 函数

##### Generator
Generator 函数是一个状态机，封装了多个内部状态。
generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

形式上，Generator 函数是一个普通函数，但是有两个特征。
  一是，function关键字与函数名之间有一个星号；
  二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

Generator函数是ES6提供的一种 异步编程解决方案,Generator函数是分段执行的，**yield**表达式是**暂停执行**的标记，而**next方法**可以**恢复执行**

eg.
  function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  var hw = helloWorldGenerator();

该函数有三个状态，hello world ending ;

调用该函数后，函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象—遍历器对象；
下一步需要调用遍历器对象的next方法，使指针移向下一个状态；会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

优点：函数体内外的数据交换、错误处理机制
缺点：流程管理不方便

##### yield表达式

  yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

！yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
  yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
  
##### yield表达式和return语句的相似点和区别

  相似点：都能返回紧跟在语句后面的那个表达式的值；
  
  区别：每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。正常函数只能返回一个值，因为只能执行一次return；Generator 函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历。

##### Generator与普通函数的区别

- 【不执行】调用Generator函数后，该函数并不执行;
- 【返回指针】返回的是一个指向内部状态的指针对象，而不是函数运行结果（遍历器对象 Iterator Object）;
- 【继续运行】必须调用遍历器对象的next方法，使得指针移向下一个状态，每次调用next方法，就继续执行，直到遇到下一个yield表达式(或return语句）为止。

Generator API：
- next():  返回一个由yield 表达式生成的值  
- return():  返回给定的值并结束生成器 
- throw():  向生成器抛出一个错误

eg.
  ```js
  function* helloWorldGenerator(){
    yield 'hello';   //遇到yield 暂停执行
    yield 'world';
    return 'ending';
  }

  let hw = helloWorldGenerator();  //调用不执行函数，只是返回一个遍历器对象
  hw.next();  //{value:'hello',done:false}  调用next方法继续执行，直到遇到yield或return表达式
  hw.next(); //{value:'world',done:false}
  hw.next(); //{value:'ending',done:true}
  hw.next(); //{value:undefind,donw:true}  

  ```

#### async 函数

  https://es6.ruanyifeng.com/#docs/async
  async 函数，使得异步操作变得更加方便。
  async:异步，await:等待  async就是用来声明一个异步方法，而 await是用来等待异步方法执行；
  
  async是 Generator 函数的语法糖.async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await。
  async函数对Generator函数的改进(优点)：
    (1)Generator函数函数的执行必须靠执行器，async函数自带执行器
      会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。
    (2)更好的语义
    (3)更广的适用性:co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
    (4)async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便.
  
  缺点：错误处理机制

  用法：async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

  eg.
    async function fn1 (){
      console.log(1)
      await fn2()
      console.log(2) // 阻塞
    }
    async function fn2 (){
        console.log('fn2')
    }
    fn1()
    console.log(3)

  上面的例子中，await 会阻塞下面的代码（即加入微任务队列），先执行 async外面的同步代码，同步代码执行完，再回到 async 函数中，再执行之前阻塞的代码.所以上述输出结果为：1，fn2，3，2。

#### 119. Js 动画与 CSS 动画区别及相应实现

```
CSS3 的动画的优点

在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化
代码相对简单

缺点

在动画控制上不够灵活
兼容性不好

JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧
```

#### 120. get 请求传参长度的误区

```
误区：我们经常说 get 请求参数的大小存在限制，而 post 请求的参数大小是无限制的。

实际上 HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对 get 请求参数的限制是来源与浏览器或web 服务器，浏览器或 web 服务器限制了 url 的长度。为了明确这个概念，我们必须再次强调下面几点:
```

- 1.HTTP 协议未规定 GET 和 POST 的长度限制
- 2.GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的长度
- 3.不同的浏览器和 WEB 服务器，限制的最大长度不一样
- 4.要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte

#### 121. URL 和 URI 的区别？

```
URI: Uniform Resource Identifier      指的是统一资源标识符
URL: Uniform Resource Location        指的是统一资源定位符
URN: Universal Resource Name          指的是统一资源名称

URI 指的是统一资源标识符，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说，不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 URI。

URL 指的是统一资源定位符，URN 指的是统一资源名称。URL 和 URN 是 URI 的子集，URL 可以理解为使用地址来标识资源，URN 可以理解为使用名称来标识资源。
```

详细资料可以参考：
[《HTTP 协议中 URI 和 URL 有什么区别？》](https://www.zhihu.com/question/21950864)
[《你知道 URL、URI 和 URN 三者之间的区别吗？》](http://web.jobbole.com/83452/)
[《URI、URL 和 URN 的区别》](https://segmentfault.com/a/1190000006081973)

#### 122. get 和 post 请求在缓存方面的区别

相关知识点：

```
get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。

post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。
```

回答：

```
缓存一般只适用于那些不会更新服务端数据的请求。一般 get 请求都是查找请求，不会对服务器资源数据造成修改，而 post 请求一般都会对服务器数据造成修改，所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。
```

详细资料可以参考：
[《HTML 关于 post 和 get 的区别以及缓存问题的理解》](https://blog.csdn.net/qq_27093465/article/details/50479289)

#### 123. 图片的懒加载和预加载

相关知识点：

```
预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。 懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
```

回答：

```
懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。它适用于图片很多，页面很长的电商网站的场景。懒加载的实现原理是，将页面上的图片的 src 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中，当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 src 属性，以此来实现图片的延迟加载。

预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。通过预加载能够减少用户的等待时间，提高用户的体验。我了解的预加载的最常用的方式是使用 js 中的 image 对象，通过为 image 对象来设置 scr 属性，来实现图片的预加载。

这两种方式都是提高网页性能的方式，两者主要区别是一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
```

详细资料可以参考：
[《懒加载和预加载》](https://juejin.im/post/5b0c3b53f265da09253cbed0)
[《网页图片加载优化方案》](https://juejin.im/entry/5a73f38cf265da4e99575be3)
[《基于用户行为的图片等资源预加载》](https://www.zhangxinxu.com/wordpress/2016/06/image-preload-based-on-user-behavior/)

#### 124. mouseover 和 mouseenter 的区别？

```
mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout
mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。
由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。
```

详细资料可以参考：
[《mouseenter 与 mouseover 为何这般纠缠不清？》](https://github.com/qianlongo/zepto-analysis/issues/1)

#### 125. js 拖拽功能的实现

相关知识点：

```
首先是三个事件，分别是 mousedown，mousemove，mouseup
当鼠标点击按下的时候，需要一个 tag 标识此时已经按下，可以执行 mousemove 里面的具体方法。
clientX，clientY 标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用 offsetX 和 offsetY 来表示
元素的元素的初始坐标，移动的举例应该是：
鼠标移动时候的坐标-鼠标按下去时候的坐标。
也就是说定位信息为：
鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的 offetLeft.
```

回答：

```
一个元素的拖拽过程，我们可以分为三个步骤，第一步是鼠标按下目标元素，第二步是鼠标保持按下的状态移动鼠标，第三步是鼠
标抬起，拖拽过程结束。

这三步分别对应了三个事件，mousedown 事件，mousemove 事件和 mouseup 事件。只有在鼠标按下的状态移动鼠标我们才会
执行拖拽事件，因此我们需要在 mousedown 事件中设置一个状态来标识鼠标已经按下，然后在 mouseup 事件中再取消这个状
态。在 mousedown 事件中我们首先应该判断，目标元素是否为拖拽元素，如果是拖拽元素，我们就设置状态并且保存这个时候鼠
标的位置。然后在 mousemove 事件中，我们通过判断鼠标现在的位置和以前位置的相对移动，来确定拖拽元素在移动中的坐标。
最后 mouseup 事件触发后，清除状态，结束拖拽事件。
```

详细资料可以参考：
[《原生 js 实现拖拽功能基本思路》](https://blog.csdn.net/LZGS_4/article/details/43523465)

#### 126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？

相关知识点：

```js
// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果

function mySetInterval(fn, timeout) {
  // 控制器，控制定时器是否继续执行
  var timer = {
    flag: true
  };

  // 设置递归函数，模拟定时器执行。
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }

  // 启动定时器
  setTimeout(interval, timeout);

  // 返回控制器
  return timer;
}
```

回答：

```
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。
```

详细资料可以参考：
[《用 setTimeout 实现 setInterval》](https://www.jianshu.com/p/32479bdfd851)
[《setInterval 有什么缺点？》](https://zhuanlan.zhihu.com/p/51995737)

#### 127. let 和 const 的注意点？

- 1.声明的变量只在声明时的代码块内有效
- 2.不存在声明提升
- 3.存在暂时性死区，如果在变量声明前使用，会报错
- 4.不允许重复声明，重复声明会报错

#### var let const区别

var：
  会发生变量提升，即变量可以在声明之前使用，值为undefined

let: 
  所声明的变量只在let命令所在的代码块内有效；
    for循环的计数器适合用let;
  所声明的变量一定要在声明后使用，否则报错。
  let不允许在相同作用域内，重复声明同一个变量。
  let实际上为 JavaScript 新增了块级作用域。

const:
  const声明一个只读的常量。一旦声明，常量的值就不能改变;
  const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
  const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
  
  ！！！ const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

#### 128. 什么是 rest 参数？

```
rest 参数（形式为...变量名），用于获取函数的多余参数。
```

#### 129. 什么是尾调用，使用尾调用有什么好处？

```
尾调用指的是函数的最后一步调用另一个函数。我们代码执行是基于执行栈的，所以当我们在一个函数里调用另一个函数时，我们会保留当前的执行上下文，然后再新建另外一个执行上下文加入栈中。使用尾调用的话，因为已经是函数的最后一步，所以这个时候我们可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。但是 ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
```

#### 130. Symbol 类型的注意点？

- 1.Symbol 函数前不能使用 new 命令，否则会报错。
- 2.Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
- 3.Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。
- 4.Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
- 5.Symbol.for 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
- 6.Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。

131/132 --> es.md
set weakset
map weakmap

#### 131. Set 和 WeakSet 结构？

- 1.ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

- 2.WeakSet 结构与 Set 类似，也是不重复的值的集合。但是 WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，

#### 132. Map 和 WeakMap 结构？

- 1.Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

- 2.WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。

#### 133. 什么是 Proxy ？

```
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
```

#### 134. Reflect 对象创建目的？

- 1.将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty，放到 Reflect 对象上。
- 2.修改某些 Object 方法的返回结果，让其变得更合理。
- 3.让 Object 操作都变成函数行为。
- 4.Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。

#### 135. require 模块引入的查找方式？

```
当 Node 遇到 require(X) 时，按下面的顺序处理。

（1）如果 X 是内置模块（比如 require('http')）
　　a. 返回该模块。
　　b. 不再继续执行。

（2）如果 X 以 "./" 或者 "/" 或者 "../" 开头
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X
    X.js
    X.json
    X.node

　　c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X/package.json（main字段）
    X/index.js
    X/index.json
    X/index.node

（3）如果 X 不带路径
　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。
　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。

（4）抛出 "not found"
```

详细资料可以参考：
[《require() 源码解读》](http://www.ruanyifeng.com/blog/2015/05/require.html)

#### 136. 什么是 Promise 对象，什么是 Promises/A+ 规范？

```
Promise 对象是异步编程的一种解决方案，最早由社区提出。Promises/A+ 规范是 JavaScript Promise 的标准，规定了一个 Promise 所必须具有的特性。

Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。状态的改变是通过 resolve() 和 reject() 函数来实现的，我们
可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。
```

详细资料可以参考：
[《Promises/A+ 规范》](http://www.ituring.com.cn/article/66566)
[《Promise》](http://es6.ruanyifeng.com/#docs/promise#Promise-resolve)

#### 137. 手写一个 Promise

```js
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  // 保存初始化状态
  var self = this;

  // 初始化状态
  this.state = PENDING;

  // 用于保存 resolve 或者 rejected 传入的值
  this.value = null;

  // 用于保存 resolve 的回调函数
  this.resolvedCallbacks = [];

  // 用于保存 reject 的回调函数
  this.rejectedCallbacks = [];

  // 状态转变为 resolved 方法
  function resolve(value) {
    // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变，
      if (self.state === PENDING) {
        // 修改状态
        self.state = RESOLVED;

        // 设置传入的值
        self.value = value;

        // 执行回调函数
        self.resolvedCallbacks.forEach(callback => {
          callback(value);
        });
      }
    }, 0);
  }

  // 状态转变为 rejected 方法
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = REJECTED;

        // 设置传入的值
        self.value = value;

        // 执行回调函数
        self.rejectedCallbacks.forEach(callback => {
          callback(value);
        });
      }
    }, 0);
  }

  // 将两个方法传入函数执行
  try {
    fn(resolve, reject);
  } catch (e) {
    // 遇到错误时，捕获错误，执行 reject 函数
    reject(e);
  }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function(value) {
          return value;
        };

  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(error) {
          throw error;
        };

  // 如果是等待状态，则将函数加入对应列表中
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  // 如果状态已经凝固，则直接执行对应状态的函数

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};
```

#### 138. 如何检测浏览器所支持的最小字体大小？

```
用 JS 设置 DOM 的字体为某一个值，然后再取出来，如果值设置成功，就说明支持。
```

#### 139. 怎么做 JS 代码 Error 统计？

```
error 统计使用浏览器的 window.error 事件。
```

#### 140. JS 设计模式

https://www.cnblogs.com/imwtr/p/9451129.html

- 单例模式
  单例模式保证了全局只有一个实例来被访问。一个类只能构造出唯一实例；
  比如说常用的如弹框组件的实现和全局状态的实现。

- 策略模式
  策略模式主要是用来将方法的实现和方法的调用分离开，外部通过不同的参数可以调用不同的策略。
  一个基于策略模式的程序至少由两部分组成：
    第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
    第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context 中要维持对某个策略对象的引用

- 代理模式
  代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。比如说常见的事件代理。
  当客户不方便直接访问一个 对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。
  替身对象对请求做出一些处理之后， 再把请求转交给本体对象
  代理和本体的接口具有一致性，本体定义了关键功能，而代理是提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情

- 中介者模式  
  中介者模式指的是，多个对象通过一个中介者进行交流，而不是直接进行交流，这样能够将通信的各个对象解耦。

- 适配器模式
  适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。假如我们需要一种
  新的接口返回方式，但是老的接口由于在太多地方已经使用了，不能随意更改，这个时候就可以使用适配器模式。比如我们需要一种
  自定义的时间返回格式，但是我们又不能对 js 时间格式化的接口进行修改，这个时候就可以使用适配器模式。


更多关于设计模式的资料可以参考：
[《前端面试之道》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc74186fb9a049ab0d0b6b)
[《JavaScript 设计模式》](https://juejin.im/post/59df4f74f265da430f311909#heading-3)
[《JavaScript 中常见设计模式整理》](https://juejin.im/post/5afe6430518825428630bc4d)

#### 145. 观察者模式和发布订阅模式有什么不同？

```
发布订阅模式其实属于广义上的观察者模式

在观察者模式中，观察者需要直接订阅目标事件。在目标发出内容改变的事件后，直接接收事件并作出响应。

而在发布订阅模式中，发布者和订阅者之间多了一个调度中心。调度中心一方面从发布者接收事件，另一方面向订阅者发布事件，订阅者需要在调度中心中订阅事件。通过调度中心实现了发布者和订阅者关系的解耦。使用发布订阅者模式更利于我们代码的可维护性。
```

详细资料可以参考：
[《观察者模式和发布订阅模式有什么不同？》](https://www.zhihu.com/question/23486749)

#### 157. 开发中常用的几种 Content-Type ？

```
（1）application/x-www-form-urlencoded

浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL
转码。

（2）multipart/form-data

该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。

（3）application/json

告诉服务器消息主体是序列化后的 JSON 字符串。

（4）text/xml

该种方式主要用来提交 XML 格式的数据。
```

详细资料可以参考：
[《常用的几种 Content-Type》](https://honglu.me/2015/07/13/%E5%B8%B8%E7%94%A8%E7%9A%84%E5%87%A0%E7%A7%8DContent-Type/)
 
#### 158. 如何封装一个 javascript 的类型判断函数？

```js
function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + "";
  }

  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");

    type.pop();

    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}
```

详细资料可以参考：
[《JavaScript 专题之类型判断(上)》](https://github.com/mqyqingfeng/Blog/issues/28)

#### 159. 如何判断一个对象是否为空对象？

```js
function checkNullObj(obj) {
  return Object.keys(obj).length === 0;
}
```

详细资料可以参考：
[《js 判断一个 object 对象是否为空》](https://blog.csdn.net/FungLeo/article/details/78113661)

#### 165. 如何确定页面的可用性时间，什么是 Performance API？

```
Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能，提供以前没有办法做到的精度。

使用 getTime 来计算脚本耗时的缺点，首先，getTime方法（以及 Date 对象的其他方法）都只能精确到毫秒级别（一秒的千分之一），想要得到更小的时间差别就无能为力了。其次，这种写法只能获取代码运行过程中的时间进度，无法知道一些后台事件的时间进度，比如浏览器用了多少时间从服务器加载网页。

为了解决这两个不足之处，ECMAScript 5引入“高精度时间戳”这个 API，部署在 performance 对象上。它的精度可以达到1毫秒
的千分之一（1秒的百万分之一）。

navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。

loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。
```

根据上面这些属性，可以计算出网页加载各个阶段的耗时。比如，网页加载整个过程的耗时的计算方法如下：

```js
var t = performance.timing;
var pageLoadTime = t.loadEventEnd - t.navigationStart;
```

详细资料可以参考：
[《Performance API》](http://javascript.ruanyifeng.com/bom/performance.html)

#### 166. js 中的命名规则

```
（1）第一个字符必须是字母、下划线（_）或美元符号（$）
（2）余下的字符可以是下划线、美元符号或任何字母或数字字符

一般我们推荐使用驼峰法来对变量名进行命名，因为这样可以与 ECMAScript 内置的函数和对象命名格式保持一致。
```

详细资料可以参考：
[《ECMAScript 变量》](http://www.w3school.com.cn/js/pro_js_variables.asp)

#### 167. js 语句末尾分号是否可以省略？

```
在 ECMAScript 规范中，语句结尾的分号并不是必需的。但是我们一般最好不要省略分号，因为加上分号一方面有
利于我们代码的可维护性，另一方面也可以避免我们在对代码进行压缩时出现错误。
```

#### 168. Object.assign()

```
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```

#### 169. Math.ceil 和 Math.floor

```
Math.ceil() === 向上取整，函数返回一个大于或等于给定数字的最小整数。

Math.floor() === 向下取整，函数返回一个小于或等于给定数字的最大整数。
```

#### 170. js for 循环注意点

```js
for (var i = 0, j = 0; i < 5, j < 9; i++, j++) {
  console.log(i, j);
}

// 当判断语句含有多个语句时，以最后一个判断语句的值为准，因此上面的代码会执行 10 次。
// 当判断语句为空时，循环会一直进行。
```

#### 171. 一个列表，假设有 100000 个数据，这个该怎么办？

```
我们需要思考的问题：该处理是否必须同步完成？数据是否必须按顺序完成？

解决办法：

（1）将数据分页，利用分页的原理，每次服务器端只返回一定数目的数据，浏览器每次只对一部分进行加载。

（2）使用懒加载的方法，每次加载一部分数据，其余数据当需要使用时再去加载。

（3）使用数组分块技术，基本思路是为要处理的项目创建一个队列，然后设置定时器每过一段时间取出一部分数据，然后再使用定时器取出下一个要处理的项目进行处理，接着再设置另一个定时器。
```

#### 172. js 中倒计时的纠偏实现？

```
在前端实现中我们一般通过 setTimeout 和 setInterval 方法来实现一个倒计时效果。但是使用这些方法会存在时间偏差的问题，这是由于 js 的程序执行机制造成的，setTimeout 和 setInterval 的作用是隔一段时间将回调事件加入到事件队列中，因此事件并不是立即执行的，它会等到当前执行栈为空的时候再取出事件执行，因此事件等待执行的时间就是造成误差的原因。

一般解决倒计时中的误差的有这样两种办法：

（1）第一种是通过前端定时向服务器发送请求获取最新的时间差，以此来校准倒计时时间。

（2）第二种方法是前端根据偏差时间来自动调整间隔时间的方式来实现的。这一种方式首先是以 setTimeout 递归的方式来实现倒计时，然后通过一个变量来记录已经倒计时的秒数。每一次函数调用的时候，首先将变量加一，然后根据这个变量和每次的间隔时间，我们就可以计算出此时无偏差时应该显示的时间。然后将当前的真实时间与这个时间相减，这样我们就可以得到时间的偏差大小，因此我们在设置下一个定时器的间隔大小的时候，我们就从间隔时间中减去这个偏差大小，以此来实现由于程序执行所造成的时间误差的纠正。
```

详细资料可以参考：
[《JavaScript 前端倒计时纠偏实现》](https://juejin.im/post/5badf8305188255c8e728adc)

#### 173. 进程间通信的方式？

- 1. 管道通信
- 2. 消息队列通信
- 3. 信号量通信
- 4. 信号通信
- 5. 共享内存通信
- 6. 套接字通信

详细资料可以参考：
[《进程间 8 种通信方式详解》](https://blog.csdn.net/violet_echo_0908/article/details/51201278)
[《进程与线程的一个简单解释》](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)

#### 175. 类型转换

类型转换分为两种：显示类型转换、隐式类型转换。
通常有三种形式的类型转换：
- 转换为字符串类型
- 转换为数字型
- 转换为布尔型

#### 显示类型转换
- toString():该方法**不会影响到原变量**，它会将转换的结果返回
- String()
- Number()
- parseInt(string):将字符串中的有效的整数内容转为数字;
- parseFloat(string):将字符串转换为**浮点数**;
- Boolean():null 和 undefined 都会转换为 false;数字 --> 布尔。除了 0 和 NaN，其余的都是 true。字符串 ---> 布尔。除了空串，其余的都是 true。引用数据类型会转换为 true。注意，空数组`[]`和空对象`{}`，**转换结果也是 true**。

#### 隐式类型转换
- isNaN ()
- 自增/自减运算符：`++`、`—-`
- 正号/负号：`+a`、`-a`
- 加号：`+`
- 运算符：`-`、`*`、`/`

#### 隐式类型转换（特殊）
- 逻辑运算符：`&&`、`||`、`！` 。非布尔值进行**与或**运算时，会先将其转换为布尔值，然后再运算，但运算结果是**原值**。
- 关系运算符：`<`、`>` `<=` `>=`等。关系运算符，得到的运算结果都是布尔值：要么是true，要么是false。

#### ！！
两个叹号会把0转换成false
如果是字符串的话，两个叹号会把空的字符串转换成false, 把非空的字符串转换成true;
!! 0    //false
!0      //true
!!''    //false
!!'ss'  //true

#### 176. Symbol

##### 含义
ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值；
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
let s = Symbol();

Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象;
Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
Symbol 值不能与其他类型的值进行运算，会报错。

##### 用处
- 可以用来表示一个独一无二的变量防止命名冲突；

- 利用 symbol 不会被常规的方法（除了 Object.getOwnPropertySymbols 外）遍历到，所以可以用来模拟私有变量；

- 主要用来提供遍历接口，布置了 symbol.iterator 的对象才可以使用 for···of 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕；

##### Symbol.prototype.description
创建 Symbol 的时候，可以添加一个描述。
  const sym = Symbol('foo');
  sym.description // "foo"

##### 作为属性名的 Symbol
```javascript
  let mySymbol = Symbol();
  // 第一种写法
  let a = {};
  a[mySymbol] = 'Hello!';
  // 第二种写法
  let a = {
    [mySymbol]: 'Hello!'
  };
  // 第三种写法
  let a = {};
  Object.defineProperty(a, mySymbol, { value: 'Hello!' });

  // 以上写法都得到同样结果
  a[mySymbol] // "Hello!"
```
! Symbol 值作为对象属性名时，不能用点运算符。a['mySymbol']

##### 属性名的遍历
Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
```javascript
  const obj = {};
  let a = Symbol('a');
  let b = Symbol('b');

  obj[a] = 'Hello';
  obj[b] = 'World';

  const objectSymbols = Object.getOwnPropertySymbols(obj);

  objectSymbols
  // [Symbol(a), Symbol(b)]
```

##### Symbol.for()，Symbol.keyFor()
有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');
  s1 === s2 // true

Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。

#### 177. es6新特性

- let,const： 变量，常量
- 变量的解构赋值：
- promise：处理异步
- 字符串扩展： for..of字符串遍历接口，repeat将一个新字符串重量N次，模板字符串$(baseUrl)
- 数值扩展：math.trunc()去掉小数部分，sign判断一个数是正/负/零，指数运算符**，
- 函数扩展：箭头函数（不绑定自己的this）
- 数组扩展：填充数组(fill),复制数据const a2=[...a1]
- 对象扩展：
- 正则的扩展：
- 增加async函数： 对异步的处理

##### set:
  Set是ES6新的数据结构，类似数组，但成员的值是唯一的，没有重复的值
  let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
  let ss=new Set([1,2,3,3])
  [...ss] //1,2,3
  https://www.jianshu.com/p/80bf2e6139dc
  set方法：add, delete, has, clear  
          set.add(a) //添加元素
          set.size //得到set的长度
          set.has(val) //has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。
          set.delete(2);//删除某个值，返回一个布尔值，表示删除是否成功。
          
  遍历方法：set.keys(), set.values(), set.entries(), set.forEach()
  用于：数组去重：
      const set = new Set();  //新建一个set
      for (let i = 0; i < candies.length; i++) {
          set.add(candies[i]);  //遍历set,将元素添加到set中，里面的元素不重复
      }

##### map:
    它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
    也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

        const m = new Map();
        m.set(o, 'content') //添加元素
        m.has(o) //判断是否存在该元素
        m.get('name') // "张三" 得到name对应的值

        const map = new Map();
        map.set('foo', true);
        map.set('bar', false);
    
    属性和方法：
    (1) size: size属性返回 Map 结构的成员总数。
        map.size();
    (2) set: set方法设置键名key对应的键值为value，然后返回整个 Map 结构
        m.set(o, 'content');
    (3)get: get方法读取key对应的键值，如果找不到key，返回undefined。
        m.get(hello);
    (4)has: has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
        m.has(o);
    (5)delete:delete方法删除某个键，返回true。如果删除失败，返回false
        m.delete(o);
    (6)clear:clear方法清除所有成员，没有返回值;
        map.clear();
    
    遍历方法：
        map.keys():
            for (let key of map.keys()) {
                console.log(key);
            }
        map.values();
        map.entries();
        map.foreach();
            map.forEach(function(value, key, map) {
                console.log("Key: %s, Value: %s", key, value);
            });

    eg. 遍历数组，将数组中每个元素出现的次数存储在map的value中。
        let map = new Map();
        for(item of deck){
            map.set(item,map.has(item) ? map.get(item)+1 : 1);
        }

##### map和Objects区别

  - **【key值类型】**
    - Map：key可以是对象
    - Objects: key只能是一个string 或是 symbol
  - **【键的顺序】**
    - Map: 有序
    - Objects: 无序
  - **【size】**
    - -Map: 增加size属性，直接获取
    - Objects: 只能依靠手动计算
  - **【键名冲突】**
    - Map: 默认不包含任何键，只包含显式插入的键
    - Object: object都有自己的原型，原型链上的键名有可能和你自己对象上的设置的键名产生冲突 （ES5开始可用Object.create(null)来创建一个没原原型的对象，但这种用法不常见）
  - **【性能】**
    - Map: 在频繁增删键值对的场景下表现更好
    - Object: 在频繁添加/删除键值对的场景下未作出优化


##### 模板字符串
模板字符串（template string）是增强版的字符串，用反引号（`）标识。
它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

#### 178.js的装饰器

##### 介绍

> Decorator 就是一种动态地往一个类中添加新的行为的设计模式，它可以在类时，扩展一个类的功能，并且去修改类本身的属性和方法，使其可以在不同类之间更灵活的共用一些属性和方法；

> 修饰模式（Decortaor），是面向对象编程领域中，一种动态地往一个类中添加新的行为的设计模式。修饰模式相比生成子类更加灵活，这样可以给某个对象而不是整个类添加一些功能；

##### 用法

(1) 装饰类

```js
@FooDecorator
class Foo {

}

function FooDecorator(target){
    // target 就是这个 class 的原型对象
}
```

(2) 装饰属性

```js
//给MyClass 所有实例的  getType 属性设置为仅为可读不可更改的属性 readonly
class MyClass {
	constructor(){
		this.type="myClass"
	}
	@readonly
	getType(){
		return this.type
	}
}

function readonly(target, key, discriptor){
	discriptor.writable = false
	return discriptor
}
```

(3)多个装饰器

```js
class MyClass {
	constructor(){
		this.type="myClass"
	}
	@readonly
	@logHello
	getType(){
		return this.type
	}
}

//装饰器让类的getType方法不可更改
function readonly(target, key, discriptor){
	discriptor.writable = false
	return discriptor
}

//让每次调用类中的getType方法会在控制台输出 hello
function logHello(target, key, discriptor){
	const oldFn = target[key]
    target[key] = function(...rest){
        console.log('Hello')
        return oldFn.call(this,...rest)
    }
    return target
}
```

#### 179. CORS Cross-origin resource sharing 跨域资源共享
http://www.ruanyifeng.com/blog/2016/04/cors.html

它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

- 简介

CORS需要浏览器和服务器同时支持。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信;

- 两种请求：简单请求和非简单请求

简单请求：只要同时满足以下两大条件，就属于简单请求。
  (1) 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
  (2) HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

- 简单请求
对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。
头信息中的Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。
如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。
  Access-Control-Allow-Origin: http://api.bob.com
  Access-Control-Allow-Credentials: true
  Access-Control-Expose-Headers: FooBar

  Access-Control-Allow-Origin：该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。

  Access-Control-Allow-Credentials：该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。

  Access-Control-Expose-Headers：该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值

withCredentials 属性: 要发送cookie时，服务器：Access-Control-Allow-Credentials: true，客户端：var xhr = new XMLHttpRequest(); xhr.withCredentials = true;

- 非简单请求：非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。

预检请求：
  非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
  浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。
  服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
  如果服务器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。控制台会打印出报错信息。一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。

  Access-Control-Request-Method：该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法。
  Access-Control-Request-Headers：该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段。

- 与JSONP的比较：
  CORS与JSONP的使用目的相同，但是比JSONP更强大。

  JSONP只支持GET请求，CORS支持所有类型的HTTP请求。
  JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

#### 180. WebSocket

http://www.ruanyifeng.com/blog/2017/05/websocket.html

- 简介：它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

- 客户端示例：
```javascript
  //执行该语句，客户端就会与服务器进行连接。
  var ws = new WebSocket("wss://echo.websocket.org");

  ws.onopen = function(evt) { 
    console.log("Connection open ..."); 
    ws.send("Hello WebSockets!");
  };

  ws.onmessage = function(evt) {
    console.log( "Received Message: " + evt.data);
    ws.close();
  };

  ws.onclose = function(evt) {
    console.log("Connection closed.");
  };      
```

- 客户端的 API

  (1) WebSocket 构造函数: WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。
  (2) webSocket.readyState: readyState属性返回实例对象的当前状态，共有四种;
    CONNECTING：值为0，表示正在连接。
    OPEN：值为1，表示连接成功，可以通信了。
    CLOSING：值为2，表示连接正在关闭。
    CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
  (3)webSocket.onopen: 实例对象的onopen属性，用于指定连接成功后的回调函数。
  (4)webSocket.onclose: 实例对象的onclose属性，用于指定连接关闭后的回调函数。
  (5)webSocket.onmessage: 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。
  (6)webSocket.send(): 实例对象的send()方法用于向服务器发送数据。
  (7)webSocket.bufferedAmount: 实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。
  (8)webSocket.onerror:实例对象的onerror属性，用于指定报错时的回调函数。

#### 181. 内存泄露 Memory leak

- 内存生命周期
  分配期 -> 使用期 -> 释放期
  内存分配 - 内存使用 - 内存释放

- 什么是内存泄漏
  内存泄漏是在计算机科学中，由于疏忽或错误造成程序未能释放已经不再使用的内存。
  并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费。
  简单理解：无用的内存还在占用，得不到释放和归还。比较严重时，无用的内存会持续递增，从而导致整个系统卡顿，甚至崩溃。

- JavaScript 内存管理机制
  JavaScript 内存管理机制和内存的生命周期是一一对应的。首先需要分配内存，然后使用内存，最后释放内存。
  其中 JavaScript 语言不需要程序员手动分配内存，绝大部分情况下也不需要手动释放内存，对 JavaScript 程序员来说通常就是使用内存（即使用变量、函数、对象等）。
  使用内存：对分配内存进行读取和写入的操作，读取与写入可能是写入一个变量或者一个对象的属性值，甚至传递函数的参数。

- 内存回收 （垃圾内存回收）
  
  内存泄漏一般都是发生在这一步，JavaScript 的内存回收机制虽然能回收绝大部分的垃圾内存，但是还是存在回收不了的情况，如果存在这些情况，需要我们手动清理内存。

  原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存；

  两种实现方式：
    （1）标记清除：
      当变量进入执行环境是，就标记这个变量为“进入环境“。进入环境的变量所占用的内存就不能释放，当变量离开环境时，则将其标记为“离开环境“；

      垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉；

      在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了
      随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存；

    （2）引用计数：
      语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放
      如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏；

      ES6 把引用有区分为强引用和弱引用，这个目前只有再 Set 和 Map 中才有。

      强引用才会有引用计数叠加，只有引用计数为 0 的对象的内存才会被回收，所以一般需要手动回收内存（手动回收的前提在于标记清除法还没执行，还处于当前执行环境）。

      而弱引用没有触发引用计数叠加，只要引用计数为 0，弱引用就会自动消失，无需手动回收内存.

- JavaScript内存泄漏的场景
  (1) 意外的全局变量
    ```javascript
      // 在全局作用域下定义
      function count(number) {
        // basicCount 相当于 window.basicCount = 2;
        basicCount = 2;
        return basicCount + number;
      }
    ```
  (2) 被遗忘的计时器
  (3) 被遗忘的事件监听器
  ```javascript
    <template>
      <div></div>
    </template>
    <script>
      export default {
        mounted() {
          window.addEventListener('resize', () => {
            // 这里做一些操作
          })
        },
      }
    </script>
  ```
  (4)被遗忘的 ES6 Set 成员
  (5)被遗忘的 ES6 Map 键名
  (6)被遗忘的订阅发布事件监听器
  (7)被遗忘的闭包
  (8)脱离 DOM 的引用

#### 182. 创建字符串的几种方法？

字面量
使用js内置的支持类String： 被称为大string，类型是object

var s1 = "abc";
s2 = new String("abc");
alert(typeof s1); //string 
alert(typeof s2); //object 

常用方法/属性
  indexOf 获取指定字符串在当前字符串第一次出现的索引
  lastIndexOF 获取指定字符串在当前字符串最后一次出现的索引
  replace 替换
  substr 截取子字符串
  substring 截取子字符串
  toLowerCase 转化小写
  toUpperCase 转化大写
  split 拆分字符串

#### 183. for of 和 for in 的区别
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of

- for of 
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句;

```javascript
  const array1 = ['a', 'b', 'c'];

  for (const element of array1) {
    console.log(element);
  }

  // expected output: "a"
  // expected output: "b"
  // expected output: "c"
```
- for...of与for...in的区别

无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

for...in 语句以任意顺序迭代对象的可枚举属性。

for...of 语句遍历可迭代对象定义要迭代的数据。

#### 184. window.postMessage()实现跨域消息传递

window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为https），
端口号（443为https的默认值），以及主机  (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。window .postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全.

otherWindow.postMessage(message, targetOrigin, [transfer]);

otherWindow:其他窗口的一个引用，比如iframe的contentWindow属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames。
  Window.open
  Window.opener
  HTMLIFrameElement.contentWindow(父窗体向子窗体发送消息)
  Window.parent(子窗体向父窗体发送消息)
  Window.frames +索引值
 
message:
  将要发送到其他window的数据。它将会被结构化克隆算法序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。

targetOrigin:
  通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；例如，当用postMessage传送密码时，这个参数就显得尤为重要，必须保证它的值与这条包含密码的信息的预期接受者的origin属性完全一致，来防止密码被恶意的第三方截获。如果你明确的知道消息应该发送到哪个窗口，那么请始终提供一个有确切值的targetOrigin，而不是*。不提供确切的目标将导致数据泄露到任何对数据感兴趣的恶意站点。

transfer :
  可选,是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

#### 185. 可选链

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。

eg.
  obj?.prop
  obj?.[expr]
  arr?.[index]
  func?.(args)

  let nestedProp = obj.first && obj.first.second;  
    ->
  let nestedProp = obj.first?.second;

#### 186. JS语言的特点

  运行在客户端浏览器上；
  不用预编译，直接解析执行代码；
  是弱类型语言，较为灵活；
  与操作系统无关，跨平台的语言；
  脚本语言、解释性语言