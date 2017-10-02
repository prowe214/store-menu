import React, { Component } from "react";
import Dropdown from '../dropdown/dropdown';
import categories from '../../Types/ICategories';

class Filters extends Component {

  constructor() {
    super();
    
    this.state = {
      category: 0,
      searchTerm: '',
      sortBy: '',
      showFilters: false
    }

    this.categories = Object.keys(categories).map((key, index) => {
      return {
        id: index,
        value: key,
        name: categories[key]
      }
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleShowFilters = this.handleShowFilters.bind(this);
  }

  handleChange = (e) => {
    const changedKey = e.target.name;
    const value = e.target.value;
    const newState = this.state;
    const filterKeys = Object.keys(newState);

    //USE FOR/IN
    filterKeys.forEach(filterKey => {
      if (changedKey === filterKey) {
        newState[changedKey] = value;
      }
    })

    newState.category = Number(newState.category)

    this.setState(newState);
    this.props.onFilterChange(newState);
  }

  handleShowFilters() {
    this.setState({showFilters: !this.state.showFilters});
  }

  render() {
    return (
      <div className="filters">
        <div className="container">
          <div className={this.state.showFilters ? ' hide' : ''}>
            <button onClick={this.handleShowFilters}>
              <i className="fa fa-filter"/> Filter
            </button>
          </div>
          <div className={"inputs" + (!this.state.showFilters ? ' hide' : '')}>
            <input type="text" name="searchTerm" value={this.searchTerm} placeholder="Search..." onChange={this.handleChange}/>
            <select id="categories" name="category" value={this.state.category} onChange={this.handleChange}>
              <option value="0">All</option>
              {Object.keys(categories).map(key => {
                return <option key={key} value={key}>{categories[key]}s</option>
              })}
            </select>
            <select name="sortBy" value={this.state.sortBy} placeholder="Sort By..." onChange={this.handleChange}>
              <option style={{display: 'none'}}>Sort By...</option>
              <option value="alpha">Alphabetically</option>
              <option value="high to low">Price: Highest to Lowest</option>
              <option value="low to high">Price: Lowest to Highest</option>
            </select>

            <Dropdown
              data={this.categories}
              plurals={true}
              inputPlaceholder="Category"
              inputName="category"
              name="category"
              onFilterChange={this.handleChange}
              allOption="All" />

            <button onClick={this.handleShowFilters}>X</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Filters;
