import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext';

function CartItem(props) {

  const {general, cart, products} = useContext(ProductContext)

  const [update, setUpdate] = useState(0)
 
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

  return (
    <div className="cartitem" data-update={update}>
      <i class="fal fa-times" onClick={() => removeItem()}></i>
      <img src ={props.img} alt="cartimg" />
      <h5 onClick={() => props.openproduct(props.item,props.item.id,props.item.name,props.item.img,props.item.price,props.item.descript,props.item.color,props.item.cat,props.item.sizes,props.item.units,props.item.addcart,props.item.wishlist,props.item.instock,props.item.qty,props.item.ratings,props.item.reviews,props.item.avgrating)}><Link to="/product">{props.name}</Link> <span>{props.num}</span></h5>
      <h6>${props.price}</h6> 
      <small>Units: {props.units}</small>
      <hr/>
    </div>    
      
  ) 
} 

export default CartItem