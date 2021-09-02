### NextTick是什么
  定义：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM；
  可以理解为：Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新；

### 为什么要有nextTick()
  eg.
    {{num}}
    for(let i=0; i<100000; i++){
        num = i
    }
  如果没有 nextTick 更新机制，那么 num 每次更新值都会触发视图更新(上面这段代码也就是会更新10万次视图)，有了nextTick机制，只需要更新一次，所以nextTick本质是一种优化策略。

### 使用场景

  我们了解到数据的变化到 DOM 的重新渲染是一个异步过程，发生在下一个 tick。当我们在实际开发中，比如从服务端接口去获取数据的时候，数据做了修改，如果我们的某些方法去依赖了数据修改后的 DOM 变化，我们就必须在 nextTick 后执行。

  如果想要在修改数据后立刻得到更新后的DOM结构，可以使用Vue.nextTick()；

  eg.
    // 修改数据
    vm.message = '修改后的值'
    // DOM 还没有更新
    console.log(vm.$el.textContent) // 原始的值
    Vue.nextTick(function () {
      // DOM 更新了
      console.log(vm.$el.textContent) // 修改后的值
    })
  
  nextTick() 两个参数: 第一个参数为回调函数，可以获取最近的DOM结构；
                      第二个参数为执行函数上下文；

### 原理
  1.把回调函数放入callbacks等待执行
  2.将执行函数放到微任务或者宏任务中
  3.事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调


### eg.
```javascript
<template>
  <div id="example">{{message}}</div>
</template>

<script>
  var vm = new Vue({
    el: '#example',
    data: {
      message: '123'
    }
  })
  vm.message = 'new message' // 更改数据
  console.log(vm.$el.innerHTML) // '123'
  Vue.nextTick(function () {
    console.log(vm.$el.innerHTML) // 'new message'
  })
</script>
```
在上面例子中，当我们更新了message的数据后，立即获取vm.$el.innerHTML，发现此时获取到的还是更新之前的数据：123。但是当我们使用nextTick来获取vm.$el.innerHTML时，此时就可以获取到更新后的数据了。这是为什么呢？

这里就涉及到Vue中对DOM的更新策略了，Vue 在更新 DOM 时是异步执行的。
  只要侦听到数据变化，Vue 将开启一个事件队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到事件队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新事件队列并执行实际 (已去重的) 工作。

事件循环：
  第一个 tick（图例中第一个步骤，即'本次更新循环'）：
    首先修改数据，这是同步任务。同一事件循环的所有的同步任务都在主线程上执行，形成一个执行栈，此时还未涉及 DOM 。
    Vue 开启一个异步队列，并缓冲在此事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。
  第二个 tick（图例中第二个步骤，即'下次更新循环'）：
    同步任务执行完毕，开始执行异步 watcher 队列的任务，更新 DOM 。Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel 方法，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。
  第三个 tick：
    此时就是文档所说的，下次 DOM 更新循环结束之后；

### 源码

http://www.bubuko.com/infodetail-3219154.html

nextTick源码主要分为两块：
  能力检测；
  根据能力检测以不同方式执行回调队列；

#### 能力检测

Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
宏任务耗费的时间是大于微任务的，所以在浏览器支持的情况下，优先使用微任务。如果浏览器不支持微任务，使用宏任务；但是，各种宏任务之间也有效率的不同，需要根据浏览器的支持情况，使用不同的宏任务。

宏任务：macro task
微任务：micro task

``` javascript
  let microTimerFunc
  let macroTimerFunc
  let useMacroTask = false

  /* 对于宏任务(macro task) */
  // 检测是否支持原生 setImmediate(高版本 IE 和 Edge 支持)
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = () => {
      setImmediate(flushCallbacks)
    }
  } 
  // 检测是否支持原生的 MessageChannel
  else if (typeof MessageChannel !== 'undefined' && (
    isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]'
  )) {
    const channel = new MessageChannel()
    const port = channel.port2
    channel.port1.onmessage = flushCallbacks
    macroTimerFunc = () => {
      port.postMessage(1)
    }
  } 
  // 都不支持的情况下，使用setTimeout
  else {
    macroTimerFunc = () => {
      setTimeout(flushCallbacks, 0)
    }
  }

  /* 对于微任务(micro task) */
  // 检测浏览器是否原生支持 Promise
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    const p = Promise.resolve()
    microTimerFunc = () => {
      p.then(flushCallbacks)
    }
  } 
  // 不支持的话直接指向 macro task 的实现。
  else {
    // fallback to macro
    microTimerFunc = macroTimerFunc
  }
```

解释：首先声明了两个变量： microTimerFunc 和 macroTimerFunc ，它们分别对应的是 micro task 的函数和 macro task 的函数。
对于 macro task 的实现，优先检测是否支持原生 setImmediate，这是一个高版本 IE 和Edge 才支持的特性，不支持的话再去检测是否支持原生的 MessageChannel，如果也不支持的话就会降级为 setTimeout 0；而对于 micro task 的实现，则检测浏览器是否原生支持 Promise，不支持的话直接指向 macro task 的实现。
 
- setImmediate

- MessageChannel

#### 执行回调队列

核心函数nextTick:

```javascript

const callbacks = []   // 回调队列
let pending = false    // 异步锁

// 执行队列中的每一个回调
function flushCallbacks () {
  pending = false     // 重置异步锁
  // 防止出现nextTick中包含nextTick时出现问题，在执行回调函数队列前，提前复制备份并清空回调函数队列
  const copies = callbacks.slice(0)
  callbacks.length = 0
  // 执行回调函数队列
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  // 将回调函数推入回调队列
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  // 如果异步锁未锁上，锁上异步锁，调用异步函数，准备等同步函数执行完后，就开始执行回调函数队列
  if (!pending) {
    pending = true
    if (useMacroTask) {
      macroTimerFunc()
    } else {
      microTimerFunc()
    }
  }
  // 如果没有提供回调，并且支持Promise，返回一个Promise
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

首先，先来看 nextTick函数，该函数的主要逻辑是：先把传入的回调函数 cb 推入 回调队列callbacks 数组，同时在接收第一个回调函数时，执行能力检测中对应的异步方法（异步方法中调用了回调函数队列）。最后一次性地根据 useMacroTask 条件执行 macroTimerFunc 或者是 microTimerFunc，而它们都会在下一个 tick 执行 flushCallbacks，flushCallbacks 的逻辑非常简单，对 callbacks 遍历，然后执行相应的回调函数。

- 问题：

1. 如何保证只在接收第一个回调函数时执行异步方法？
  nextTick源码中使用了一个异步锁的概念，即接收第一个回调函数时，先关上锁，执行异步方法。此时，浏览器处于等待执行完同步代码就执行异步代码的情况。

2. 执行 flushCallbacks 函数时为什么需要备份回调函数队列？执行的也是备份的回调函数队列？
  因为，会出现这么一种情况：nextTick 的回调函数中还使用 nextTick。如果 flushCallbacks 不做特殊处理，直接循环执行回调函数，会导致里面nextTick 中的回调函数会进入回调队列。
