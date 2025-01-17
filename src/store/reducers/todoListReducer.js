// дефолтное состояние для редюсера
const defaultState ={
  list: []
}

console.log('list_def', defaultState);

//константы (для удобста и котнтроля над ошикбами)
const ADD_TODO_IN_LIST = "ADD_TODO_IN_LIST";
const DEL_TODO_IN_LIST = "DEL_TODO_IN_LIST";
const ADD_TODO_IN_LIST_THUNK = "ADD_TODO_IN_LIST_THUNK";

//редюсер
export const listTodoReducer =(state=defaultState, action)=>{
  switch (action.type){
    // case ADD_TODO_IN_LIST: тип для редюсера
    case ADD_TODO_IN_LIST:
      return {...state, list: [...state.list, action.payload]  }

      case DEL_TODO_IN_LIST:
        return {...state, list: state.list.filter(todo => todo.id !== action.payload)  }

      case ADD_TODO_IN_LIST_THUNK:
          console.log("ac", action.payload);
          return {...state, list: [...state.list, ...action.payload]  }
    default:
      return state
  }
}
//Action creators
export const addTodoInListAction = (payload) =>({type: ADD_TODO_IN_LIST, payload});
export const delTodoInListAction = (payload) =>({type: DEL_TODO_IN_LIST, payload});
export const addTodoInListThunkAction = (payload) =>({type: ADD_TODO_IN_LIST_THUNK, payload});