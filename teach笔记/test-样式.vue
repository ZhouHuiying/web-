<template>
    <div>
        <ul class="entry-wrapper">
            <li class="entry-item" v-for="(item, index) in list" :key="index" @click="goto">
                <div class="mouse-function" @mouseenter="mouseenter(index)" @mouseout="mouseout(index)"></div>
                <div class="mask" ref="mask">
                    <h1>{{item.title}}</h1>
                    <p>{{item.content}}</p>
                    <div class="btn-wrapper" ref="btnWrapper">
                        <button class="btn">查看详情</button>
                    </div>
                </div>
                <img :src="item.img" alt="">
                
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [
                {    
                    title: '通用',
                    content: '为企业提供全面的信息化、智能化解决方案，提高企业生产效率，降低企业生产管理成本。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_16.jpg',
                },
                {    
                    title: '机械',
                    content: '确保企业更稳定地开发成熟完善的机械，通过虚拟设计和调试缩短生产时间，从而提高企业生产效率。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_06.jpg',
                },
                {    
                    title: '化工',
                    content: '为化工企业提供高效调试工厂的流程，提高工厂可用性和安全性，实现灵活的生产管理。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_04.jpg',
                },
                {    
                    title: '电子信息',
                    content: '帮助电子企业更快、更高效地制造出高品质的复杂产品组合，实现更为智能化的规划和生产。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_15.jpg',
                },
                {    
                    title: '通用',
                    content: '为企业提供全面的信息化、智能化解决方案，提高企业生产效率，降低企业生产管理成本。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_16.jpg',
                },
                {    
                    title: '通用',
                    content: '为企业提供全面的信息化、智能化解决方案，提高企业生产效率，降低企业生产管理成本。',
                    img: 'http://ibd.cspiii.com/userfiles/1/images/cms/article/2018/05/indus_16.jpg',
                },
            ]
        }
    },
    methods: {
        mouseenter(index) {
            this.$refs.btnWrapper[index].style.bottom = '80px';
            this.$refs.mask[index].style.background = 'rgba(0,0,0,0.6)';
        },
        mouseout(index) {
            this.$refs.btnWrapper[index].style.bottom = '-80px';
            this.$refs.mask[index].style.background = 'rgba(0,0,0,0.4)';
        },
        goto() {
            alert('前往下一个路由')
        }
    },
}
</script>

<style lang="scss" scoped>
.entry-wrapper  {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
        width: calc((100% - 80px) / 4);
        height: 288px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .entry-item {
        position: relative;
        width: calc((100% - 80px) / 4);
        height: 288px;
        color: white;
        text-align: center;
        margin-right: 20px;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;
        img {
            position: absolute;
            top: 0px; left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
        }
        .mouse-function {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 100;
            cursor: pointer;
        }
        .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            padding: 30px;
            background: rgba(0,0,0,0.4);
            z-index: 1;
            overflow: hidden;
            box-sizing: border-box;
            transition: all .4s linear;
            &:hover {
                background: rgba(0,0,0,0.6);
            }
            p {
                margin-top: 30px;
                text-align: justify;
            }
            .btn-wrapper {
                position: absolute;
                bottom: -80px;
                width: calc(100% - 60px);
                transition: all .4s linear;
                z-index: -1;
                .btn {
                    margin: 0 auto;
                    font-size: 18px;
                    color: #ff0000;
                    padding: 6px 20px;
                    background: rgba(255,0,0,0.1);
                    border: 1px #ff0000 solid;
                    cursor: pointer;
                }
            }
            
            
        }
    }
}
</style>