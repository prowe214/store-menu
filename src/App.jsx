import React, { Component } from 'react';
import './App.css';
import ListContainer from './Components/listContainer/listContainer'
import Header from './Components/header/header';
import ShamelessPlug from './Components/footer/footer';
import clientInfo from './Types/clientInfo';

class App extends Component {
  constructor() {
    super();

    this.state = clientInfo;
  }

  render() {
    return (
      <div className="App">
        <Header 
          clientName={this.state.clientName}
          logo={this.state.logoURL} />
        <ListContainer />
        <ShamelessPlug />
      </div>
    );
  }
}

export default App;
