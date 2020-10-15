import React from 'react'
import Topbar from './Topbar'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import AddProduct from './AddProduct'
import Coupons from './Coupons'
import Customers from './Customers'
import AddCustomer from './AddCustomer'
import AddOrder from './AddOrder'
import Orders from './Orders'

function Homecont(props) {
  return (
    <div className="homecont"> 
        <Topbar adminoff={props.adminoff}/>
        <Switch>
          <Route path="/">
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
          <Route path="/addcustomer">
            <AddCustomer />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/addorder">
            <AddOrder />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch> 
        
        <div className="notifcont"></div>
    </div>
  )
}

export default Homecont