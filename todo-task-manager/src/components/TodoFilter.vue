<script setup>
  import {ref, watch} from 'vue'
  const filterText = ref('')

  const emit =defineEmits(['filter-change'])

  watch(filterText, (val) => {
    emit('filter-change', val) //Emitting the event to the parent component
  })
</script>

<template>
  <div class="todo-filter">
    <label>Filter todos:</label>
    <input v-model="filterText" placeholder="Search…" /> <!--v-Model to be used-->
    <span class="filter-hint">Showing: "{{ filterText  || 'All'}}"</span>
  </div>
</template>

<style scoped>
</style>