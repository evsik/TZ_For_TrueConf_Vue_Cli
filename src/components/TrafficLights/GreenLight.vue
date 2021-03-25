<template>
  <div class="circle greenDark" color="green"></div>
</template>

<script>
export default {
name: "GreenLight"
}
</script>

<style scoped lang="scss">

.circle {
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.greenDark {
  background-color: #4ac14a80;
  box-shadow: 0 0 25px #4ac14a80;
}

.green {
  background-color: #1eb51e;
  box-shadow: 0 0 25px #1eb51e;
}

</style>