import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartPageItem(props) {
  return (
    <tr>
      <td><img src={props.img} alt="cartprod"/><Link to="/product"><h6>{props.name}</h6></Link></td>
      <td className="pricetd">${props.price}.00</td>
      <td><div className="itemnum"><div className="subnum">-</div><div className="num">{props.units}</div><div className="addnum">+</div></div></td>
      <td className="itemtotaltd">${props.price*1}.00</td>
      <td><i className="far fa-window-close"></i></td>
    </tr>
  )
}

export default CartPageItem