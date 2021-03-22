1、
进入：透明度从0到1
    v-enter:
    v-enter-to:
    v-enter-active: 时间段

离开：透明度从0到1
    v-leave:
    v-leave-to:
    v-leave-active: 时间段

1）使用<transtion> <h1>1111</h1>  </transtion>将需要被动画控制的元素包括起来
2）自定义样式，来控制transtion内部的元素实现动画
    .v-enter,.v-leave-to{
    //时间点，进入前，元素的起始状态
    //动画离开后的终止状态
        opacity:0;
        transform: translateX(80px);
    }
    .v-enter-active,.v-leave-active{
    //进入的时间段  离场动画的时间段
        transtion: all 0.4s ease;
    }

 2、 <transtion name="my">   my-enter  自定义名字
        <h1>  </h1>
    </transtion>



3、animation.css
    <transtion enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" :duration:"400">   my-enter  自定义名字
            <h1 v-if="flag">这是一个h1</h1>
        </transtion>

        :duration={enter:200,leave:400}; //分别设置入场和离场的时长

4、使用钩子函数实现半场动画
