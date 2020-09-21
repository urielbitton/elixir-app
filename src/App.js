import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.css'
import Website from './comps/site/Website'
import ProductContextProvider from "./comps/site/ProductContext";
import Admin from './comps/admin/Admin'
import Login from './comps/Login'

function App() {
 
  const [login, setLogin] = useState(false)
  const [admin, setAdmin] = useState(false)

  function logIn() {
    setLogin(true)
  }
  function adminOn() {
    setAdmin(true)
  } 

  return (  
    <>   
      <Router>  
        <ProductContextProvider>  
          { admin?login?<Admin />:<Login logged={logIn}/>:<Website adminon={adminOn}/> } 
        </ProductContextProvider> 
      </Router> 
    </> 
  ) 
}

export default App