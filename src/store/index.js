import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../store/reducers/rootReducer';
import { todoWatcher } from "../store/saga/todoSaga";

const sagaMiddleware = createSagaMiddleware()
//создание стора                               подключение оболочки сага
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoWatcher)

console.log(store);