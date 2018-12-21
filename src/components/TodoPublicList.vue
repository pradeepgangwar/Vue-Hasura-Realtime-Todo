<template>
    <div class="todoListwrapper">
      <ul>
        <todo-item v-for="todo in todos" :key="todo.id" v-bind:todo=todo></todo-item>
      </ul>
    </div>
    <!-- <TodoFilters
      todos={finalData}
      userId={userId}
      type={type}
      currentFilter={this.state.filter}
      filterResults={this.filterResults.bind(this)}
      clearInProgress={this.state.clearInProgress}
    /> -->
</template>

<script>

import { QUERY_PRIVATE_TODO } from '@/graphql'
import TodoItem from './TodoItem'
const userId = localStorage.getItem('sub')

export default {
  name: 'TodoPrivateList',
  data () {
    return {
      todos: []
    }
  },
  components: {
    TodoItem
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
