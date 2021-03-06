import React, {useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import PageBanner from './PageBanner'
import CartPageItem from './CartPageitem';
import { ProductContext } from './ProductContext'

function CartPage(props) {

  const {products, general, cart} = useContext(ProductContext)

  const [update, setUpdate] = useState(0)
  const [goodcoupon, setGoodcoupon] = useState(false)
  const [couponname, setCouponname] = useState()
  const [couponamount, setCouponamount] = useState(0)
   
  general.total = ((general.subtotal + (general.subtotal * general.taxrate)).toFixed(2)) - couponamount
  
  const cartitem = cart.map(item => { 
      return ( 
        <CartPageItem item={item} key={item.id} updatesub={props.updatesub} updatecarts={props.updatecarts} colorupdate={props.colorupdate} sizeupdate={props.sizeupdate} openproduct={props.openproduct}/>
      )         
  })        
  
  function clearCart() {
    products.map(prod => {
      prod.addcart = false
      prod.units = 1
    })   
    cart.splice(0,cart.length)
    general.cartitems = 0
    general.subtotal = 0
    setUpdate(prev => prev-1)
    props.updatecarts() 
  } 
  function verifyCoupon() {
    for(let i=0;i<general.coupons.length;i++) {
      if (general.coupons[i].name === couponname) {
        setGoodcoupon(true)
        setCouponamount(general.coupons[i].amount)
        props.applycoupon(general.coupons[i].name, general.coupons[i].amount)
      }   
    } 
  }
 
  useEffect(() => {
    document.querySelector('.proceeddiv .b1').onclick = () => {
      document.querySelector('.scrollpos').scrollIntoView()
    }
    document.querySelector('.viewcoupons').onclick = () => {
      document.querySelector('.availcouponsdiv').style.display = 'block'
      setTimeout(() => {
        document.querySelector('.availcouponsdiv').style.opacity = '1'
      }, 100);
    }
  },[])

  return (
    <div className="cartpage">
      <PageBanner title="Cart" subtitle="Products in your cart" bgimg="https://i.imgur.com/qy9wB4B.jpg"/>
 
      <div className="grid pgrid xgrid"> 
        <div className="cartpageinner" style={{display: (cart.length<1?"none":"block")}}>
        
        <table className="carttable" data-update={update}>
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
               <input placeholder="Enter coupon code" value={couponname} className="couponinp" onKeyDown={(e) => e.key==="Backspace"?setCouponname():""}/> 
                <button className={goodcoupon?"b1 goodcoupon":"b1"} onClick={() => verifyCoupon()}>{goodcoupon?"Coupon Applied":"Apply Coupon"}{goodcoupon?<i className="fas fa-check"></i>:""}</button>
                <small className="viewcoupons">View available coupons</small>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
              <div className="proceeddiv"><button className="b1">Proceed To Checkout</button></div>
              </td>
            </tr> 
            <div className="availcouponsdiv">
              {
                general.coupons.map(el => {
                  return <small onClick={() => setCouponname(el.name)}>{el.name}</small>
                })
              }
            </div>
          </tfoot>
          <tfoot> 
            <tr>
              <td colSpan="1">
                <Link to="/shop"><button className="b1">Continue Shopping</button></Link>
                <button className="b2" onClick={() => clearCart()}><i className="fas fa-times"></i>Clear Cart</button>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
                <h4>Subtotal: <span>${general.subtotal.toFixed(2)}</span></h4>
              </td>
            </tr>
          </tfoot>
        </table>  
 
        <div className="scrollpos"></div>
        <div className="spacerl"></div>

        <div className="totalsgrid">
          <div className="shippingdiv">
            <h2>Shipping</h2>
            <select> 
              <option>Canada</option>
            </select> 
            <select onChange={(e) => {general.taxrate = e.target.value/100; setUpdate(prev => prev+1)}}> 
              <option disabled selected>Choose a Province</option>
              <option value="5">Alberta</option>
              <option value="12">British Columbia</option>
              <option value="12">Manitoba</option>
              <option value="15">New Brunswick</option>
              <option value="15">Newfoundland & Labrador</option>
              <option value="5">Northwest Territories</option>
              <option value="15">Nova Scotia</option>
              <option value="5">Nunavut</option>
              <option value="13">Ontario</option>
              <option value="15">Prince Edwad Island</option>
              <option value="15">Quebec</option>
              <option value="11">Saskatchewan</option> 
              <option value="5">Yukon</option> 
            </select>
            <input placeholder="Postal Code"/> 
          </div>  
          <div className="carttotals" data-update={update}> 
            <h2>Cart Totals</h2>
            <div><h6>Subtotal</h6><h6>${general.subtotal}.00</h6><div className="clear"></div></div>
            <div><h6>Tax Rate ({general.taxrate*100}%)</h6><h6>${(general.subtotal * general.taxrate).toFixed(2)}</h6><div className="clear"></div></div>
            <div><h6>Shipping Fees</h6><h6>{general.subtotal>200?"Free Shipping":"Flat Rate: 30$"}</h6><div className="clear"></div></div>
            <div style={{display: goodcoupon?"block":"none"}}><h6>Coupon Code</h6><h6 style={{color:"var(--color)"}}>{couponname}: -${parseFloat(couponamount).toFixed(2)}</h6><div className="clear"></div></div>
            <div><h6>Order Total</h6><h6 className="ordertotal">${(general.subtotal<1?0:(general.subtotal>100?parseFloat(general.total).toFixed(2):parseFloat(general.total+30).toFixed(2)))<0?parseFloat(0).toFixed(2):(general.subtotal<1?0:(general.subtotal>100?parseFloat(general.total).toFixed(2):parseFloat(general.total+30).toFixed(2)))}</h6><div className="clear"></div></div>
            <div><Link to="/checkout"><button onClick={() => window.scrollTo(0, 0)}>Proceed To Checkout</button></Link></div>
          </div> 
        </div>  

        <div className="spacerl"></div>
        </div>

        <div className="msgcont" style={{display: (general.cartitems>0?"none":"block")}}>
          <div className="msgbox"><p><i class="fas fa-shopping-cart"></i>Your cart is currently empty.</p></div>
          <Link to="/shop"><button>Return To Shop</button></Link>
        </div>
 
      </div>  


    </div>
  )
} 

export default CartPage