<script setup>
  import { ref, computed } from 'vue'
  
  import FrameworksOverview from './components/FrameworksOverview.vue'
  import TodoFilter from './components/TodoFilter.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'

  import { useTodos } from './composables/userTodos.js'
  import { postTodo } from './composables/userTodoPost.js'
  import { patchTodo, deleteTodo } from './composables/userTodoCRUD.js'

  const {todos, isLoading, error} = useTodos()

  const filterText = ref('') // related to TodoFilter

  const filteredTodos = computed( () =>{
    return todos.value.filter( t =>{
      return t.title.toLowerCase().includes(filterText.value.toLowerCase())
    })
  })

  async function handleToggle(id){
    const todo = todos.value.find( t => t.id === id)
    //send a patch request!
    await patchTodo(id, {completed : !todo.completed})
    todo.completed = !todo.completed
  }

  async function handleDelete(id){
    // Send a Delete request
    await deleteTodo(id)
    todos.value = todos.value.filter( t => t.id !== id)
  }

  //const lastAddedTitle = ref('') 
  // -- used as a placeholder for the Todo title in the earlier progress 
  // when creating the TodoInput component
  async function handleAdd(title){
    //Send a POST request
    const created = await postTodo(title)
    // update the current todos array 
    todos.value.unshift({...created, id : Date.now()})
    console.log(created)
  }
 </script>

<template>
  <main class="app">
    <header class="app-header">
      <h1>Vue TODO</h1>
      <p class="subtitle">A Full-Stack-Style app built topic by topic</p>
    </header>
    
    <FrameworksOverview />

    <section class="todo-section">
      <div 
        v-if="isLoading"
        class="status loading"
      >
      Loading Todos . . .
      </div>
      <div v-else-if="error" class="status error"> 
        {{ error }}
      </div>

      <template v-else>
        <TodoFilter @filter-change="filterText = $event" /> <!-- v-on for the customised event--> 
        <TodoInput @add-todo="handleAdd" />
        <TodoList :todos="filteredTodos" @toggle-todo="handleToggle" @delete-todo="handleDelete"/>
      </template>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
