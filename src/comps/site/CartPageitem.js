import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function CartPageItem(props) {

  const {products, general, cart} = useContext(ProductContext)
  const [update, setUpdate] = useState(0)
 
  let colormap = {"#111":"Black","#b0b0b0":"Gray","#ff004c":"Red","#bbff00":"Green","#9c0000":"Brown","#ffbb00":"Orange","#ffee00":"Yellow","#ffb4ff":"Pink","#00aeff":"Blue","#f5f5f5":"White"}
    
  function addUnits() { 
    if (props.item.units < props.item.qty) {
      props.item.units += 1  
      general.cartitems += 1
      general.subtotal += props.item.price
      products.map(prod =>  {
        if(prod.id === props.item.id) {
          prod.units = props.item.units
        }
      })
      setUpdate(prev => prev+1)
      props.updatesub()
    }  
  }
  function subUnits() {
    if (props.item.units > 1) { 
      props.item.units -= 1 
      general.cartitems -= 1
      general.subtotal -= props.item.price
      products.map(prod =>  {
        if(prod.id === props.item.id) {
          prod.units = props.item.units
        }
      })
      setUpdate(prev => prev-1)
      props.updatesub()
    } 
  }   
  function removeItem() {
    general.subtotal -= (props.item.price*props.item.units) 
    general.cartitems -= 1 
    products.map(prod => {
      if(prod.id === props.item.id) {
        prod.addcart = false
        prod.units = 1
      }
      cart.map(item => {
        if(item.id === props.item.id) { 
          let index = cart.indexOf(item)
          cart.splice(index,1)
          setUpdate(prev => prev-1)
        }
      })
      props.updatecarts()
      props.item.units = 0 
      props.item.addcart = false
    }) 

  } 

  function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()]
    })
  }
   
  return (
    <tr data-update={update}> 
      <td>
        <img src={props.item.img} alt="cartprod" /> 
        <Link to="/product">
          <h6  data-update={props.colorupdate} onClick={() => props.openproduct(props.item,props.item.id,props.item.name,props.item.img,props.item.price,props.item.descript,props.item.color,props.item.cat,props.item.sizes,props.item.units,props.item.instock,props.item.addcart,props.item.wishlist,props.item.qty,props.item.ratings,props.item.reviews,props.item.avgrating)}>{props.item.name} - {replaceAll(props.item.selcolor, colormap)}</h6>
        </Link> 
        <small style={{color:"#aaa"}}>Size: {props.item.selsize}</small>
      </td>
      <td className="pricetd">${parseFloat(props.item.price).toFixed(2)}</td>
      <td>
        <div className="itemnum">
          <div className="subnum" onClick={() => subUnits()}>-</div>
          <div className="num">{props.item.units}</div>
          <div className="addnum" onClick={() => addUnits()}>+</div>
        </div>
      </td>   
      <td className="itemtotaltd">
        ${(parseFloat(props.item.price) * (props.item.units)).toFixed(2)}
      </td>
      <td>
        <i className="far fa-window-close" onClick={removeItem}></i>
      </td>
    </tr>
  )
}
 
export default CartPageItem
