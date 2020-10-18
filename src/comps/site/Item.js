import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'

function Item(props) {    
 
  const {products, general, wishes, cart} = useContext(ProductContext)
  
  function addToCart() {  
    products.map(prod => {    
      return (prod.id === props.prod.id)?(props.prod.addcart = true):"" 
    })  
    let cartobj = {id:props.id,name:props.name,img:props.img,price:props.price,units:props.units,qty:props.qty,cat:props.cat,color:props.color,sizes:props.sizes,instock:props.instock,addcart:props.prod.addcart,wishlist:props.wishlist,descript:props.descript,selcolor:props.prod.selcolor,selsize:props.prod.selsize,compared:props.compared,ratings:props.ratings,reviews:props.reviews,avgrating:props.avgrating}
    cart.push(cartobj) 
    general.cartitems += 1
    general.subtotal += props.price
    general.total = general.total+(general.subtotal+(general.subtotal*general.taxrate)) 
    props.updatesub() 
  }       
  function addToWishlist() { 
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    })
    let wishobj = {id:props.id,name:props.name,img:props.img,price:props.price,units:props.units,qty:props.qty,cat:props.cat,color:props.color,sizes:props.sizes,instock:props.instock,addcart:props.prod.addcart,wishlist:props.wishlist,descript:props.descript,selcolor:props.prod.selcolor,selsize:props.prod.selsize,compared:props.compared,ratings:props.ratings,reviews:props.reviews,avgrating:props.avgrating}
    wishes.push(wishobj)  
    general.wishnum += 1
    props.addwishnum() 
  }   
  function scrollUp() {
    window.scrollTo(0,0)
  } 
  function addToCompare(prod) {
    let product = {"id":prod.id,"img":prod.img,"name":prod.name,"price":prod.price,"addcart":prod.addcart,"instock":prod.instock,"descript":prod.descript,"color":prod.color,"cat":prod.cat,"sizes":prod.sizes}
    general.compareprods.push(product)
    prod.compared = true
    props.updatecompare() 
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
        document.querySelector('.cartcont').style.opacity = '1'
        document.querySelector('.cartcont').style.visibility = 'visible'
        document.querySelector('.cartcont').style.top = '45px'
        setTimeout(() => {
          document.querySelector('.cartcont').style.opacity = ''
        document.querySelector('.cartcont').style.visibility = ''
        document.querySelector('.cartcont').style.top = ''
        }, 3000); 
      } 
    })  
    const comparebtn = document.querySelectorAll('.comparebtn')
    const comparecont = document.querySelector('.comparecont')
    comparebtn.forEach(el => {
      el.onclick = () => {
        comparecont.style.display = 'flex'
        setTimeout(() => {
          comparecont.style.opacity = '1'
        }, 100)
        document.body.style.overflowY = 'hidden'
        console.log('click')
      } 
    })
 
  },[]) 
  
  return (  
    <div className="itemcont" data-update={props.updatecompstatus}> 
      <div className="imgcont"> 
        <div className="labelcont"><small className="sale" style={{display: (props.sale?"block":"none")}}>Sale</small><small style={{display: (props.hot?"block":"none") }} className="hot">Hot</small></div>
        <Link to={props.wishlist?"/wishlist":"#"} className="heartlink" onClick={() => props.wishlist?scrollUp():"#"}><i className={props.wishlist?"fas fa-heart":"far fa-heart"} onClick={() => props.wishlist?"":addToWishlist()}></i></Link>
        <Link to="/product" onClick={() => {props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.instock,props.addcart,props.wishlist,props.qty,props.ratings,props.compared,props.reviews,props.avgrating);window.scrollTo(0, 0)}}><img src={props.img} alt="item"/></Link>
        <div className="itemactions">
          <i style={{display: props.instock?"inline-block":"none"}} className={props.addcart?"fas fa-check removefromcart":"fas fa-shopping-cart addtocart"} onClick={props.addcart?"":() => addToCart()}></i>
          <i className="fas fa-search-plus quickviewbtn" onClick={() => props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.instock,props.addcart,props.wishlist,props.qty,props.ratings,props.compared,props.reviews,props.avgrating)}></i> 
          <i className="fas fa-random comparebtn" onClick={() => props.compared?"":addToCompare(props.prod)} style={{color: props.compared?"var(--color)":""}}></i>
        </div> 
      </div> 
      <div className="iteminfodiv">
        <div>
          <h5 onClick={() => props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.instock,props.addcart,props.wishlist,props.qty,props.ratings,props.compared,props.reviews,props.avgrating)}><Link to="/product">{props.name}</Link></h5>
          <button disabled={!props.instock} style={{cursor: props.instock?"":"not-allowed",opacity: props.instock?"1":"0.5"}} className="newaddtocart" onClick={props.addcart?"":() => addToCart()}>{props.addcart?"Added To Cart":props.instock?"Add To Cart":"Out Of Stock"}</button>
          </div> 
        <div>
          <small>${parseFloat(props.price).toFixed(2)}</small>
          <small className="newstarsicons">
            { Array.apply(null, { length: Math.round(props.prod.avgrating.avg) }).map((el) => <i className="fas fa-star"></i> ) } 
            { Array.apply(null, { length: 5-Math.round(props.prod.avgrating.avg) }).map((el) => ( <i className="far fa-star"></i> )) }
          </small>
        </div> 
      </div> 
    </div>  
  )  
} 

export default Item