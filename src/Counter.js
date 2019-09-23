import React from 'react';
import {connect} from 'react-redux';
import constants from './constants';
import Api from './Api'

function Counter(props){
  console.log('store: ', props)
  return(
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={(e) => props.onSearchSubmit(e, props.searchInputVal)}>
        <input value={props.searchInputVal} onChange={props.searchInputChange}/>
      </form>
      <ul>
        {props.repos && props.repos.map( repo => {
          return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
        })}
      </ul>
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
              {props.items && props.items.map( (item, index)=> {
                return <li key={index} onClick={()=>props.itemDelete(index)}>{item}</li>
              })}
            </ul>
          </form>
      </div>
      <footer>
        Total Count: {props.listCount}
      </footer>
    </div>
  )
}

function mapStateToProps(state){
  return {
    count: state.count,
    inputVal: state.inputVal,
    inputText: state.inputText,
    items: state.items,
    listCount: state.items.length,
    searchInputVal: state.searchInputVal,
    repos: state.repos
  }
}

function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps')
  return {
    onIncrementClick: () => {
      const action = {type: constants.INCREMENT};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = {type: constants.DECREMENT};
      dispatch(action);
    },
    onInputChange: (evt) => {
      console.log(evt.target.value)
      const action = { type: constants.INPUT_CHANGED, text: evt.target.value}
      dispatch(action);
    },
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
    },
    searchInputChange: (evt) => {
      const action = { type: constants.SEARCH_INPUT, text: evt.target.value};
      dispatch(action);
    },
    onSearchSubmit: (evt, query) => {
      evt.preventDefault();
      // Api.getRepos(dispatch, query);
      Api.getReposAxios(dispatch, query);  
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);