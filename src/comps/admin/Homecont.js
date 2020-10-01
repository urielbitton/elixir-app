import React from 'react'
import Topbar from './Topbar'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Home'
import Products from './Products'
import AddProduct from './AddProduct';
import Coupons from './Coupons'

function Homecont(props) {
  return (
    <div className="homecont"> 
        <Topbar adminoff={props.adminoff}/>
        <Switch>
          <Route path="/dashhome">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/coupons">
            <Coupons />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
        </Switch>
        
        <div className="notifcont"></div>
    </div>
  )
}

export default Homecont