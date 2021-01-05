const defaultState = {
  cash: 0,
}

console.log("defaultState ", defaultState.cash);

export const reducer = (state = defaultState, action)=>{
  switch (action.type) {
    case "ADD_CASH":

      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":

      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}