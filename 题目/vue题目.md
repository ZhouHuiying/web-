### 1、MVVM 和 MVC 是什么，区别是什么？

MVVM:
- Model：负责数据存储
- View：负责页面展示
- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
数据驱动视图，只关心数据变化，DOM操作被封装。
数据变化更新视图，视图变化更新数据。

MVC:
  C指的是Controller。控制器能够控制视图的变化，也能控制数据的变化。
  单向通信。一般情况下是：view 发出命令给控制器，控制器处理业务逻辑后控制 Model，Model再去改 view。

区别：
  主要就是 mvc 中 Controller 演变成 mvvm 中的 viewModel。
  mvvm 主要解决了 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。当 Model 频繁发生变化，开发者需要主动更新到 View 。   

  - MVC　获取数据修改页面要手动去操作dom，而mvvm模式　页面是和数据绑定在一起的。当我们需要改变页面我们只需要改变数据就好了；
    VM可以帮助解决DOM操作的一些内容，让开发者把重点聚焦到数据和业务上，提高开发效率；

### 2、Vue3 生命周期

beforeCreate	   Not needed*
created	         Not needed*
beforeMount	     onBeforeMount
mounted	         onMounted
beforeUpdate	   onBeforeUpdate
updated	         onUpdated
beforeUnmount	   onBeforeUnmount
unmounted	       onUnmounted
errorCaptured	   onErrorCaptured
renderTracked	   onRenderTracked
renderTriggered	 onRenderTriggered

- 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。

### 3、双向绑定原理

#### vue2.xx：

  https://www.cnblogs.com/canfoo/p/6891868.html

  vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。
  因为vue是通过Object.defineProperty()来实现数据劫持的。
  Object.defineProperty( )可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set；
  get就是在读取属性时触发的函数，set就是在设置属性时触发的函数；

  - 实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：

    1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
    2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
    3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

#### vue3.xx：

  vue3.xx中使用 **Proxy** 实现数据双向绑定；
  Proxy可以理解成，在目标对象之前架设一层 "拦截"，当外界对该对象访问的时候，都必须经过这层拦截，而Proxy就充当了这种机制，类似于代理的含义，它可以对外界访问对象之前进行过滤和改写该对象。
    const obj = new Proxy(target, handler);

  当外界每次对obj进行操作时，就会执行handler对象上的一些方法。
  handler中常用的对象方法如下：
    1. get(target, propKey, receiver) 用于拦截某个属性的读取操作
    2. set(target, propKey, value, receiver) 用来拦截某个属性的赋值操作
    3. has(target, propKey) 判断某个目标对象是否有该属性名
    4. construct(target, args) 用来拦截new命令的
    5. apply(target, object, args) 用来拦截函数的调用