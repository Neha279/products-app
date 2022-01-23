import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';


const Filter  = ({ products, onFilterClicked }) => {

    let [selectedType, setSelectedType ] = useState("All");
    const getUniqueTypes=(products)=>{
        let uniqueTypes = [];
        products.map(item => {
            if (uniqueTypes.indexOf(item.type) === -1) {
                uniqueTypes.push(item.type)
            }
        });
        return uniqueTypes;
      }
    
      const handleChange = (event) => {
        setSelectedType(event?.target?.value); /* state chnage take time to reflect */
        onFilterClicked(event?.target?.value, products);
      };


  return (
    <Box sx={{ minWidth: 120 }} style={{height:'40px', margin : '20px 0'}}>
        <label className='filter__heading'>Search</label>
        <div className='form-filter' >
            <label id="filter-select-label">Filter By</label> 
            <select
            id="filter-select"
            value={selectedType}
            label="Filter By"
            onChange={handleChange}
            >    <option value="All" >All</option>
                {getUniqueTypes(products).map((item, index) => <option key={index} value={item} >{item}</option>)}
            </select>
       </div>
    </Box>
  )
}

Filter.propTypes = {
  products: PropTypes.array
}

export default Filter
