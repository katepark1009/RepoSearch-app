import React from 'react';
import './App.css';
import Counter from './Counter';
import store from './store';

const getStore = store.getState();
console.log('store: ', getStore);

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}

export default App;
