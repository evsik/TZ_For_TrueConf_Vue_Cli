<template>
  <div class="trafficLights">
<!--    <div class="circle red" color="red"></div>-->
    <RedLight></RedLight>
<!--    <div class="circle yellow" color="yellow"></div>-->
    <YellowLight></YellowLight>
<!--    <div class="circle green" color="green"></div>-->
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

//.circle {
//  background-color: rgba(0, 0, 0, 0.3);
//  width: 40px;
//  height: 40px;
//  border-radius: 50%;
//}

//.red {
//  background-color: #d42f2f94;
//  box-shadow: 0 0 10px #d42f2f94;
//}

//.yellow {
//  background-color: #f3f38c66;
//  box-shadow: 0 0 10px #f3f38c66;
//}

//.green {
//  background-color: #4ac14a80;
//  box-shadow: 0 0 25px #4ac14a80;
//}


</style>