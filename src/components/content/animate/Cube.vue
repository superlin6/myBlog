<template>
  <div class="cube">
    <div class="top">1</div>
    <div class="right">2</div>
    <div class="bottom">3</div>
    <div class="left">4</div>
    <div class="ahead">5</div>
    <div class="rear">6</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.cube {
  //   width: 80px;
  //   height: 80px;
  position: relative;
  transform-style: preserve-3d;
  animation: toshow 10s infinite;
  @keyframes toshow {
    0%,
    100% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
  div {
    width: 80px;
    height: 80px;
    position: absolute;
    opacity: 0.5;
    text-align: center;
    &.top {
      background-color: aqua;
      transform: rotateX(90deg) translateZ(40px);
    }
    &.right {
      background-color: yellow;
      transform: rotateY(90deg) translateZ(40px);
    }
    &.bottom {
      background-color: rgb(96, 179, 96);
      transform: rotateX(-90deg) translateZ(40px);
    }
    &.left {
      background-color: rgb(206, 120, 120);
      transform: rotateY(-90deg) translateZ(40px);
    }
    &.ahead {
      background-color: rgb(216, 192, 113);
      transform: rotateY(0deg) translateZ(40px);
    }
    &.rear {
      background-color: rgb(202, 148, 228);
      transform: rotateY(180deg) translateZ(40px);
    }
  }
}
</style>