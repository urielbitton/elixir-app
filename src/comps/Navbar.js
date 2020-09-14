import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import CartItem from './CartItem';
import { ProductContext } from './ProductContext'
import Item from './Item'

function Navbar(props) { 
 
  const {products, cartprods} = useContext(ProductContext)
 
  const cartitems = products.map(prod => {
    if(prod.addcart) {   
      return ( 
        <CartItem name={prod.name} img={prod.img} price={prod.price} units={prod.units} key={props.id}/>
      )  
    }     
  })  

  useEffect(() => {
    const navbar = document.querySelector('nav')
    const navleft = document.querySelector('nav .left')
    const navright = document.querySelector('nav .right')

    window.onscroll = () => {navSlide()}
    function navSlide() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

    const links = document.querySelectorAll('.menu > li')
    links.forEach(el => {
      el.onclick = () => {
        document.querySelectorAll('.menu > li').forEach(el => el.classList.remove('activelink'))
        el.classList.add('activelink')
      } 
    }) 

    const searchbtn = document.querySelector('.searchbtn')
    const searchcont = document.querySelector('.searchcont')
    const searchbox = document.querySelector('.searchbox')
    const closesearch = document.querySelector('.searchcont .close')

    searchbtn.onclick = () => {
      searchcont.style.display = 'block'
      setTimeout(() => {
        searchcont.style.opacity = '1'
        searchbox.querySelector('input').focus()
        setTimeout(() => {
          searchbox.style.marginTop = '150px'
        }, 200);
      }, 100);
    }
    closesearch.onclick = () => {
      searchbox.style.marginTop = ''
      setTimeout(() => {
        searchcont.style.opacity = ''
        setTimeout(() => {
          searchcont.style.display = ''
        }, 200);
      }, 100);
    }
 
  },[])

  return (
    <nav>
      <div className="grid">
        <div className="left">
          <Link to="/"><h1 className="logo">elixir<span>.</span></h1></Link>
          <ul className="menu">
            <li className="activelink">
              <Link to="/">Home<hr/></Link>
            </li>
            <li>
              <Link to="shop">Shop<i className="fas fa-caret-down"></i><hr/></Link>
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
              <Link to="about">About<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab"></div>
            </li>
            <li>
              <Link to="gallery">Gallery<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab"></div>
            </li>
            <li>
              <Link to="contact">Contact<hr/></Link>
            </li>
          </ul>
        </div>
    
        <div className="right">
          <div className="searchdiv searchbtn">
          <i class="fas fa-search"></i>
          </div>
          <div className="cartdiv">
          <i className="fas fa-shopping-cart"></i>
          <small className="cartitemsnum"><span>0</span></small>
          <div className="cartcont">
            <div className="innercart">
              {cartitems}
            </div>
            <h4>Subtotal:</h4> 
            <h3>$0.00</h3>
            <hr/>
            <Link to="/cart"><button className="viewcartbtn">View Cart</button></Link>
            <Link to="/checkout"><button className="checkoutbtn">Checkout</button></Link>
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