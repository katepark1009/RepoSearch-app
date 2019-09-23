import { createStore } from 'redux';
import constants from '../constants';

const initialState = {
  count: 3,
  inputVal:'',
  inputText: '',
  items: []
}

function reducer(state = initialState, action){
  console.log('reducer', action, 'state: ', state)
  switch(action.type){
    case constants.INCREMENT: 
      return {
        ...state,
        count: state.count +1
      }
    case constants.DECREMENT: 
      return {
        ...state,
        count: state.count -1
    }
    case constants.INPUT_CHANGED: 
      return {
        ...state,
        inputVal: action.text
    }
    case constants.LIST_ITEM:
      return {
        ...state,
        inputText: action.text
    }
    case constants.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(state.inputText),
        inputText: ''
      }
    case constants.DELETE_ITEM:
      const copy = state.items.slice();
      copy.splice(action.index, 1)
      return {
        ...state,
        items: copy
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
