import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [],
    currentFilter: 'all',
    clearInProgress: false
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    },
    changeFilter (state, payload) {
      state.currentFilter = payload
    },
    changeProgress (state, payload) {
      state.clearInProgress = payload
    }
  },
  getters: {
    todos (state) {
      if (state.currentFilter === 'active') {
        return state.todos.filter(todo => todo.is_completed !== true)
      } else if (state.currentFilter === 'completed') {
        return state.todos.filter(todo => todo.is_completed === true)
      }
      return state.todos
    },
    currentFilter (state) {
      return state.currentFilter
    },
    clearInProgress (state) {
      return state.clearInProgress
    }
  }
})
