<template>
  <div class="row mt-2">
    <div class="col p-0">
      <span @click="filterDone">Filter Done</span>
      <span @click="filterUndone">Filter Undone</span>
      <span @click="showAll">Show All</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoFilters',
  methods: {
    ...mapActions(['filterDone', 'filterUndone', 'showAll'])
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
</style>
