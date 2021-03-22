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
