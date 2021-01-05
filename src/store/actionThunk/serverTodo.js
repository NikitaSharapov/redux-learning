
// action saga
export const fetchTodo = ()=>{
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => response.json())
}