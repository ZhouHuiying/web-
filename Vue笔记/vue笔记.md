### VUE:

el:挂载点  建议使用ID选择器 可以使用其他标签 不要使用HTML
data:数据对象 

示例：
    <div id="app">     
        </div>

        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

        <script>
        var app = new Vue({
            el: '#app',  
            data: {
            },
            methods:{

            }
            })  
        </script>

### Vue指令：
    v-text:设置文本
    v-html:设置元素的innerHTML

    v-on:为元素绑定事件 @click  v-on:click=''  传递自定义参数，事件修饰符
        v-on缩写：
            <a v-on:click="doSomething">...</a>
            <a @click="doSomething">...</a>
            <a @[event]="doSomething"> ... </a>

    v-show:根据表达式的真假，切换元素的显示和隐藏 频繁操作的时候用
    v-if:根据表达式的真假，切换元素的显示状态(操纵dom元素)  表达式的值为真存在于dom树中

    v-bind:设置元素的属性( class title src),都写在元素的内部  v-bind:属性名=表达式；
        v-bind缩写：
            <a v-bind:href="url">...</a>  
            <a :href="url">...</a>
            <a :[key]="url"> ... </a>

    v-for:根据数据生成列表结构；

    v-model:获取和设置表单元素的值，双向数据绑定；
    

### 官网笔记：
    https://cn.vuejs.org/v2/api/

#### 模板语法：
    计算属性，

    class与style绑定：
        绑定HTML Class：通过v-bind绑定 可以用在对象和数组上
        绑定内联样式： 通过v-bind:style 绑定 可以用在对象和数组上

    条件渲染： 条件性地渲染一块内容
        v-if
        v-else
        v-else-if
        v-show

    列表渲染：
        v-for

    监听事件：
        v-on
            事件处理方法
            事件修饰符：例如 <a v-on:click.stop="doThis"></a>
            按键修饰符：例如 <input v-on:keyup.enter="submit">  按键码
            系统修饰符：.ctrl .alt .shift .meta
        
                <!-- 阻止单击事件冒泡 -->
                <a v-on:click.stop="doThis"></a>
                <!-- 提交事件不再重载页面 -->
                <form v-on:submit.prevent="onSubmit"></form>
                <!-- 修饰符可以串联  -->
                <a v-on:click.stop.prevent="doThat"></a>
                <!-- 只有修饰符 -->
                <form v-on:submit.prevent></form>
                <!-- 添加事件侦听器时使用事件捕获模式 -->
                <div v-on:click.capture="doThis">...</div>
                <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
                <div v-on:click.self="doThat">...</div>

                <!-- click 事件只能点击一次，2.1.4版本新增 -->
                <a v-on:click.once="doThis"></a>
                
    表单输入绑定：
        v-model:在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
        
    v-loading加载:  https://www.jianshu.com/p/b0bd0d7db3cb
        //全局loading
        <template>
            <div v-loading="loading"> </div>
        </template>
    
        在data 中定义初始化， loading: false，同时在mounted()中将 this.loading设置为true,再去请求接口
        在接口的回调函数中，将 this.loading 设为false，到达效果。
    
### 组件注册： 
    组件注册的两种方式：全局注册（全局注册的组件都可以用）、局部注册（使用的时候需要引用）
        全局注册: 
            全局注册通过Vue.component方法，第一个参数为组件的名称，第二个参数为传入的配置项;
            Vue.component('my-component-name', { /* ... */ })
        局部注册：
            局部注册只需在用到的地方通过components属性注册一个组件;
    组件名：在DOM中都使用短横线；my-component-name
            
    prop的大小写：
        HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：
        在html中，传参数使用小写  :report-json=""
        可以传递静态或者动态的参数 可以传递很多类型 

        单向数据流：所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

### 组件传值：

    父向子传值：v-bind 属性绑定；
    子向父传值：v-on 事件绑定；
    兄弟组件共享数据：EventBus  emit/on

    
    父组件 -> 子组件： props
        单向数据流：所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

    子组件 -> 父组件： emit

### 插槽：<submit-button>
<button type="submit">
  <slot>Submit</slot>  //submit是默认内容
</button>
    
### provide/inject
    通常，当我们需要从父组件向子组件传递数据时，我们使用 props。想象一下这样的结构：有一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 prop 沿着组件链逐级传递下去，可能会很麻烦。
    对于这种情况，我们可以使用一对 provide 和 inject。无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。这个特性有两个部分：父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据。
    
### Vue.set
    https://www.jianshu.com/p/e6e8c45e7fd6
    如果在实例创建之后添加新的属性到实例上，它不会触发视图更新，用set
    Vue.set( target, key, value)
        target：要更改的数据源(可以是对象或者数组)
        key：要更改的具体数据
        value ：重新赋的值
    
    eg. set(list, "flag", !flag)


### Vue3
    ref: ref将给定的值创建一个响应式的数据对象并赋值初始值（int或者string）;
    reactive: reactive可以直接定义复杂响应式对象;

    使用 setup 函数时，它将接受两个参数：props, context;

    任何包含响应式数据的复杂逻辑，应该使用计算属性。

    侦听器:watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。






