import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Home'
import MyAccount from './MyAccount';
import Orders from './Orders';

function Homecont(props) {

  const [opent, setOpent] = useState(false)

  function openTracker() {
    setOpent(true)
  }
  function closeTracker() {
    setOpent(false)
  }

  return ( 
    <> 
    <Switch>
      <Route exact path="/">
        <Home opentracker={openTracker} />
      </Route>
      <Route path="/myorders">
        <Orders opentracker={opent} closetracker={closeTracker} opent={opent}/>
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