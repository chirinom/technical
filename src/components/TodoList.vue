<template>
  <div class="hello">
    <ul class="list-group mt-3">
      <li
        class="list-group-item"
        v-for="(todo, index) in allTodos"
        :key="index"
      >
        <div class="row justify-content-between align-items-center">
          <div class="col-6">
            <div v-if="isEditing === index">
                <input v-model="todo.name" />
            </div>
            <div v-else>
              <s v-if="todo.isDone">
                  {{ todo.name }}
              </s>
              <div v-else>
                  {{ todo.name }}
              </div>
            </div>
          </div>
          <div class="col-3 d-flex justify-content-between">
            <input
              type="checkbox"
              v-model="todo.isDone"
              class="mt-3"
            />
            <button
              class="btn btn-warning btn-small ms-2"
              @click="
                setUpdateTodo(todo);
                handleUpdate(index);
              "
            >
            {{ isEditing === index ? "Save" : "Edit" }}
            </button>
            <button
              class="btn btn-danger btn-small ms-2"
              @click="setRemoveTodo(index)"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data () {
    return {
      isEditing: null
    }
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
  methods: {
    ...mapActions(['removeTodo', 'updateTodo']),
    setRemoveTodo (index) {
      this.removeTodo(index)
    },
    setUpdateTodo (todo) {
      this.updateTodo(todo)
    },
    handleUpdate (index) {
      if (this.isEditing === index) {
        this.isEditing = null
        return
      }
      this.isEditing = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
