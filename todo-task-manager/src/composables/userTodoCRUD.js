export async function patchTodo(id, updates){
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(updates)
        }
    )

    if(!response.ok){
        throw new Error(`PATCH request Failed: ${response.status}`)
    }

    return response.json()
}


// delete function
export async function deleteTodo(id){
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: 'DELETE',
        }
    )
    if(!response.ok){
        throw new Error(`DELETE request Failed: ${response.status}`)
    }

    return true

}