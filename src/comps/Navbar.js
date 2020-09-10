import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import CartItem from './CartItem';

function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('nav')
    const navleft = document.querySelector('nav .left')
    const navright = document.querySelector('nav .right')

    window.onscroll = () => {navSlide()}
    function navSlide() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navbar.style.cssText = 'height:80px;background:#fff;box-shadow:0 3px 10px rgba(0,0,0,0.07)'
        navleft.style.top = '-15px'
        navright.style.top = '-15px'
      }  
      else {
        navbar.style.cssText = 'height: 130px;background:none;box-shadow:none'
        navleft.style.top = ''
        navright.style.top = ''
      }
    }
  },[])

  return (
    <nav>
      <div className="grid">
        <div className="left">
          <h1 className="logo">elixir<span>.</span></h1>
          <ul className="menu">
            <li>
              <Link to="#" className="activelink">Home<hr/></Link>
            </li>
            <li>
              <Link to="#">Shop<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab">
                <ul>
                  <h4>Women's</h4>
                </ul>
                <ul>
                  <h4>Men's</h4>
                </ul>
                <ul>
                  <h4>Kids</h4>
                </ul>
                <ul>
                  <h4>Promos</h4>
                </ul>
              </div> 
            </li>
            <li>
              <Link to="#">About<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab"></div>
            </li>
            <li>
              <Link to="#">Gallery<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab"></div>
            </li>
            <li>
              <Link to="#">Contact<hr/></Link>
            </li>
          </ul>
        </div>
   
        <div className="right">
          <div className="searchdiv">
          <i class="fas fa-search"></i>
          </div>
          <div className="cartdiv">
          <i class="fas fa-shopping-cart"></i>
          <small className="cartitemsnum"><span>0</span></small>
          <div className="cartcont">
            <CartItem name="Tight Fit Jeans" num="2" price="149.00"/>
            <CartItem name="Tight Fit Jeans" num="2" price="149.00"/>

            <h4>Subtotal:</h4>
            <h3>$149.00</h3>
            <hr/>
            <button className="viewcartbtn">View Cart</button>
            <button className="checkoutbtn">Checkout</button>
            {/*<p>No items in your cart.</p>
            <small>Add Items</small>*/}
          </div>
          </div>
        </div>
      </div>  
    </nav>
  ) 
}

export default Navbar