import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.css'
import Navbar from './comps/Navbar'
import Home from './comps/Home'
import Shop from './comps/Shop'
import About from './comps/About'
import Gallery from './comps/Gallery'
import Contact from './comps/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route> 
          <Route path="/Shop">
            <Shop />
          </Route> 
          <Route path="/About">
            <About />
          </Route> 
          <Route path="/Gallery">
            <Gallery />
          </Route> 
          <Route path="/Contact">
            <Contact />
          </Route> 
        </Switch>
      </Router> 
    </>
  ) 
}

export default App