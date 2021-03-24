import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colors: ['red', 'yellow', 'green'],
        intervals: [4, 3, 5],
    },
    mutations: {
        printNumbers(state, payload) {
            let current = payload.from;
            let path = document.getElementById("countdown")
            console.log(payload.from, payload.to)

            let timerId = setInterval(function () {
                path.innerHTML = current;
                if (current == payload.to) {
                    clearInterval(timerId);
                }
                current--;
            }, 1000);
        }
    },
    actions: {},
    modules: {}
})
