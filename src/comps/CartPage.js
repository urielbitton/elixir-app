import React, {useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import PageBanner from './PageBanner'
import CartPageItem from './CartPageitem';
import { ProductContext } from './ProductContext'

function CartPage(props) {

  const {products, setProducts, setGeneral} = useContext(ProductContext)

  const cartitem = products.map(prod => {
    if(prod.addcart) {   
      return ( 
        <CartPageItem name={prod.name} img={prod.img} price={prod.price} units={prod.units} key={prod.id}/>
      )  
    }     
  }) 

  return (
    <div className="cartpage">
      <PageBanner title="Cart" subtitle="Products in your cart" bgimg="https://i.imgur.com/qy9wB4B.jpg"/>
 
      <div className="grid pgrid">
        <div className="spacerl"></div>
        <table className="carttable">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartitem}
          </tbody>
          <tfoot>
          <tr>
              <td colSpan="1">
               <input placeholder="Enter coupon code"/> 
                <button className="b1">Apply Coupon</button>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
              <div className="proceeddiv"><button className="b1">Proceed To Checkout</button></div>
              </td>
            </tr> 
          </tfoot>
          <tfoot> 
            <tr>
              <td colSpan="1">
                <button className="b1">Continue Shopping</button>
                <button className="b2"><i className="fas fa-times"></i>Clear Cart</button>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
                <h4>Subtotal: <span>${props.subtotal}.00</span></h4>
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="spacerl"></div>

        <div className="totalsgrid">
          <div className="shippingdiv">
            <h2>Shipping</h2>
            <select> 
              <option>Canada</option>
              <option>United States</option>
              <option>UK</option>
              <option>France</option>
              <option>China</option>
              <option>South America</option>
              <option>Israel</option>
            </select>
            <input placeholder="City"/>
            <input placeholder="Postal Code"/> 
          </div>
          <div className="carttotals">
            <h2>Cart Totals</h2>
            <div><h6>Subtotal</h6><h6>$398.00</h6><div className="clear"></div></div>
            <div><h6>Shipping Fees</h6><h6>Free Shipping</h6><div className="clear"></div></div>
            <div><h6>Order Total</h6><h6 className="ordertotal">$435.00</h6><div className="clear"></div></div>
            <div><Link to="/checkout"><button>Proceed To Checkout</button></Link></div>
          </div>
        </div> 

        <div className="spacerl"></div>

      </div> 


    </div>
  )
} 

export default CartPage