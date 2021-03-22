[官网](https://www.sass.hk/docs/)

Sass:
  在CSS语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能。

## CSS功能拓展 

### 1.sass中可以使用变量，通过 $ 来标识变量
  例如 $highlight-color: #F90;
  变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明
  
  #### 1-1变量声明 
    任何可以用作css属性值的赋值都 可以用作sass的变量值，甚至是以空格分割的多个属性值。

  #### 1-2变量引用
    凡是css属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用。

### 2.嵌套CSS 规则
  嵌套功能避免了重复输入父选择器

  #### 2-1. 父选择器的标识符&
    在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 hover 样式时，或者当 body 元素有某个 classname 时，可以用 & 代表嵌套规则外层的父选择器。
    ```
    article a {
      color: blue;
      &:hover { color: red }
    }
    ```
    & 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器.
    ```
    #main {
      color: black;
      &-sidebar { border: 1px solid; }
    }
    编译为
    #main {
      color: black; }
      #main-sidebar {
        border: 1px solid; 
      }
    ```
  #### 2-2. 群组选择器的嵌套
    .button button会命中button元素和类名为.button的元素。这种选择器称为群组选择器。
      .button, button {
        margin: 0;
      }
  #### 2-3. 子组合选择器和同层组合选择器：>、+和~
      article section { margin: 5px }：选择article下所有命中的section选择器的元素
      article > section { border: 1px solid #ccc }: 选择article下紧跟着子元素命中的section选择器的元素
      header + p { font-size: 1.1em }：用同层相邻组合选择器+选择header元素后紧跟的p元素
      article ~ article { border-top: 1px dashed #ccc }：用同层全体组合选择器~，选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素
  #### 2-4. 嵌套属性
    有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中。
    ```
    nav {
      border: {
      style: solid;
      width: 1px;
      color: #ccc;
      }
    }
    nav {
      border-style: solid;
      border-width: 1px;
      border-color: #ccc;
    }
    ```
### 3.导入SASS文件
  Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，而无需发起额外的下载请求。另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

  #### 3-1. 使用SASS部分文件
    当通过@import把sass样式分散到多个文件时，你通常只想生成少数几个css文件。那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为`局部文件`。

    如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。
      例如，将文件命名为 _colors.scss，便不会编译 _colours.css 文件。
      ``` @import "colors"; ```
  
  #### 3-2. 默认变量值
    可以在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。
    ```
    $content: "First content";
    $content: "Second content?" !default;
    $new_content: "First time reference" !default;

    #main {
      content: $content;
      new-content: $new_content;
    }
    ```
    编译为：
    ```
    #main {
      content: "First content";
      new-content: "First time reference"; 
    }
    ```

  #### 3-3. 嵌套导入
    sass允许@import命令写在css规则内，这样生成对应的css文件时，局部文件会被直接插入到css规则内导入它的地方。
    不可以在混合指令 (mixin) 或控制指令 (control directives) 中嵌套 @import。
      example.scss:
        .example {
          color: red;
        }
      导入：
        #main {
          @import "example";
        }
      被编译为：
        #main .example {
          color: red;
        }
  
  #### 3-4. 原生的CSS导入
    把原始的css文件改名为.scss后缀

### 4. 静默注释
  静默注释：其内容不会出现在生成的css文件中。  /* ... */

### 5. 混合器
  通过sass的混合器实现大段样式的重用。
  混合器使用@mixin标识符定义，然后就可以在你的样式表中通过@include来使用这个混合器。
    @mixin rounded-corners {
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
    notice {
      background-color: green;
      border: 2px solid #00aa00;
      @include rounded-corners;
    }

  #### 5-1. 何时使用混合器
    sass允许把css规则放在混合器中

  #### 5-2. 混合器中的CSS规则

  #### 5-3. 给混合器传参
    @mixin link-colors($normal, $hover, $visited) {
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }
    }
    a {
      @include link-colors(blue, red, green);
    }
  #### 5-4. 默认参数值
    @mixin link-colors(
      $normal,
      $hover: $normal,
      $visited: $normal
    )
    {
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }
    }

### 6. 使用选择器继承来精简CSS
  //通过选择器继承 extend `继承`样式
  .error {
    border: 1px solid red;
    background-color: #fdd;
  }
  .seriousError {
    @extend .error;
    border-width: 3px;
  }
  多重延伸：同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器。
  继续延伸：当一个选择器延伸给第二个后，可以继续将第二个选择器延伸给第三个。


### 7. 小结


### SassScript

  #### 变量

  #### 数据类型
    SassScript 支持 6 种主要的数据类型：
      数字，1, 2, 13, 10px

      字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
        在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{} (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名

      颜色，blue, #04a3f9, rgba(255,0,0,0.5)

      布尔型，true, false

      空值，null

      数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
        Sass list functions 赋予了数组新功能：
          nth 函数可以直接访问数组中的某一项；
          join 函数可以将多个数组连接在一起；
          append 函数可以在数组中添加新值；
          @each 指令能够遍历数组中的每一项。

      maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)

  #### 运算
    所有数据类型均支持相等运算 == 或 !=

    数字运算：
      数字的加减乘除、取整等运算 (+, -, *, /, %)，`如果必要会在不同单位间转换值`。
        / : 以下三种情况 / 将被视为除法运算符号：
              如果值，或值的一部分，是变量或者函数的返回值
              如果值被圆括号包裹
              如果值是算数表达式的一部分
            如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。
    
    颜色值运算：
      颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值。
      数字与颜色值之间也可以进行算数运算，同样也是分段计算的：
        p {
          color: #010203 * 2;
        }   计算 01 * 2 = 02 02 * 2 = 04 03 * 2 = 06

    字符串运算：
      + 可用于连接字符串
        p {
          cursor: e + -resize;
        }
    
    布尔运算：
      SassScript 支持布尔型的 and or 以及 not 运算。

  #### 圆括号
    圆括号可以用来影响运算的顺序。
      p {
        width: 1em + (2em * 3);
      }

  #### 函数
    
  #### 插槽语句
    通过 #{} 插值语句可以在`选择器或属性名`中使用变量。
    $name: foo;
    $attr: border;
    p.#{$name} {
      #{$attr}-color: blue;
    }
    编译为：
      p.foo {
        border-color: blue; 
      }

  #### media  ··    ·
  Sass 中 @media 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 @media 嵌套在 CSS 规则内，编译时，@media 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 @media 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

### 输出格式

  :nested
  :expanded
  :compact
  :compressed

### eg.

  //计算当前div的宽度函数  传入的$n表示有几个div
  @function flexWidth($n:2){
    @return calc((100% - (#{$n} - 1) * 10px) / #{$n})
  }