<template>
  <div>
<!--    <div class="trafficLights">-->
<!--      <div class="circle red" color="red"></div>-->
<!--      <div class="circle yellow" color="yellow"></div>-->
<!--      <div class="circle green" color="green"></div>-->
<!--    </div>-->
    <TrafficLights></TrafficLights>
    <Timer></Timer>
  </div>
</template>

<script>
import Timer from "../components/Timer";
import TrafficLights from "../components/TrafficLights/TrafficLights";

export default {
  name: "Yellow",

  data() {
    return {
      time: 3
    }
  },
  components: {
    Timer,
    TrafficLights
  },

  mounted() {
    // this.printNumbers(5 - 1, 0)
    this.$store.commit('printNumbers', {
      from: this.time - 1,
      to: 0,
      color: document.querySelector("[color=yellow]"),
      darkClass: "yellowDark"
    })
  },

  methods: {},

}

</script>

<style scoped lang="scss">

//.trafficLights {
//  margin: 0 auto;
//  background-color: #2c3e50;
//  height: 200px;
//  width: 70px;
//  border-radius: 50px;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  padding: 15px 0;
//  flex-direction: column;
//}
//
//.circle {
//  background-color: rgba(0, 0, 0, 0.3);
//  width: 40px;
//  height: 40px;
//  border-radius: 50%;
//}
//
//.red {
//  background-color: #d42f2f94;
//  box-shadow: 0 0 10px #d42f2f94;
//}
//
//.yellow {
//  background-color: #ffff2d;
//  box-shadow: 0 0 25px #ffff2d;
//}
//
//.green {
//  background-color: #4ac14a80;
//  box-shadow: 0 0 10px #4ac14a80;
//}
//
//.yellowDark {
//  background-color: #f3f38c66;
//  box-shadow: 0 0 25px #f3f38c66;
//}
</style>