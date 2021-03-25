import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        onTrafficLights(state, payload) {
            let current = payload.from
            let path = document.getElementById("countdown")
            let light = payload.color

            light.classList.add(payload.class)

            let timerId = setInterval(function () {
                path.innerHTML = current
                if (current == payload.to) {
                    clearInterval(timerId)
                } else if (current <= 3) {
                    light.classList.toggle(payload.class)
                }
                current--
            }, 1000)
        },
    },
    actions: {}
    ,
    modules: {}
})
