### DOM
    (/image/DOM-BOM.jpg)
    是什么：
        文档对象模型 (DOM) 是 HTML 和 XML 文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。任何 HTML或XML文档都可以用 DOM表示为一个由节点构成的层级结构。

#### 创建节点
    document.createElement('tagname')：创建新元素
    document.createTextNode("content)：创建文本节点
    document.createDocumentFragment()：创建一个文档碎片
    document.createAttribute('custom')：创建属性节点

        例子：
            var para = document.createElement("p");
            var node = document.createTextNode("这是新的文本。");
            
    
    
    替换元素：parent.replaceChild(para, child);

### 添加节点
    node.appendChild(newElement)  后面追加元素 node父级 child子级；
    node.insertBefore(newElement,指定元素)；
    eg.
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);

#### 获取节点
    getElementById();
    getElementByTagName();
    getElementByClassName();
    getElementsByName();
    document.querySelector()： 返回指定选择器的第一个元素对象  .box-类选择器 #-id选择器 li
    document.querySelectorAll()：返回一个包含节点子树内所有与之相匹配的Element节点列表，如果没有相匹配的，则返回一个空节点列表；
    获取特殊元素：body, html
        document.body;
        document.documentElement;
    
#### 更新节点
    document.getElementById(id).innerHTML = new text;
    document.getElementById(id).innerText = new text;
    document.getElementById(id).textContent = new text;
        innerText和textContent两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本。
    document.getElementById(id).attribute = new value;
    document.getElementById(id).style.property = new style;  //需要用驼峰命名

#### 删除节点
    node.removeChild(child) 删除父节点里的子节点

#### 复制节点
    node.cloneNode();  浅拷贝：只复制节点本身，不克隆里面的子节点
    node.cloneNode(true); 都复制
    
### 事件
    事件三要素：事件源，事件类型，事件处理程序
    获取元素，注册事件，处理程序；

HTML 事件的例子：https://www.w3school.com.cn/js/js_htmldom_events.asp
    当用户点击鼠标时
    当网页加载后
    当图像加载后
    当鼠标移至元素上时
    当输入字段被改变时
    当 HTML 表单被提交时
    当用户敲击按键时

    onclick=''
    onchange='upperCase()':
        当用户改变输入字段内容时，会调用 upperCase() 函数。
    onmouseover 和 onmouseout 事件

#### 事件监听程序：
    addEventListener:
        js中——document.getElementById("myBtn").addEventListener("click", function() { alert("Hello World!"); });
        事件冒泡还是事件捕获？addEventListener(event, function, useCapture); 使用“useCapture”参数来规定传播类型，默认值是 false，将使用冒泡传播
    removeEventListener()：
        删除已通过 addEventListener() 方法附加的事件处理程序：

#### 事件委托(事件代理)
    是JavaScript中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。
    事件传播分成三个阶段：
        捕获阶段：从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件；
        目标阶段：在目标节点上触发，称为“目标阶段”
        冒泡阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层；
    在处理程序中，我们获取 event.target 以查看事件实际发生的位置并进行处理。

    操作元素内容：
        innerText(); innerHTML();
    操作常见元素属性：
        src,href
        id alt title

    表单元素的属性操作：
        type, value, checked, selected, disabled
        <input type="text" value="输入内容">
        var input=document.querySelector('input');
        btn.onclick = function(){
            input.value='被点击了';
        如果想要某个表单被禁用，用disabled 按钮被禁用
        btn.disabled = true;
        this.disabled=true;  this指向的是事件函数的调用者
        }

    样式属性操作：
        element.style(); this.style.backgroundColor='purple';
                        this.style.width='250px'; 产生的是行内样式
        element.className();  this.className='change';
    
获得元素的属性值：
    element.属性；  div.id; 获取元素自带的属性；
    element.getAttribute('属性'); 可以获取元素自定义的属性；
设置元素的属性值：
    element.属性='值'; div.id='test';
    element.setAttribute('属性','值')
移除属性：
    div.removeAttribute('index');  移除index属性
自定义属性：以data-开头命名；
            div.dataset;   dataset是一个集合里面存放了所有以data开头的自定义属性；

### 节点操作：
    节点至少拥有nodeType,nodeName,nodeValue三个基本属性
    元素节点nodeType为1，属性节点nodeType为2，文本节点nodeType为3
    主要操作的是元素节点。

节点层级：父子兄层级关系；
        父节点：node.parentNode  得到的是离元素最近的父节点，找不到父节点返回为空
        子节点：
            parentNode.childNodes  得到所有子节点，包含元素节点文本节点等等
            parentNode.children: 获取所有的子元素节点 常用的
            parentNode.firstChild 获取第一个节点 不管是元素节点还是文本节点
            parentNode.lastChild 获取最后节点 不管是元素节点还是文本节点
            //
            parentNode.firstElementChild 获取第一个子元素节点
            parentNode.lastElementChild 获取最后一个子元素节点
        兄弟节点：
            node.nextSibling    得到下一个兄弟节点，包含元素节点文本节点等等
            node.previousSibling 
            //
            node.nextElementSibling 得到下一个兄弟元素节点
            node.previousElementSibling

