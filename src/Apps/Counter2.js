import React from 'react';
import {connect} from 'react-redux';
import constants from './constants';

function Counter2(props){
  return(
  <>
    <h1>Counter</h1>
    <p>Count: {props.count || 0}</p>
    <button onClick={props.onIncrementClick}>increment</button><br/>
    <button onClick={props.onDecrementClick}>decrement</button><br/>
    <input value={props.inputVal} onChange={props.onInputChange} />
    <p>{props.inputVal}</p>
  </>
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
    onInputChange: (evt) => {
      console.log(evt.target.value)
      const action = { type: constants.INPUT_CHANGED, text: evt.target.value}
      dispatch(action);
    },
    onIncrementClick: () => {
      const action = {type: constants.INCREMENT};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = {type: constants.DECREMENT};
      dispatch(action);
    }
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);