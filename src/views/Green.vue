<template>
  <div>
    <div class="trafficLights">
      <div class="circle red" color="red"></div>
      <div class="circle yellow" color="yellow"></div>
      <div class="circle green" color="green"></div>
    </div>
    <Timer></Timer>
  </div>
</template>

<script>
import Timer from "../components/Timer";

export default {
  name: "Green",

  data() {
    return {
      time: 15
    }
  },
  components: {
    Timer
  },


  mounted() {
    // this.printNumbers(5 - 1, 0)
    this.$store.commit('printNumbers', {
      from: this.time - 1,
      to: 0,
      color: document.querySelector("[color=green]"),
      darkClass: "greenDark"
    })
  },

  methods: {
    // printNumbers(from, to) {
    //   let current = from;
    //   let path = document.getElementById("countdown")
    //
    //   let timerId = setInterval(function () {
    //     path.innerHTML = current;
    //     if (current == to) {
    //       clearInterval(timerId);
    //     }
    //     current--;
    //   }, 1000);
    // }
  },
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

.circle {
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.red {
  background-color: #d42f2f94;
  box-shadow: 0 0 10px #d42f2f94;
}

.yellow {
  background-color: #f3f38c66;
  box-shadow: 0 0 10px #f3f38c66;
}

.green {
  background-color: #1eb51e;
  box-shadow: 0 0 25px #1eb51e;
}

.greenDark {
  background-color: #4ac14a80;
  box-shadow: 0 0 25px #4ac14a80;
}
</style>