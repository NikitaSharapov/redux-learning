import './App.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {addTodoInListAction} from '../src/store/reducers/todoListReducer'
import {delTodoInListAction} from '../src/store/reducers/todoListReducer'

import {fetchTodo} from '../src/store/actionThunk/serverTodo'

function App() {
  //хук для диспача(обрашение к состоянию) и селекта(выбор состояния)
  const dispatch = useDispatch();
  const cash = useSelector(state => state.reducer.cash);

  const title = useSelector(state => state.todoReducer.title);
  const desc = useSelector(state => state.todoReducer.desc);

  const list = useSelector(state => state.listTodoReducer.list)
  console.log(list);

  //экшены
  const addCash = ()=>{
    dispatch({type: "ADD_CASH", payload: 1})
  }

  const getCash = ()=>{
    dispatch({type: "GET_CASH", payload: 1})
  }

  const inputCash = (cash)=>{
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const addTodo = (title, desc) =>{
    dispatch({type: "ADD_TODO", payload: {title, desc}})
  }

  const deleteTodo = (title, desc) =>{
    dispatch({type: "DEL_TODO", payload: {title, desc}})
  }

  
  const addTodoInList = (title, desc) =>{
    const todo = {
      title,
      desc,
      id: Date.now(),
    }
    dispatch(addTodoInListAction(todo))
  }

  const remTodoInList = (todo) =>{
    dispatch(delTodoInListAction(todo.id))
  }

  return (
    <div className="App">
      <div className="cash">Счётчик {cash}</div>
      <button onClick={()=>addCash()}>+</button>
      <button onClick={()=>getCash()}>-</button>
      <button onClick={()=>inputCash(Number(prompt()))}>Ввод</button>
      <p>Задача</p>
      <button onClick={()=>addTodo(prompt('Введите заголовок задачи'), prompt('Введите описание задачи'))} >Добавить задачу</button>
      <button onClick={()=>deleteTodo('Пусто!')} >Удалить задачу</button>
      <div className="todo">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <p>Список задач</p>
      <button onClick={()=>addTodoInList(prompt('Введите заголовок задачи'), prompt('Введите описание задачи'))} >Добавить задачу</button>
      <div>
      {list.length > 0 ? 
        <div className="todo" >
          {list.map(todo=>
          <div onClick={()=>remTodoInList(todo)}> 
          <p className="title">{todo.title}</p>
          <p className="desc">{todo.desc}</p>
          </div>
          )}
          
        </div> 
      : 
      <div className="todo"> 
        <p className="title">Задач нет</p>
      </div> 
      }
      </div>
      <p>Список задач из базы</p>
      <button onClick={()=>dispatch(fetchTodo())} >Добавить задачи</button>
      <div>
      {list.length > 0 ? 
        <div className="todo" >
          {list.map(todo=>
          <div onClick={()=>remTodoInList(todo)}> 
          <p className="title">{todo.title}</p>
          <p className="desc">{todo.desc}</p>
          </div>
          )}
          
        </div> 
      : 
      <div className="todo"> 
        <p className="title">Задач нет</p>
      </div> 
      }
      </div>
    </div>
  );
}

export default App;
