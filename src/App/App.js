import React, { Component } from 'react';
import MemberList from '../components/MemberList/MemberList';
import './App.scss';
import GroupList from '../components/GroupList/GroupList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <MemberList />
      </div>
    );
  }
}

export default App;
