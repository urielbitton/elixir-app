import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../site/ProductContext'

function Home(props) {

  const {products, orders, customers} = useContext(ProductContext)

  const orderrows = orders.map(ord => {
    return <tr><td className="orderlink">#{ord.number}</td><td>{ord.products}</td><td>${ord.total.toFixed(2)}</td><td><button className="statusbtn">{ord.status}</button></td></tr>
  })
  const ordertrack = orders.map(ord => {
    return <div> <h6>Order: #{ord.number}<span>{ord.date}</span></h6> <div className="trackprog"><div className="trackpointers"><i className="top">Pending</i> <i className="bottom">Processing</i> <i className="top">Shipped</i> <i className="bottom">Delivered</i> </div><div className="progtube"><div className="progchecks"><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i></div><div className="progfill"></div></div></div></div>
  }) 
  const recentpurch = products.map(prod => {
    if(prod.purchased_status===true)
      return <tr><td><img src={prod.img} alt=""/></td><td className="prodnametd">{prod.name}</td><td>${prod.price.toFixed(2)}</td><td>{prod.units}</td><td>${(prod.price*prod.units).toFixed(2)}</td><td style={{color:prod.instock?"var(--color)":"#FF3737"}}>{prod.instock?"In Stock":"Out of Stock"}</td></tr>
  })
  let uprecentpurch = recentpurch.filter(el => el != null)
   
  useEffect(() => {
    const progfill = document.querySelector('.progfill')
    setTimeout(() => {
      if(document.body.contains(progfill)) {
      let orderstatus = orders[0].status
        switch(orderstatus) {
          case "Payment Pending": progfill.style.width = '20%'; break
          case "Processing": progfill.style.width = '40%'; break
          case "Shipped": progfill.style.width = '65%'; break
          case "Delivered": progfill.style.width = '100%'; break
          case "Refunded": progfill.style.width = '100%'; break
          default: progfill.style.width = '15%' 
        }
      } 
    }, 500) 
    
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
            {orderrows.reverse().slice(0,5)}  
            </tbody>
          </table>
        </div>
        <div className="dashbox statusbox productsbox">
          <div className="boxfader"></div>
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
              {uprecentpurch.slice(0,3)}              
            </tbody>
          </table>
        </div>
        <div className="dashbox statusbox updatesbox">
          <h4>Recent Updates</h4>
          <small>More<i className="fas fa-long-arrow-alt-right"></i></small>
        </div>
        <div className="dashbox trackerbox smallbox">
          <h5>Track Your Orders</h5>
          <small>View<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="spacers"></div>
          {ordertrack.reverse().slice(0,1)}
        </div>  
        <div className="dashbox paymentsbox smallbox">
        <h5>Your Payments</h5>
          <small>Manage<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="paycard">
            {/*<><i className="cardnums">*****{ord.cardnumber.slice(12)}</i><i className="expdate">exp: {ord.expdate}</i><h4>{ord.custname}</h4></>*/}
            <h6>Visa</h6>
            <div className="c1 circle"></div>  
            <div className="c2 circle"></div>
            <div className="triangle"></div>
          </div> 
        </div>
        <div className="dashbox addressbox smallbox">
          <h5>Your Addresses</h5>
          <small>Manage<i className="fas fa-long-arrow-alt-right"></i></small>
          <div className="addressrow">
          {/*<><i class="far fa-map-marker-alt"></i> <h6>{cus.name}</h6> <h6>{cus.address}</h6> <h6>{cus.postal}</h6> <h6>{cus.city}</h6> <h6>{cus.country}</h6> <h6>Phone: {cus.phone}</h6></>*/}
          </div>
          <div className="addressrow addnewaddress">
            <div>
              <i className="fal fa-plus"></i>
              <h6>Add Address</h6>
            </div>
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

export default Home