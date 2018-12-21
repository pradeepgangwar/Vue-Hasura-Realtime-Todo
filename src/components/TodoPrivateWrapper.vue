<template>
    <div class="todoWrapper">
       <todo-input v-bind:isPublic=false></todo-input>
       <!-- <todo-private-list></todo-private-list> -->
    </div>
</template>

<script>

import TodoInput from './TodoInput'
import TodoPrivateList from './TodoPrivateList'

export default {
  name: 'TodoPrivateWrapper',
  data () {
    return {}
  },
  components: {
    TodoInput,
    TodoPrivateList
  }
}

</script>
