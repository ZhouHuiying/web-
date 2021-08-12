## ECMAScript 
    (js基础及es6)

### 基础

    输入输出：
        alert()
        console.log()
        prompt()  输入框

    变量：
        声明变量，赋值
        var age;
        age=10;

        var myname=prompt('请输入名字')；
        alert(myname);

        更新变量/声明多个变量，之间用逗号隔开
        变量命名：区分大小写，不能以数字开头

    数据类型：
        在程序运行时，数据的类型才被确定
        简单数据类型：Number：
                        二进制八进制十进制十六进制  
                        非数字：NaN isNaN():用来判断非数字，并返回一个值。如果是数字返回false
                    string：
                        '' " " 转义符\n \\ \' \" \t \b blank
                        字符串长度：str.length
                        字符串拼接：+ 字符串和其他类型的拼接还是字符串 
                    boolean：true-1 false-0
                    undefined：声明变量没有赋值 和数字相加是NaN
                    null：
        复杂数据类型:
        
        判断数据类型：
            var num=10;
            console.log(typeof num);
        字面量：

    数据类型转换：
        转换为字符：
            toString()  num.toString
            String(num)
            加号拼接字符串-重点
        转换为数字：
            parseInt(String)  parseInt('78')
            parseFloat(string)  parseFloat('78.21') parseFloat('120px')
            Number() Number('12')
            js隐式转换 '12'- 0
        转换成布尔型：
            Boolean()  Boolean('true')
            0 NaN null undefined ''  ——转换成false

    标识符、关键字、保留字
        标识符：开发人员取得名字，不能是关键字和保留字
        保留字：预留的关键字

    运算符：
        算术运算符：+ - * / % 
        递增和递减运算符：++ --
        比较运算符： > < >= <= == != ===(全等) !==
        逻辑运算符：进行布尔值运算的运算符 && || ！   短路运算
        赋值运算符：= += *= /= %=
        运算符优先级：

        位运算符：
            异或： ^
                先将两个数据转化为二进制数，然后进行按位异或运算，只要位不同结果为1，不然结果为0，可以发现按位异或就是不进位加法.
            与： &
            或： |

    流程控制：
        顺序流程控制
        分支结构：
            if 
                if(){}
                if(){}else{}
                if else if 
            switch 
                switch(){case value1:执行语句; break; case value2:执行语句2；break;default;}
        三元表达式: ? :
        循环：for while do while 
                do{}while()
            continue 跳出本次循环继续下次循环 /  break：退出整个循环

    数组：
        创建：(1) var array = new Array();
            (2) var array=[]; array[1]
        新增数组元素：修改长度-length； 修改索引号； 

    函数：
        function sayHi()   sayHi();
        function 函数名(形参1，形参2...){

        }
        函数名(实参1，实参2...)
        形参和实参个数不匹配，实参多-取到形参的个数，少于-undefined
        返回值：
            return 返回值，终止函数，只能返回一个值  返回数组
            没有return返回undefined
        arguments : 
            只有函数才有argument对象，每个函数都内置好了这个argument
            里面存储所有传递过来的实参 展示形式伪数组-length,索引存储，没有数组的一些方法pop push
    
        函数的两种声明方式：
            通过function关键字；(命名函数)
            函数表达式：var 变量名 = function(){};


    作用域：全局作用域 局部作用域 没有块级作用域 作用域链

    预解析：把js里面的var和function提升到当前作用域的最前面，然后执行代码

### ES6

(1)ES6解构赋值交换变量的值:
    - 数组的解构赋值：
        let x = 1;
        let y = 2;
        [x, y] = [y, x];
        console.log(x);//2
        console.log(y);//1
    
    - 对象的解构赋值：
        let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
        foo // "aaa"
        bar // "bbb"

    对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

    - 字符串解构赋值：字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
        const [a, b, c, d, e] = 'hello';
        a // "h"
        b // "e"
        c // "l"
        d // "l"
        e // "o"

    - 数值和布尔值的解构赋值：解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
    let {toString: s} = 123;
    s === Number.prototype.toString // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true

    - 函数参数的解构赋值
    function add([x, y]){
        return x + y;
    }

    add([1, 2]); // 3

(2)set map
    set:
        Set是ES6新的数据结构，类似数组，但成员的值是唯一的，没有重复的值
        let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
        let ss=new Set([1,2,3,3])
        [...ss] //1,2,3
        https://www.jianshu.com/p/80bf2e6139dc
        set方法：add, delete, has, clear  
                set.add(a) //添加元素
                set.size //得到set的长度
                set.has(val) //has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。
                set.delete(2);//删除某个值，返回一个布尔值，表示删除是否成功。
                
        遍历方法：set.keys(), set.values(), set.entries(), set.forEach()

        用于：数组去重：
            const set = new Set();  //新建一个set
            for (let i = 0; i < candies.length; i++) {
                set.add(candies[i]);  //遍历set,将元素添加到set中，里面的元素不重复
            }

    WeakSet:
        1. WeakSet 的成员只能是对象，而不能是其他类型的值。
        2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
        3. WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
        4. ES6 规定 WeakSet 不可遍历。
            WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

        const ws = new WeakSet();

        WeakSet方法：
            WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
            WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
            WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

    map:
        它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
        也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

            const m = new Map();
            m.set(o, 'content') //添加元素
            m.has(o) //判断是否存在该元素
            m.get('name') // "张三" 得到name对应的值

            const map = new Map();
            map.set('foo', true);
            map.set('bar', false);
        
        属性和方法：
        (1) size: size属性返回 Map 结构的成员总数。
            map.size();
        (2) set: set方法设置键名key对应的键值为value，然后返回整个 Map 结构
            m.set(o, 'content');
        (3)get: get方法读取key对应的键值，如果找不到key，返回undefined。
            m.get(hello);
        (4)has: has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
            m.has(o);
        (5)delete:delete方法删除某个键，返回true。如果删除失败，返回false
            m.delete(o);
        (6)clear:clear方法清除所有成员，没有返回值;
            map.clear();
        
        遍历方法：
            map.keys():
                for (let key of map.keys()) {
                    console.log(key);
                }
            map.values();
            map.entries();
            map.foreach();
                map.forEach(function(value, key, map) {
                   console.log("Key: %s, Value: %s", key, value);
                });
                
        eg. 遍历数组，将数组中每个元素出现的次数存储在map的value中。
            let map = new Map();
            for(item of deck){
                map.set(item,map.has(item) ? map.get(item)+1 : 1);
            }
        
    WeakMap:
        1. WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名.
        2. WeakMap的键名所指向的对象，不计入垃圾回收机制.
    
        用途:
            WeakMap 应用的典型场合就是 DOM 节点作为键名;
            WeakMap 的另一个用处是部署私有属性。
        
(3)map 和 Hashmap   
        
!!!!!注意！！！！

        （1）= 和 == 和 === 不同；
            使用==时，不同类型的值也可以被看作相等。
            ===操作符，如果比较的两个值类型不同，比较的结果就是false。
        （2）'' 和 ' '是不一样的   
        （3）' ' 和null是不一样的

(4) for each、for in、for of的区别

- `foreach`用于遍历数组，是数组的一个方法。不支持 return continue break。

- `for in`获取对象里属性的键。

- `for of`获取对象里属性的值

### 模板字符串

    模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。
    模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来