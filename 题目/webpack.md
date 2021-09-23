  https://juejin.cn/post/6844904094281236487

### 1. webpack 核心概念？

Entry: 指定webpack开始构建的入口模块，从该模块开始构建并计算出直接或间接依赖的模块或者库。

Output：告诉webpack如何命名输出的文件以及输出的目录

Loader：模块转换器，用于把模块原内容按照需求转换成新内容。

Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。

Module: 模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。

Chunk：`coding split`的产物，我们可以对一些代码打包成一个单独的`chunk`，比如某些公共模块，去重，更好的利用缓存。或者按需加载某些功能模块，优化加载时间。在`webpack3`及以前我们都利用`CommonsChunkPlugin`将一些公共代码分割成一个`chunk`，实现单独加载。在`webpack4` 中`CommonsChunkPlugin`被废弃，使用`SplitChunksPlugin`

我当时使用 webpack 的一个最主要原因是为了简化页面依赖的管理，并且通过将其打包为一个文件来降低页面加载时请求的资源
数。

我认为 webpack 的主要原理是，它将所有的资源都看成是一个模块，并且把页面逻辑当作一个整体，通过一个给定的入口文件，webpack 从这个文件开始，找到所有的依赖文件，将各个依赖文件模块通过 loader 和 plugins 处理后，然后打包在一起，最后输出一个浏览器可识别的 JS 文件。

Webpack 具有四个核心的概念，分别是 Entry（入口）、Output（输出）、loader 和 Plugins（插件）。

- Entry
  Entry 是 webpack 的入口起点，它指示 webpack 应该从哪个模块开始着手，来作为其构建内部依赖图的开始。

- Output
  Output 属性告诉 webpack 在哪里输出它所创建的打包文件，也可指定打包文件的名称，默认位置为 ./dist。

- loader
  loader 可以理解为 webpack 的编译器，它使得 webpack 可以处理一些非 JavaScript 文件。
    在对 loader 进行配置的时候，
      test 属性，标志有哪些后缀的文件应该被处理，是一个正则表达式。
      use 属性，指定 test 类型的文件应该使用哪个 loader 进行预处理。
    常用的 loader 有 ：
      css 类 - less-loader,sass-loader, postcss-loader,autoprefixer-loader；
      文件类（图片处理）- url-loader，file-loader
      处理js将es6或更高级的代码转换成es5的代码 - babel-loader

- plugin
插件可以用于执行范围更广的任务，包括打包、优化、压缩、搭建服务器等等，要使用一个插件，一般是先使用 npm 包管理器进行安装，然后在配置文件中引入，最后将其实例化后传递给 plugins 数组属性。
  常用的插件：
  1) webpack-dev-server：webpack-dev-server是一个小型的express服务器，使用它可以为webpack生成的资源文件提供web服务；
    主要功能：
      1. 为静态文件提供http服务
      2. 自动刷新新热替换（HMR）

  2）mini-css-extract-plugin
    将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。

  3）HMR
    当对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新，这就是HMR。
    webpack 可以通过配置 webpack.HotModuleReplacementPlugin 插件来开启全局的 HMR 能力。
    开启后 bundle 文件会变大一些，因为它加入了一个小型的 HMR 运行时（runtime），当你的应用在运行的时候，webpack 监听到文件变更并重新打包模块时，HMR 会判断这些模块是否接受 update，若允许，则发信号通知应用进行热替换。

  4）其他
    1.ProvidePlugin：自动加载模块，代替require和import
    2.html-webpack-plugin可以根据模板自动生成html代码，并自动引用css和js文件
    3.extract-text-webpack-plugin 将js文件中引用的样式单独抽离成css文件
    4.DefinePlugin 编译时配置全局变量，这对开发模式和发布模式的构建允许不同的行为非常有用。
    5.HotModuleReplacementPlugin 热更新
    6.optimize-css-assets-webpack-plugin 不同组件中重复的css可以快速去重
    7.webpack-bundle-analyzer 一个webpack的bundle文件分析工具，将bundle文件以可交互缩放的treemap的形式展示。
    8.compression-webpack-plugin 生产环境可采用gzip压缩JS和CSS
    9.happypack：通过多进程模型，来加速代码构建
    10.clean-wenpack-plugin 清理每次打包下没有使用的文件
    
  5）SourceMap：
    SourceMap是一种映射关系。当项目运行后，如果出现错误，错误信息只能定位到打包后文件中错误的位置。如果想查看在源文件中错误的位置，则需要使用映射关系，找到对应的位置。

- mode
  webpack5提供了模式选择，包括开发模式，生产模式和空模式；

- resolve
  alias：配置别名，简化模块引入；
  extensions: 在引入模块时可不带后缀；
  symlinks: 用于配置npm link是否生效，禁用可提升编程速度；

- optimization优化
  optimization用于自定义webpack的内置优化配置，一般用于生产模式提升性能；
  常用的配置项：
    minimize: 是否需要压缩bundle；
    minimizer: 配置压缩工具；
    splictChunks: 拆分bundle；
    runtimeChunk: 是否需要将所有生成chunk之间共享的运行时文件拆分出来；

- 其他
  除了常规我们引用的各种file loader,plugin,babel配置主要还有三方面的优化：
    一、 包速度方面
    二、优化开发体验
      - 自动刷新：启用webpack-dev-server自动刷新文件；（轮训时间，排除的文件夹，构建延迟时间）
      - 热替换：开启模块替换HMR，不刷新页面替换内容；
    三、优化输出质量
      - 压缩文件体积
      - 使用cdn加速静态资源
      - 分割代码以按需加载
      - 多页面应用提取页面间公共组件
      - 区分生产/测试环境

### 2. webpack里面的插件是怎么实现的？-  Compiler（编译器） 和 Compilation（编译方法）

https://mp.weixin.qq.com/s/9Dueq-emxjofmHGoRUS7MA

在开发 Plugin 时最常用的两个对象就是 Compiler 和 Compilation，它们是 Plugin 和 Webpack 之间的桥梁。

Compiler 和 Compilation 的含义如下：

  - Compiler：对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；

  - Compilation：对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

Compiler 和 Compilation 的区别在于：
  Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。

### 3. webpack打包过程？（webpack编译过程）

初始化阶段，编译阶段，输出阶段；

webpack的运行流程是一个串行过程，过程如下： 

* 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；

* 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；

* 确定入口：根据配置中的 entry 找出所有的入口文件；

* 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；

* 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；

* 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；

* 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

### 4. webpack如何提高打包速度？

一、缩小文件搜索范围

1. 排除：loader的时候排除不必要的文件 ，比如node,modules
2. 别名定位：设置文件别名，alias,避免文件层层解析，快速定位
3. 减少文件查找：合理配置 resolve.extensions（匹配尽量少，高频类型放前面，导入文件加后缀）

二、提取公共模块：使用dllPlugin提取共用公用模块，打包出vendor.js,避免重复编译

三、开进程转换：HappyPack开启多进程loader转换

四、开进程压缩：使用paralleUglifyPlugin开启多进程压缩JS文件

五、利用缓存：`webpack.cache`、babel-loader.cacheDirectory、`HappyPack.cache`都可以利用缓存提高rebuild效率
### 5. babel

babel是一个广泛的转码器，可以把es6/7等最新的语法转换成es5的语法，让浏览器能够兼容；

babel的配置文件 .babelrc 主要有两个配置：
  - 转码规则 presets
  - 插件 plugins
#### babel是如何把 es6代码转换成 es5代码的？

babel将es6代码转换成es5，主要有三个阶段；
  1. 【解析Parse】把es6代码，通过babylon解析成，AST抽象语法树，即词法分析与语法分析的过程 
  2. 【转换Transform】通过babel-traverse plugin 对AST树进行遍历转译，在此过程中进行添加/更新/删除等操作，生成新的AST
  3. 【生成Generate】通过 babel-generator，将变换后的AST再转成es5代码

注意事项：babel默认不转换的代码需要通过安装babelpolyfill来支持，比如 ：

- Array.from,generator,set,maps,proxy,symbol...

#### 如何写一个babel插件?

实现流程
  1. babel解析成AST
  2. 然后插件更改AST （Babel的插件的模块需要暴露一个function,在function内返回visitor）
  3. 最后Babel输出代码

