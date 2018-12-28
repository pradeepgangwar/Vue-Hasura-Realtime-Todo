<template>
  <div class="footerList">
    <span> {{todos.length}} items left </span>
    <ul>
      <li v-on:click="$emit('filterResults', 'all')">
        <a :class="currentFilter === 'all' ? 'selected' : ''">All</a>
      </li>
      <li v-on:click="$emit('filterResults', 'active')">
        <a
          :class="
            currentFilter === 'active'
              ? 'selected removePaddLeft'
              : 'removePaddLeft'
          "
        >
          Active
        </a>
      </li>
      <li v-on:click="$emit('filterResults', 'completed')">
        <a
          :class="
            currentFilter === 'completed'
              ? 'selected removePaddLeft'
              : 'removePaddLeft'
          "
        >
          Completed
        </a>
      </li>
    </ul>
    <button v-if="type === 'private'" v-on:click="$emit('clearCompleted', type)" class="clearComp">
      {{clearInProgress ? "Clearing" : "Clear completed"}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'TodoFilters',
  props: {
    todos: Array,
    type: String,
    currentFilter: String,
    clearInProgress: Boolean
  }
}

</script>
