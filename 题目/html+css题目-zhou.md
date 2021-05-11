### 1、block、inline 和 inline-block 的元素有什么差别
  inline是内联元素，block是块级元素，inline-block是内联块元素; 
  (1)块级元素会独占一行，而内联元素和内联块元素则会在一行内显示。
  (2)块级元素和内联块元素可以设置 width、height 属性，而内联元素设置无效。
  (3)块级元素的 width 默认为 100%，而内联元素则是根据其自身的内容或子元素来决定其宽度。

### 2、display：flex 下水平垂直居中怎么实现
  水平居中：
    .box{
        display: flex;
        justify-content:center;
        }
  垂直居中：
    .box{
      displsy: flex;
      align-items: center;
    }
    都居中：justify-content:center; align-items: center;

### 3、flex布局（弹性布局） 
  (https://www.zhangxinxu.com/wordpress/2019/12/css-flex-deep/)
  (http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

  采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
  
  设置在容器上的属性：
    display: flex; 
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <flex-direction> || <flex-wrap>; //是flex-direction和flex-flow的缩写；
    justify-content: flex-start | flex-end | center | space-between | space-around; //定义项目在主轴上的对齐方式；
    align-items: flex-start | flex-end | center | baseline | stretch;  //定义项目在交叉轴上的对齐方式；
    align-content: flex-start | flex-end | center | space-between | space-around | stretch; //定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用;
  
  设置在项目上的属性：
    order: <integer>; //定义项目的排列顺序。数值越小，排列越靠前，默认为0;
    flex-grow: <number>; //定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    flex-shrink: <number>; //定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    flex-basis: <length> | auto; //定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    flex:是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto;
    align-self: auto | flex-start | flex-end | center | baseline | stretch; //允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

#### 4、flex: 0 1 auto 表示什么意思
flex CSS 属性设置的是，flex 元素如何根据其在 flex 容器中的所剩空间来动态拉伸或收缩，它是 flex-grow、flex-shrink、flex-basis 这三个属性的简化版;
语法格式有单值、双值、三值三种语法格式;
  单值语法：值必须是以下之一：数值 number，那么解释为 flex: number 1 0、none、auto、initial；
  双值语法：第一个值必须是 number，它会被解释为 flex-grow 属性，
          第二个值必须是以下之一：
            数值 number，会被解释为 flex-shrink 属性
            一个可以描述宽度的值，例如 10em、30%、min-content，会被解释为 flex-basis 属性
  三值语法：第一个 number 表示 flex-grow
          第二个 number 表示 flex-shrink
          第三个描述宽度的值表示 flex-basis

flex属性经常使用的值：
  flex: 0 auto
    flex: 0 auto 等同于 flex: initial，也是 flex: 0 1 auto 的简写表达。它根据元素自身的 width 或 height 属性来调节元素大小。
    当还剩余一些空闲空间时，它使 flex 元素呈现的是固定大小的样式；当没有足够的空间时，它容许它收缩到最小。auto 边距可用于根据主轴来对齐元素。
  flex: auto
    flex: auto 等同于 flex: 1 1 auto，它根据元素的 width 或 height 属性调整元素的大小，可是其很是灵活，以便让它们吸取沿主轴的任何额外空间。
  flex: none
    flex: none 等同于 flex: 0 0 auto。它根据 width 和 height 来调节元素大小，不灵活。
  
### 5、html行内元素和块级元素有哪些：
  行内元素：最常用的是span，其他还有a abbr b big br em i label
  块级元素：比较有代表性的是div 其余有p h1 h2 h3 h4 h5 h6 table ul li ol header section aside footer dl dd dt form hr pre tbody tfoot th thead tr

### 6、webstorage （cookie localStorage sessionStorage）
webstorage是本地存储，存储在客户端，包括localStorage和sessionStorage;

#### localStorage 本地存储

localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。

存放数据大小为一般为5M。

仅在客户端（即浏览器）中保存，不参与和服务器的通信。

#### sessionStorage 会话存储

sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除。

存放数据大小为一般为5MB。

仅在客户端（即浏览器）中保存，不参与和服务器的通信。源生接口可以接受，亦可再次封装来对Object和Array有更好的支持；

#### localStorage和sessionStorage作用域的不同

不同浏览器无法共享localStorage或sessionStorage中的信息。

相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。

这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。

#### webstorage 优点
- 存储空间更大：cookie为4KB，而WebStorage是5MB；

- 节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样每次请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量；对于那种只需要在用户浏览一组页面 期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便

- 快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快；

- 安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；

- WebStorage提供了一些方法，数据操作比cookie方便
  setItem (key, value) —— 保存数据，以键值对的方式储存信息。
  getItem (key) —— 获取数据，将键值传入，即可获取到对应的value值。
  removeItem (key) —— 删除单个数据，根据键值移除对应的信息。
  clear () —— 删除所有的数据
  key (index) —— 获取某个索引的key

#### cookie
构成：名称：name； 值:value(通过URL编码:encodeURIComponent)； 域； 路径； 失效时间:一般默认是浏览器关闭失效,可以自己设置失效时间； 安全标志:设置安全标志后只有SSL连接的时候才发送到服务器；

作用：主要用于保存登录信息；

#### cookies，sessionStorage 和 localStorage 的区别？
浏览器端常用的存储技术是 cookie 、localStorage 和 sessionStorage。

cookie 其实最开始是服务器端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服
务器端。cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享。

sessionStorage 是 html5 提供的一种浏览器本地存储的方法，它借鉴了服务器端 session 的概念，代表的是一次会话中所保
存的数据。它一般能够存储 5M 或者更大的数据，它在当前窗口关闭后就失效了，并且 sessionStorage 只能被同一个窗口的同源
页面所访问共享。

localStorage 也是 html5 提供的一种浏览器本地存储的方法，它一般也能够存储 5M 或者更大的数据。它和 sessionStorage 
不同的是，除非手动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享。

上面几种方式都是存储少量数据的时候的存储方式，当我们需要在本地存储大量数据的时候，我们可以使用浏览器的 indexDB 这是浏
览器提供的一种本地的数据库存储机制。它不是关系型数据库，它内部采用对象仓库的形式存储数据，它更接近 NoSQL 数据库。


### 7、CSS3 新增了哪些特性？
css，即层叠样式表（Cascading Style Sheets）的简称。css3是css的最新标准。

  - 新增了一些选择器；
  - 新样式：
      边框：border-radius; box-shadow; border-image;\
      背景：background-clip; background-origin; background-size; background-break;
      文字：word-wrap; text-overflow; text-shadow; text-decoration;
      颜色：rgba; hsla;
  - transition 过渡
  - transform 转换: 旋转，缩放，倾斜或平移给定元素;
  - animation 动画:
  - 渐变：linear-gradient; radial-gradient;
  - flex弹性布局 
  - Grid栅格布局

  animation：用于设置动画属性，他是一个简写的属性，包含6个属性；
  transition：用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同
  transform：用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系
  translate：translate只是transform的一个属性值，即移动，除此之外还有 scale 等；

### 8、iframe

  iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

  主要缺点：
  （1） iframe 会阻塞主页面的 onload 事件。window 的 onload 事件需要在所有 iframe 加载完毕后（包含里面的元素）才会触发。
        在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 src 可以避免这种阻塞情况。
  （2） 搜索引擎的检索程序无法解读这种页面，不利于网页的 SEO 。
  （3） iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
  （4） 浏览器的后退按钮失效。
  （5） 小型的移动设备无法完全显示框架。

### 9、SEO（Search Engine Optimization，搜索引擎优化）

SEO（Search Engine Optimization），搜索引擎优化，是指为了增加网页在搜索引擎自然搜索结果中的收录数量以及提升排序位置而做的优化行为。
 
 ```
    （1）合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超
        过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不
        同页面 description 有所不同；keywords 列举出重要关键词即可。

    （2）语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页。

    （3）重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被
        抓取。
 
    （4）重要内容不要用 js 输出：爬虫不会执行 js 获取内容

    （5）少用 iframe：搜索引擎不会抓取 iframe 中的内容

    （6）非装饰性图片必须加 alt

    （7）提高网站速度：网站速度是搜索引擎排序的一个重要指标
   ```
   
   <!-- --- -->

- 突出重要内容：
  - 合理的title、description和keywords;
  - 语义化书写HTML代码，符合W3C标准;
  - 利用布局，把重要内容HTML代码放在最前;
  - 重要内容不要用JS输出;
  - 尽少使用iframe框架;
  - 为图片加上alt属性,需要强调的地方可以加上title属性;
  - 保留文字效果;
  - 利用CSS截取字符;

- 提升网站速度:
  - 尽量外链CSS和JS，保证网页代码的整洁，也有利于日后维护;
  - CSS放在文件头部，JS放在文件尾部，可使用工具对CSS和JS文件进行压缩;
  - CSS Sprites;
  - 为图片设置高度和宽度，可提高页面的加载速度;
  - 为静态资源文件增加过期时间，让用户通过本地缓存来更快的访问网站;
  - 减少大改版的频率;
  - 压缩、格式化代码;
  - 不使用CSS表达式，会影响效率;
  - 使用CDN网络，可加快用户访问速度;
  - 启用GZIP压缩，浏览速度变快，搜索引擎的蜘蛛抓取信息量也会增大;
  - 善于利用浏览器插件;

### 10、svg图中的元素

  矩形 <rect>
  圆形 <circle>
  椭圆 <ellipse>
  线 <line>
  折线 <polyline>
  多边形 <polygon>
  路径 <path>
  文本 <text>

  Stroke属性
  模糊效果
  阴影
  渐变 - 线性
  渐变 - 放射性

### 11、visibility、display和 opacity 的差别？

- visibility 设置 hidden 会隐藏元素，但是其位置还存在与页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘；

- display 设置了 none 属性会隐藏元素，且其位置也不会被保留下来，所以会触发浏览器渲染引擎的回流和重绘。

- opacity 会将元素设置为透明，但是其位置也在页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘。


### 12、position属性？

static：无特殊定位，对象遵循正常文档流。top，right，bottom，left等属性不会被应用。

relative：对象遵循正常文档流，但将依据top，right，bottom，left等属性在正常文档流中偏移位置。而其层叠通过z-index属性定义。

absolute：对象脱离正常文档流，使用top，right，bottom，left等属性进行绝对定位。而其层叠通过z-index属性定义。

fixed：对象脱离正常文档流，使用top，right，bottom，left等属性以窗口为参考点进行定位，当出现滚动条时，对象不会随着滚动。而其层叠通过z-index属性定义。

sticky：具体是类似 relative 和 fixed，在 viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局，由 top 决定。
