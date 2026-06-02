export async function postTodo(title){
    //Send a POST request -> fetch() + await
    
        const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, completed: false, userId: 1 }),
            }
        )

        if(!response.ok){
            throw new Error(`POST request failed: ${response.status}`)
        }

        return response.json()
    
}