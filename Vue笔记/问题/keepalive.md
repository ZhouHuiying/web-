### 对keep-alive的理解是什么？怎么缓存当前的组件？缓存后怎么更新？

#### Keep-alive 是什么
  keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM;
  keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们;

  keep-alive可以设置以下props属性：
    include - 字符串或正则表达式。只有名称匹配的组件会被缓存;
    exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存;
    max - 数字。最多可以缓存多少组件实例;
    eg.
    <keep-alive include="a,b">
      <component :is="view"></component>
    </keep-alive>

    <!-- 正则表达式 (使用 `v-bind`) -->
    <keep-alive :include="/a|b/">
      <component :is="view"></component>
    </keep-alive>

    <!-- 数组 (使用 `v-bind`) -->
    <keep-alive :include="['a', 'b']">
      <component :is="view"></component>
    </keep-alive>
  
  设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（activated与deactivated）：
    首次进入组件时：beforeRouteEnter > beforeCreate > created> mounted > activated > ... ... > beforeRouteLeave > deactivated
    再次进入组件时：beforeRouteEnter >activated > ... ... > beforeRouteLeave > deactivated
  
#### 使用场景

  使用原则：当我们在某些场景下不需要让页面重新加载时我们可以使用keepalive
  举个栗子:
    当我们从首页–>列表页–>商详页–>再返回，这时候列表页应该是需要keep-alive
    从首页–>列表页–>商详页–>返回到列表页(需要缓存)–>返回到首页(需要缓存)–>再次进入列表页(不需要缓存)，这时候可以按需来控制页面的keep-alive