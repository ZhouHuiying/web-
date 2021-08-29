### 主要内容
    jsx基本语法
    两种组件：函数组件，类式组件
    组件三大属性：state props ref
    非受控组件 受控组件
    高阶函数
    新旧生命周期
    react脚手架
    react路由
    redux
    react-redux

### 扩展
    setState    
    lazyLoad
    stateHook
    EffectHook
    RefHook
    Fragment
    Context
    PureComponent
    renderProps
    ErrorBoundary

### 1. react受控组件和非受控组件的区别

- 受控组件：值受到react控制的表单元素
    HTML中的表单元素是可输入的，也就是有自己的可变状态；
    而React中可变状态通常保存在state中，并且只能通过setState() 方法来修改；
    React讲state与表单元素值value绑定在一起，有state的值来控制表单元素的值；
    
    !! 受控组件是必须要有value的，value用来传入一个参数，结合onchang来控制这个参数输出。每当value变化的时候，都会调用onchange的方法，事件处理器拿到新的值之后就会重新渲染视图，更新表单。

    eg.
    ```javascript
    class App extends React.Component {
        constructor(){
            super()
            this.inputChange = this.inputChange.bind(this)
        }
        state = {
            txt : ''
        }
        inputChange(e){
            this.setState({
                txt: e.target.value
            })
        }
        render(){
            console.log(this.state);
            return (
                <div>
                    {/* 把state的值设置给输入框的value，绑定change事件，这样用户在输入内容的时候调用相应函数，在函数里面把当前设置的值赋值给state，从而达到数据的统一 */}
                    <input type="text" value={this.state.txt} onChange={this.inputChange}/>
                </div>
            )
        }
    }
    ReactDOM.render(<App />,document.getElementById('root'))

    ```

- 非受控组件：表单组件没有value prop就可以称为非受控组件
    调用 React.createRef() 方法创建ref对象
    将创建好的 ref 对象添加到文本框中
    通过ref对象获取到文本框的值

    非受控组件即不受状态的控制，获取数据就是相当于操作DOM。一般没有value，我们就可以认为这个组件是非受控组件，但是我们可以通过defaultValue来给初始值。

    eg.
    ```javascript
    class App extends React.Component {
        constructor(){
            super()
            //创建 ref
            this.txtRef = React.createRef()
        }
        // 获取文本框的值
        getTxt =() => {
            console.log(this.txtRef.current.value)
        }
        render(){
            return (
            <div>
                <input type ="text" ref={this.txtRef} />
                <button onClick ={this.getTxt}>获取值</button>
            </div>
            )
        }
    }

    ```

- constructor
    class ColorPoint extends Point {
    }

    // 等同于 
    class ColorPoint extends Point {
        constructor(...args) {
            super(...args);
        }
    }
    // 可见没有写constructor，在执行过程中会自动补上

    ES6的继承机制，实质是先创建父类的实例对象this，所以必须调用super方法，然后再用子类的构造函数修改this;
    如果子类没有添加constructor方法，这个方法会被默认添加；
    
### 2. 组件实例属性 

#### ref

- 字符串形式的ref
    <input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>

- 回调函数形式的ref
	<input ref={c => this.input1 = c } type="text" placeholder="点击按钮提示数据"/>;

- createRef
    创建ref：myRef = React.createRef();
    <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;

#### props

#### state

### 3. Hook

#### State Hook: React.useState()

    (1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
    (2). 语法: const [xxx, setXxx] = React.useState(initValue)  
    (3). useState()说明:
            参数: 第一次初始化指定的值在内部作缓存
            返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
    (4). setXxx()2种写法:
            setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
            setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

#### Effect Hook: React.useEffect()

    (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
    (2). React中的副作用操作:
            发ajax请求数据获取
            设置订阅 / 启动定时器
            手动更改真实DOM
    (3). 语法和说明: 
            useEffect(() => { 
                // 在此可以执行任何带副作用操作
                return () => { // 在组件卸载前执行
                    // 在此做一些收尾工作, 比如清除定时器/取消订阅等
            }
            }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
        
    (4). 可以把 useEffect Hook 看做如下三个函数的组合
            componentDidMount()
            componentDidUpdate()
            componentWillUnmount() 
#### Ref Hook: React.useRef()

    (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
    (2). 语法: const refContainer = useRef()
    (3). 作用:保存标签对象,功能与React.createRef()一样

#### useContext

useContext可以帮助我们跨越组件层级直接传递变量，实现共享。

eg.
    import React, { useState , createContext } from 'react';
    const CountContext = createContext()
    function Example(){
        const [ count , setCount ] = useState(0);
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>{setCount(count+1)}}>click me</button>
        
                <CountContext.Provider value={count}>
                </CountContext.Provider>

            </div>
        )
    }

    useContext 接收上下文变量:
    function Counter(){
        const count = useContext(CountContext)    //一句话就可以得到count
        return (<h2>{count}</h2>)
    }
#### useMemo useCallback

https://blog.csdn.net/sinat_17775997/article/details/94453167

useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。
解决自组件更新，而父组件不需要更新的问题；
#### 总结
useEffect、useMemo、useCallback都是自带闭包的。也就是说，每一次组件的渲染，其都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。对于这种情况，我们应该使用ref来访问。

### 4. React 生命周期

旧：
    1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
        1.	constructor()
        2.	componentWillMount()
        3.	render()
        4.	componentDidMount() =====> 常用： 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
	
    2. 更新阶段: 由组件内部this.setSate()或父组件render触发
        1.	shouldComponentUpdate()
        2.	componentWillUpdate()
        3.	render() =====> 必须使用的一个
        4.	componentDidUpdate()
	
    3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
        1.	componentWillUnmount()  =====> 常用: 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

新：

    1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
        1.	constructor()
        2.	getDerivedStateFromProps
            若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps 
        3.	render()
        4.	componentDidMount() =====> 常用： 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
    
    2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
        1.	getDerivedStateFromProps
        2.	shouldComponentUpdate()
        3.	render()
        4.	getSnapshotBeforeUpdate  //在更新之前获取快照
        5.	componentDidUpdate()

    3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
        componentWillUnmount()  =====> 常用，一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 5. React 路由

react-router-dom  /  react-router
它们之间的不同之处就是react-router-dom比react-router多出了 <Link> <BrowserRouter> 这样的组件；

react-router最主要的API是给我们提供的一些组件：

    BrowserRouter或HashRouter：
        Router我们可以把它看做是react路由的一个路由外层盒子，它里面的内容就是我们单页面应用的路由以及路由组件。
        
        Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件；
        BrowserRouter使用history模式；
        HashRouter使用hash模式；

    Link和NavLink：
        Link是react路由中的点击切换到哪一个组件的链接；

        通常路径的跳转是使用Link组件，最终会被渲染成a元素；
        NavLink是在Link基础上增加了一些样式属性；
        to属性：Link中最重要的属性，用于设置跳转到的路径；

    Route：
        Route代表了你的路由界面，path代表路径，component代表路径所对应的界面。
        
        Route用于路径的匹配；
        path属性：用于设置匹配到的路径；
        component属性：设置匹配到路径后，渲染的组件；
        exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；

路由传递参数有三种方式：
    动态路由的方式；
        <NavLink to="/detail/abc123">详情</NavLink>
        <Route path="/detail/:id" component={detail} />
    search传递参数；
        <NavLink to="/detail2?name=boge&age=20">详情2</NavLink>
    Link中to传入对象；
        <NavLink to={{ pathname: "/detail2", search:"?name=abc", state: id }}>详情3</NavLink>
### 6. React组件传值

1. 
    父传子： props
    子传父： 通过在父组件引入的子组件中传递一个函数并传参，子组件去触发这个函数更改参数完成数据更新

2. 插件 PubSub
    PubSub.publish('username', val) 发布
    pubsub.subscribe('username', (msg, data)) data是要获取的数据

3. redux或者react-redux

4. 通过上下文的形式做组件传值 context
Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
context api给出三个概念：React.createContext()、Provider、Consumer；
eg.
```javascript
    import React, { Component } from 'react'
    import './index.css'

    //创建Context对象
    const MyContext = React.createContext()
    const {Provider,Consumer} = MyContext
    export default class A extends Component {

        state = {username:'tom',age:18}

        render() {
            const {username,age} = this.state
            return (
                <div className="parent">
                    <h3>我是A组件</h3>
                    <h4>我的用户名是:{username}</h4>
                    <Provider value={{username,age}}>
                        <B/>
                    </Provider>
                </div>
            )
        }
    }

    class B extends Component {
        render() {
            return (
                <div className="child">
                    <h3>我是B组件</h3>
                    <C/>
                </div>
            )
        }
    }

    /* class C extends Component {
        //声明接收context
        static contextType = MyContext
        render() {
            const {username,age} = this.context
            return (
                <div className="grand">
                    <h3>我是C组件</h3>
                    <h4>我从A组件接收到的用户名:{username},年龄是{age}</h4>
                </div>
            )
        }
    } */

    function C(){
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名:
                <Consumer>
                    {value => `${value.username},年龄是${value.age}`}
                </Consumer>
                </h4>
            </div>
        )
    }
```
### 7. PureComponent  Memo  高阶组件 高阶函数 函数柯里化

- PureComponent
PureComponent自带通过props和state的浅对比来实现 shouldComponentUpate()，而Component没有。
    浅对比只是用Object.is()对Object的value做了一个基本数据类型的比较。

缺点: 可能会因深层的数据不一致而产生错误的否定判断，从而shouldComponentUpdate结果返回false，界面得不到更新。

优点：不需要开发者自己实现shouldComponentUpdate，就可以进行简单的判断来提升性能；

Component组件有shouldComponentUpdate(nextProps,nextState)生命周期,可以手动比较是否想要的state或props发生了改变，如果是的话返回true，生命周期继续走，不是的话返回false，生命周期停止不更新。


- memo
React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。

如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。

默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。


- 高阶组件
https://zhuanlan.zhihu.com/p/28138664
高阶组件就是一个函数,且该函数接受一个组件作为参数,并返回一个新的组件；
更通俗地描述为，高阶组件通过包裹（wrapped）被传入的React组件，经过一系列处理，最终返回一个相对增强（enhanced）的React组件，供其他组件调用。

高阶组件的进阶用法：
    组件参数
    基于属性代理的方式
    基于反向继承的方式
    组合多个高阶组件
    

- 高阶函数
如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
    1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
    2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
    常见的高阶函数有：Promise、setTimeout、arr.map()等等
    
    
- 函数柯里化
通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
    function sum(a){
        return(b)=>{
            return (c)=>{
                return a+b+c
            }
        }
    }