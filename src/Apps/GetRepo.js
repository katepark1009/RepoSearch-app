import React from 'react';
import {connect} from 'react-redux';
import constants from './constants';
import Api from './Api';
import styled from '@emotion/styled';

const Star = (
  <svg width="10" height="10" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/  svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19   0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6   2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502   73q56 9 56 46z"/></svg>
)

const Fork = (
  <svg width="10" height="10" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M672 1472q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm0-1152q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm640 128q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm96 0q0 52-26 96.5t-70 69.5q-2 287-226 414-67 38-203 81-128 40-169.5 71t-41.5 100v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56-136-56-56-136q0-52 26-96.5t70-69.5v-820q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136q0 52-26 96.5t-70 69.5v497q54-26 154-57 55-17 87.5-29.5t70.5-31 59-39.5 40.5-51 28-69.5 8.5-91.5q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136z"/></svg>
)
const StyleList = styled.div`
  align-items: center;
  display: flex;
  list-style-type: none;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 300px;
  min-height: 50px;
  border: 1px solid lightgray;
  border-radius: 5px;
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

const Avatar = styled.div`
  display: inline-block;
  width: 61px;
  height: 61px;
  margin: 4px 8px auto 8px;
  background-image: url('${ props => props.src}');
  background-repeat: no-repeat;
  background-size: cover; 
  border-radius: 8px;
`;

const RepoTitle = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  margin: 30px 50px;
`;

const InfoText = styled.p`
  margin:0;
  padding:0;
  text-align: left;
  font-size: .8rem;
  color: gray;
  margin: 5px auto 5px 90px;
`;

const Link = styled.a`
  margin-top: 8px;
  margin-bottom: 15px;
`;

const AlignedDiv = styled.div`
  text-align: left;
  width: 100%;
`;

const Content = styled.div`
  display: inline-block;
  width: 70%;
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
        <button>Search</button>
      </form>
      <Container>
        {props.repos && props.repos.map( repo => {
          return (
          <StyleList key={repo.id}>
              <AlignedDiv>
                <Avatar src={repo.owner["avatar_url"]} alt=""/>
                <Content>
                  <Link href={repo.html_url}>
                    <RepoTitle>
                      {repo.name}
                    </RepoTitle> - {repo.owner.login}
                  <InfoText>
                    {Star} Stars: {repo.stargazers_count}
                  </InfoText>
                  <InfoText>
                    {Fork} Forked: {repo.forks} 
                  </InfoText>
                  </Link>
                </Content>
              </AlignedDiv>
          </StyleList>
          )
        })}
      </Container>
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