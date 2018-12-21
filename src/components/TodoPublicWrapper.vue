<template>
  <div class="todoWrapper">
      <todo-input v-bind:isPublic=true></todo-input>
      <todo-public-list></todo-public-list>
  </div>
</template>

<script>

import TodoInput from './TodoInput'
import TodoPublicList from './TodoPublicList'

export default {
  name: 'TodoPublicWrapper',
  data () {
    return {}
  },
  components: {
    TodoInput,
    TodoPublicList
  }
}

</script>
