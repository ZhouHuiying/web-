<template>
  <div>
    <div class="stage">
      <div class="container" ref="container">
        <div v-for="(item, index) in 6" :key="index" class="example" :class="'example-'+ (index + 1)" @mouseenter="enter" @mouseleave="clock">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      deg: 0,
    }
  },
  mounted() {
    this.clock();
  },
  methods: {
    clock() {
      this.timer = setInterval(() => {
        this.deg += 60;
        console.log(this.deg)
        this.$refs.container.style.transform = `rotateY(${this.deg}deg)`
      }, 3000)
    },
    enter() {
      clearInterval(this.timer);
    },
  },
};
</script>
<style lang="scss" scoped>
.stage {
  position: relative;
  height: 200px;
  .container {
    position: absolute;
    width: 64px;
    height: 36px;
    left: 50%;
    top: 50%;
    margin-left: -32px;
    margin-top: -18px;
    cursor: pointer;
    transition: transform 3s ease;
    transform-style: preserve-3d;
    .example {
      width: 64px;
      height: 36px;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
      position: absolute;
      bottom: 0px;
      overflow: hidden;
      /*transition: opacity 1s ease 0s, transform 1s ease 0s;*/
    }
    @for $i from 1 through 6 {
      .example-#{$i}
      {
        transform: rotateY(60deg * ($i - 1)) translateZ(98px);
        background-color: rgba(153, 204, 204, 0.8);
      }
    }
    // .example:nth-child(1) {
    //   transform: rotateY(0deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
    // .example:nth-child(2) {
    //   transform: rotateY(60deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
    // .example:nth-child(3) {
    //   transform: rotateY(120deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
    // .example:nth-child(4) {
    //   transform: rotateY(180deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
    // .example:nth-child(5) {
    //   transform: rotateY(240deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
    // .example:nth-child(6) {
    //   transform: rotateY(300deg) translateZ(98px);
    //   background-color: rgba(153, 204, 204, 0.8);
    // }
  }
}
</style>