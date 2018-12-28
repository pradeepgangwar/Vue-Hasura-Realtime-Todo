<template>
    <div class="todoListwrapper">
      <ul>
        <todo-item v-for="todo in todos[0]" :key="todo.id" v-bind:todo=todo></todo-item>
        <todo-filters
          v-bind:todos=todos
          type='public'
          v-bind:currentPublicFilter=currentPublicFilter
          v-on:filterResults="filterResults"
        ></todo-filters>
      </ul>
    </div>
</template>

<script>

import { QUERY_PUBLIC_TODO_ALL } from '@/graphql'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'

export default {
  name: 'TodoPublicList',
  computed: {
    todos () {
      return this.$store.getters.publicTodos
    },
    currentPublicFilter () {
      return this.$store.getters.currentPublicFilter
    }
  },
  components: {
    TodoItem,
    TodoFilters
  },
  methods: {
    filterResults (type) {
      this.$store.commit('changePublicFilter', type)
    }
  },
  apollo: {
    $subscribe: {
      todosQuery: {
        query: QUERY_PUBLIC_TODO_ALL,
        result (data) {
          this.$store.commit('addPublicTodo', data.data.todos)
        }
      }
    }
  }
}

</script>
