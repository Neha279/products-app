import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const ProductItem = ({ product }) => (

    <Card >
       <CardMedia
        component="img"
        height="150"
        width="150"
        image={product.productImage}
        alt={product.name}
      />
      <Chip className="custom-chip__Input" label={product.isSale ? "Sale" :""}  />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Product
            productName={product.productName}
            price={product.price}
            />
        </Typography>
      </CardContent>
    </Card>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    isSale: PropTypes.bool.isRequired
  }).isRequired
}

export default ProductItem
