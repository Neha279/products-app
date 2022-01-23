import market from '../api/market'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
    market.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const updateByFilter = (selectedType, products) => ({
  type: types.FILTER_BY_TYPE,
  selectedType,
  products
})

export const updateProductList = (selectedType, products) => (dispatch) => {
    dispatch(updateByFilter(selectedType, products));
}

