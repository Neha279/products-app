import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFilteredProducts } from '../reducers'
import ProductItem from '../components/ProductItem'
import '../styles/Product.css';


import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProductsContainer = ({ products }) => (
  
    <Box sx={{ flexGrow: 1 }} style={{margin: "0 20px"}}>
    <Grid container spacing={{ xs: 1, sm:2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
    {products && (products.map(product => (
      <Grid item xs={2} sm={2} md={4} key={product.index}>
          <Item> <ProductItem
                key={product.index}
                product={product}
            />
            </Item>
      </Grid>
    )))}
  </Grid>
  </Box>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    productImage:PropTypes.string.isRequired,
    isSale: PropTypes.bool.isRequired
  })).isRequired,
}

const mapStateToProps = state => {
    if(Object.entries(state.products).length !== 0){   
         return { products: getFilteredProducts(state) }
    }
    else return { products : [] }
};

export default connect(
  mapStateToProps,{}
)(ProductsContainer)
