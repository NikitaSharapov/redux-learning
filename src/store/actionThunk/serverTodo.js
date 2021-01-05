import {addTodoInListThunkAction} from '../reducers/todoListReducer'

// action thunk 
export const fetchTodo = ()=>{
  return dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => dispatch(addTodoInListThunkAction(json)))
  }
}