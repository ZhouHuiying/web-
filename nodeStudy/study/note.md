## 1、回调函数
回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

## 2、事件循环
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为 webserver 一直接受请求而不等待任何读写操作。（这也称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

## 3、EventEmitter
EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。

## 4、Buffer（缓冲区）
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

### Buffer 与字符编码
  ```
    const buf = Buffer.from('runoob', 'ascii');

    // 输出 72756e6f6f62
    console.log(buf.toString('hex'));

    // 输出 cnVub29i
    console.log(buf.toString('base64'));
  ```

### 创建 Buffer 类

  Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
  Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
  Buffer.allocUnsafeSlow(size)
  Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
  Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
  Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
  Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

### 写入缓冲区
  buf.write(string[, offset[, length]][, encoding]);

  buf = Buffer.alloc(256);
  len = buf.write("www.runoob.com");

  console.log("写入字节数 : "+  len);

### 从缓冲区读取数据
  buf.toString([encoding[, start[, end]]])

### 将 Buffer 转换为 JSON 对象
  buf.toJSON()

### 缓冲区合并
  Buffer.concat(list[, totalLength])

  var buffer1 = Buffer.from(('菜鸟教程'));
  var buffer2 = Buffer.from(('www.runoob.com'));
  var buffer3 = Buffer.concat([buffer1,buffer2]);
  console.log("buffer3 内容: " + buffer3.toString());

  -----

## 5、Stream(流)
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

## 6、Node.js模块系统
- 引入模块：
  var hello = require('./hello');
  hello.world();

## 7、Node.js函数
- 匿名函数:
function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");

## 8、Node.js 路由
router.js
server1.js
index.js

## 9、全局对象
全局对象与全局变量

__filename
__dirname
setTimeout(cb, ms)
clearTimeout(t)
setInterval(cb, ms)
console
process