<template>
  <div class="row">
    <div class="col-6">
        <input v-model="input" class="form-control" />
    </div>
    <div class="col">
      <button
          class="btn btn-primary"
          @click="setAddTodo(input)"
      >
          Add todo
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoInput',
  components: {
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    setAddTodo (input) {
      this.addTodo(input)
    }
  }
}
</script>

<style>
</style>
