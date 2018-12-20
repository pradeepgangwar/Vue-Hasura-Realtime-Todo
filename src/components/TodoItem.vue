<template>
    <tr :key="todo.id">
        <td align="center">
            <b-form-checkbox id="checkbox1"
                v-model="todo.is_completed"
                value="accepted"
                nchecked-value="not_accepted"
                @change="updateTodo(todo)" >
            </b-form-checkbox>
        </td>
        <td align="center" v-if="todo.is_completed != false"> <strike>{{todo.text}}</strike> </td>
        <td align="center" v-else>{{todo.text}}</td>
        <td align="center"> <b-button size="sm" variant="danger" @click="deleteTodo(todo)">X</b-button> </td>
    </tr>
</template>

<script>

import { MUTATION_TODO_UPDATE, MUTATION_TODO_DELETE } from '@/graphql'

export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  methods: {
    updateTodo (todo) {
      var update = new Date()
      update = update.toISOString()
      this.$apollo
        .mutate({
          mutation: MUTATION_TODO_UPDATE,
          variables: {
            todoId: todo.id,
            set: {
              updated_at: update,
              is_completed: !todo.is_completed
            }
          }
        })
        .then(response => {
          // do nothing
        })
    },
    deleteTodo (todo) {
      this.$apollo
        .mutate({
          mutation: MUTATION_TODO_DELETE,
          variables: {
            todoId: todo.id
          }
        })
        .then(response => {
          // do nothing
        })
    }
  }
}

</script>
