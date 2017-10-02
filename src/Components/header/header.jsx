import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.clientName}</h1>
        <div className="client-logo" style={{backgroundImage: 'url('+this.props.logo+')'}} />
      </header>
    )
  }

}

export default Header;
