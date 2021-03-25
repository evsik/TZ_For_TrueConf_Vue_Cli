<template>
  <div class="circle yellowDark" color="yellow"></div>
</template>

<script>
export default {
  name: "YellowLight"
}
</script>

<style scoped lang="scss">

.circle {
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.yellowDark {
  background-color: #f3f38c66;
  box-shadow: 0 0 10px #f3f38c66;
}

.yellow {
  background-color: #ffff2d;
  box-shadow: 0 0 25px #ffff2d;
}

</style>