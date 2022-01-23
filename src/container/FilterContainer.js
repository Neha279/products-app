import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateProductList } from '../actions'
import { getVisibleProducts } from '../reducers'
import Filter from '../components/Filter'
import '../styles/Filter.css';

const FilterContainer = ({  products, updateProductList }) => {
 return  (
     products && <Filter
       products={products}
       onFilterClicked={updateProductList} />
    )
}

FilterContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })).isRequired,
  updateProductList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
   if(Object.entries(state.products).length !== 0){
    return {
        products: getVisibleProducts(state),
    }}
    else  return { products : []}
  }

export default connect(
  mapStateToProps,
  { updateProductList }
)(FilterContainer)
