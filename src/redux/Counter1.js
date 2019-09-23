import React from 'react';
import store from './store';

console.log('store: ', store)

export default class Counter1 extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){ //! store가 변할때마다, 아래 function을 실행.
    this.unsub = store.subscribe(()=> {
      this.setState(store.getState()) //! state 바뀔때마다 업뎃
    })

    //! unsub에 function을 저장해놓고 나중에 unsub 호출, 
    //! 아니면 react 에러 남. (마운팅 되지 않은 컴포넌트 스테이트 어쩌구..)
  }
  componentWillUnmount(){
    this.unsub(); //? 요로케
  }
  handleClick = () => {
    const action = {type: 'INCREMENT'};
    store.dispatch(action); //! store에 dispatch 메소드가 있음.
  }
  render(){
    return(
      <div>
        <h1>Counter 1</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}