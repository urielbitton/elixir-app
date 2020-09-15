import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import CartItem from './CartItem';
import { ProductContext } from './ProductContext'
import Item from './Item'
import Menu from './Menu'

function Navbar(props) { 
 
  const {products} = useContext(ProductContext)
 
  const cartprods = products.map(prod => {
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
          <Menu />
        </div>
    
        <div className="right">
          <div className="wishicondiv" style={{display:props.wishnum>0?"block":"none"}}><Link to="wishlist"><i className="fas fa-heart"></i><small><span>{props.wishnum}</span></small></Link></div>
          <div className="searchdiv searchbtn">
          <i class="fas fa-search"></i>
          </div>
          <div className="cartdiv"> 
          <i className="fas fa-shopping-cart"></i>
          <small className="cartitemsnum"><span>{props.cartitems}</span></small>
          <div className="cartcont"> 
          <div style={{display: props.cartitems>0?"block":"none"}}>
            <div className="innercart">
              {cartprods}
            </div>
            <h4>Subtotal:</h4> 
            <h3>${(props.subtotal).toFixed(2)}</h3>
            <hr/> 
            <Link to="/cart"><button className="viewcartbtn">View Cart</button></Link>
            <Link to="/checkout"><button className="checkoutbtn">Checkout</button></Link>
          </div>
            <div className="emptycart" style={{display: props.cartitems>0?"none":"block",textAlign:"center"}}>
              <p>No items in your cart.</p>
              <Link to="/shop"><small>Add Items</small></Link>
            </div>
          </div>
          </div>
        </div>
      </div>  
    </nav>
  ) 
}

export default Navbar