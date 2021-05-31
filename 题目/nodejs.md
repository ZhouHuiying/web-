## Node.js 

### Node.js 组成及特点
组成：
  **ECMAScript**。ECMAScript 的所有语法在 Node 环境中都可以使用。
  **Node 环境**提供的一些**附加 API**(包括文件、网络等相关的 API)。
特点：
  异步、非阻塞式IO模型；
  事件循环；
  单线程：这里所谓的“单线程”，指的是 Node 的主线程只有一个。为了确保主线程不被阻塞，主线程是用于接收客户端请求。但不会处理具体的任务。而 Node 的背后还有一个线程池，线程池会处理长时间运行的任务（比如 IO 操作、网络操作）。线程池里的任务是通过队列和事件循环的机制来执行
  轻量和高效；

### 主要内容

- 常用内置模块

  - `path`：处理文件路径。

  - `fs`：操作（CRUD）文件系统。

  - `child_process`：新建子进程。

  - `util`：提供一系列实用小工具。

  - `http`：提供 HTTP 服务器功能。

  - `url`：用于解析 URL。

  - `querystring`：解析 URL 中的查询字符串。

  - `crypto`：提供加密和解密功能。


1、回调函数
回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

2、事件循环
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为 webserver 一直接受请求而不等待任何读写操作。（这也称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

3、EventEmitter
EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。

4、Buffer（缓冲区）
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

- Buffer 与字符编码
  ```
    const buf = Buffer.from('runoob', 'ascii');

    // 输出 72756e6f6f62
    console.log(buf.toString('hex'));

    // 输出 cnVub29i
    console.log(buf.toString('base64'));
  ```

- 创建 Buffer 类

  Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
  Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
  Buffer.allocUnsafeSlow(size)
  Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
  Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
  Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
  Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

- 写入缓冲区
  buf.write(string[, offset[, length]][, encoding]);

  buf = Buffer.alloc(256);
  len = buf.write("www.runoob.com");

  console.log("写入字节数 : "+  len);

- 从缓冲区读取数据
  buf.toString([encoding[, start[, end]]])

- 将 Buffer 转换为 JSON 对象
  buf.toJSON()

- 缓冲区合并
  Buffer.concat(list[, totalLength])

  var buffer1 = Buffer.from(('菜鸟教程'));
  var buffer2 = Buffer.from(('www.runoob.com'));
  var buffer3 = Buffer.concat([buffer1,buffer2]);
  console.log("buffer3 内容: " + buffer3.toString());

  -----

5、Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：
  Readable - 可读操作。
  Writable - 可写操作。
  Duplex - 可读可写操作.
  Transform - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
  data - 当有数据可读时触发。
  end - 没有更多的数据可读时触发。
  error - 在接收和写入过程中发生错误时触发。
  finish - 所有数据已被写入到底层系统时触发。

6、Node.js模块系统
- 引入模块：
  var hello = require('./hello');
  hello.world();

7、Node.js函数
- 匿名函数:
function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");

8、Node.js 路由
router.js
server1.js
index.js

9、全局对象
全局对象与全局变量

__filename
__dirname
setTimeout(cb, ms)
clearTimeout(t)
setInterval(cb, ms)
console
process

### Node.js 的应用

1、BFF 中间层

BFF，即 Backend For Frontend（服务于前端的后端）。
> BFF 模式下，整体分工很清晰，**后端通过 Java/C++ 等语言负责服务实现，理想情况下给前端提供的是基于领域模型的 RPC 接口，前端则在 BFF 层直接调用服务端 RPC 接口拿到数据**，按需加工消费数据，并实现人机交互。基于 BFF 模式的研发，很适合拥有前端技术背景的全栈型工程师。这种模式的好处很明显，后端可以专注于业务领域，更多从领域模型的视角去思考问题，页面视角的数据则交给前端型全栈工程师去搞定。**领域模型与页面数据是两种思维模式，通过 BFF 可以很好地解耦开，让彼此更专业高效**。

在 Web 服务里，搭建一个中间层，前端访问中间层的接口，中间层再访问后台的 Java/C++ 服务。这类服务的特点是不需要太强的服务器运算能力，但对程序的灵活性有较高的要求。这两个特点，正好和 Node.js 的优势相吻合。Node.js 非常适合用来做 BFF 层，优势如下：

-   对于前端来说：让前端**有能力自由组装后台数据**，这样可以减少大量的业务沟通成本，加快业务的迭代速度；并且，前端同学能够**自主决定**与后台的通讯方式。

-   对于后台和运维来说，好处是：安全性（不会把主服务器暴露在外面）、降低主服务器的复杂度等。

2、服务端渲染

**客户端渲染**（CSR / Client side render）：前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构和展示。优点是**前后端分离**、减小服务器压力、局部刷新。缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）、首屏渲染慢。

**服务端渲染**（SSR / Server Side Render）：服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可。也就是说，在服务器端直接就渲染好了，然后一次性打包返回给前端。优点是**有利于 SEO、首屏渲染很快**。

**总结： 搜索引擎优化 + 首屏速度优化 = 服务端渲染**。

备注：这里的「服务端渲染」只是让 Node.js 做中间层，不会替代后端。

3、做小型服务、小型网站的后端（基于 Express、Koa 框架）

现在很多公司的后台管理系统，都是用 Node.js 来开发接口，毕竟，后台管理系统对性能和并发的要求不是太高。有了 Node.js 之后，通过 JS 直接操作 DB，做增删改查，生成接口，极大降低了前端同学的学习门槛。

当然，有时候做 Node.js 开发，是因为：后台人力不够，所以把后台开发的一部分工作量，转移给前端同学。

4、做项目构建工具

前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的。

5、 做 PC 端的软件（基于 Electron 框架）

Electron 框架就是基于 Node.js 的。也可以说：Electron 是 Node.js 在PC客户端的技术。

### ES6模块与CommonJs 模块有什么区别?

- require: 输出的是一个值的浅拷贝对象，import输出的是一个值 的引用（即es6 module 只存只读，不能改变其值，具体点就是指针指向不能变，类似const）
- require是动态引入，import是静态加载了；动态引入的方式，引入的对象可以是一个变量，或者能通过计算出来的地址
- require是同步加载模块，import命令是异步加载，require有一个独立的模块依赖的解析阶段

### 模块化规范

#### AMD和CMD区别？（浏览器端规范）
  AMD: 异步, 依赖前置，提前执行（在模块定义的时候就要引入）;
    依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});   //也就是说把所有的包都 require 成功，再继续执行代码。
 
    define 定义模块：define([`require`,`foo`],function(){return});
 
  CMD: 异步, 依赖就近，延迟执行（用到的时候才引入）;
    依赖就近，延迟执行：require(./a) 直接引入。或者Require.async 异步引入。   //依赖就近：执行到这一部分的时候，再去加载对应的文件。

    define 定义模块， export 导出：define(function(require, export, module){});
