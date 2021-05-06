### js 基本数据类型:
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

#### 0.1 + 0.2 === 0.3 嘛？为什么？
不等于，在两数相加时，会先转换成二进制，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS 引擎对二进制进行截断，所以造成精度丢失。
精度丢失可能出现在进制转换和对阶运算中；

#### NaN 是什么，用 typeof 会输出什么?
Not a Number，表示非数字，typeof NaN === 'number'

#### JS 整数是怎么表示的
通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52），最大安全数字是 Math.pow(2, 53) - 1；
Number() 的存储空间：Math.pow(2, 53) ，53 为有效数字；如果后台发送一个超过自己最大的数字，会发生截断等于JS 能支持的最大数字；

#### null 和 undefined 区别
  undefined：是所有没有赋值变量的默认值，自动赋值;

  null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址,当使用完一个比较大的对象时，需要对其进行释放内存时，设置为null。
  共同点：都是原始类型，变量保存在栈中；
  不同点：undefined——表示变量声明过但并未赋过值。它是所有未赋值变量默认值。
          null表示一个变量将来可能指向一个对象。一般用于主动释放指向对象的引用。

### var let const区别

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
  const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

### typeof 和 instanceof

#### typeof 和 instanceof 区别

js是一个弱类型的语言，所以一般想知道当前变量是哪一种类型必须判断类型，都知道判断类型的两种方式：typeof、 instanceof
它们各有缺点：
  typeof适用于基础数据类型判断，引用类型判断都是object。 
  instanceof的用途是判断一个对象是否在某个对象原型链上。或者说判断一个对象是某个对象的实例。    
    a instanceof b：判断a是否为b的实例，可以用于继承关系中。

#### instanceof 的原理和弊端
  https://blog.csdn.net/lunahaijiao/article/details/84974355

### JavaScript中事件循环的理解 Event Loop

#### JS同步和异步 事件循环的定义
  同步：前一个任务结束后再执行后一个任务，程序的执行顺序和任务的排列顺序是一致的、同步的。
  异步：一件事情要花很长时间，在做这件事的同时，还可以去处理其他事情。
  
  同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行，形成一个执行栈；
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
微任务：
  一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。
常见的微任务：
  Promise.then
  MutaionObserver
  process.nextTick
宏任务：
  宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合
常见的宏任务： 
  script(外层同步代码)
  setTimeout/setInterval
  UI rendering/UI事件
  postMessage、MessageChannel
  setImmediate、I/O（Node.js）
宏任务微任务执行过程：
  执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完。

#### async与await
async:异步，await:等待
async就是用来声明一个异步方法，而 await是用来等待异步方法执行；
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

一个例子：(/image/事件循环例子.png)

### 异步编程的实现方式
回调函数 - promise - generator(生成器) - async

#### 回调函数：
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

#### 事件监听（采用时间驱动模式，取决于某个事件是否发生）：
  优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
  缺点：事件驱动型，流程不够清晰

#### 发布/订阅（观察者模式）
  类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者

#### Promise 对象  
  (https://www.runoob.com/w3cnote/javascript-promise-object.html) 
  C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\05-JavaScript之ES6语法\10-Promise入门详解.md
  
  Promise对象特点： 
    1）对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：pending-初始状态；fulfilled-操作成功完成；rejected-操作失败；只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
    2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
  创建Promise:
    var promise = new Promise(function(resolve, reject) {
      // 异步处理
      // 处理结束后、调用resolve 或 reject
    });
  优点：可以利用 then 方法，进行链式写法；(可以把原本的多层嵌套调用改进为链式调用**)可以书写错误时的回调函数；可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。
  缺点：编写和理解，相对比较难

#### Generator 函数:
  generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
  eg.
    function* fib(max) {
      var
          t,
          a = 0,
          b = 1,
          n = 0;
      while (n < max) {
          yield a;
          [a, b] = [b, a + b];
          n ++;
      }
      return;
    }
  优点：函数体内外的数据交换、错误处理机制
  缺点：流程管理不方便

#### async 函数
  async 函数，使得异步操作变得更加方便。
  async是 Generator 函数的语法糖.async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await。
  async函数对Generator函数的改进(优点)：
    内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰。
    (1)Generator函数函数的执行必须靠执行器，async函数自带执行器
    (2)更好的语义
    (3)更广的适用性:co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
    (4)async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便.
  缺点：错误处理机制

  用法：async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

回答：
js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

### 类型转换
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

### es6新特性

- set map
- async await
- 箭头函数
- 模板字符串

#### set:
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

#### map:
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

#### 模板字符串
模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

### 函数

#### 构造函数是什么
  构造函数：是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。

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

#### 函数中的arguments是数组吗？类数组转数组的方法了解一下？
在javascript中所有的函数内部都包含了一个隐藏的变量叫arguments;它存放着所有传递到这个函数中的参数；
```javascript
  (function fn(){
  console.log(arguments)
  })(1,2,3,4)    //[1,2,3,4]
```
类数组转化为数组的方法：
  - 扩展运算符: ... 运算符 
      var args = [ ...arguments]; 
      要注意是否是 iterable object;

  - Array.from:
      Array.from()是ES6中新增的方法，可以将两类对象转为真正的数组：类数组对象和可遍历（iterable）对象（包括ES6新增的数据结构Set和Map）;
      var arrayLike = {
        '0':'a',
        '1':'b',
        '2':'c',
        length:3
      };
      var arr = Array.from(arrayLike);//['a','b','c'];

  - Array.prototype.slice.call(arrayLike)

#### 变量提升
  函数在运行的时候，会首先创建执行上下文，然后将执行上下文入栈，然后当此执行上下文处于栈顶时，开始运行执行上下文。
  在创建执行上下文的过程中会做三件事：
    创建变量对象，
    创建作用域链，
    确定 this 指向，
  其中创建变量对象的过程中，首先会为 arguments 创建一个属性，值为 arguments，然后会扫码 function 函数声明，创建一个同名属性，值为函数的引用，接着会扫码 var 变量声明，创建一个同名属性，值为 undefined，这就是变量提升。

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

### prototype 是啥，什么是原型，什么是实例原型，说说你的理解
(C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\04-JavaScript基础\26-对象的创建&构造函数.md)
(C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\04-JavaScript基础\原型对象.md)
创建自定义对象的几种方法：
  对象字面量：{}
  工厂模式：new Object();
  构造函数；

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

### 闭包
#### 含义
闭包是指有权访问另外一个函数作用域中的变量的函数；
JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。
  编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。
  执行阶段由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。

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

### 对象
#### js创建对象的几种方式
我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js
和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象
创建方式，我了解到的方式有这么几种：

（1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

（2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。
  构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

（3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。


### js继承
ES5 继承和 ES6 继承的区别、ES6 中的继承有什么好处、js 为什么不支持多继承

#### js继承的方式
(https://segmentfault.com/a/1190000008754962)
（1）第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。
    原型链继承：
       一个对象可以使用另外一个对象的属性或者方法，就称之为继承。具体是通过将这个对象的原型设置为另外一个对象，这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使用另外一个对象的属性和方法了

（2）第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。 —call()方法；

（3）第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

#### call() apply() bind()
  允许一个对象调用另一个对象的方法；
  apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
  apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
  apply 、 call 、bind 三者都可以利用后续参数传参；
  bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。

### 深拷贝和浅拷贝

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

### Symbol
#### 含义
ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值；
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
let s = Symbol();
Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象;
Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
Symbol 值不能与其他类型的值进行运算，会报错。

#### Symbol.prototype.description
创建 Symbol 的时候，可以添加一个描述。
  const sym = Symbol('foo');
  sym.description // "foo"

#### 作为属性名的 Symbol
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

#### 属性名的遍历
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
#### Symbol.for()，Symbol.keyFor()
有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');
  s1 === s2 // true

Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。

#### 用处！
- 可以用来表示一个独一无二的变量防止命名冲突；
- 利用 symbol 不会被常规的方法（除了 Object.getOwnPropertySymbols 外）遍历到，所以可以用来模拟私有变量；
- 主要用来提供遍历接口，布置了 symbol.iterator 的对象才可以使用 for···of 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕；


### DOM事件流
<!-- C:\Users\CY888\Desktop\笔记\Web 前端知识点 总\04-JavaScript基础\46-事件的传播和事件冒泡.md -->
#### 三个阶段
事件传播的三个阶段是：事件捕获阶段、处于目标阶段、事件冒泡阶段。 
首先发生的事件捕获，为截获事件提供机会。然后是事件的目标接受事件。最后一个阶段是事件冒泡阶段，可以在这个阶段对事件做出响应。 虽然捕获阶段在规范中规定不允许响应事件，但是实际上还是会执行，所以有两次机会获取到目标对象。

#### 事件捕获
addEventListener可以捕获事件：
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

### 跨域 

#### 同源
  同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同。

#### 跨域
  跨域本质是`浏览器`基于同源策略的一种安全手段；同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能；

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

解决跨域的方法我们可以根据我们想要实现的目的来划分。

##### 
首先我们如果只是想要实现主域名下的不同子域名的跨域操作，我们可以使用设置 document.domain 来解决。

（1）将 document.domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的 cookie 就能够被子域名所访问。同时如果文档中含有主域名相同，子域名不同的 iframe 的话，我们也可以对这个 iframe 进行操作。

- 如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进行通信的问题，我们可以使用 location.hash 或者 window.name 或者 postMessage 来解决。

（2）使用 location.hash 的方法，我们可以在主页面动态的修改 iframe 窗口的 hash 值，然后在 iframe 窗口里实现监听函数来实现这样一个单向的通信。因为在 iframe 是没有办法访问到不同源的父级窗口的，所以我们不能直接修改父级窗口的 hash 值来实现通信，我们可以在 iframe 中再加入一个 iframe ，这个 iframe 的内容是和父级页面同源的，所以我们可以 window.parent.parent 来修改最顶级页面的 src，以此来实现双向通信。

（3）使用 window.name 的方法，主要是基于同一个窗口中设置了 window.name 后不同源的页面也可以访问，所以不同源的子页面可以首先在 window.name 中写入数据，然后跳转到一个和父级同源的页面。这个时候级页面就可以访问同源的子页面中 window.name 中的数据了，这种方式的好处是可以传输的数据量大。

（4）使用 postMessage 来解决的方法，这是一个 h5 中新增的一个 api。通过它我们可以实现多窗口间的信息传递，通过获取到指定窗口的引用，然后调用 postMessage 来发送信息，在窗口中我们通过对 message 信息的监听来接收信息，以此来实现不同源间的信息交换。

##### 
- 如果是像解决 ajax 无法提交跨域请求的问题，我们可以使用 jsonp、cors、websocket 协议、服务器代理来解决问题。

（5）使用 **jsonp** 来实现跨域请求，它的主要原理是通过动态构建 script  标签来实现跨域请求，因为浏览器对 script 标签的引入没有跨域的访问限制 。通过在请求的 url 后指定一个回调函数，然后服务器在返回数据的时候，构建一个 json 数据的包装，这个包装就是回调函数，然后返回给前端，前端接收到数据后，因为请求的是脚本文件，所以会直接执行，这样我们先前定义好的回调函数就可以被调用，从而实现了跨域请求的处理。这种方式只能用于 get 请求。

**JSONP的原理**：通过`<script>`标签的异步加载来实现的。比如说，实际开发中，我们发现，head标签里，可以通过`<script>`标签的src，里面放url，加载很多在线的插件。这就是用到了JSONP。


 具体实现过程：
  - 先在客户端定义一个回调方法，预定义对数据的操作
  - 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的api接口；
  - 服务器api接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
  - 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了

```html
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

（6）使用 **CORS** 的方式，CORS 是一个 W3C 标准，全称是"跨域资源共享"。CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，因此我们只需要在服务器端配置就行。
浏览器将 CORS 请求分成两类：简单请求和非简单请求。对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是会在头信息之中，增加一个 Origin 字段。Origin 字段用来说明本次请求来自哪个源。服务器根据这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段，就知道出错了，从而抛出一个错误，ajax 不会收到响应信息。如果成功的话会包含一些以 Access-Control- 开头的字段。

非简单请求，浏览器会先发出一次预检请求，来判断该域名是否在服务器的白名单中，如果收到肯定回复后才会发起请求。

CORS 可以理解成是**既可以同步、也可以异步**的Ajax。

（7）使用 **websocket** 协议，这个协议没有同源限制。

WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。

（8）使用服务器来代理跨域的访问请求，就是有跨域的请求操作时发送请求给后端，让后端代为请求，然后最后将获取的结果发返回。

（9）postMessage()方法
H5中新增的postMessage()方法，可以用来做跨域通信。既然是H5中新增的，那就一定要提到。

### 防抖和节流

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


### defer和async的区别
- defer：中文意思是延迟。用途是表示脚本会被延迟到整个页面都解析完毕后再运行。因此，在 < script>元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。
HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行,但执行脚本之间存在依赖，需要有执行的先后顺序时，就可以使用defer,延迟执行。

- async：中文意思是异步，这个属性与defer类似，都用于改变处理脚本的行为。同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。
但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。
指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容,这使用于之间互不依赖的各脚本。
