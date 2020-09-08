import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.css'
import Navbar from './comps/Navbar'
import Home from './comps/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
        </Switch>
      </Router> 
    </>
  ) 
}

export default App