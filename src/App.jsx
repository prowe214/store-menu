import React, { Component } from 'react';
import './App.css';
import ListContainer from './Components/listContainer/listContainer'
import Header from './Components/header/header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ListContainer />
      </div>
    );
  }
}

export default App;
