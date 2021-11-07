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
  width: 100px;
  height: 100px;
  position: absolute;
  right: 10vw;
  bottom: 10vh;
  transform-style: preserve-3d;
  animation: toshow 10s linear infinite;
  @keyframes toshow {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  div {
    width: 100px;
    height: 100px;
    position: absolute;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    &.top {
      background-color: rgb(92, 235, 235);
      transform: rotateX(90deg) translateZ(50px);
    }
    &.right {
      background-color: rgb(248, 248, 20);
      transform: rotateY(90deg) translateZ(50px);
    }
    &.bottom {
      background-color: rgb(163, 241, 163);
      transform: rotateX(-90deg) translateZ(50px);
    }
    &.left {
      background-color: rgb(253, 98, 98);
      transform: rotateY(-90deg) translateZ(50px);
    }
    &.ahead {
      background-color: rgb(248, 205, 124);
      transform: rotateY(0deg) translateZ(50px);
    }
    &.rear {
      background-color: rgb(212, 144, 243);
      transform: rotateY(180deg) translateZ(50px);
    }
  }
}
</style>