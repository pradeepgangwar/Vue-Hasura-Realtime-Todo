<template>
  <div class="todoListwrapper">
    <ul>
      <todo-item v-for="todo in todos[0]" :key="todo.id" v-bind:todo=todo></todo-item>
      <todo-filters
        v-bind:todos=todos
        type='private'
        v-bind:currentFilter=currentFilter
        v-bind:clearInProgress=clearInProgress
        v-on:filterResults="filterResults"
        v-on:clearCompleted="clearCompleted"
      ></todo-filters>
    </ul>
  </div>
</template>

<script>

import { QUERY_PRIVATE_TODO, DELETE_TODO_FILTER } from '@/graphql'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
const userId = localStorage.getItem('sub')

export default {
  name: 'TodoPrivateList',
  // data () {
  //   return {
  //     todos: []
  //   }
  // },
  computed: {
    todos () {
      return this.$store.getters.todos
    },
    currentFilter () {
      return this.$store.getters.currentFilter
    },
    clearInProgress () {
      return this.$store.getters.clearInProgress
    }
  },
  components: {
    TodoItem,
    TodoFilters
  },
  methods: {
    clearCompleted (type) {
      console.log('Hi from clear')
      // mutation to delete all is_completed with is_public clause
      const isOk = window.confirm('Are you sure?')
      if (isOk) {
        this.$store.commit('changeProgress', true)
        const isPublic = type === 'public'
        this.$apollo
          .mutate({
            mutation: DELETE_TODO_FILTER,
            variables: {
              isPublic: isPublic
            }
          })
          .then(response => {
            this.$store.commit('changeProgress', false)
          })
          .catch(error => {
            this.$store.commit('changeProgress', false)
            console.error(error)
          })
      }
    },
    filterResults (type) {
      this.$store.commit('changeFilter', type)
    }
  },
  apollo: {
    $subscribe: {
      todosQuery: {
        query: QUERY_PRIVATE_TODO,
        variables: {
          userId: userId
        },
        result (data) {
          this.$store.commit('addTodo', data.data.todos)
        }
      }
    }
  }
}

</script>
