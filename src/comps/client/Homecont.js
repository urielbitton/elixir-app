import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Home'
import MyAccount from './MyAccount';
import Orders from './Orders';

function Homecont(props) {

  return ( 
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/myorders">
        <Orders />
      </Route>
      <Route path="/myaccount">
        <MyAccount updateimg={props.updateimg}/>
      </Route>
    </Switch>
    <div className="notifcont"></div>
    </>
  )
}

export default Homecont