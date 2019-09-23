import React, {Component} from 'react';
// import './App.css';
import reduxApp from '../App';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Counter1 from './Counter1';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Root</Link>
            <Link to="/counter1">counter1</Link>
            <Link to="/counter2">counter2</Link>
          </nav>
          <Route exact path='/counter1' component={Counter1}/>
          <Route exact path='/' component={reduxApp}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;