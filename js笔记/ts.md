TypeScript:
类：
1、es5中：
    function Person(){
            this.name="张三";
            this.run = function(){
                alert("run");
            }  
            实例方法
        }
        var p = new Person('san');
        p.run();

    原型链上定义： Person.prototype.num="222";
        原型链上的属性会被多个实例共享  构造函数不会
        
    类里的静态方法：Person.getInfo=function(){}
                   Person.getInfo();

    继承: 原型链+对象冒充的组合继承模式
        对象冒充：
                function Web(){
                    Person.call(this);
                }
                var w = new Web();
                w.run();  //对象冒充可以继承构造函数里面的属性和方法 ，但是不能继承原型链上的属性和方法
        原型链：
                function Web(){

                }
                Web.prototype = new Person();  
                w.work(); //可以继承构造函数里面的属性和方法，也可以继承原型链上的属性和方法
                          //实例化子类不能给父类传参
        原型链+构造函数的组合继承：
                (1) function Web(name,age){
                    Person.call(this,name,age);    //实例化子类可以给父类传参
                }

                (2) Web.prototype = Person.prototype
2、ts中
1、 class Person{
        name: string;    //前面省略的public关键词
        constructor(n:string){   //构造函数-实例化类时触发的方法
            this.name = n;
        }

        getName():string{
            return this.name;
        }

        setName(name:string):void{
            this.name=name;
        }

        run():void{
            alert(this.name)
        }
    }
    var p = new Person('张三');
    p.run();
    p.setName('李四');
2、ts中实现继承  extends super
    class Person{
        public name:string;
        constructor(name:string){
            this.name=name;
        }
        run():string{
            return '$(this.name)在运动'
        }
    }
    var p = new Person('王五');
    p.run();

    class Web extends Person{
        constructor(name:string){
            super(name);
        }
    }
    var w = new Web('李四');
    w.run();

ts中继承的探讨
 class Web extends Person{
        constructor(name:string){
            super(name);
        }
        run():string{
            return '$(this.name)在运动-子类'
        }
        work(){
            alert('$(this.name)在工作')
        }
    }
    var w = new Web('李四');
    w.run();

3、类里面的修饰符 
    public: 公有——类里面、子类、类外面都可以访问
    protected：保护—— 类里面、子类都可以访问
    private：私有—— 类里面可以访问
    属性不加修饰符默认public

4、静态方法 静态属性

class Person{
    public name:string;
    static sex="man"; //静态属性
    constructor(name:string){
        this.name=name;
    }
    run(){  //实例方法
        alert('$(this.name)在运动')
    }
    work(){
        alert('$(this.name)在工作')
    }
    static print(){ //静态方法 静态方法不能直接调用类里面的属性
         alert('$(this.name)print')
    }
}
var p = Person('bob');
p.run();
Person.print();
Person.sex;

多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
      多态属于继承

class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log('eat);
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'eat meat';
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'eat mouse';
    }
}

抽象类：ts中的抽象类是提供其他类继承的基类，不能直接被实例化
        用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
        
        抽象方法只能放在抽象类里面  

        抽象类和抽象方法用来定义标准Animal这个类要求它的子类必须包含eat方法  
       
        abstract class Animal{
          public name:string;
          constructor(name:string){
              this.name=name
          }
          abstract eat():any;
        }
        
        class Dog extends Animal{
            constructor(name:any){
                super(name)
            }
            eat(){
                console.log(this.name+'吃粮食')
            }
        }
         var d = new Dog('flower');
         d.eat();

接口：
（1）属性接口： 对json的约束
    
    function printLabel(label:string):void{
        console.log('printLabel');
    }
    printLabel('haha');

    ts中自定义方法传入参数对json进行约束：
        function printLabel(lableInfo:{'lable':string}){
            console.log('printLabel');
        }
        printLabel({label:'张三'});
    
    对批量方法传入参数进行约束：-> 接口  
        接口就是传入对象的约束 -> 属性接口

        interface FullName{
            firstName:string;
            secondName:string; 
        }

        function printName(name:FullName){
            //必须传入对象，firstName secondName string类型
            console.log(name.firstName+'--'+name.secondName)
        }
        var obj = {  //传入的参数必须包含firstName、secondName
            firstName:'张',
            secondName:'三',
            age:20
        }
        printName(obj)

    接口：可选属性

        interface FullName{
            firstName:string;
            secondName?:string; 可选属性，这个参数可以传可以不传
        }
        function getName(name:FullName){
            console.log(name)
        }
        getName({  
            firstName:'firstName';
            // secondName:'secondName'; 
        })
        例子：
        interface Config{
            type:string;
            url:string;
            data?:string;
            dataType:string;
        }
        function ajax(config:Config){
            var xhr=new XMLHttpRequest();
            xhr.open(config.type,config.url, true)  true表示是否异步
            xhr.send(config.data);
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4 && xhr.status==200){
                    console.log('success');
                    if(config.dataType=='json'){
                        console.log(JSON.parse(xhr.responseText))
                    }else{
                        console.log(xhr.responseText)
                    }
                }
            }
        }
        ajax({
            type:'get',
            data:'name==zhangsan'
            url:'http://www.baicu.com',
            dataType:'json'
        })

（2）函数类型接口：对方法传入的参数及返回值进行约束 批量约束
加密的函数类型接口：
interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string{
    return key+value;
}
md5('name','zhangsan' )

（3）可索引接口：对数组、对象的约束（不常用）
    ts中定义数组：var arr:number[]=[1,2,3];
    对数组的约束：
        interface UserArr{
            [index:number]:string
        }
        var arr:UserArr=['aaa','bbb']
        console.log(arr[0]);
    对对象的约束：
        interface UserObj{
            [index:string]:string
        }
        var arr:UserObj={name:'20'}

（4）类类型接口：对类的约束 和抽象类有点类似
interface Animal{
    name:string;
    eat(str:string):void;
}
class Dog implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(this.name+'吃肉')
    }
}
var d= new Dog('小黑');
d.eat();

（5）接口扩展：接口可以继承接口
interface Animal{
    eat():void;
}
interface Person extends Animal{
    work():void;
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    coding(){
        console.log(this.name+'coding')
    }
}

class Web extends programmer implements Person{
    constructor(name:string){
       super(name) 
    }
    eat(){
        console.log(this.name+'eat')
    }
    work(){
        console.log(this.name+'work')
    }
}

泛型：
通俗理解：泛型就是解决类 接口 方法的复用性以及对不特定数据类型的支持（类型校验）
T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value:T):T{
    return value;
}
getData<number>(123);

class MinClass<T>{
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        var minNum = this.list[0];
        for(var i=0; i<this.list.length; i++){
            if(minNum> this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}
var m1 = new MinClass<number>();  //实例化类 并且制定了类的T代表的类型是number
m1.add(1);
m1.add(2);
m1.add(3);
m1.min();