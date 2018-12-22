<template>
  <li :key="todo.id">
    <div v-if="todo.is_public == true" class="userInfoPublic" :title=todo.user.name>
      {{todo.user.name.charAt(0).toUpperCase()}}
    </div>
    <div class="view" @click="updateTodo(todo)">
      <!-- if todo completed -->
      <div class="round" v-if="todo.is_completed == true">
        <input
          :checked=todo.is_completed
          type="checkbox"
          :id=todo.id
          @change="updateTodo(todo)"
        />
        <label :htmlFor=todo.id />
      </div>
      <!--else-->
      <div class="round" v-else>
        <input
          type="checkbox"
          :checked=todo.is_completed
          :id=todo.id
          @change="updateTodo(todo)"
        />
        <label :htmlFor=todo.id />
      </div>
    </div>
    <div class="labelContent">
      <!-- if todo completed -->
      <strike class="todoLabel" v-if="todo.is_completed == true">
        <div>
          {{todo.text}}
        </div>
      </strike>
      <!-- else -->
      <div v-else>
        {{todo.text}}
      </div>
    </div>
    <button
      class="closeBtn"
      @click="deleteTodo(todo)"
    >
      x
    </button>
  </li>
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
