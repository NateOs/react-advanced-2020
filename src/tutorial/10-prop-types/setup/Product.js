import React from 'react';
import PropTypes from 'prop-types'

const Product = ( {image, name, price} ) => {
  return (
  <article className='product'>
    {/* <img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p> */}
  </article>);
};


Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired
}


export default Product;
