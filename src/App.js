import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.css'
import Navbar from './comps/Navbar'
import Home from './comps/Home'
import Shop from './comps/Shop'
import About from './comps/About'
import Gallery from './comps/Gallery' 
import Contact from './comps/Contact'
import ProductPage from './comps/ProductPage';
import QuickView from './comps/QuickView'
import CartPage from './comps/CartPage';
import Footer from './comps/Footer'
import Checkout from './comps/Checkout';

function App() {

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    const tab = document.querySelectorAll('[re-tab]')
    taber.forEach(el1 => {
      el1.onclick = () => {
        let tabselector = el1.getAttribute('re-taber')
        tab.forEach(el2 => { 
          el2.style.display = 'none' 
          setTimeout(() => {
            el2.style.opacity = '0'
          }, 50); 
        }) 
        taber.forEach(el3 => el3.classList.remove('activetab'))
        document.querySelector(`[re-tab="${tabselector}"]`).style.display = 'block'
        el1.classList.add('activetab')
        setTimeout(() => {
          document.querySelector(`[re-tab="${tabselector}"]`).style.opacity = '1'
        }, 50);
      }
    })  
    document.querySelectorAll('a').forEach(el => el.onclick = () => window.scrollTo(0, 0))
    document.querySelectorAll('.itemcont a').forEach(el => el.onclick = () => window.scrollTo(0, 0))
  },[])
 
  return (
    <> 
      <Router>  
        <Navbar /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/shop">
            <Shop />
          </Route> 
          <Route path="/about">
            <About />
          </Route> 
          <Route path="/gallery">
            <Gallery />
          </Route> 
          <Route path="/contact">
            <Contact />
          </Route> 
          <Route path="/product">
            <ProductPage />
          </Route> 
          <Route path="/cart">
            <CartPage />
          </Route> 
          <Route path="/checkout">
            <Checkout />
          </Route>  
        </Switch>

        <QuickView />

        <Footer />
      </Router> 

    </>
  ) 
}

export default App