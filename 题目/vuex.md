### 定义

vuex:可以集中管理共享的数据；可以高效实现组件之间的数据共享；
存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

一般情况下，只有组件之间共享的数据，才有必要存储在vuex中；
组件中的私有数据，依旧存储在自身的data即可。

### 基本使用

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

