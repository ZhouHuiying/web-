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