<template>
  <div class="formInput">
    <!-- <b-form @submit.prevent="onSubmit"> -->
      <input id="todoinput"
                    class="input"
                    type="text"
                    v-model="todoinput"
                    required
                    placeholder="What needs to be done?">
    <!-- </b-form> -->
    <i class="downArrow fa fa-angle-down" />
  </div>
  <!-- <div class="row">
    <div class="col-sm-4 offset-sm-4 text-center">
      <b-form @submit.prevent="onSubmit">

        <b-form-group id="todo"
                      label="Add New Todo:"
                      label-for="todoinput">
          <br>
          <b-form-input id="todoinput"
                        type="text"
                        v-model="todoinput"
                        required
                        placeholder="Add new todo">
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div> -->
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
          // Lets Do something
        })
    }
  }
}
</script>
