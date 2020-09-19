import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function CartPageItem(props) {

  const [units, setUnits] = useState(0)
  let newunits = units
  
  function addUnits() {
    (props.units+newunits)<10?setUnits(prev => prev+1):""
    if((props.units+newunits)<10)
      props.updatedadd(props.price)
  } 
  function subUnits() {
    (props.units+newunits)>1?setUnits(prev => prev-1):""
    if((props.units+newunits)>1)
      props.updatedsub(props.price)
  }  
 
  return ( 
    <tr>
      <td><img src={props.img} alt="cartprod"/><Link to="/product"><h6>{props.name}</h6></Link></td>
      <td className="pricetd">${props.price}.00</td>
      <td><div className="itemnum"><div className="subnum" onClick={() => subUnits()}>-</div><div className="num">{props.units+newunits}</div><div className="addnum" onClick={() => addUnits()}>+</div></div></td>
      <td className="itemtotaltd">${props.price*(props.units+newunits)}.00</td>
      <td><i className="far fa-window-close"></i></td>
    </tr>
  )
} 
 
export default CartPageItem