import React, { Component } from 'react';
import MemberList from '../components/MemberList/MemberList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <MemberList />
      </div>
    );
  }
}

export default App;
