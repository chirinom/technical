<template>
  <div class="row mt-3">
    <div class="col p-0">
      <span @click="filterDone">Filter Done</span>
      <span @click="filterUndone">Filter Undone</span>
      <span @click="showAll">Show All</span>
      <input @change="searchList" type="text" placeholder="Search by todo name..">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoFilters',
  methods: {
    ...mapActions(['filterDone', 'filterUndone', 'showAll', 'searchList'])
  },
  data () {
    return {
      searchInput: ''
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
  margin: 8px 12px;
  font-size: 12px;
  &:hover {
    font-weight: bold;
  }
}
input {
  border-radius: 4px;
  border-width: 1px;
  margin-left: 6px;
}
</style>
