import { createStore } from 'redux';

const initialState = {
  count: 5
};

function reducer(state = initialState, action){
  console.log('reducer : ', action);
  switch(action.type){
    case 'INCREMENT' : 
      return {
        ...state,
        count: state.count +1
      }
    default: 
      return state;
  }
}

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
