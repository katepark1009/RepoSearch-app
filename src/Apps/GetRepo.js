import React from 'react';
import {connect} from 'react-redux';
import constants from './constants';
import Api from './Api';
import styled from '@emotion/styled';

const StyleList = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
  a {
    text-decoration: none;
    color: black;
    &: hover{
      color: blue;
    }
  }
`;
const ResizedImg = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 15px;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

function GetRepo(props){
  console.log('store: ', props)
  return(
    <div>
      <ResizedImg src="https://orcid.org/sites/default/files/ckfinder/userfiles/images/github-logo.jpg" alt="" />
      <h1>Github Repo Search</h1>
      <p>Please type a keyword!</p>
      <form onSubmit={(e) => props.onSearchSubmit(e, props.searchInputVal)}>
        <input value={props.searchInputVal} onChange={props.searchInputChange}/>
        <button>Submit</button>
      </form>
      <ul>
        {props.repos && props.repos.map( repo => {
          return <StyleList key={repo.id}><Avatar src={repo.owner["avatar_url"]} alt=""/><a href={repo.html_url}>{repo.name}</a></StyleList>
        })}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    searchInputVal: state.searchInputVal,
    repos: state.repos
  }
}

function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps')
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(GetRepo);