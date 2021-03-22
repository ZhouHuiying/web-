## ECMAScript：

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

### 对象：
    分为自定义对象，内置对象，浏览器对象；
    (1)利用对象字面量创建对象：var obj={uname:'张三',age=18}

    (2)利用new Object创建对象：var obj=new Object(); obj.age=18;
        JavaScript有个内嵌的方法create(), 它允许您基于现有对象创建新的对象: var person2 = Object.create(person1); 基于person1创建person2

    (3)利用构造函数创建对象：构造函数就是把对象里面相同的属性和方法抽象出来封装到函数里面  函数名大写; 不需要return; 调用必须使用new; 
        function 构造函数名(){
            this.属性 = 值；
            this.方法=function(){}
        }
        new 构造函数名(); 

        function Star(uname,age,sex){
            this.name=uname;
            this.age=age;
            this.sex=sex;
        }
        var ldh = new Star('ldh',18,'男');

    构造函数是泛指的某一大类，对象是特指一个具体的事务，利用构造函数创建对象的过程称为对象的实例化

    new关键字执行过程：new构造函数可以在内存中创建一个空的对象，this就会指向刚才创建的空对象，执行构造函数里面的代码给空对象添加属性和方法，返回这个对象

    遍历对象：
        for(变量 in 对象)
        for(var k in obj){
            console.log(k) 得到的是属性名
            console.log(obj[k]) 得到的是属性值
        }
    
    删除对象属性：
        eg.
            var canPermutePalindrome = function(s) {
                let obj = {};
                for(let i=0; i<s.length; i++){
                    let char = s[i];
                    if(obj[char])
                        delete obj[char]   //
                    else
                        obj[char] = 1;
                }
                return Object.keys(obj).length <= 1;
            };  

    原型链：
        https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes
        JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。
        
        每个函数都有一个特殊的属性叫作原型（prototype）。
        ```
        function doSomething(){}
        console.log( doSomething.prototype );
        ```
        原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。
        prototype 属性：
            以 Object.prototype. 开头的属性: prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。
            即：prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。
            JavaScript 中到处都是通过原型链继承的例子:
                var myString = 'This is my string.';
                myString 立即具有了一些有用的方法，如 split()、indexOf()、replace() 等。
        constructor 属性：
            person1.constructor person2.constructor 都将返回 Person() 构造器，因为该构造器包含这些实例的原始定义。
    
    原型链继承（原型式继承）：
        call()函数：这个函数允许调用一个在这个文件里别处定义的函数。 
        eg:
            ```
            function Person(first, last, age, gender, interests) {
                this.name = {
                    first,
                    last
                };
                this.age = age;
                this.gender = gender;
                this.interests = interests;
            };
            function Teacher(first, last, age, gender, interests, subject) {
                Person.call(this, first, last, age, gender, interests);

                this.subject = subject;
            }
            ```
    JavaScript Object Notation (JSON)
            


### 内置对象：

##### Math对象：
    不是一个构造函数，不需要new
    Math.abs(1); 1 绝对值
    Math.floor(1.1);  1 向下取整
    Math.ceil(1.1);  2 向上取整
    Math.round(1.1); 1 四舍五入
    Math.random(); 返回一个浮点数，[0，1)
    Math.abs(): 返回数的绝对值
    Math.trunc(8.75): 返回数字的整数部分。 此方法不会将数字向上/向下舍入到最近的整数，而只是删除小数。

    eg.
    (1)求两点之间的距离：
        var pos = cc.v2(100,200);
        var pos2 = cc.v2(300,400);
        var distance = Math.sqrt(Math.pow(pos.x - pos2.x, 2) + Math.pow(pos.y - pos2.y, 2));
    (2)
    
##### 日期对象：
    是构造函数，必须使用new来调用创建日期对象
    var date = new Date();
    格式化年月日
        var date=new Date();
        date.getFullYear();
        date.getMonth();  返回的月份小一个月
        date.getDate();
        date.getDay();
        date.getHours();
        date.getMinutes();
        date.getSeconds();
    获取日期的总的毫秒数：1970-1-1开始 
        var date=new Date();  date.valueOf();
        var date1 = +new Date(); ——最常用的写法
        Data.now();  
       
##### 字符串对象：
    基本包装类型：把简单数据类型包装为复杂数据类型,这个简单数据类型就有了属性和方法；String、Number、Boolean；
    字符串的不可变： 开辟新的内存空间；

    根据字符返回位置：
        indexOf(): str.indexOf('春',[3]); 从第三个开始查找春
	                indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。 ]
	                indexOf() 方法对大小写敏感,    如果要检索的字符串值没有出现，则该方法返回 -1。
        lastIndexOf(): lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
                    stringObject.lastIndexOf(searchvalue,fromindex)

    根据位置返回字符： 
        charAt(index):  根据位置返回字符；
            str.charAt(3); //查找第三个位置的字符
            var str = "HELLO WORLD";
            var n = str.charAt(2)
        charAt() 方法可返回指定位置的字符。 必需。表示字符串中某个位置的数字，即字符在字符串中的下标;

    charCodeAt(index):  返回相应索引号的字符ASCII值 目的：判断用户按下了哪个键； str.charCodeAt(0);
        str[index]： str[0];

    字符串操作方法：
        concat('字符串1','字符串2'...)； 类似+号
        substr(start,length):  str.substr(2,2) 2号位置取两个字符； 
        slice(start,end):
        substring(start,end):
        replace：替换字符 replace('被替换的字符','替换为的字符') 只会替换第一个字符
        spilt('分隔符'): 字符转换成数组 var str='1,2';  str.spilt(',');  

闭包：一个闭包，就是 一个函数 与其 被创建时所带有的作用域对象 的组合。闭包允许你保存状态——所以，它们可以用来代替对象。
    js: 环境   全局环境不会被回收
        作用域：

##### 其他
    charCodeAt：charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
                charAt() 方法可返回指定位置的字符。

    parseInt() 函数可解析一个字符串，并返回一个整数。
                parseInt(string, radix)   radix: 可选。表示要解析的数字的基数

    BigInt:
        BigInt数据类型的目的是比Number数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。

### ES6:
(1)ES6解构赋值交换变量的值:
        let x = 1;
        let y = 2;
        [x, y] = [y, x];
        console.log(x);//2
        console.log(y);//1

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
        
        
(3)map 和 Hashmap ???       
        
!!!!!注意！！！！

        （1）= 和 == 和 === 不同；
            使用==时，不同类型的值也可以被看作相等。
            ===操作符，如果比较的两个值类型不同，比较的结果就是false。
        （2）'' 和 ' '是不一样的   
        （3）' ' 和null是不一样的

### 模板字符串
    模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。
    模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来