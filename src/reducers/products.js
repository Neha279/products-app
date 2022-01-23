import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, FILTER_BY_TYPE } from '../constants/ActionTypes'

const initialState = {
  products : []
}

const products = (state, action) => {
  switch (action.type) {
    case FILTER_BY_TYPE:
      return  action.products ; 
    case RECEIVE_PRODUCTS:  
    return  action.products ;
    default:
      return initialState.products;
  }
}

const visibleTypes = (state , action) => {
    switch (action.type) {
      case FILTER_BY_TYPE:
        return {
          products: action.products.filter(product => product.type === action.selectedType),
          selectedType : action.selectedType
        }
      case RECEIVE_PRODUCTS:   
      return  { ...state, ...action.products};
      default:
      return { ...state, selectedType :"All"};
    }
  }

export default combineReducers({
  visibleTypes,
  products
})

export const getProduct = (state) =>
  state.products.products

export const getProductByType = (state) =>{
    if(state?.products.visibleTypes?.selectedType && state?.products.visibleTypes?.selectedType!=="All"){
      return state.products.visibleTypes.products;
    } else return state.products.products;
}