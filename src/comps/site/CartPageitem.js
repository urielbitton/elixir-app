import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CartPageItem(props) {
  const [rem, setRem] = useState(0)
  let temp //dummy var
 
  function addUnits() {
    if (props.prod.units < 10) {
      props.updatedadd(props.price)
      props.prod.units += 1
    }
  }
  function subUnits() {
    if (props.prod.units > 1) { 
      props.updatedsub(props.price) 
      props.prod.units -= 1
    }
  }   
  function removeItem() {
    props.prod.units = 0
    props.prod.addcart = false
    props.updatedadd()
    props.removeitem(props.price, props.units)
  } 

  return (
    <tr>
      <td>
        <img src={props.img} alt="cartprod" />
        <Link to="/product">
          <h6 data-update={props.colorupdate}>{props.name} - {props.prod.selcolor}</h6>
        </Link> 
        <small style={{color:"#aaa"}}>Size: {props.prod.selsize}</small>
      </td>
      <td className="pricetd">${props.price.toFixed(2)}</td>
      <td>
        <div className="itemnum">
          <div className="subnum" onClick={() => subUnits()}>-</div>
          <div className="num">{props.prod.units}</div>
          <div className="addnum" onClick={() => addUnits()}>+</div>
        </div>
      </td>
      <td className="itemtotaltd">
        ${(props.price * (props.prod.units)).toFixed(2)}
      </td>
      <td>
        <i className="far fa-window-close" onClick={removeItem}></i>
      </td>
    </tr>
  );
}

export default CartPageItem;
