import { combineReducers } from 'redux';
import {reducer} from './cashReducer';
import {todoReducer} from '../reducers/todoReducer'
import {listTodoReducer} from '../reducers/todoListReducer'

export const rootReducer = combineReducers({
  reducer,
  todoReducer,
  listTodoReducer
})