import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.css'
import Website from './comps/Website'
import ProductContextProvider from "./comps/ProductContext";

function App() {
 
  return ( 
    <>  
      <Router>  
        <ProductContextProvider> 
          <Website />
        </ProductContextProvider> 
      </Router> 

    </> 
  ) 
}

export default App