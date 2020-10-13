import React, { useContext } from 'react'
import { ProductContext } from '../site/ProductContext'

function Homecont(props) {

  const {products} = useContext(ProductContext)

  return (
    <div className="homecont">
      <div className="spacerl"></div>
      <div className="spacers"></div>

      <div className="homegrid">
        <div className="dashbox statusbox">
          <h4>Latest Orders</h4>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
          <table>
            <thead>
              <th>Order #</th>
              <th>Products</th> 
              <th>Total</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr><td className="orderlink">#1591</td><td>5</td><td>$2,129.00</td><td><button className="statusbtn">Shipped</button></td></tr>
              <tr><td className="orderlink">#1539</td><td>2</td><td>$1,439.00</td><td><button className="statusbtn">Refunded</button></td></tr>
              <tr><td className="orderlink">#1598</td><td>1</td><td>$629.00</td><td><button className="statusbtn">Processed</button></td></tr>
            </tbody>
          </table>
        </div>
        <div className="dashbox statusbox productsbox">
          <h4>Recent Purchases</h4>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
          <table>
            <thead>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th> 
              <th>Qty.</th>
              <th>Subtotal</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr><td><img src={products[0].img} alt=""/></td><td className="prodnametd">{products[0].name}</td><td>${products[0].price.toFixed(2)}</td><td>{products[0].units}</td><td>${(products[0].price*products[0].units).toFixed(2)}</td><td style={{color:products[0].instock?"var(--color)":"#FF3737"}}>{products[0].instock?"In Stock":"Out of Stock"}</td></tr>
              <tr><td><img src={products[7].img} alt=""/></td><td className="prodnametd">{products[7].name}</td><td>${products[7].price.toFixed(2)}</td><td>{products[7].units}</td><td>${(products[7].price*products[7].units).toFixed(2)}</td><td style={{color:products[7].instock?"var(--color)":"#FF3737"}}>{products[7].instock?"In Stock":"Out of Stock"}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="dashbox statusbox updatesbox">
          <h4>Recent Updates</h4>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
        </div>
        <div className="dashbox trackerbox smallbox">
          <h5>Track Your Orders</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="spacers"></div>
          <h6>Order: #1591<span>Jan 14 2020</span></h6>
          <div className="trackprog">
            <div className="trackpointers">
              <i className="top">Pending<br/>|</i>
              <i className="bottom">|<br/>Processing</i>
              <i className="top">Shipped<br/>|</i>
              <i className="bottom">|<br/>Delivered</i>
            </div> 
            <div className="progtube">
              <div className="progfill"></div>
            </div>
          </div>
        </div> 
        <div className="dashbox paymentsbox smallbox">
        <h5>Your Payments</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
        </div>
        <div className="dashbox addressbox smallbox">
          <h5>Your Addresses</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
        </div>
        <div className="dashbox recommendbox smallbox">
          <h5>Recommended For You</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
        </div>
      </div>
      
    </div>
  )
}

export default Homecont