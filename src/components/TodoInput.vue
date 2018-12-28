<template>
  <div class="formInput">
    <input id="todoinput"
            @keyup.enter="onSubmit"
            class="input"
            type="text"
            v-model="todoinput"
            required
            placeholder="What needs to be done?">
    <i class="downArrow fa fa-angle-down" />
  </div>
</template>

<script>
import { MUTATION_TODO_ADD } from '@/graphql'

export default {
  name: 'TodoInput',
  props: {
    isPublic: Boolean
  },
  data () {
    return {
      selected: false,
      todoinput: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$apollo
        .mutate({
          mutation: MUTATION_TODO_ADD,
          variables: {
            objects: [
              {
                text: this.todoinput,
                user_id: localStorage.getItem('sub'),
                is_completed: false,
                is_public: this.isPublic
              }
            ]
          }
          // update: (store, { data: { insertTodos } }) => {
          //   const query = QUERY_PRIVATE_TODO
          //   const userId = localStorage.getItem('sub')
          //   try {
          //     if (!this.isPublic) {
          //       const data = store.readQuery({
          //         query: query,
          //         variables: { userId: userId }
          //       })
          //       const insertedTodo = insertTodos.returning
          //       console.log(data)
          //       data.todos.splice(0, 0, insertedTodo[0])
          //       store.writeQuery({
          //         query: query,
          //         variables: {
          //           userId: userId
          //         },
          //         data
          //       })
          //     }
          //   } catch (e) {
          //     console.error(e)
          //   }
          // }
        })
        .then(response => {
          this.todoinput = ''
        })
    }
  }
}
</script>
