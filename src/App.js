import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter1 from './Apps/Counter1';
import Counter2 from './Apps/Counter2';
import GetRepo from './Apps/GetRepo';
import Lister from './Apps/Lister';
import StyledLink from './StyledLink';
import store from './Apps/store';
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <nav>
            <StyledLink to="/">Repo Search</StyledLink>
            <StyledLink to="/lister">Todo List</StyledLink>
            <StyledLink to="/counter1">Counter1</StyledLink>
            <StyledLink to="/counter2">Counter2</StyledLink>
          </nav>
          <div style={{textAlign:'center'}}>
            <Route exact path='/lister' component={Lister}/>
            <Route exact path='/counter1' component={Counter1}/>
            <Route exact path='/counter2' component={Counter2}/>
            <Route exact path='/' component={GetRepo}/>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;