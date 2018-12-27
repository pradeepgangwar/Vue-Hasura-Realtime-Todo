<template>
  <div class="todoListwrapper">
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" v-bind:todo=todo></todo-item>
      <todo-filters v-bind:todos=todos type='private' currentFilter='all'></todo-filters>
    </ul>
  </div>
</template>

<script>

import { QUERY_PRIVATE_TODO } from '@/graphql'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
const userId = localStorage.getItem('sub')

export default {
  name: 'TodoPrivateList',
  data () {
    return {
      todos: []
    }
  },
  components: {
    TodoItem,
    TodoFilters
  },
  apollo: {
    $subscribe: {
      todosQuery: {
        query: QUERY_PRIVATE_TODO,
        variables: {
          userId: userId
        },
        result (data) {
          this.todos = data.data.todos
        }
      }
    }
  }
}

</script>
