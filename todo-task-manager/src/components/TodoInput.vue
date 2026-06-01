<script setup>
    import {ref} from 'vue'

    const emit = defineEmits(['add-todo'])

    const newTitle = ref('')

    function addTodo(){
        if(!newTitle.value.trim()) return
        emit('add-todo', newTitle.value.trim())
        newTitle.value =''
    }
</script>

<template>
  <div class="todo-input">
    <input
        :value="newTitle" 
        @keyup.enter="addTodo" 
        @input="newTitle =$event.target.value"
        placeholder="What needs to be done?" />
    <button @click="addTodo">Add</button>
  </div>
</template>


