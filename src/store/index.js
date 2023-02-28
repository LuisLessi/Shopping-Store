import { createStore } from 'vuex'
import http from '../services/api'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    },

    addToBag(state, product){
      state.productsInBag.push(product)
    }
  },
  actions: {
    loadProducts({ commit }){
      http.get().then( response => {
        commit('loadProducts', response.data)
      })
    },

    addToBag({ commit }, product){
      commit('addToBag', product)
    }
  },
  modules: {
  }
})
