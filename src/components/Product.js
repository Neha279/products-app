import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, productName }) => (
  <p>
    {productName} - {price}
  </p>
)

Product.propTypes = {
  price: PropTypes.string,
  productName: PropTypes.string,
}

export default Product
