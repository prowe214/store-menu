import React, { Component } from "react";
import Dropdown from '../dropdown/dropdown';
import categories from '../../Types/ICategories';
import sortOptions from '../../Types/ISortOptions';

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
    this.handleClearFilters = this.handleClearFilters.bind(this);
  }

  handleChange = (e) => {
    const changedKey = e.target.name;
    const value = e.target.value;
    const newState = this.state;

    for (let filterKey in newState) {
      if (changedKey === filterKey) {
        newState[changedKey] = value;
      }
    }

    newState.category = Number(newState.category)

    this.setState(newState);
    this.props.onFilterChange(newState);
  }

  handleShowFilters() {
    this.setState({showFilters: !this.state.showFilters});
  }

  handleClearFilters() {
    const newState = {
      category: 0,
      searchTerm: '',
      sortBy: '',
      showFilters: false
    }
    this.setState(newState);
    this.props.onFilterChange(newState);
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

            <Dropdown
              data={this.categories}
              plurals={true}
              inputPlaceholder="Category"
              inputName="category"
              onFilterChange={this.handleChange}
              allOption="All" />

            <Dropdown
              data={sortOptions}
              inputPlaceholder="Sort By..."
              inputName="sortBy"
              onFilterChange={this.handleChange} />

            <button onClick={this.handleClearFilters}><i className="fa fa-times" /></button>
          </div>
        </div>
      </div>
    )
  }

}

export default Filters;
