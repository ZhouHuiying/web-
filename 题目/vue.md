https://juejin.cn/post/6961222829979697165


### 1、MVVM 和 MVC 是什么，区别是什么？

#### MVVM:
  MVVM 新增了 VM 类。
  - Model：负责数据存储
  - View：负责页面展示
  - View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
  数据驱动视图，只关心数据变化，DOM操作被封装。
  数据变化更新视图，视图变化更新数据。

  ViewModel 层：做了两件事达到了数据的双向绑定。
    一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
    二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。

#### MVC:

  MVC 全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。

  Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据。
  View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的。
  Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。控制器能够控制视图的变化，也能控制数据的变化。

  单向通信。一般情况下是：view 发出命令给控制器，控制器处理业务逻辑后控制 Model，Model再去改 view。

  MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。
  
#### 区别：

  主要就是 mvc 中 Controller 演变成 mvvm 中的 viewModel。
  mvvm 主要解决了 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。当 Model 频繁发生变化，开发者需要主动更新到 View 。   

  - MVC　获取数据修改页面要手动去操作dom，而mvvm模式　页面是和数据绑定在一起的。当我们需要改变页面我们只需要改变数据就好了；
    MVVM可以帮助解决DOM操作的一些内容，让开发者把重点聚焦到数据和业务上，提高开发效率；
  
  MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，
  而是改变属性后该属性对应 View 层显示会自动改变（对应Vue数据驱动的思想）。

#### 为什么官方要说 Vue 没有完全遵循 MVVM 思想呢？

  严格的 MVVM 要求 View 不能和 Model 直接通信，而 Vue 提供了$refs 这个属性，让 Model 可以直接操作 View，违反了这一规定，所以说 Vue 没有完全遵循 MVVM。

  - $refs:
    ref 需要在dom渲染完成后才会有，在使用的时候确保dom已经渲染完成。比如在生命周期 mounted(){} 钩子中调用，或者在 this.$nextTick(()=>{}) 中调用。
    如果ref 是循环出来的，有多个重名，那么ref的值会是一个数组 ，此时要拿到单个的ref 只需要循环就可以了。
    
    用法：
      ref 加在普通的元素上，用this.$refs.（ref值） 获取到的是dom元素；
      
      ref 加在子组件上，用this.$refs.（ref值） 获取到的是组件实例，可以使用组件的所有方法。在使用方法的时候直接this.$refs.（ref值）.方法() 就可以使用了；

　　  利用 v-for 和 ref 获取一组数组或者dom 节点；

### 2、Vue 生命周期

#### Vue2 -> Vue3

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

#### Vue2生命周期

  beforeCreate 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问;

  created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el,如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom;

  beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。

  mounted 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点

  beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁（patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程

  updated 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。

  beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器。

  destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  
  - keep-alive 专属生命周期
    activated - keep-alive 专属，组件被激活时调用
    deactivated - keep-alive 专属，组件被销毁时调用

#### 谈谈你对 keep-alive 的了解？

如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

- 一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
- 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

#### 异步请求在哪一步发起？

  可以在钩子函数 created、beforeMount、mounted 中进行异步请求，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。

  - 如果异步请求不需要依赖 Dom 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
    此时组件的 data 数据、通过路由注入的数据已经具备，此时可以使用这些数据发送 ajax 请求；
    能更快获取到服务端数据，减少页面  loading 时间；
    ssr  不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；
  
  - 在 mounted 钩子函数中发起也可以，但是相对比 created 稍微迟了一些。

  - 如果不需要依赖任何数据发起 ajax 请求，那么在 beforeCreate 发起也可以。

#### Vue SSR
  SSR 也就是服务端渲染，也就是将 Vue 在客户端把标签渲染成 HTML 的工作放在服务端完成，然后再把 html 直接返回给客户端。
 
  优点：
    SSR 有着更好的 SEO、并且首屏加载速度更快。
  缺点：
    开发条件会受到限制，服务器端渲染只支持 beforeCreate 和 created 两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于 Node.js 的运行环境。
    服务器会有更大的负载需求。

#### Vue 的父子组件生命周期钩子函数执行顺序

- 加载渲染过程：
  父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount->子 mounted->父 mounted

- 子组件更新过程：
  父 beforeUpdate->子 beforeUpdate->子 updated->父 updated

- 父组件更新过程
  父 beforeUpdate->父 updated

- 销毁过程
  父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed


#### vue2和vue3区别

1. vue2和vue3双向数据绑定原理发生了改变
  vue2 的双向数据绑定是利用ES5 的一个 API Object.definePropert()对数据进行劫持 结合 发布订阅模式的方式来实现的。
  vue3 中使用了 es6 的 Proxy API 对数据代理。
  相比于vue2.x，使用proxy的优势如下：
    defineProperty只能监听某个属性，不能对全对象监听
    可以省去for in、闭包等内容来提升效率（直接绑定整个对象即可）
    可以监听数组，不用再去单独的对数组做特异性操作 vue3.x可以检测到数组内部数据的变化
2. 组合式API
  Vue3.0里出现了setup。新的setup组件选项在创建组件之前执行，一旦 props被解析，并充当合成 API 的入口点。由于在执行 setup时尚未创建组件实例，因此在 setup 选项中没有 this。如果想使用this可以在return中使用。
3. 带 ref 的响应式变量
  在 Vue 3.0 中，我们可以通过一个新的 ref 函数使任何响应式变量在任何地方起作用。
4. watch 响应式更改
  就像我们如何使用 watch 选项在组件内的 user property 上设置侦听器一样，我们也可以使用从 Vue 导入的 watch 函数执行相同的操作。它接受 3 个参数：
    一个响应式引用或我们想要侦听的 getter 函数
    一个回调
    可选的配置选项
      import { ref, watch } from 'vue'
      const counter = ref(0)

      watch(counter, (newValue, oldValue) => { 

      console.log('The new counter value is: ' + counter.value)

      })
5. 独立的 computed 属性
### 3、双向绑定原理（响应式数据的原理）

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:

- 在自身实例化时往属性订阅器(dep)里面添加自己
- 自身必须有一个 update()方法
- 待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

#### vue2.xx：

  https://www.cnblogs.com/canfoo/p/6891868.html

  vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。

  对象是通过Object.defineProperty()来实现数据劫持的。Object.defineProperty( )可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set；

  数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)。

  get就是在读取属性时触发的函数，set就是在设置属性时触发的函数；

  - 实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：

    1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
    2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
    3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

  数组考虑性能原因没有用 defineProperty 对数组的每一项进行拦截，而是选择对 7 种数组（push,shift,pop,splice,unshift,sort,reverse）方法进行重写(AOP 切片思想)
  所以在 Vue 中修改数组的索引和长度是无法监控到的。需要通过以上 7 种变异方法修改数组才会触发数组对应的 watcher 进行更新

#### Object.defineProperty 介绍？

```
Object.defineProperty 函数一共有三个参数，第一个参数是需要定义属性的对象，第二个参数是需要定义的属性，第三个是该属性描述符。

一个属性的描述符有四个属性，分别是 value 属性的值，writable 属性是否可写，enumerable 属性是否可枚举，configurable 属性是否可配置修改。
```

#### 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

```
有一些对属性的操作，使用这种方法无法拦截，比如说通过下标方式修改数组数据或者给对象新增属性，vue 内部通过重写函数解决了这个问题。在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为这是 ES6 的语法。
```

#### Vue 框架怎么实现对象和数组的监听？

如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object.defineProperty() 对数据进行劫持，但是  Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，那它是怎么实现的呢？我们查看相关代码如下：

```
  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])  // observe 功能为监测数据的变化
    }
  }

  /**
   * 对属性进行递归遍历
   */
  let childOb = !shallow && observe(val) // observe 功能为监测数据的变化

```
通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用  Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。

#### vue3.xx：

  vue3.xx中使用 **Proxy** 实现数据双向绑定；
  Vue3.x 改用 Proxy 替代 Object.defineProperty。因为 Proxy 可以直接监听对象和数组的变化，并且有多达 13 种拦截方法。
  Proxy可以理解成，在目标对象之前架设一层 "拦截"，当外界对该对象访问的时候，都必须经过这层拦截，而Proxy就充当了这种机制，类似于代理的含义，它可以对外界访问对象之前进行过滤和改写该对象。
    const obj = new Proxy(target, handler);

  当外界每次对obj进行操作时，就会执行handler对象上的一些方法。
  handler中常用的对象方法如下：
    1. get(target, propKey, receiver) 用于拦截某个属性的读取操作
    2. set(target, propKey, value, receiver) 用来拦截某个属性的赋值操作
    3. has(target, propKey) 判断某个目标对象是否有该属性名
    4. construct(target, args) 用来拦截new命令的
    5. apply(target, object, args) 用来拦截函数的调用

### 4、vue 的优点是什么？

- 低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
- 可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。
- 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用 Expression Blend 可以很容易设计界面并生成 xml 代码。
- 可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

### 5、嵌套路由怎么定义？

在实际项目中我们会碰到多层嵌套的组件组合而成，但是我们如何实现嵌套路由呢？因此我们需要在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。
index.html，只有一个路由出口

```html
<div id="app">
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</div>
```

main.js，路由的重定向，就会在页面一加载的时候，就会将 home 组件显示出来，因为重定向指向了 home 组件，redirect 的指向与 path 的必须一致。children 里面是子路由，当然子路由里面还可以继续嵌套子路由。

```js
index.js 文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入两个组件

import home from "./home.vue"
import game from "./game.vue"
//定义路由
const routes = [
  { path: "/", redirect: "/home" },//重定向,指向了home组件
  {
    path: "/home", component: home,
    children: [
        { path: "/home/game", component: game }
    ]
  }
]
//创建路由实例
const router = new VueRouter({routes})

main.js文件：
  new Vue({
    el: '#app',
    data: {
    },
    methods: {
    },
    router
  })
```
home.vue，点击显示就会将子路由显示在出来，子路由的出口必须在父路由里面，否则子路由无法显示。

### vue-router

主要文件：
  index.js
  install.js
  util文件夹
  history文件夹
    html5.js
    hash.ja
    base.js
    abstract.js

#### index.js文件

- 模式参数
  在vue-router中是通过mode这一参数控制路由的实现模式的：
    const router = new VueRouter({
      mode: 'history',
      routes: [...]
    })

  1. new VueRouter实例的时候可以传入mode history，根据mode确定history实际的类并实例化；

  2. 在初始化对应的history之前，会对mode做一些校验：若浏览器不支持HTML5History方式（通过supportsPushState变量判断），则mode强制设为'hash'；若不是在浏览器环境下运行，则mode强制设为'abstract'；

  3. VueRouter类中的onReady(), push()等方法只是一个代理，实际是调用的具体history对象的对应方法，在init()方法中初始化时，也是根据history对象具体的类别执行不同操作；

  在浏览器环境下的两种方式，分别就是在HTML5History，HashHistory两个类中实现的。他们都定义在src/history文件夹下，继承自同目录下base.js文件中定义的History类。History中定义的是公用和基础的方法

#### HashHistory

push 方法 - push方法中调用this.transitionTo方法，transitionTo()方法是父类中定义的是用来处理路由变化中的基础逻辑的，push()方法最主要的是对window的hash进行了直接赋值；

transitionTo - 当路由变化时，调用了History中的this.cb方法，而this.cb方法是通过History.listen(cb)进行设置的。

#### HTML5History

History interface是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。

从HTML5开始，History interface提供了两个新的方法：pushState(), replaceState()使得我们可以对浏览器历史记录栈进行修改：
  window.history.pushState(stateObject, title, URL)
  window.history.replaceState(stateObject, title, URL)
    
    stateObject：当浏览器跳转到新的状态时，将触发popState事件，该事件将携带这个stateObject参数的副本；
    title: 所添加记录的标题
    URL: 所添加记录的URL

  这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前URL改变了，但浏览器不会立即发送请求该URL，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。

#### 两个组件

1. router-link

该组件支持用户在具有路由功能的应用中(点击)导航,默认渲染成带有正确链接的<a>标签，可以通过tag属性生成别的标签。

  使用方式：`<router-link :to="index">`

  原理：
    1) router-link 组件接收的参数：
        to    表示目标路由的链接,当被点击后，内部会立刻把to的值传到router.push(),所以这个值可以是一个字符串或者是描述目标位置的对象
        tag    router-link组件渲染的标签名，默认为a
        exact  布尔类型,“是否激活”默认类名的依据是包含匹配
        append  布尔类型,设置append属性后,则在当前(相对)路劲前添加基路劲
        replace   布尔类型,设置replace后，当点击时会调用router.replace()而不是router.push(),这样导航后不会留下history记录
        activeClass  链接激活时使用的CSS类名
        exactActiveClass 配置当链接被精确匹配的时候应该激活的 class
        event  声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组

    2) 组件内部有一个render函数，render函数：return h(this.tag, data, this.$slots.default)；


2. router-view

eg.
```javascript
  <div id="app">
    <router-link to="/info/">info页</router-link>     
    <router-link to="/info/face">page页</router-link>        
    <hr/>
    <router-view></router-view>
  </div>
  <script>                   
      const info  = { template:'<div>info Page<router-view><br/></router-view></div>'}             //外层组件
      const page  = { template:'<div>face Page</div>'}                                             //内层组件
      const routes = [                                   
          {
              path:'/info/',
              component:info,
              children:[                         
                  {path:'face',component:page}        //使用了嵌套路由
              ]
          }
      ]
      const app = new Vue({                                                     
          el:'#app',
          router:new VueRouter({routes})
      })
  </script>
```
router-view组件渲染时是从VueRouter实例._route.matched属性获取需要渲染的组件，也就是我们在vue内部的this.$route.matched上获取的,

router-view通过判断当前组件的嵌套层次，然后通过这个层次从route.matches数组中获取当前需要渲染的组件，最后调用全局的$createElement来创建对应的VNode完成渲染的。

组件内部有一个render函数，render函数return h(component, data, children)
component为通过route.matched获取到的需要渲染的组件

#### 两种模式对比

  pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL
  pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中
  pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串
  pushState可额外设置title属性供后续使用

### Vue.mixin 混入

- 概念：
  混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

- eg.

  ```javascript
    // 定义一个混入对象
    var myMixin = {
      created: function () {
        this.hello()
      },
      methods: {
        hello: function () {
          console.log('hello from mixin!')
        }
      }
    }

    // 定义一个使用混入对象的组件
    var Component = Vue.extend({
      mixins: [myMixin]
    })

    var component = new Component() // => "hello from mixin!"
  ```

- vue 中 mixin 和 mixins 区别？

  mixin 用于全局混入，会影响到每个组件实例。
  mixins 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据这种逻辑等等。另外需要注意的是 mixins 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并。

- 选项合并：

  当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
  1）比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
  2）同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。


### 6、路由之间跳转？跳转时传递参数？

1. 路由跳转的方式

- 声明式（标签跳转） `<router-link :to="index">`
- 编程式（ js 跳转） `router.push('index')`

2. 传递参数的两种方式

- params
  this.$router.push({ name: 'news', params: { userId: 123 }})
- query 查询参数
  <router-link :to="{ path: '/news', query: { userId: 1111}}">click to news page</router-link>

总结：
  1. 命名路由搭配params，刷新页面参数会丢失
  2. 查询参数搭配query，刷新页面数据不会丢失

### 7、懒加载（按需加载路由）

webpack 中提供了 require.ensure()来实现按需加载。以前引入路由是通过 import 这样的方式引入，改为 const 定义的方式进行引入。

- 不进行页面按需加载引入方式：

```js
import  home   from '../../common/home.vue'
```

- 进行页面按需加载的引入方式：

```js
const  home = r => require.ensure( [], () => r (require('../../common/home.vue')))
```

### 8、Vue组件通信

(1)props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的;
    父组件 -> 子组件： props
      单向数据流：所有的 prop 都使得
      其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
    子组件 -> 父组件： emit
    
    事件绑定： emit/on:
      原生事件绑定是通过 addEventListener 绑定给真实元素的;
      组件事件绑定是通过 Vue 自定义的$on 实现的。如果要在组件上使用原生事件，需要加.native 修饰符，这样就相当于在父组件中把子组件当做普通 html 标签，然后加上原生事件。
      
    - $on、$emit 是基于发布订阅模式的，维护一个事件中心，on 的时候将事件按名称存在事件中心里，称之为订阅者，然后 emit 将对应的事件进行发布，去执行事件中心里的对应的监听器

(2)$refs 获取组件实例  (父组件访问子组件$refs)

(3)envetBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式

(4)vuex 状态管理

(5)父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量;

  provider/inject：简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量;
  需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。

(6)$parent,$children 获取当前组件的父组件和当前组件的子组件
  父组件访问子组件：使用$children;  this.$children: 可以拿到所有子组件数据(数组)；
  子组件访问父组件：使用$parent;
  子组件访问根组件：$root
  
(7)$attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题
  https://www.jb51.net/article/132371.htm
  $attrs: 包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 props 时，
  这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=”$attrs” 传入内部组件——在创建更高层次的组件时非常有用。
  $listeners: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=”$listeners” 传入内部组件——在创建更高层次的组件时非常有用。

### 10、自定义指令(v-check, v-focus) 的方法有哪些? 它有哪些钩子函数? 还有哪些钩子函数参数

- 全局定义指令：在 vue 对象的 directive 方法里面有两个参数, 一个是指令名称, 另一个是函数。
- 组件内定义指令：directives
- 钩子函数: bind(绑定事件出发)、inserted(节点插入时候触发)、update(组件内相关更新)
- 钩子函数参数： el、binding

### 11、vue 指令

(image/vue内置指令.png)

#### v-model
  实现数据双向绑定；

  原理：
    v-model 只是语法糖而已
    v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

    text 和 textarea 元素使用 value property 和 input 事件；
    checkbox 和 radio 使用 checked property 和 change 事件；
    select 字段将 value 作为 prop 并将 change 作为事件。

#### key值的作用

- 为什么要在列表组件中写 key，其作用是什么？

  key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点;
  设置key能够大大减少对页面的DOM操作，提高了diff效率;

vue 中 key 值的作用可以分为两种情况来考虑。

第一种情况是 v-if 中使用 key。由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当我们使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。如果是相同的 input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此我们可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。

第二种情况是 v-for 中使用 key。用 v-for 更新已渲染过的元素列表时，它默认使用“就地复用”的策略。如果数据项的顺序发生了改变，Vue 不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue 跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。

- 
1). react/vue中的key有什么作用？（key的内部原理是什么？）
2). 为什么遍历列表时，key最好不要用index? 
  1. 虚拟DOM中key的作用：
      1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

      2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                    随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

              a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                    (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                    (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

              b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                    根据数据创建新的真实DOM，随后渲染到到页面    
  2. 用index作为key可能会引发的问题：
            1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

            2. 如果结构中还包含输入类的DOM：
                    会产生错误DOM更新 ==> 界面有问题。
                    
            3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
              仅用于渲染列表用于展示，使用index作为key是没有问题的。
  3. 开发中如何选择key?:
            1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
            2.如果确定只是简单的展示数据，用index也是可以的。
### 12.diff算法
  diff 是发生在虚拟 DOM 上的：新虚拟 DOM 和老虚拟 DOM 进行 diff （精细化比较），算出应该如何最小量更新，最后反映到真实的 DOM 上。

  怎么实现 两颗新旧DOM树的对比 呢？这里就涉及到了 diff算法。常见的 diff算法如下：

  tree diff / component diff / element diff 

 - tree diff：新旧DOM树，逐层对比的方式，就叫做 tree diff。每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素。

 - component diff：在对比每一层的时候，组件之间的对比，叫做 component diff。当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置。

 - element diff：在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff。

 - key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系。

#### h函数
  h 函数用来产生虚拟节点（vnode），可以嵌套使用

  h('a', { props: { href: 'http://www.atguigu.com' } }, '尚硅谷')
  得到： { "sel": "a", "data": { "props": { "href": "http://www.atguigu.com" } }, "text": "尚硅谷" }
  它表示的真正的 DOM 节点：<a href="http://www.atguigu.com">尚硅谷</a>

  一个虚拟节点有哪些属性？
    {
      children: undefined, // 子节点，undefined表示没有子节点
      data: {}, // 属性样式等
      elm: undefined, // 该元素对应的真正的DOM节点，undefined表示它还没有上树
      key: undefined, // 节点唯一标识
      sel: 'div', // selector选择器 节点类型（现在它是一个div）
      text: '我是一个盒子' // 文字
    }


### 14、vue项目结构及各部分的作用

- main.ts: 
    main.js主要是引入vue框架，根组件及路由设置，并且定义vue实例。

    程序的入口；这里面调用了App这个组件，也就是说App组件对整个项目来说，为最上级的父组件。

- App.vue: 
    一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)

    (1) template
    其中模板只能包含一个父节点，<router-view/>为<router-view></router-view>的简写，是子路由视图，后面的路由页面都显示在此处。

    (2) script
    vue通常用es6来写，用export default导出，其下面可以包含数据data，生命周期(mounted等)，方法(methods)等。

    (3) style
    样式通过style标签<style></style>包裹，默认是影响全局的，如需定义作用域只在该组件下起作用，需在标签上加scoped，<style scoped></style>

### 15、为什么data是一个函数？

  组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，
  类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。
  而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果。

### 16、v-if和v-show的区别

v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。

v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）。

使用场景：

  v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景

  v-show 适用于需要非常频繁切换条件的场景

- 为什么v-for v-if不能一起用？
    v-for优先级比v-if高，在进行if判断的时候，v-for是比v-if先进行判断；
    把v-for和v-if用到一个元素上，会带来性能的浪费；
    为了避免这种情况，在外层嵌套template,在这一层进行v-if判断，在内部进行v-for循环。

### 17、computed 和 watch 的区别和运用的场景

- 区别：

  computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。

  watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。

- 运用场景

  计算属性一般用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；

  侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑；

（1）computed 是计算一个新的属性，并将该属性挂载到 Vue 实例上，而 watch 是监听已经存在且已挂载到 Vue 实例上的数据，所以用 watch 同样可以监听 computed 计算属性的变化。

（2）computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值。而 watch 则是当数据发生变化便会调用执行函数。

（3）从使用场景上说，computed 适用一个数据被多个数据影响，而 watch 适用一个数据影响多个数据。

### 18、虚拟 DOM 是什么 有什么优缺点？

由于在浏览器中操作 DOM 是很昂贵的。频繁的操作 DOM，会产生一定的性能问题。这就是虚拟 Dom 的产生原因。
Vue2 的 Virtual DOM 借鉴了开源库 snabbdom 的实现。
虚拟 DOM 本质就是用一个原生的 JS 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。DOM 中的一切属性都在虚拟 DOM 中有对应的属性。

优点：
  保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
  
  无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；

  跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

缺点:
  无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

  首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。

#### 什么是 Virtual DOM？ 为什么 Virtual DOM 比原生 DOM 快？

```
我对 Virtual DOM 的理解是，

首先对我们将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 TagName、props 和 Children 这些属性。然后我们将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。

当页面的状态发生改变，我们需要对页面的 DOM 的结构进行调整的时候，我们首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。

最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。

我认为 Virtual DOM 这种方法对于我们需要有大量的 DOM 操作的时候，能够很好的提高我们的操作效率，通过在操作前确定需要做的最小修改，尽可能的减少 DOM 操作带来的重流和重绘的影响。
其实 Virtual DOM 并不一定比我们真实的操作 DOM 要快，这种方法的目的是为了提高我们开发时的可维护性，在任意的情况下，都能保证一个尽量小的性能消耗去进行操作。
```

#### 如何比较两个 DOM 树的差异？

```
两个树的完全 diff 算法的时间复杂度为 O(n^3) ，但是在前端中，我们很少会跨层级的移动元素，所以我们只需要比较同一层级的元素进行比较，这样就可以将算法的时间复杂度降低为 O(n)。

算法首先会对新旧两棵树进行一个深度优先的遍历，这样每个节点都会有一个序号。在深度遍历的时候，每遍历到一个节点，我们就将这个节点和新的树中的节点进行比较，如果有差异，则将这个差异记录到一个对象中。

在对列表元素进行对比的时候，由于 TagName 是重复的，所以我们不能使用这个来对比。我们需要给每一个子节点加上一个 key，列表对比的时候使用 key 来进行比较，这样我们才能够复用老的 DOM 树上的节点。
```

### 19、 vue-router 路由钩子函数是什么？ 执行顺序是什么？

#### 路由钩子函数
路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫。

```
（1）全局的钩子函数 beforeEach 和 afterEach

beforeEach 有三个参数，to 代表要进入的路由对象，from 代表离开的路由对象。next 是一个必须要执行的函数，如果不传参数，那就执行下一个钩子函数，如果传入 false，则终止跳转，如果传入一个路径，则导航到对应的路由，如果传入 error ，则导航终止，error 传入错误的监听函数。

```
  const router = new VueRouter({ ... })

  router.beforeEach((to, from, next) => {
    console.log('beforeEach');
  });

  router.afterEach((to, from) => {   //after 钩子没有 next 方法，不能改变导航
    console.log('beforeEach');
  });

```
（2）单个路由独享的钩子函数 beforeEnter，它是在路由配置上直接进行定义的。
```
  const router = new VueRouter({
    routes: [{
      path: '/index',
      component: index,
      beforeEnter(to, from, next) {},
      beforeLeave(to, from, next) {}
    }]
  });
```

（3）组件内的导航钩子主要有这三种：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。它们是直接在路由组
件内部直接进行定义的。
```
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不能获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
  }
}

  beforeRouteEnter 钩子 不能 访问 this，因为钩子在导航确认前被调用，因此即将登场的新组件还没被创建。
　不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
      })
    }

#### 应用场景

(1) 清除当前组件中的定时器

  当一个组件中有一个定时器时, 在路由进行切换的时候, 可使用beforeRouteLeave将定时器进行清楚, 以免占用内存:

  beforeRouteLeave (to, from, next) {
    window.clearInterval(this.timer) //清除定时器
    next()
  }

(2) 当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转

　　如果页面内有重要的信息需要用户保存后才能进行跳转, 或者有弹出框的情况. 应该阻止用户跳转

    beforeRouteLeave (to, from, next) {
    //判断是否弹出框的状态和保存信息与否
    if (this.dialogVisibility === true) {
      this.dialogVisibility = false //关闭弹出框
      next(false) //回到当前页面, 阻止页面跳转
    }else if(this.saveMessage === false) {
      //弹出警告
      next(false) //回到当前页面, 阻止页面跳转
    }else {
      next() //否则允许跳转
    }
    }

(3)保存相关内容到Vuex中或Session中,当用户需要关闭页面时, 可以将公用的信息保存到session或Vuex中.
  
  beforeRouteLeave (to, from, next) {
    localStorage.setItem(name, content); //保存到localStorage中
    next()
  }

#### 完整的导航解析流程 ?

  - 导航被触发。
  - 在失活的组件里调用 beforeRouteLeave 守卫。
  - 调用全局的 beforeEach 守卫。
  - 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
  - 在路由配置里调用 beforeEnter。
  - 解析异步路由组件。
  - 在被激活的组件里调用 beforeRouteEnter。
  - 调用全局的 beforeResolve 守卫 (2.5+)。
  - 导航被确认。
  - 调用全局的 afterEach 钩子。
  - 触发 DOM 更新。
  - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 20、Vue源码

https://space.bilibili.com/302417610/search/video?tid=0&page=1&keyword=%E6%BA%90%E7%A0%81&order=pubdate

#### 1) vue源码解析之指令和生命周期

new Vue()
_initData
_initWatch
complie()
#### 2) vue源码解析之AST抽象语法树

#### 3) vue源码解析之数据响应式原理

https://juejin.cn/post/6932659815424458760

##### 数据劫持
侵入式和非侵入式；

- Object.defineProperty(): 数据劫持/数据代理
let obj = {};
Object.defineProperty(obj, 'a', {
  // value: 3,
  // writable: false, //是否可写
  // emumable: false, //是否可以被枚举
  //configurable: true
  get(){
    console.log('访问a属性')
  },
  set(){
    console.log('改变a属性')
  },
})

- defineReactive
defineReactive.js

- 递归侦测对象全部属性
Observer： 将正常obj转化为每个层级都可以被侦测的
Observer.js

Observe.js

过程： Observe.js -> Observer.js/walk方法  -> defineProperty -> let childObj = Observe(val)
  继续Observe下一级

对数组进行响应式：
  改写数组的七个方法，这些方法在Array.prototype上；
  
##### 收集依赖与派发更新

用到数据的地方称为依赖；
在getter中收集依赖，在setter中触发依赖；

Dep类和Watcher类：
  把依赖收集的代码封装成一个Dep类，它专门用来管理依赖，每个Observer的实例，成员中都有一个Dep的实例；
  Watcher是一个中介，数据发生变化时通过Watcher中转，通知组件；

每个Watcher实例订阅一个或者多个数据，这些数据也被称为wacther的依赖；

过程：
  new Watcher(obj, 'a.b.c', (val)=>{
    console.log(val)
  })
  实例化一个Watcher类，传入要监测的对象和对象里的值和回调函数；
  Watcher类的constructor：
    constructor(target, expression, callback) {
      console.log('我是Watcher类的构造器');
      this.id = uid++;
      this.target = target;
      this.getter = parsePath(expression);
      this.callback = callback;
      this.value = this.get();
    } 
    实例化后调用get方法，进入依赖收集阶段；
  
  defineReactive方法中，get收集依赖，调用dep的depend()方法添加依赖；set方法通知更新，调用dep的notify方法；
#### 4) vue源码解析之虚拟DOM和Diff算法
snabbdom
虚拟DOM
h函数

1. 
  新虚拟DOM和老虚拟DOM进行diff(精细化比较)，算出应该如何最小量更新，最后反映到真实DOM上；
  h函数用来产生虚拟节点；
  虚拟节点的属性：
    children
    data  属性样式
    elm  真实的DOM节点，undefine表示该节点还没上树
    key
    sel  selector
    text

  const myvNode1 = h('a',
    props:{
      href:'www.baidu.com',
      target:'_blank',
    },
    '尚硅谷'
  )
  patch函数；让虚拟节点上树 
    patch(container, myvNode1)

2. h函数
  在这里引用了一个vnode函数，vnode函数返回 { sel, data, elm, text, children},
  在index.js文件中引用h函数传入想要生成的元素，h函数进行判断传入的格式，之后调用vnode函数，最后返回虚拟节点结构的元素；
  之后通过patch函数上树；

3. patch函数
  最小量更新 
  加key，key是这个虚拟节点的唯一标识；
  只有同一个虚拟节点（选择器和key相同），才进行虚拟化比较，否则就是暴力删除旧的创建新的；
  只会进行同层比较，不会进行跨层比较；

#### 5) vue源码解析之mustache模板引擎

#### 6）vue router 源码
### 21、$route 和 $router 的区别？
```
$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。

$router 是“路由实例”对象，包括了路由的跳转方法，钩子函数等。
```

### 22、 vue 常用的修饰符？

```
  .prevent: 提交事件不再重载页面；
  .stop: 阻止单击事件冒泡；
  .self: 当事件发生在该元素本身而不是子元素的时候会触发；
```

### 24、vue单页应用 SPA

vue 单页应用（spa）前端路由实现原理：
  - window.history：
      history.pushState
      history.replaceState
      popstate
  - location.hash
      window 对象中有一个事件是 onhashchange，以下几种情况都会触发这个事件：
        直接更改浏览器地址，在最后面增加或改变#hash；
        通过改变location.href或location.hash的值；
        通过触发点击带锚点的链接；
        浏览器前进后退可能导致hash的变化，前提是两个网页地址中的hash值不同；
  
vue router两种方式： hash history
