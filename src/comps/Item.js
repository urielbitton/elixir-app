import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'

function Item(props) {    
 
  const {products, setProducts, setGeneral} = useContext(ProductContext)

  function addToCart() { 
    products.map(prod => {   
      return (prod.id === props.prod.id)?(props.prod.addcart = true):""
    })  
    props.updatecartnum()
    props.updatesub(props.price) 
  }     

  function addToWishlist() {
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    })
    props.updatewish() 
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
        document.querySelector('.cartcont').style.cssText += 'opacity:1;visibility:visible;top: 45px'
      }
    }) 
    document.onscroll = () => {
      document.querySelector('.cartcont').style.opacity = ''
      document.querySelector('.cartcont').style.visibility = ''
      document.querySelector('.cartcont').style.top = '' 
    } 

  },[]) 
 
  return (  
    <div className="itemcont"> 
      <div className="imgcont"> 
        <div className="labelcont"><small className="sale" style={{display: (props.sale?"block":"none")}}>Sale</small><small style={{display: (props.hot?"block":"none") }} className="hot">Hot</small></div>
        <Link to={props.wishlist?"/wishlist":"#"} className="heartlink"><i className={props.wishlist?"fas fa-heart":"far fa-heart"} onClick={() => props.wishlist?"":addToWishlist()}></i></Link>
        <img src={props.img} alt="item"/>
        <div className="itemactions">
          <i className={props.addcart?"fas fa-check removefromcart":"fas fa-shopping-cart addtocart"} onClick={props.addcart?"":() => addToCart(props.name)}></i>
          <i onClick={() => props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.addcart,props.wishlist)} className="fas fa-search-plus quickviewbtn"></i> 
          <i className="fas fa-random"></i>
        </div> 
      </div> 
      <div className="iteminfodiv">
        <h5 onClick={() => props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.addcart,props.wishlist)}><Link to="/product">{props.name}</Link></h5>
        <small>${props.price}.00</small> 
      </div>
    </div>  
  )  
} 

export default Item