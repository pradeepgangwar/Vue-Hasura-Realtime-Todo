import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    publicTodos: [],
    privateTodos: [],
    currentPublicFilter: 'all',
    currentFilter: 'all',
    clearInProgress: false
  },
  mutations: {
    addPublicTodo (state, payload) {
      state.publicTodos = []
      state.publicTodos = state.publicTodos.concat(payload)
    },
    addPrivateTodo (state, payload) {
      state.privateTodos = []
      state.privateTodos = state.privateTodos.concat(payload)
    },
    changeFilter (state, payload) {
      state.currentFilter = payload
    },
    changePublicFilter (state, payload) {
      state.currentPublicFilter = payload
    },
    changeProgress (state, payload) {
      state.clearInProgress = payload
    }
  },
  getters: {
    publicTodos (state) {
      if (state.currentPublicFilter === 'active') {
        return state.publicTodos.filter(todo => todo.is_completed !== true)
      } else if (state.currentPublicFilter === 'completed') {
        return state.publicTodos.filter(todo => todo.is_completed === true)
      }
      return state.publicTodos
    },
    privateTodos (state) {
      if (state.currentFilter === 'active') {
        return state.privateTodos.filter(todo => todo.is_completed !== true)
      } else if (state.currentFilter === 'completed') {
        return state.privateTodos.filter(todo => todo.is_completed === true)
      }
      return state.privateTodos
    },
    currentFilter (state) {
      return state.currentFilter
    },
    currentPublicFilter (state) {
      return state.currentPublicFilter
    },
    clearInProgress (state) {
      return state.clearInProgress
    }
  }
})
