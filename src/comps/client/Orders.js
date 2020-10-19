import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from '../site/ProductContext'
import { jsPDF } from "jspdf"

function Orders(props) {

  const {products, orders} = useContext(ProductContext)

  const [orderstatus, setOrderstatus] = useState('')
  const [trackingnum, setTrackingnum] = useState('')
  const [ordercarrier, setOrdercarrier] = useState('') 
  const [ordopen, setOrdopen] = useState(false)
  const [trackopen, setTrackopen] = useState(false)
  const [update, setUpdate] = useState(0)
  let date = new Date()
  let demodate = date.getFullYear() +"/" +(date.getMonth() + 1) +"/" +(date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
  let demotime = (date.getHours()<10?"0"+date.getHours():date.getHours())+":"+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())
  const orderspanel = document.querySelector('.orderspanel')
 
  const myorders = orders.map(ord => {
    return (<div className="orderbox" style={{borderColor: ord.status==="Delivered"?"transparent":"var(--color)"}}>
    <h5><div className="orderstatcirc" style={{background: ord.status==="Delivered"?"var(--color)":"#82d300"}}></div>{ord.status==="Pending"?"Pending":ord.status}</h5>
    <div>
      <div className="orderboxrow"><img src={products.find(x => x.id === ord.productid[0]).img} alt=""/><div className="multprodimgcont" style={{display: ord.products>1?"block":"none"}}><span>+{ord.products-1}</span><img src={ord.products>1?products.find(x => x.id === ord.productid[1]).img:"#"} alt=""/></div><h4>Arrives {ord.delivdate}<br/><small>8am - 8pm</small></h4></div>
      <div className="orderboxrow"><small>{ord.carrier.length?"Delivery by":""} {ord.carrier}<br/><span>#{ord.number} - {ord.delivspeed}</span></small></div>
    </div>
    <div>
      <button className="trackorderbtn" onClick={() => sendTrackingData(ord)}>Track Order</button>
      <button className="vieworderbtn" onClick={() => sendOrdersData()}>View Order Details</button>
      <button>Get Invoice</button>
    </div>
  </div>)
  })

  function sendTrackingData(ord) {
    setOrderstatus(ord.status)
    setTrackingnum(ord.trackingnum)
    setOrdercarrier(ord.carrier) 
    setUpdate(prev => prev+1)
  }
  function sendOrdersData() {

  }
  function saveToPdf() {  
     
  }  
  
  useEffect(() => {
    const orderbtns = document.querySelectorAll('.myorderspage button.vieworderbtn')
    const trackorderbtn = document.querySelectorAll('.myorderspage button.trackorderbtn')
    const orderspanel = document.querySelector('.orderspanel')
    const trackerpanel = document.querySelector('.trackerpanel')
    const progfill = document.querySelector('.trackerpanel .progfill')

    orderbtns.forEach(el => {
      el.onclick = () => {
        if(ordopen === false) {
          orderspanel.style.right = '0'
          setOrdopen(true)
        } 
        else {
          orderspanel.style.right = '-650px'
          setOrdopen(false)
        } 
      }
    }) 
    document.querySelector('.orderspanel .fa-times').onclick = () => {
      orderspanel.style.right = '-650px'
      setOrdopen(false)
    }

    trackorderbtn.forEach(el => {
      el.onclick = () => {
        if(trackopen === false) {
          trackerpanel.style.bottom = '0'
          setTrackopen(true)
          progfill.style.width = getStatusWidth(orderstatus)+"%"
        } 
        else {
          trackerpanel.style.bottom = '-110vh'
          setTrackopen(false)
          progfill.style.width = '0'
        } 
      } 
    }) 
    document.querySelector('.trackerpanel .fa-times').onclick = () => {
      trackerpanel.style.bottom = '-110vh'
      setTrackopen(false)
      progfill.style.width = '0'
    }

    if(props.opent === false) {
      if(props.opentracker === true) {
        trackorderbtn[0].click()
        props.closetracker()  
      }
    }
    function getStatusWidth(orderstatus) {
      let orderwidth
      switch(orderstatus) {
        case "Pending": orderwidth = 16; break
        case "Processing": orderwidth = 40; break
        case "Shipped": orderwidth = 65; break
        case "Delivered": orderwidth = 100; break
        case "Refunded": orderwidth = 100; break
        default: orderwidth = 0
      }
      return orderwidth
    }

  },[])
  
      
  return (
    <div className="myorderspage clientpage">
      <div className="topspacer"></div>
      <h2 className="clientpagetitle">My Orders</h2>
      <h6 className="clientpagesub">{orders.length} {orders.length>1?"Orders":"Order"}</h6>

      {myorders}

      <div className="orderspanel">
        <h3>Order Details</h3>
        <i className="fal fa-times"></i>
        <div className="spacer"></div>
        <div className="innerorderspanel">
          <h5>Products</h5>
          <div className="orderpanelsrow"><img src={products[0].img} alt=""/><h6>{products[0].name}</h6><h6>Price: {products[0].price}</h6><h6>Quantity: {products[0].purchased_qty}</h6></div>
          <div className="orderpanelsrow"><img src={products[1].img} alt=""/><h6>{products[1].name}</h6><h6>Price: {products[1].price}</h6><h6>Quantity: {products[1].purchased_qty}</h6></div>
          <div className="orderpanelsrow"><img src={products[4].img} alt=""/><h6>{products[4].name}</h6><h6>Price: {products[4].price}</h6><h6>Quantity: {products[4].purchased_qty}</h6></div>
          <div className="orderpaneltotal">Total: <span>$1086.15</span></div>
          <div className="spacer"></div>
          <h5>Details</h5>
          <div className="orderpaneldets">
            <h6>Order Number: <span>#98821</span></h6>
            <h6>Carrier: <span>{ordercarrier}</span></h6>
            <h6>Tracking Number: <span>{trackingnum}</span></h6>
            <h6>Expected Delivery: <span>02/12/2020</span></h6>
          </div>
          <button onClick={() => saveToPdf()}>Download Order</button>
        </div>  
      </div>
      <div className="trackerpanel" data-update={update}> 
        <h3>Tracking Details</h3>
        <i className="fal fa-times"></i>

        <div className="trackingdetails">
          <img src={products[0].img} alt=""/>
          <div>
            <h5>Tracking Number: <span>{trackingnum}</span></h5>
            <h5>Products: <span>Women's Fur Coat + 4 more</span></h5>
            <h5>Expected: <span>07/21/2020</span></h5>
            <h5>Carrier: <span>{ordercarrier}</span></h5>
          </div>
        </div> 

        <div className="innertrackerpanel">
        <div className="bigtrackercont">
           <div className="trackprog">
            <div className="trackpointers">
              <i className="top">Pending<small>{demodate}<span>{demotime}</span></small></i> 
              <i className="bottom">Processing<small>{demodate}<span>{demotime}</span></small></i> 
              <i className="top">Shipped<small>{demodate}<span>{demotime}</span></small></i> 
              <i className="bottom">Delivered<small>{demodate}<span>{demotime}</span></small></i> 
            </div>
            <div className="progtube">
              <div className="progchecks">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
              </div>
              <div className="progfill"></div>
            </div>
           </div>
        </div>
        <div className="spacerl"></div>
        <h4 className="tableheadertxt">Updates</h4>
        <div className="trackertablecont">
          <table>
            <thead>
              <th>Date</th><th>Location</th><th>Event</th>
            </thead>
            <tbody>
              <tr><td>09/17/2020<br/>9:15am</td><td>Montreal, Canada</td><td><span>Shipped</span><br/>Carrier: Fedex</td></tr>
              <tr><td>09/16/2020<br/>6:45pm</td><td>Montreal, Canada</td><td><span>Ready to Ship</span><br/>Waiting for carrier</td></tr>
              <tr><td>09/16/2020<br/>5:35pm</td><td>Montreal, Canada</td><td><span>Pending</span><br/>Payment Complete</td></tr>
              <tr><td>09/15/2020<br/>1:30am</td><td>Montreal, Canada</td><td><span>Ordered</span><br/></td></tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>  

    </div>
  )
}
 
export default Orders