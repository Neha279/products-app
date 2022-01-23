import reducer, * as products from '../products'

describe('reducers', () => {
  describe('products', () => {
    let state

    describe('when products are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_PRODUCTS',
          products : { products: [
            {
              index: 1,
              productName: 'Product 1',
              productImage: 'image1',
              type: "Beer"
            },
            {
                index: 2,
                productName: 'Product 2',
                productImage: 'image2',
                type: "Wine"
            }
          ]
        }})
      })

      it('lists all of the products as visible', () => {
        expect(products.getProduct(state)).toEqual([
          {
            index: 1,
            productName: 'Product 1',
            productImage: 'image1',
            type: "Beer"
          }, {
            index: 2,
            productName: 'Product 2',
            productImage: 'image2',
            type: "Wine"
          }
        ])
      })

    //todo - later  
    //   describe('when an product filtered ', () => {

    //     beforeEach(() => {
    //       state = reducer( state, { type: 'FILTER_BY_TYPE', selectedType: "Beer", 
    //       products : 
    //        [
    //         {
    //           index: 1,
    //           productName: 'Product 1',
    //           productImage: 'image1',
    //           type: "Beer"
    //         },
    //         {
    //             index: 2,
    //             productName: 'Product 2',
    //             productImage: 'image2',
    //             type: "Wine"
    //         }
    //       ]
    //       })
    //     })

    //     it('the product is filtered', () => {
    //       expect(products.getProductByType(state)).toEqual([
    //         {
    //             index: 1,
    //             productName: 'Product 1',
    //             productImage: 'image1',
    //             type: "Beer"
    //         }
    //       ])
    //     })

    //   })

    })
  })
})
