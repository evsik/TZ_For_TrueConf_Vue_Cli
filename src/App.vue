<template>
  <div id="app">
    <div id="nav">
      <router-link to="/red">Red</router-link>
      |
      <router-link to="/yellow">Yellow</router-link>
      |
      <router-link to="/green">Green</router-link>
    </div>
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
      intervals: [4000, 3000, 5000],
      active: true
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
    updateCountdown(time) {
      // const countDownEl = document.getElementById("countdown")
      // countDownEl.innerHTML = time
      // time--
      // console.log(time)
    }
  }
}

</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
