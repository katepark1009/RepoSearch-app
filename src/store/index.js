import { createStore } from 'redux';

const initialState = {
  count: 3,
  inputVal:''
}

function reducer(state = initialState, action){
  console.log('reducer', action, 'state: ', state)
  switch(action.type){
    case 'INCREMENT': 
      return {
        ...state,
        count: state.count +1
      }
    case 'DECREMENT': 
      return {
        ...state,
        count: state.count -1
    }
    case 'INPUT_CHANGED': 
      return {
        ...state,
        inputVal: action.text
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
