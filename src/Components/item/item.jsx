import React, { Component } from "react";
import PropTypes from 'prop-types';
import menuItem from '../../Types/IMenuItem';
import categories from '../../Types/ICategories';

class Item extends Component {

  get category() {
    return categories[this.props.data.menu_item_category_id];
  }

  get price() {
    const prices = [
      this.props.data.price_eighth,
      this.props.data.price_gram,
      this.props.data.price_half_gram,
      this.props.data.price_half_ounce,
      this.props.data.price_ounce,
      this.props.data.price_quarter,
      this.props.data.price_two_grams,
      this.props.data.price_unit
    ].filter(price => price !== 0);

    const lowestPrice = prices.sort().reverse().pop();

    return lowestPrice;
  }

  render() {
    return (
      <div className={'item' + (this.props.data.featured ? ' item-featured' : '')}>
        <div className="item-header">
          <div className={'subheader ' + (this.category || 'Other')}>
            <span>{this.category || 'Other'}</span>
            <div className="item-price">
              <span>Starting at </span>
              <span className="price">${this.price}</span>
            </div>
          </div>
        </div>
        <div className="item-summary">
          <h2 className="item-title">{this.props.data.name}</h2>
          <p>{this.props.data.body || 'No description'}</p>
        </div>
        <div className="fader"></div>
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.shape(menuItem)
}

export default Item;
