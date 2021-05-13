### 定义

vue 框架中状态管理。在 main.js 引入 store，注入。新建了一个目录 store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

vuex:可以集中管理共享的数据；可以高效实现组件之间的数据共享；
存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

一般情况下，只有组件之间共享的数据，才有必要存储在vuex中；
组件中的私有数据，依旧存储在自身的data即可。

### 基本使用

```js
// 新建 store.js
import vue from 'vue'
import vuex form 'vuex'
vue.use(vuex)
export default new vuex.store({
	//...code
})

//main.js
import store from './store'
...
```

1）安装vuex

2）导入vuex包： import Vuex from 'vuex' Vue.use(Vuex)

3）创建store对象:
  const store = new Vuex.Store({
    //state中存放的就是全局共享的对象
    state:{
	    count:0
    }
  })

4）将store对象挂载到vue实例中
  new Vue({
    el:'#app',
    render: h => h(app),
    router,
    //将创建的共享数据对象挂载到Vue实例中
    //所有的组件就可以直接从store中获取全局的数据了
    store
  })

### 核心概念

vuex的主要核心概念如下：State Mutation Action Getter

#### State
State提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储

- 组件访问State中数据的第一种方式：
    this.$store.state.全局数据名称

- 组件访问State中数据的第二种方式：
   从vuex中按需导入mapState函数
    import {mapState} from 'vuex'
 通过刚才的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
    computed:{
      ...mapState(['count'])
    }

#### Mutation
Mutation用于变更Store中的数据。
只能通过Mutation变更Store数据，不可以直接操作Store数据，通过这种方式可以集中监控所有数据的变化。

- 组件触发Mutation中数据的第一种方式：
  this.$store.commit('add')

- 组件触发Mutation中数据的第二种方式：
 从vuex中按需导入mapMutation函数
    import {mapMutation} from 'vuex'
 通过刚才的mapMutation函数，将当前组件需要的mapMutation函数，映射为当前组件的methods方法
    computed:{
      ...mapMutation(['add', 'addN'])          ... ：展开运算符
    }

#### Action

- action 类似于 muation, 不同在于：action 提交的是 mutation,而不是直接变更状态
- action 可以包含任意异步操作

Action用于处理异步任务。

第一种方式:
如果通过异步操作变更数据，必须通过Action，不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据。
this.$store.dispatch("addNAsync",5)是触发actions的第一种方式

第二种方式：
从vuex中按需导入mapActions函数
    import {mapActions} from 'vuex'

通过刚才的mapActions函数，将当前组件需要的mapActions函数，映射为当前组件的methods方法
    computed:{
      ...mapActions(['addNAsync'])  ... ：展开运算符
    }
    
#### Getter
Getter用于对Store中的数据进行加工处理形成新的数据。

- getter 可以对 state 进行计算操作，它就是 store 的计算属性
- 虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用
- 如果一个状态只在一个组件内使用，是可以不用 getters

#### vuex 的 state 特性是什么

- vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data

- state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新
- 它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性


#### vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中

如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里

如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回

#### 不用 vuex 会带来什么问题

- 可维护性会下降，你要修改数据，你得维护 3 个地方
- 可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的
- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背

#### vuex 原理

vuex 仅仅是作为 vue 的一个插件而存在，不像 Redux,MobX 等库可以应用于所有框架，vuex 只能使用在 vue 上，很大的程度是因为其高度依赖于 vue 的 computed 依赖检测系统以及其插件系统，

vuex 整体思想诞生于 flux,可其的实现方式完完全全的使用了 vue 自身的响应式设计，依赖监听、依赖收集都属于 vue 对对象 Property set get 方法的代理劫持。最后一句话结束 vuex 工作原理，vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件；

#### 使用 Vuex 只需执行 Vue.use(Vuex)，并在 Vue 的配置中传入一个 store 对象的示例，store 是如何实现注入的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

Vue.use(Vuex) 方法执行的是 install 方法，它实现了 Vue 实例对象的 init 方法封装和注入，使传入的 store 对象被设置到 Vue 上下文环境的$store 中。因此在 Vue Component 任意地方都能够通过 this.$store 访问到该 store。

#### state 内部支持模块配置和模块嵌套，如何实现的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

在 store 构造方法中有 makeLocalContext 方法，所有 module 都会有一个 local context，根据配置时的 path 进行匹配。所以执行如 dispatch('submitOrder', payload)这类 action 时，默认的拿到都是 module 的 local state，如果要访问最外层或者是其他 module 的 state，只能从 rootState 按照 path 路径逐步进行访问。

#### 在执行 dispatch 触发 action(commit 同理)的时候，只需传入(type, payload)，action 执行函数中第一个参数 store 从哪里获取的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

store 初始化时，所有配置的 action 和 mutation 以及 getters 均被封装过。在执行如 dispatch('submitOrder', payload)的时候，actions 中 type 为 submitOrder 的所有处理方法都是被封装后的，其第一个参数为当前的 store 对象，所以能够获取到 { dispatch, commit, state, rootState } 等数据。

#### Vuex 如何区分 state 是外部直接修改，还是通过 mutation 方法修改的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

Vuex 中修改 state 的唯一渠道就是执行 commit('xx', payload) 方法，其底层通过执行 this.\_withCommit(fn) 设置\_committing 标志变量为 true，然后才能修改 state，修改完毕还需要还原\_committing 变量。外部修改虽然能够直接修改 state，但是并没有修改\_committing 标志位，所以只要 watch 一下 state，state change 时判断是否\_committing 值为 true，即可判断修改的合法性。

#### 调试时的"时空穿梭"功能是如何实现的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

devtoolPlugin 中提供了此功能。因为 dev 模式下所有的 state change 都会被记录下来，'时空穿梭' 功能其实就是将当前的 state 替换为记录中某个时刻的 state 状态，利用 store.replaceState(targetState) 方法将执行 this.\_vm.state = state 实现。

#### Vuex 为什么要分模块并且加命名空间

- 模块:由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
  为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

- 命名空间：默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
  如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
