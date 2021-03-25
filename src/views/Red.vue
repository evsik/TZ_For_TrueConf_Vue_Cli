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
  name: "Red",

  data() {
    return {
      time: 10
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
      color: document.querySelector("[color=red]"),
      class: "red"
    })
  },

  methods: {
  },

}

</script>

<style scoped lang="scss">

</style>