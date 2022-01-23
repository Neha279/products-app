import React from 'react'
import { shallow } from 'enzyme'
import Filter from '../Filter'


const setup = ( products = []) => {
  const actions = {
    onFilterClicked: jest.fn()
  }

  const component = shallow(
    <Filter products={products} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    select: component.find('select')
  }
}

describe('Filter component', () => {
    
    const product = [
      {
        productName: 'Product 1',
        price: "$9.99",
        type: "Beer"
      }
    ]

    it('should display type', () => {
        const { select } = setup(product)
        expect(select.text()).toMatch(/^    AllBeer/)
      })

    it('should call action on button click', () => {
      const { select, actions } = setup(product)
      select.simulate('change', {event:{target: {value:"All"}}})
      expect(actions.onFilterClicked).toBeCalled()
    })
})

