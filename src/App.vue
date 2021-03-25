<template>
  <div id="app">
    <router-view>
      {{ changeColors }}
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      colors: ['red', 'yellow', 'green'],
      intervals: [10000, 3000, 15000],
    }
  },

  computed: {
    changeColors() {
      if (this.$route.path === `/${this.colors[0]}`) {
        this.changeTimer(this.intervals[0], this.colors[1])
      } else if (this.$route.path === `/${this.colors[1]}`) {
        this.changeTimer(this.intervals[1], this.colors[2])
      } else {
        this.changeTimer(this.intervals[2], this.colors[0])
      }
    }
  },

  mounted() {

  },

  methods: {
    changeTimer(time, page) {
      setTimeout(
          () => {
            this.$router.push(`/${page}`)
          }, time
      )
    },
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
