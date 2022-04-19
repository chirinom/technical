<template>
  <div id="app" class="container">
    <h2>My Todo list</h2>
    <div>Done todos: {{ doneTodos }}</div>
    <TodoInput/>
    <TodoFilters/>
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoFilters from './components/TodoFilters.vue'
import TodoList from './components/TodoList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoFilters,
    TodoList
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters(['doneTodos'])
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
