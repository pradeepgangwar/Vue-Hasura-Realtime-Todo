<template>
  <div class="footerList">
    <span> {{activeTodos.length}} items left </span>
    <ul>
      <li @click="filterResults('all')">
        <a :class="filter === 'all' ? 'selected' : ''">All</a>
      </li>
      <li @click="filterResults('active')">
        <a
          :class="
            filter === 'active'
              ? 'selected removePaddLeft'
              : 'removePaddLeft'
          "
        >
          Active
        </a>
      </li>
      <li @click="filterResults('completed')">
        <a
          :class="
            filter === 'completed'
              ? 'selected removePaddLeft'
              : 'removePaddLeft'
          "
        >
          Completed
        </a>
      </li>
    </ul>
    <button v-if="type === 'private'" @click="clearCompleted(type)" class="clearComp">
      {{clearInProgress ? "Clearing" : "Clear completed"}}
    </button>
  </div>
</template>

<script>

import { DELETE_TODO_FILTER } from '@/graphql'

export default {
  name: 'TodoFilters',
  props: {
    todos: Array,
    type: String,
    currentFilter: String
  },
  data () {
    return {
      activeTodos: this.todos.filter(todo => todo.is_completed !== true),
      clearInProgress: false,
      filter: this.currentFilter
    }
  },
  methods: {
    clearCompleted (type) {
      // mutation to delete all is_completed with is_public clause
      const isOk = window.confirm('Are you sure?')
      if (isOk) {
        this.clearInProgress = true
        const isPublic = type === 'public'
        this.$apollo
          .mutate({
            mutation: DELETE_TODO_FILTER,
            variables: {
              isPublic: isPublic
            }
          })
          .then(response => {
            this.clearInProgress = false
          })
          .catch(error => {
            this.clearInProgress = false
            console.error(error)
          })
      }
    },
    filterResults (type) {
      this.filter = type
    }
  }
}

</script>
