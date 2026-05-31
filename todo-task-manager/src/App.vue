<script setup>
  import FrameworksOverview from './components/FrameworksOverview.vue'
  import TodoFilter from './components/TodoFilter.vue'
  import TodoInput from './components/TodoInput.vue'

  import { ref } from 'vue'
  const filterText = ref('')

  const lastAddedTitle = ref('')
  function handleTodo(title){
    lastAddedTitle.value = title
    console.log(lastAddedTitle.value)
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
      <TodoFilter @filter-change="filterText = $event" /> <!-- v-on for the customised event--> 
      <TodoInput @add-todo="handleTodo" />
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
