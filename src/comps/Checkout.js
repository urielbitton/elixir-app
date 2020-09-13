import React from 'react'
import PageBanner from './PageBanner'

function Checkout() {
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
                <div><h6>Women's Casual Shoes</h6><h6>$199.00</h6><div className="clear"></div></div>
                <div><h6>Women's Summer Jacket</h6><h6>$699.00</h6><div className="clear"></div></div>
              </div>
              <div><h6>Subtotal</h6><h6>$398.00</h6><div className="clear"></div></div>
              <div><h6>Shipping Fees</h6><h6>Free Shipping</h6><div className="clear"></div></div>
              <div><h6>Order Total</h6><h6 className="ordertotal">$435.00</h6><div className="clear"></div></div>
              <div>
                <label><input name="payment" type="radio"/><small>Bank Transfer</small></label>
                <label><input name="payment" type="radio"/><small>Cash On Delivery</small></label>
              </div>
              <div><button>Proceed To Checkout</button></div>
            </div>
          </div> 
        </div>

      </div>

    </div>
  ) 
}

export default Checkout