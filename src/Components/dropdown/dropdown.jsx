import React, { Component } from "react";
import categories from '../../Types/ICategories';

class Dropdown extends Component {

  constructor() {
    super();

    this.state = {
      selected: 0
    }
  }

  handleChange = (e) => {
    const changedKey = e.target.name;
    const value = e.target.value;
    const newState = this.state;

    newState.selected = Number(newState.value)

    this.setState(newState);
    this.props.onFilterChange(newState);
  }

  render() {
    return (
      <select name={this.props.inputName} value={this.state.selected} onChange={this.handleChange}>
        <option value="0" style={{display: 'none'}}>{this.props.inputPlaceholder}</option>
        {this.props.allOption ? <option value="0">{this.props.allOption}</option> : null}
        {this.props.data.map(obj => {
          return <option key={obj.id} value={obj.value}>{obj.name}{this.props.plurals ? 's' : ''}</option>
        })}
      </select>
    )
  }
}

export default Dropdown;
