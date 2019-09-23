import React from 'react';
import './App.css';
import Counter from './Counter';
import store from './store';
import { Provider } from 'react-redux'

const getStore = store.getState();
console.log('store: ', getStore);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
