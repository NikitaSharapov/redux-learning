import { applyMiddleware, createStore } from 'redux';
import thunk  from 'redux-thunk';
import { rootReducer } from '../store/reducers/rootReducer';

//создание стора                               подключение оболочки санк
export const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store);