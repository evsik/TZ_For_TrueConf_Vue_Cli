<template>
  <div class="trafficLights">
    <RedLight></RedLight>
    <YellowLight></YellowLight>
    <GreenLight></GreenLight>
  </div>
</template>

<script>
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";
import GreenLight from "./GreenLight";

export default {
  name: "TrafficLights",

  components:{
    RedLight,
    YellowLight,
    GreenLight
  }
}
</script>

<style scoped lang="scss">

.trafficLights {
  margin: 0 auto;
  background-color: #2c3e50;
  height: 200px;
  width: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  flex-direction: column;
}

</style>