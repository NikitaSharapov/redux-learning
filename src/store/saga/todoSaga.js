import { put, takeEvery, call } from "redux-saga/effects";
import {fetchTodo} from '../actionThunk/serverTodo'
import {ADD_TODO_IN_LIST_SAGA , addTodoInListSagaAction} from '../reducers/todoListReducer'

function* todoWorker(){
  const data = yield call(fetchTodo)
  console.log('data ', data);
  yield put(addTodoInListSagaAction(data))
}

export function* todoWatcher(){
  yield takeEvery(ADD_TODO_IN_LIST_SAGA, todoWorker)
}