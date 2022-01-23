import React from 'react'
import { shallow } from 'enzyme'
import Product from '../Product'
import ProductItem from '../ProductItem'

const setup = product => {
  
  const component = shallow(
    <ProductItem product={product} />
  ).dive();

  return {
    component: component,
    product: component.find(Product),
    chip: component.dive().find('ForwardRef(Chip)')
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      productName: 'Product 1',
      productImage: "image",
      price: "$9.99",
      isSale: true,
      type: "Beer"
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ productName: 'Product 1', price: "$9.99" })
  })

    it('should render Sale message', () => {
      const { chip } = setup(productProps)
      expect(chip.props()).toEqual({label: "Sale", className: "custom-chip__Input"});
    })

})
