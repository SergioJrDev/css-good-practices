import React, { Component } from 'react';
import StateMachine from './StateMachine'
import { AppWrapper } from './styled-components'
import './style/index.css'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="container">
          <h1 className="opacity-3">CSS Workshop</h1>
          <StateMachine />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
