import React from 'react'
import PageBanner from './PageBanner'

function CartPage() {
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
            <tr>
              <td><img src="https://i.imgur.com/OztKcJN.jpg" alt="cartprod"/><h6>Fall Jacket - Navy</h6></td>
              <td className="pricetd">$199.00</td>
              <td><div className="itemnum"><div className="subnum">-</div><div className="num">1</div><div className="addnum">+</div></div></td>
              <td className="itemtotaltd">$199.00</td>
              <td><i class="far fa-window-close"></i></td>
            </tr>
            <tr>
              <td><img src="https://i.imgur.com/a7ibChD.jpg" alt="cartprod"/><h6>Summer Dress Shirt - White</h6></td>
              <td className="pricetd">$199.00</td>
              <td><div className="itemnum"><div className="subnum">-</div><div className="num">1</div><div className="addnum">+</div></div></td>
              <td className="itemtotaltd">$199.00</td>
              <td><i class="far fa-window-close"></i></td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
              <td colSpan="1">
               <input placeholder="Enter coupon code"/> 
                <button className="b1">Apply Coupon</button>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
              <button className="b1">Proceed To Checkout</button>
              </td>
            </tr> 
          </tfoot>
          <tfoot> 
            <tr>
              <td colSpan="1">
                <button className="b1">Continue Shopping</button>
                <button className="b2"><i class="fas fa-times"></i>Clear Cart</button>
              </td>
              <td colSpan="1"></td>
              <td colSpan="3" className="subtotaltd"> 
                <h4>Subtotal: <span>$398.00</span></h4>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  )
} 

export default CartPage