<template>
  <div class="row">
    <div class="container col-md-5">
      <new-todo v-bind:isPublic=true></new-todo>
      <br>
      <private-todos></private-todos>
    </div>
  </div>
</template>

<script>

import NewTodo from './NewTodo'
import PrivateTodos from './PrivateTodos'

export default {
  name: 'Dashboard',
  props: ['auth', 'authenticated'],
  data () {
    return {}
  },
  components: {
    NewTodo,
    PrivateTodos
  }
}

</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0

;
    left: 0;
    right: 0;
  }
</style>
