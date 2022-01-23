
import '../styles/App.css';
import ProductsContainer from './ProductsContainer'
import FilterContainer from './FilterContainer'
import Typography from '@mui/material/Typography';


const App = () => {  
  return (
    <div className="App">

      <Typography className="App-header" variant="h3" gutterBottom component="div">
        Market Place
      </Typography>
      <hr/>
       <FilterContainer/>
      <hr/>
      <ProductsContainer /> 
    </div>
  
  );
}

export default App;
