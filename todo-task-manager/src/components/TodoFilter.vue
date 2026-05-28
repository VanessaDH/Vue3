<script setup>
  import {ref} from 'vue'
  const filterText = ref('')

  const emit =defineEmits(['filter-change'])

</script>

<template>
  <div class="todo-filter">
    <label>Filter todos:</label>
    <input placeholder="Search…" /> <!--v-Model to be used-->
    <span class="filter-hint">Showing: ""</span>
  </div>
</template>

<style scoped>
</style>