import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
  console.log('store: ', props)
  return(
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count || 0}</p>
      <button onClick={props.onIncrementClick}>increment</button>
      <button onClick={props.onDecrementClick}>decrement</button>
      <input value={props.inputVal} onChange={props.onInputChange} />
      <p>{props.inputVal}</p>
    </div>
  )
}

function mapStateToProps(state){
  return {
    count: state.count,
    inputVal: state.inputVal
  }
}

function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps')
  return {
    onIncrementClick: () => {
      const action = {type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = {type: 'DECREMENT'};
      dispatch(action);
    },
    onInputChange: (evt) => {
      console.log(evt.target.value)
      const action = { type: 'INPUT_CHANGED', text: evt.target.value}
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);