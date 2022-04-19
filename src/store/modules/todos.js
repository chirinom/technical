const state = {
  todos: [],
  ttodos: []
}
const getters = {
  allTodos: (state) => state.todos,
  doneTodos: (state) => {
    return state.ttodos.filter((todo) => todo.isDone).length
  }
}
const actions = {
  addTodo ({ commit }, input) {
    commit('ADD_TODO', input)
  },
  removeTodo ({ commit }, index) {
    commit('REMOVE_TODO', index)
  },
  updateTodo ({ commit }, todo) {
    commit('UPDATE_TODO', todo)
  },
  filterDone ({ commit }) {
    commit('FILTER_DONE')
  },
  filterUndone ({ commit }) {
    commit('FILTER_UNDONE')
  },
  showAll ({ commit }) {
    commit('SHOW_ALL')
  }
}
const mutations = {
  ADD_TODO (state, input) {
    state.todos.push({
      id: state.todos.length + 1,
      name: input,
      isDone: false
    })
    state.ttodos = state.todos
  },
  REMOVE_TODO (state, index) {
    state.todos.splice(index, 1)
    state.ttodos = state.todos
  },
  UPDATE_TODO (state, todo) {
    const index = state.todos.findIndex((t) => t.id === todo.id)
    state.todos[index] = {
      ...state.todos[index],
      name: todo.name
    }
  },
  FILTER_DONE (state) {
    state.todos = state.ttodos.filter((todo) => todo.isDone)
  },
  FILTER_UNDONE (state) {
    state.todos = state.ttodos.filter((todo) => !todo.isDone)
  },
  SHOW_ALL (state) {
    state.todos = state.ttodos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
