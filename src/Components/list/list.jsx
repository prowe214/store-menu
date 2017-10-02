import React, { Component } from "react";
import Item from '../item/item';
import 'whatwg-fetch';

class List extends Component {

  render() {
    if (!this.props.loaded) {
      // return <img alt="loader" src="../img/leaf.png" className="loader"/>
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="list">
          {this.props.items.map(item => 
            <Item data={item} key={item.id} />
          )}
        </div>
      )
    }
  }
}

export default List;
