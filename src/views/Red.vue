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
      time: 10,
      setStorage: localStorage.setItem('test', "6"),
      getStorage: localStorage.getItem('test')
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
    // this.onTrafficLights(0)
  },

  methods: {
    // onTrafficLights(to) {
    //   let current = localStorage.getItem('test')
    //   current = +current
    //   let path = document.getElementById("countdown")
    //   let light = document.querySelector("[color=red]")
    //
    //   light.classList.add("red")
    //
    //   let timerId = setInterval(function () {
    //
    //     path.innerHTML = current
    //     console.log(current)
    //
    //     if (current == to) {
    //       clearInterval(timerId)
    //     } else if (this.time <= 3) {
    //       light.classList.toggle("red")
    //     }
    //     current--
    //     return localStorage.setItem('test', current)
    //   }, 1000)
    // },
  },

}

</script>

<style scoped lang="scss">

</style>