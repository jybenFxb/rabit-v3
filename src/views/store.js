import Vue from 'vue'
export const state = Vue.observable({
  screenCars: { a: 'kevin' }
})
export const mutations = {
  updateScreenCars(payload) {
    state.screenCars = Object.assign({}, payload)
  }
}
