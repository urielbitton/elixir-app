import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartItem(props) {
 
  return (
    <div className="cartitem">
      <img src ={props.img} alt="cartimg" />
      <h5 onClick={() => props.openproduct(props.item,props.item.id,props.item.name,props.item.img,props.item.price,props.item.descript,props.item.color,props.item.cat,props.item.sizes,props.item.units,props.item.instock,props.item.addcart,props.item.wishlist,props.item.qty,props.item.ratings,props.item.reviews,props.item.avgrating)}><Link to="/product">{props.name}</Link> <span>{props.num}</span></h5>
      <h6>${props.price}</h6> 
      <small>Units: {props.units}</small>
      <hr/>
    </div>    
      
  ) 
} 

export default CartItem