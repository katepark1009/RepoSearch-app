import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
  console.log('store: ', props)
  return(
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count || 0}</p>
      <button onClick={props.onIncrementClick}>increment</button><br/>
      <button onClick={props.onDecrementClick}>decrement</button><br/>
      <input value={props.inputVal} onChange={props.onInputChange} />
      <p>{props.inputVal}</p>
      <div>
        <h1>Lister</h1>
        <form onSubmit={props.onSubmit}>
          <input value={props.inputText} onChange={props.onInputTextChange}/>
            <ul>
              {props.items.map( (item, index)=> {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </form>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    count: state.count,
    inputVal: state.inputVal,
    inputText: state.inputText,
    items: state.items
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
    },
    onInputTextChange: (evt) => {
      const action = { type: 'LIST_ITEM', text: evt.target.value}
      dispatch(action);
    },
    onSubmit: (evt) => {
      evt.preventDefault(); //! 없으면 페이지가 스스로 새로고침됨
      const action = { type: 'ADD_ITEM'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);