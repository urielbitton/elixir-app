import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartItem(props) {

  return (
    <div className="cartitem">
      <img src ={props.img} alt="cartimg" />
      <h5><Link to="/product">{props.name}</Link> <span>{props.num}</span></h5>
      <h6>${props.price}</h6> 
      <small>Units: {props.prod.units}</small>
      <hr/>
    </div>   
      
  ) 
} 

export default CartItem