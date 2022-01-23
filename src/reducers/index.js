import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import { createStore } from 'redux'

const rootReducer = combineReducers({
  products
})
const store = createStore(rootReducer)
export default rootReducer;

const getProduct = (state) => fromProducts.getProduct(state)
const getProductByType = (state) => fromProducts.getProductByType(state)

export const getVisibleProducts = state => getProduct(state)
export const getFilteredProducts = state => getProductByType(state)
