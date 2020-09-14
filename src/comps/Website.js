import React, {useEffect, useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Gallery from './Gallery' 
import Contact from './Contact'
import ProductPage from './ProductPage';
import QuickView from './QuickView'
import CartPage from './CartPage';
import Footer from './Footer'
import Checkout from './Checkout';
import Search from './Search'

function Website() {
 
  const [cartitems, setCartitems] = useState(0)
  const [subtotal, setSubtotal] = useState(0)

  function updateCartNum() {
    setCartitems(num => num+1)
  }
  function updateSubtotal(current) {
    setSubtotal(sub => sub+current)
  }
 
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
      <Navbar cartitems={cartitems} subtotal={subtotal}/>  
      <Search />
      <Switch> 
        <Route exact path="/">
          <Home updatecartnum={updateCartNum} updatesub={updateSubtotal}/>
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
    </>
  )
}

export default Website