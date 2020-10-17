import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import './App.css'
import Website from './comps/site/Website'
import ProductContextProvider from "./comps/site/ProductContext";
import Admin from './comps/admin/Admin'
import Login from './comps/Login'
import Register from './comps/Register'
import Client from './comps/client/Client'  

function App() {
 
  const [login, setLogin] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [client, setClient] = useState(false)
  const [accountid, setAccountid] = useState()
  const history = useHistory()
 
  function logIn() { 
    setLogin(true) 
  }
  function logOut() {
    setLogin(false)
  }
  function clientOn() {
    setClient(true)
  }
  function clientOff() {
    setClient(false)
  }
  function adminOn() { 
    setAdmin(true)
    document.body.style.overflowY = 'hidden'
  } 
  function adminOff() {
    setAdmin(false)
    document.body.style.overflowY = 'scroll'
  } 
  function accountId(accountid) { 
    setAccountid(accountid)
  }

  return (      
    <>    
      <Router>  
        <ProductContextProvider>  
          { admin?login?client?<Client accountid={accountid} adminoff={adminOff} logout={logOut} clientoff={clientOff}/>:<Admin adminoff={adminOff} logout={logOut}/>:<Login clienton={clientOn} clientoff={clientOff} logged={logIn} adminoff={adminOff} />:<Website adminon={adminOn}/> } 
          <Route path="/register">
            <Register adminon={adminOn} accountid={accountId}/>
          </Route>
        </ProductContextProvider> 
      </Router> 
    </> 
  ) 
}

export default App