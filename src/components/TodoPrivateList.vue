<template>
  <div class="todoWrapper">
    <!-- <TodoInput userId={userId} type="private" /> -->
    <div class="todoListwrapper">
      <ul>
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          type={type}
          userId={userId}
        />
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
    <TodoPrivateList userId={userId} type="private" />
  </div>
  <!-- <div class="row">
    <div class="col-sm-10 offset-sm-1">
      <table class="table table-hover table-bordered table-striped" v-if="todos.length > 0">
        <thead>
          <tr>
            <th class="table-dark" colspan="3" style="text-align:center">Personal Todos</th>
          </tr>
        </thead>
        <tbody>
          <todo-item v-for="todo in todos" :key="todo.id" v-bind:todo=todo></todo-item>
        </tbody>
      </table>
      <table class="table table-hover table-warning table-striped" v-else>
        <thead>
          <tr>
            <th class="table-dark" colspan="4" style="text-align:center">Horray! No pending tasks. grab a cup of coffee and enjoy!</th>
          </tr>
        </thead>
      </table>
    </div>
  </div> -->
</template>

<script>

import { QUERY_PRIVATE_TODO } from '@/graphql'
import TodoItem from './TodoItem'
const userId = localStorage.getItem('sub')

export default {
  name: 'TodoPrivateList',
  data () {
    return {
      todo: []
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
          this.todo = data.data.todos
        }
      }
    }
  }
}

</script>
