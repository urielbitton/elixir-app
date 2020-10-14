import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../site/ProductContext'

function Homecont(props) {

  const {products, orders} = useContext(ProductContext)

  const orderrows = orders.map(ord => {
    return <tr><td className="orderlink">#{ord.number}</td><td>{ord.products}</td><td>${ord.total.toFixed(2)}</td><td><button className="statusbtn">{ord.status}</button></td></tr>
  })
  const cardinfo = orders.slice(0,1).map(ord => {
    return <><i className="cardnums">*****{ord.cardnumber.slice(12)}</i><i className="expdate">exp: {ord.expdate}</i></>
  })
  const ordertrack = orders.slice(0,1).map(ord => {
    return <div> <h6>Order: #{ord.number}<span>{ord.date}</span></h6> <div className="trackprog"> <div className="trackpointers"> <i className="top">Pending<br/>|</i> <i className="bottom">|<br/>Processing</i> <i className="top">Shipped<br/>|</i> <i className="bottom">|<br/>Delivered</i> </div><div className="progtube"> <div className="progfill"></div></div></div></div>
  }) 
  const recentpurch = products.slice(0,4).map(prod => {
    if(prod.purchased_status===true)
      return <tr><td><img src={prod.img} alt=""/></td><td className="prodnametd">{prod.name}</td><td>${prod.price.toFixed(2)}</td><td>{prod.units}</td><td>${(prod.price*prod.units).toFixed(2)}</td><td style={{color:prod.instock?"var(--color)":"#FF3737"}}>{prod.instock?"In Stock":"Out of Stock"}</td></tr>
  })
   
  useEffect(() => {
    const progfill = document.querySelector('.progfill')
    setTimeout(() => {
      if(document.body.contains(progfill)) {
      let orderstatus = orders[0].status
        switch(orderstatus) {
          case "Payment Pending": progfill.style.width = '20%'; break
          case "Processing": progfill.style.width = '50%'; break
          case "Shipped": progfill.style.width = '70%'; break
          case "Delivered": progfill.style.width = '100%'; break
          case "Refunded": progfill.style.width = '100%'; break
          default: progfill.style.width = '15%' 
        }
      } 
    }, 500);
  },[]) 

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
            {orderrows}  
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
              {recentpurch}              
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
          {ordertrack}
        </div> 
        <div className="dashbox paymentsbox smallbox">
        <h5>Your Payments</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="paycard">
            {cardinfo}
            <h6>Visa</h6>
            <div className="c1 circle"></div>  
            <div className="c2 circle"></div>
            <div className="triangle"></div>
          </div> 
        </div>
        <div className="dashbox addressbox smallbox">
          <h5>Your Addresses</h5>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="addressrow">
            <i class="far fa-map-marker-alt"></i>
            <h6>Alison Hayley</h6>
            <h6>6509 Walden Ave.</h6>
            <h6>H1B 5N3</h6>
            <h6>Montreal, Quebec</h6>
            <h6>Canada</h6>
            <h6>Phone: 15149803441</h6>
          </div>
          <div className="addressrow">
            <i class="far fa-map-marker-alt"></i>
            <h6>Jane Hayley</h6>
            <h6>6509 Walden Ave.</h6>
            <h6>H1B 5N3</h6>
            <h6>Montreal, Quebec</h6>
            <h6>Canada</h6>
            <h6>Phone: 15147761091</h6>
          </div>
          <div className="circle"></div>
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