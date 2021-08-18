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
