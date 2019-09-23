import constants from './constants';
import axios from 'axios'

function getRepos (dispatch, query){
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then( res => res.json())
    .then( data => 
      dispatch({ type: constants.GET_REPO, repos: data.items})
    );
}

function getReposAxios(dispatch, query){
  axios.get(`https://api.github.com/search/repositories?q=${query}`)
  .then( res =>{ dispatch({ type: constants.GET_REPO, repos: res.data.items}) })
  .catch( err => console.log(err));
}

export default {
  getRepos,
  getReposAxios
}