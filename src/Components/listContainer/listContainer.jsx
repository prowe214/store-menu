import React, { Component } from "react";
import List from '../list/list';
import Filters from '../filters/filters';
import 'whatwg-fetch';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      allItems: [],
      displayedItems: [],
      loaded: false,
      filters: {
        category: 0,
        searchTerm: '',
        sortBy: ''
      }
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByOldest = this.sortByOldest.bind(this);
    this.getLowestPrice = this.getLowestPrice.bind(this);

  }

  getLowestPrice(item) {
    const prices = [
      item.price_eighth,
      item.price_gram,
      item.price_half_gram,
      item.price_half_ounce,
      item.price_ounce,
      item.price_quarter,
      item.price_two_grams,
      item.price_unit
    ].filter(price => price !== 0);

    const lowestPrice = prices.sort().reverse().pop();

    return lowestPrice;
  }

  sortByName(arr) {
    return arr.sort( (a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    })
  }

  sortByPrice(arr, reverse) {
    return arr.sort( (a, b) => {
      const priceA = this.getLowestPrice(a);
      const priceB = this.getLowestPrice(b);
      return (priceA > priceB) ? -1 : (priceA < priceB) ? 1 : 0;
    })
  }

  sortByOldest(arr) {
    return arr.sort( (a, b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    })
  }

  componentDidMount() {
    fetch('https://weedmaps.com/dispensaries/native-roots-apothecary/menu_items.json')
      .then(data => {
        return data.json();
      })
      .then(json => {
        const allItems = json;
        const displayedItems = allItems;
        const loaded = true;
        this.setState( { allItems, displayedItems, loaded });
      })
  }

  handleFilterChange(filters) {
    let displayedItems = this.state.allItems.filter(item => {
      const itemName = item.name.toLowerCase();
      const searchTerm = filters.searchTerm.toLowerCase();
      return (
        itemName.indexOf(searchTerm) > -1 &&
        (item.menu_item_category_id === filters.category || filters.category === 0)
      )
    });
    switch (filters.sortBy) {
      case 'alpha':
        displayedItems = this.sortByName(displayedItems);
        break;
      case 'high to low': 
        displayedItems = this.sortByPrice(displayedItems);
        break
      case 'low to high': 
        displayedItems = this.sortByPrice(displayedItems).reverse();
        break
      case 'newest':
        displayedItems = this.sortByOldest(displayedItems).reverse();
        break
      case 'oldest':
        displayedItems = this.sortByOldest(displayedItems);
        break
      default:
        break;
    }

    this.setState({filters, displayedItems});
  }

  render() {
    return (
      <section className="list-container">
        <Filters 
          onFilterChange={this.handleFilterChange}
          categories={this.categories} />
        <List 
          loaded={this.state.loaded}
          items={this.state.displayedItems} />
      </section>
    )
  }
}

export default ListContainer;
