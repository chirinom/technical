<template>
  <div id="app" class="container">
    <h2>My Todo list</h2>
    <TodoInput/>
    <TodoFilters/>
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoFilters from './components/TodoFilters.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoFilters,
    TodoList
  }
}
</script>

<style>
#app {
  width: 700px;
  padding-top: 33px;
}
.btn-primary {
  min-width: fit-content;
}
</style>
