import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartPageItem(props) {

  return (
    <tr>
      <td><img src={props.img} alt="cartprod"/><Link to="/product"><h6>{props.name}</h6></Link></td>
      <td className="pricetd">${props.price}.00</td>
      <td><div className="itemnum"><div className="subnum" onClick={() => props.subunits()}>-</div><div className="num">{props.units}</div><div className="addnum" onClick={() => props.addunits()}>+</div></div></td>
      <td className="itemtotaltd">${props.price*props.units}.00</td>
      <td><i className="far fa-window-close"></i></td>
    </tr>
  )
} 

export default CartPageItem