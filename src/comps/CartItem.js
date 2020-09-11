import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartItem(props) {
  return (
    <div className="cartitem">
      <img src ="https://i.imgur.com/2lEwsyE.jpg" alt="cartimg" />
      <h5><Link to="/product">{props.name}</Link> <span><small>x</small>{props.num}</span></h5>
      <h6>${props.price}</h6> 
      <hr/>
    </div>
    
  ) 
}

export default CartItem