import React from 'react';
import {connect} from 'react-redux';
import constants from './constants';
import styled from '@emotion/styled';

const StyleList = styled.li`
  list-style-type: none;
  cursor: pointer;
  &:active, &:hover {
    color: #ED4C67;
  }
`;


function Lister(props){
  return(
  <>
    <div>
        <h1>To-do List</h1>
        <p>What do you want to remember?</p>
        <p>(Click to remove the item.)</p>
        <form onSubmit={props.onSubmit}>
          <input value={props.inputText} onChange={props.onInputTextChange}/>
          <button>ADD</button>
            <ul>
              {props.items && props.items.map( (item, index)=> {
                return <StyleList key={index} onClick={()=>props.itemDelete(index)}>{item}</StyleList>
              })}
            </ul>
          </form>
      </div>
      <footer>
        Total List Count: {props.listCount}
      </footer>
   
  </>
  )
}

function mapStateToProps(state){
  return {
      inputText: state.inputText,
      inputVal: state.inputVal,
      items: state.items,
      listCount: state.items && state.items.length
  }
}
  
function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps')
  return {
    onInputTextChange: (evt) => {
        const action = { type: constants.LIST_ITEM, text: evt.target.value}
        dispatch(action);
      },
      onSubmit: (evt) => {
        evt.preventDefault(); //! 없으면 페이지가 스스로 새로고침됨
        const action = { type: constants.ADD_ITEM};
        dispatch(action);
      },
      itemDelete: (index) => {
        const action = { type: constants.DELETE_ITEM, index: index};
        dispatch(action);
      }
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Lister);