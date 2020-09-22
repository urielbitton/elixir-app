import React from 'react'
import Topbar from './Topbar'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Home'
import Products from './Products'

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
        </Switch>
    </div>
  )
}

export default Homecont