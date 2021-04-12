### block、inline 和 inline-block 的元素有什么差别
  inline是内联元素，block是块级元素，inline-block是内联块元素; 
  (1)块级元素会独占一行，而内联元素和内联块元素则会在一行内显示。
  (2)块级元素和内联块元素可以设置 width、height 属性，而内联元素设置无效。
  (3)块级元素的 width 默认为 100%，而内联元素则是根据其自身的内容或子元素来决定其宽度。

### display：flex 下水平垂直居中怎么实现
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

### flex布局（弹性布局） 
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

#### flex: 0 1 auto 表示什么意思
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
  
### html行内元素和块级元素有哪些：
  行内元素：最常用的是span，其他还有a abbr b big br em i label
  块级元素：比较有代表性的是div 其余有p h1 h2 h3 h4 h5 h6 table ul li ol header section aside footer dl dd dt form hr pre tbody tfoot th thead tr

### webstorage
webstorage是本地存储，存储在客户端，包括localStorage和sessionStorage;

#### localStorage 本地存储
localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。
存放数据大小为一般为5M。
而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。

#### sessionStorage 会话存储
sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除。
存放数据大小为一般为5MB。
而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。源生接口可以接受，亦可再次封装来对Object和Array有更好的支持；

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

#### cookies，sessionStorage 和 localStorage 的区别
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
