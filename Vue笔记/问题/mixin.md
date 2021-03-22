### mixin是什么
  Mixin是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问mixin类的方法而不必成为其子类。
  Mixin类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂。

  mixin（混入），提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。本质其实就是一个js对象，它可以包含我们组件中任意功能选项，如data、components、methods、created、computed等等。
    使用：我们只要将共用的功能以对象的方式传入`mixins`选项中，当组件使用mixins对象时，所有mixins对象的选项都将被混入该组件本身的选项来。

  #### 局部混入
    定义一个mixin对象，有组件options的data、methods属性：
      var myMixin = {
        created: function () {
          this.hello()
        },
        methods: {
          hello: function () {
            console.log('hello from mixin!')
          }
        }
      }
    组件通过mixins属性调用mixin对象：
      Vue.component('componentA',{
        mixins: [myMixin]
      })
    该组件在使用的时候，混合了mixin里面的方法，在自动执行create生命钩子，执行hello方法；

  #### 全局混入
    通过Vue.mixin()进行全局的混入；  全局混入常用于插件的编写；
      Vue.mixin({
        created: function () {
            console.log("全局混入")
          }
      })

### 使用场景
  const Modal = {
    template: '#modal',
    mixins: [toggle]
  };
 
  const Tooltip = {
    template: '#tooltip',
    mixins: [toggle]
  }

### Vue的几种类型的合并策略
  替换型策略有props、methods、inject、computed，就是将新的同名参数替代旧的参数；
  合并型策略是data, 通过set方法进行合并和重新赋值；
  队列型策略有生命周期函数和watch，原理是将函数存入一个数组，然后正序遍历依次执行；
  叠加型有component、directives、filters，通过原型链进行层层的叠加；