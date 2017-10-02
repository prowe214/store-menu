import PropTypes from 'prop-types';

const menuItem = {
  body: PropTypes.string,
  body_html: PropTypes.string,
  created_at: PropTypes.string,
  deleted_at: PropTypes.string,
  featured: PropTypes.bool,
  id: PropTypes.number,
  image: PropTypes.any,
  listing_id: PropTypes.number,
  listing_type: PropTypes.string,
  menu_item_category_id: PropTypes.number,
  name: PropTypes.string,
  price_eighth: PropTypes.number,
  price_gram: PropTypes.number,
  price_half_gram: PropTypes.number,
  price_half_ounce: PropTypes.number,
  price_ounce: PropTypes.number,
  price_quarter: PropTypes.number,
  price_two_grams: PropTypes.number,
  price_unit: PropTypes.number,
  primary_picture_id: PropTypes.number,
  published: PropTypes.bool,
  slug: PropTypes.string,
  strain_id: PropTypes.number,
  tested: PropTypes.bool,
  updated_at: PropTypes.string
}

export default menuItem;
