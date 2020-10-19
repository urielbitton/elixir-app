import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from '../site/ProductContext'

function Home(props) {

  const {products, orders, general, accounts} = useContext(ProductContext)

  const orderrows = orders.map(ord => {
    return <tr><td className="orderlink">#{ord.number}</td><td>{ord.products}</td><td>${ord.total.toFixed(2)}</td><td><button className="statusbtn">{ord.status}</button></td><td>{ord.date}</td></tr>
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
          case "Pending": progfill.style.width = '16%'; break
          case "Processing": progfill.style.width = '40%'; break
          case "Shipped": progfill.style.width = '65%'; break
          case "Delivered": progfill.style.width = '100%'; break
          case "Refunded": progfill.style.width = '100%'; break
          default: progfill.style.width = '0%'  
        }
      } 
    }, 500) 

    document.querySelector('.addressbox small').onclick = () => setTimeout(() => { document.querySelector('[data-taber="2"]').click() }, 200)
    document.querySelector('.paymentsbox small').onclick = () => setTimeout(() => { document.querySelector('[data-taber="3"]').click() }, 200)
    document.querySelector('.trackerbox small a').onclick = () => setTimeout(() => { document.querySelector('.trackerpanel').style.bottom = '0'; props.opentracker(); document.querySelector('.trackerpanel .progfill').style.width = '65%' }, 400)
  },[]) 

  return ( 
    <div className="homecont">
      <div className="spacerl"></div>
      <div className="spacers"></div>

      <div className="homegrid">
        <div className="dashbox statusbox">
          <h4>Latest Orders</h4>
          <small><Link to="/myorders">More<i className="fas fa-long-arrow-alt-right"></i></Link></small>
          <table>
            <thead>
              <th>Order #</th>
              <th>Products</th> 
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </thead>
            <tbody>
            {orderrows.slice(0,5)}  
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
          <small><Link to="/myorders">View<i className="fas fa-long-arrow-alt-right"></i></Link></small>
          <div className="spacers"></div>
          <div> <h6>Order: #{orders[0].number}<span>{orders[0].date}</span></h6> <div className="trackprog"><div className="trackpointers"><i className="top">Pending</i> <i className="bottom">Processing</i> <i className="top">Shipped</i> <i className="bottom">Delivered</i> </div><div className="progtube"><div className="progchecks"><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i><i class="fas fa-check-circle"></i></div><div className="progfill"></div></div></div></div>
        </div>   
        <div className="dashbox paymentsbox smallbox">
        <h5>Your Payments</h5> 
          <small><Link to="/myaccount">Manage<i className="fas fa-long-arrow-alt-right"></i></Link></small>
            {
              <div className="paycard"><i className="cardnums">*****{accounts.find(el => el.id===general.activeaccid).cardnumber.slice(12)}</i><i className="expdate">exp: {accounts.find(el => el.id===general.activeaccid).expdate}</i><h4>{accounts.find(el => el.id===general.activeaccid).name}</h4><h6>{accounts.find(el => el.id===general.activeaccid).cardtype}</h6><div className="c1 circle"></div><div className="c2 circle"></div><div className="triangle"></div></div>
            }
        </div>
        <div className="dashbox addressbox smallbox">
          <h5>Your Addresses</h5>
          <small><Link to="/myaccount">Manage<i className="fas fa-long-arrow-alt-right"></i></Link></small>
          <div className="addressrow">
          {
            <><i class="far fa-map-marker-alt"></i> <h6>{accounts.find(el => el.id===general.activeaccid).name}</h6> <h6>{accounts.find(el => el.id===general.activeaccid).address}</h6> <h6>{accounts.find(el => el.id===general.activeaccid).postal}</h6> <h6>{accounts.find(el => el.id===general.activeaccid).city}</h6> <h6>{accounts.find(el => el.id===general.activeaccid).country}</h6> <h6>Phone: {accounts.find(el => el.id===general.activeaccid).phone}</h6></>
          }
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