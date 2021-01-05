const defaultState = {
  title: 'Пусто!',
  desc: '',
}
// редюсер
export const todoReducer = (state = defaultState, action)=>{
  switch (action.type) {
    case "ADD_TODO":

      return {...state, title: state.title = action.payload.title, desc: state.desc = action.payload.desc}
    case "DEL_TODO":

      return {...state, title: state.title = action.payload.title, desc: state.desc = action.payload.desc}
    default:
      return state
  }
}