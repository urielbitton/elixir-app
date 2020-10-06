import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import './App.css'
import Website from './comps/site/Website'
import ProductContextProvider from "./comps/site/ProductContext";
import Admin from './comps/admin/Admin'
import Login from './comps/Login'

function App() {
 
  const [login, setLogin] = useState(false)
  const [admin, setAdmin] = useState(false)
  const history = useHistory()

  function logIn() {
    setLogin(true)
  }
  function logOut() {
    setLogin(false)
  }
  function adminOn() {
    setAdmin(true)
    document.body.style.overflowY = 'hidden'
  } 
  function adminOff() {
    setAdmin(false)
    document.body.style.overflowY = 'scroll'
  } 

  return (  
    <>   
      <Router>  
        <ProductContextProvider>  
          { admin?login?<Admin adminoff={adminOff} logout={logOut}/>:<Login logged={logIn} adminoff={adminOff}/>:<Website adminon={adminOn}/> } 
        </ProductContextProvider> 
      </Router> 
    </> 
  ) 
}

export default App