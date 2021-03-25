<template>
  <div class="circle redDark" color="red"></div>
</template>

<script>
export default {
  name: "RedLight"
}
</script>

<style scoped lang="scss">

.circle {
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.redDark {
  background-color: #d42f2f94;
  box-shadow: 0 0 10px #d42f2f94;
}

.red {
  background-color: #d42f2f;
  box-shadow: 0 0 25px #d42f2f;
}

</style>