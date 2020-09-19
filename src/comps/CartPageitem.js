import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CartPageItem(props) {
  const [units, setUnits] = useState(0);
  let newunits = units
  let temp
 
  function addUnits() {
    (props.units+newunits)<10?setUnits(prev => prev+1):(temp=1)
    if (props.units+newunits < 10) 
      props.updatedadd(props.price)
      props.prod.units = units+props.units
  }
  function subUnits() {
    (props.units+newunits)>1?setUnits(prev => prev-1):(temp=1)
    if (props.units+newunits > 1) 
      props.updatedsub(props.price) 
      props.prod.units = units+props.units
  }  

  return (
    <tr>
      <td>
        <img src={props.img} alt="cartprod" />
        <Link to="/product">
          <h6>{props.name}</h6>
        </Link> 
      </td>
      <td className="pricetd">${props.price}.00</td>
      <td>
        <div className="itemnum">
          <div className="subnum" onClick={() => subUnits()}>-</div>
          <div className="num">{props.prod.units+newunits}</div>
          <div className="addnum" onClick={() => addUnits()}>+</div>
        </div>
      </td>
      <td className="itemtotaltd">
        ${props.price * (props.units + newunits)}.00
      </td>
      <td>
        <i className="far fa-window-close"></i>
      </td>
    </tr>
  );
}

export default CartPageItem;
