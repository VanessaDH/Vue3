<script setup>
defineEmits(['toggle-todo', 'delete-todo'])
defineProps({
    todos : {
        type: Array,
        required: true
    }
})
</script>


<template>
  <ul class="todo-list">
    <li v-if="todos.length === 0" class="empty-state">
      No todos yet — add one above!
    </li>

    <li v-else v-for="todo in todos" :key="todo.id" class="todo-item">
      <input 
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
      />
      <span :class="{ done : todo.completed}">{{ todo.title }}</span>

      <button 
        class="delete-btn"
        @click="$emit('delete-todo', todo.id)"
        >✕</button>
    </li>
  </ul>
</template>