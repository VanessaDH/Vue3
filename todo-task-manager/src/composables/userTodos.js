import { ref, onMounted } from 'vue'

export function useTodos(){
    //Step 1: Create the Source Variables such as the Array, error, loading status
    const todos = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    async function fetchTodos(){
        //Where in the LifeCycle this func will be triggered
        isLoading.value = true
        error.value = null
       try{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            todos.value = await res.json()
       }catch(e){
            error.value = e.message
       }finally{
            isLoading.value = false
       }
    }
    onMounted(fetchTodos)
    return {todos, isLoading, error, fetchTodos}
}