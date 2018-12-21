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
        })
        .then(response => {
          this.todoinput = ''
        })
    }
  }
}
</script>
