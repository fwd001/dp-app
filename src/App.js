import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(porps) {
    super(porps)
    this.socketInit()
  }
  
  state= {
    
  }

  socketInit() {
    console.log('socketInit');
  }


  render() {
    return (
      <div className="App">
        123123
      </div>
    )
  }
}


export default App;
