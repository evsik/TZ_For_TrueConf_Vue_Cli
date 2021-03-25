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
    this.$store.commit('onTrafficLights', {
      from: this.time - 1,
      to: 0,
      color: document.querySelector("[color=yellow]"),
      class: "yellow"
    })
  },

  methods: {},

}

</script>

<style scoped lang="scss">


</style>