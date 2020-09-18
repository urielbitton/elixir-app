import React, {useContext, useEffect} from 'react'
import PageBanner from './PageBanner'
import { ProductContext } from './ProductContext'

function Checkout(props) {

  const {products, setProducts, setGeneral} = useContext(ProductContext)

  const total = (props.subtotal + props.subtotal * 0.15).toFixed(2)

  useEffect(() => {
    const placeorderbtn = document.querySelector('.placeorderbtn')
    placeorderbtn.onclick = () => {
      document.querySelector('.mark').scrollIntoView()
      document.querySelector('.msgnotif').style.display = 'block'
      setTimeout(() => {
        document.querySelector('.msgnotif').style.opacity = '1'
      }, 100);
    }


  },[])

  return (
    <div className="checkoutpage">
      <PageBanner title="Checkout" subtitle="Checkout your products" bgimg="https://i.imgur.com/hgx84Pw.jpg"/>
      <div className="grid xgrid pgrid">
        <div className="logreg">
          <p>Returning customer? <a href="#">Click here to login</a></p>
          <p>Want to create an account? <a href="#">Click here to register</a></p>
        </div>

        <div className="checkoutgrid">
          <div className="billingdiv"> 
            <h2>Billing Details</h2>
            <div className="billinggrid">
              <label className="span1"><h6>First Name</h6><input /></label>
              <label className="span1"><h6>Last Name</h6><input /></label>
              <label><h6>Country</h6><input /></label>
              <label><h6>Street Address</h6><input placeholder="House Address"/><input placeholder="Apt, Unit #"/></label>
              <label><h6>City</h6><input /></label>
              <label><h6>State/Province</h6><input /></label>
              <label><h6>Postal Code/ZIP</h6><input /></label>
              <label><h6>Phone Number</h6><input /></label>
              <label><h6>Email</h6><input /></label>
              <label><h6>Order Notes</h6><textarea placeholder="Add notes about your order..."></textarea></label>
            </div>
          </div>
          <div className="ordertotaldiv">
            <h2>Your Order</h2>
            <div className="carttotals">
              <div className="totalprods">
                <h4>Products</h4>
                <div>
                 { 
                   products.map(prod => {
                     return (
                      prod.addcart? <div><h6>{prod.name}<span>&#10006; </span></h6><h6>${prod.price.toFixed(2)}</h6><div className="clear"></div></div>:""
                     )
                   }) 
                 }
                  <div className="clear"></div>
                </div>
              </div>
              <div><h6>Subtotal</h6><h6>${props.subtotal.toFixed(2)}</h6><div className="clear"></div></div>
              <div><h6>Shipping Fees</h6><h6>Free Shipping</h6><div className="clear"></div></div>
              <div><h6>Order Total</h6><h6 className="ordertotal">${total}</h6><div className="clear"></div></div>
              <div>
                <label><input name="payment" type="radio"/><small>Bank Transfer</small></label>
                <label><input name="payment" type="radio"/><small>Cash On Delivery</small></label>
              </div>
              <div><button className="placeorderbtn">Place Order</button></div>
            </div>
          </div> 
        </div>

        <div className="spacerl"></div>
        <div className="mark"></div>

        <div className="msgcont msgnotif">
          <h2>Order Placed</h2>
          <div className="msgbox">
            <p><i className="fas fa-check-circle"></i>Your order has been placed successfully! Thank you for shopping with elixir.</p>
          </div>
        </div>

      </div>

    </div>
  ) 
}

export default Checkout