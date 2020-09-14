import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'

function Item(props) {   
 
  const {products, setProducts} = useContext(ProductContext)

  function addToCart() {
    
  }     
   
  useEffect(() => {
    const quickviewbtn = document.querySelectorAll('.quickviewbtn')
    const quickviewcont = document.querySelector('.quickviewcont')
    const quickview = document.querySelector('.quickview')

    quickviewbtn.forEach(el => {
      el.onclick = () => {
        quickviewcont.style.display = 'flex'
        setTimeout(() => {
          quickviewcont.style.opacity = '1'
          setTimeout(() => {
            quickview.style.top = '0'
          }, 100);
        }, 200);
      }
    })
    
    const addtocart = document.querySelectorAll('.itemcont .addtocart')
    addtocart.forEach(el => {
      el.onclick = () => {
        el.classList.remove('fa-shopping-cart','addtocart')
        el.classList.add('fa-check') 
        document.querySelector('.cartcont').style.cssText += 'opacity:1;visibility:visible;top: 45px'
      }
    }) 
    document.onscroll = () => {
      document.querySelector('.cartcont').style.opacity = ''
      document.querySelector('.cartcont').style.visibility = ''
      document.querySelector('.cartcont').style.top = '' 
    } 
    function dropNotif(msg) {

    } 

  },[]) 
 
  return (
    <div className="itemcont"> 
      <div className="imgcont"> 
        <div className="labelcont"><small className="sale" style={{display: (props.sale?"block":"none")}}>Sale</small><small style={{display: (props.hot?"block":"none") }} className="hot">Hot</small></div>
        <i className="far fa-heart"></i>
        <Link to="/product"><img src={props.img} alt="item"/></Link>
        <div className="itemactions">
          <i className="fas fa-shopping-cart addtocart" onClick={() => addToCart()}></i>
          <i class="fas fa-search-plus quickviewbtn"></i> 
          <i class="fas fa-random"></i>
        </div> 
      </div> 
      <h5><Link to="/product">{props.name}</Link></h5>
      <small>${props.price}.00</small>
    </div>
  )
}

export default Item