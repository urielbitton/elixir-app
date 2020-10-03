import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CartPageItem(props) {
  const [rem, setRem] = useState(0)
  let temp //dummy var
 
  let colormap = {"#111":"Black","#b0b0b0":"Gray","#ff004c":"Red","#bbff00":"Green","#9c0000":"Brown","#ffbb00":"Orange","#ffee00":"Yellow","#ffb4ff":"Pink","#00aeff":"Blue","#f5f5f5":"White"}
    
  function addUnits() { 
    if (props.prod.units < props.prod.qty) {
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

  function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()]
    })
  }

  return (
    <tr> 
      <td>
        <img src={props.img} alt="cartprod" />
        <Link to="/product">
          <h6  data-update={props.colorupdate} onClick={() => props.openproduct(props.prod,props.id,props.name,props.img,props.price,props.descript,props.color,props.cat,props.sizes,props.units,props.instock,props.addcart,props.wishlist,props.qty)}>{props.name} - {replaceAll(props.prod.selcolor, colormap)}</h6>
        </Link> 
        <small style={{color:"#aaa"}}>Size: {props.prod.selsize}</small>
      </td>
      <td className="pricetd">${parseFloat(props.price).toFixed(2)}</td>
      <td>
        <div className="itemnum">
          <div className="subnum" onClick={() => subUnits()}>-</div>
          <div className="num">{props.prod.units}</div>
          <div className="addnum" onClick={() => addUnits()}>+</div>
        </div>
      </td>
      <td className="itemtotaltd">
        ${(parseFloat(props.price) * (props.prod.units)).toFixed(2)}
      </td>
      <td>
        <i className="far fa-window-close" onClick={removeItem}></i>
      </td>
    </tr>
  );
}

export default CartPageItem;
