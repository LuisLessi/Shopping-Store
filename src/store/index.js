import { createStore } from 'vuex'
import http from '../services/api'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products
    },

    loadBag(state, products) {
      state.productsInBag = products
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },

    removeToBag(state, product) {
      state.productsInBag = state.productsInBag.filter(item => item.id !== product.id);
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
  },
  actions: {
    loadProducts({ commit }) {
      http.get().then(response => {
        commit('loadProducts', response.data)
      })
    },

    loadBag({ commit }) {
      if (localStorage.getItem('productsInBag')) {
        commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")))
      }
    },

    addToBag({ commit }, product) {
      commit('addToBag', product)
    },

    removeToBag({ commit }, productId) {
      if (confirm('Are you sure you want to remove the item from bag ?')) {
        commit('removeToBag', productId)
      }
    },
  },
  modules: {
  }
})
