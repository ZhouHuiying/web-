### 1、动画
@keyframes 规则是创建动画。
    @keyframes myfirst
    {
        from {background: red;}
        to {background: yellow;}
    }
    或者
    @keyframes myfirst
    {
        0%   {background: red;}
        25%  {background: yellow;}
        50%  {background: blue;}
        100% {background: green;}
    }

把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：
    div
    {
        animation: myfirst 5s;
    }

可以改变背景色和位置，background、top、left

animation-name  规定 @keyframes 动画的名称;
animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。
animation-timing-function	规定动画的速度曲线。默认是 "ease".
animation-delay	规定动画何时开始。默认是 0。
animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
animation-iteration-count	规定动画被播放的次数。默认是 1。

### 2、过渡  transition
    transition-property	规定应用过渡的 CSS 属性的名称。
    transition-duration	定义过渡效果花费的时间。默认是 0。
    transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。
    transition-delay	规定过渡效果何时开始。默认是 0。
 例如:
     div
        {
            transition: width 2s, height 2s, transform 2s;
        }
    div:hover {
        width: 200px;
        height: 200px;
        transform: rotate(180deg);
    }

### 3、CSS transform属性
div
    {
        transform:rotate(7deg);
    }
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。
transform 后面有多个属性translate、scale、rotate等。