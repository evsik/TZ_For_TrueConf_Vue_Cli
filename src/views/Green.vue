<template>
  <div>
    <TrafficLights></TrafficLights>
    <Timer></Timer>
  </div>
</template>

<script>
import Timer from "../components/Timer";
import TrafficLights from "../components/TrafficLights/TrafficLights";

export default {
  name: "Green",

  data() {
    return {
      time: 15
    }
  },
  components: {
    Timer,
    TrafficLights
  },


  mounted() {
    this.$store.commit('onTrafficLights', {
      from: this.time - 1,
      to: 0,
      color: document.querySelector("[color=green]"),
      class: "green"
    })
  },

  methods: {
  },
}
</script>

<style scoped lang="scss">

</style>