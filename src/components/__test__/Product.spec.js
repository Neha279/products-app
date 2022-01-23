import React from 'react'
import { shallow } from 'enzyme'
import Product from '../Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render name and price', () => {
    const { component } = setup({ productName: 'Test Product', price: "$9.99", productImage: "image1" })
    expect(component.text()).toBe('Test Product - $9.99')
  })

})