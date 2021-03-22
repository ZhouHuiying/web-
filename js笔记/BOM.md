### BOM
    BOM (Browser Object Model)，浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象；
    其作用就是跟浏览器做一些交互效果,比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率.

### window
    Bom的核心对象是window，它表示浏览器的一个实例;
    在浏览器中，window对象有双重角色，即是浏览器窗口的一个接口，又是全局对象
    因此所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法
    this指向问题:
        一般情况下this最终指向的是那个调用它的对象
        1）全局作用域或者普通函数中this指向全局对象window 
        2）方法调用中谁调用this指向谁
        3）构造函数中this指向构造函数的实例

    窗口控制方法：
        moveBy(x,y)：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体;
        moveTo(x,y)：移动窗体左上角到相对于屏幕左上角的(x,y)点;
        resizeBy(w,h)：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体;
        resizeTo(w,h)：把窗体宽度调整为w个像素，高度调整为h个像素;
        scrollTo(x,y)：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置;
        scrollBy(x,y)：如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素;
        window.open() 既可以导航到一个特定的url，也可以打开一个新的浏览器窗口;

#### 1、页面加载事件
    window.onload = function(){} 页面加载完毕才会触发这个事件,包含dom元素 图片 flash css等
    DOMContentLoaded DOM加载完毕

    window.addEventListener('load',function(){

    })

#### 2、调整窗口大小事件
    窗口大小发生变化就触发该事件，
    经常利用这个事件完成响应式布局 window.innerWidth
    window.onresize = function(){}
    window.addEventListener("resize", function(){})

#### 3、定时器
    setTimeout()
    setInterval()

    （1）window.setTimeout(调用函数，[延迟的毫秒数]);
    该方法用于设置一个定时器，该定时器在定时器到期后执行调用函数
    setTimeout(function(){},1000)

    回调函数callback

    停止setTimeout()定时器：window.clearTimeout(timerId)

    (2)setInterval
    重复调用一个函数，每隔这个事件，就去调用一次回调函数

### location对象

    URL 
    location对象属性：href host port pathname search hash
    location.href='http://www.baidu.com'  //跳转页面

    location对象方法：assign replace reload
    location.reload()，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载';

    eg.
    5秒钟后跳转页面：
    <body>
        <button>点击</button>
        <div></div>
        <script>
            var btn = document.querySelector('button');
            var div = document.querySelector('div');
            var timer = 5;
            btn.addEventListener('click',function(){
                location.href = 'http://www.itcast.cn';
            }
            setInterval( function (){
            if(timer == 0 )
                {
                    location.href = 'http://www.itcast.cn';
                }else{
                    div.innerHTML = '您将在’+ timer +‘秒之后跳转到首页';
                    timer--;
                }
            }, 1000)
            }
        </script>
    </body>

### navigator
    navigator 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂;

### screen

### history
    history对象主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转;
    
    history.go():接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转;
    history.forward()：向前跳转一个页面
    history.back()：向后跳转一个页面
    history.length：获取历史记录数