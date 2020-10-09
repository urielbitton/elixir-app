import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import CartItem from './CartItem';
import { ProductContext } from './ProductContext'
import Menu from './Menu'

function Navbar(props) { 
 
  const {products} = useContext(ProductContext)
  
  const cartprods = products.map(prod => {
    if(prod.addcart) {     
      return ( 
        <CartItem prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} cat={prod.cat} sizes={prod.sizes} units={prod.units} addcart={prod.addcart} instock={prod.instock} wishlist={prod.wishlist} descript={prod.descript} color={prod.color} qty={prod.qty} key={prod.id} openproduct={props.openproduct}/>
      )   
    }      
  })  

  function scrollUp() {
    window.scrollTo(0, 0)
  }
 
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
      document.body.style.overflowY = 'hidden'
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
      document.body.style.overflowY = 'inherit'
      searchbox.style.marginTop = ''
      setTimeout(() => {
        searchcont.style.opacity = ''
        setTimeout(() => {
          searchcont.style.display = ''
        }, 200);
      }, 100);
    }
    document.querySelectorAll('.menu a').forEach(el => el.onclick = () => window.scrollTo(0,0))

    document.querySelector('.mobbtn').onclick = () => openMobMenu()
    document.querySelector('.mobmenu .fa-times').onclick = () => closeMobMenu()
    document.querySelectorAll('.mobmenu a').forEach(el => {
      el.onclick = () => {
        closeMobMenu()
      }
    })
    function openMobMenu() {
      document.querySelector('.mobmenu').style.top = '0'
    }
    function closeMobMenu() {
      document.querySelector('.mobmenu').style.top = ''
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
          <div onClick={() => scrollUp()} className="wishicondiv" style={{display:props.wishnum>0?"block":"none"}}><Link to="wishlist"><i className="fa fa-heart"></i><small><span>{props.wishnum}</span></small></Link></div>
          <div className="searchdiv searchbtn">
          <i class="fad fa-search"></i>
          </div>
          <div className="logindiv" onClick={() => props.adminon()}><Link to="/login"><i class="fad fa-user-alt"></i></Link></div>
          <div className="cartdiv"> 
          <small className="quicksubtotal">${props.subtotal.toFixed(2)}</small>
          <i class="fad fa-shopping-cart"></i>
          <small className="cartitemsnum"><span>{props.cartitems}</span></small>
          <div className="cartcont"> 
          <div style={{display: props.cartitems>0?"block":"none"}}>
            <div className="innercart">
              {cartprods}
            </div>
            <h4>Subtotal:</h4> 
            <h3>${(props.subtotal).toFixed(2)}</h3>
            <hr/> 
            <Link to="/cart"><button className="viewcartbtn" onClick={() => scrollUp()}>View Cart</button></Link>
            <Link to="/checkout"><button className="checkoutbtn" onClick={() => scrollUp()}>Checkout</button></Link>
          </div>
            <div className="emptycart" style={{display: props.cartitems>0?"none":"block",textAlign:"center"}}>
              <p>No items in your cart.</p>
              <Link to="/shop"><small>Add Items</small></Link>
            </div>
          </div>
          </div> 
          <div className="mobbtn"><i class="fad fa-bars"></i></div>
        </div> 
      </div>  

      <div className="mobmenu">
        <i class="fal fa-times"></i>
        <Link to="/">Home<hr/></Link>
        <Link to="shop">Shop<hr/></Link>
        <Link to="about">About<hr/></Link>
        <Link to="gallery">Gallery<hr/></Link>
        <Link to="contact">Contact<hr/></Link>
      </div>
    </nav>
  ) 
}

export default Navbar