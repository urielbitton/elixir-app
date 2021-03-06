import React, {useState, useContext} from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import OrderRow from './OrderRow'

function Orders() {

  const {customers, orders, setOrders} = useContext(ProductContext)

  const [id, setId] = useState(orders.length)
  const [ordid, setOrdid] = useState()
  const [number, setNumber] = useState(0)
  const [custname, setCustname] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')
  const [total, setTotal] = useState(0) 
  const [updated, setUpdated] = useState(0)
  const [prodsel, setProdsel] = useState(false)
  const [trackingnum, setTrackingnum] = useState()
  const [carrier, setCarrier] = useState('')
  const [delivspeed, setDelivspeed] = useState('')

  const [find, setFind] = useState('')
  const pattern = new RegExp('\\b' + find, 'i')

  const allorders = orders.map(ord => {
    if(pattern.test(ord.number))
      return <OrderRow id={ord.id} number={ord.number} custname={ord.custname} date={ord.date} carrier={ord.carrier} trackingnum={ord.trackingnum} status={ord.status} total={ord.total} manageorder={manageOrder}/>
  }) 

  function genDate() {
    let date = new Date()
    return ((date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +"-" +(date.getMonth() + 1) +"-" + date.getFullYear())
  }
  function genTime() {
    let date = new Date()
    return (date.getHours() < 10 ? "0"+date.getHours():date.getHours()) + ":"+ (date.getMinutes() < 10 ? "0"+date.getMinutes():date.getMinutes())
  }
  function manageOrder(number,name,date,carrier,trackingnum,delivspeed,status,total) {
    setProdsel(true)
    setNumber(number)
    setCustname(name)
    setDate(date)
    setCarrier(carrier)
    setTrackingnum(trackingnum)
    setDelivspeed(delivspeed)
    setStatus(status)  
    setTotal(total)
  }
  function saveOrder() {
    orders.map(ord => { 
      if(ord.number === number) { 
        ord.number = number
        ord.custname = custname
        ord.date = date
        ord.carrier = carrier
        ord.trackingnum = trackingnum
        ord.delivspeed = delivspeed
        ord.status = status
        ord.total = total
        ord.updates.unshift({date:genDate(), time:genTime(), location:"Montreal, Canada", event:ord.status, notes:""})
        setUpdated(prev => prev+1)
      }
    })   
  } 

  return (
    <div className="orderspage">
      <h2 className="homepagetitle">My Orders</h2>
      <div className="myproductsgrid">
        <div className="dashbox dashlarge dashtable">
          <div className="headeropts">
            <h5>All Orders</h5>
            <label><i className="fas fa-search" aria-hidden="true"></i><input placeholder="Find an Order" onChange={(e) => setFind(e.target.value.toLowerCase())}/></label>
            <div className="clear"></div>
          </div>
          <table className="orderstable" data-updated={updated}>  
            <thead>    
              <tr>
                <th>Order #</th>
                <th>Name</th>
                <th>Date</th>
                <th>Carrier</th>
                <th>Tracking #</th>
                <th>Order Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {allorders}
            </tbody>
          </table>
        </div>
        <div className="myproductsoptions dashbox">
          <h4 className="rightbartitle">Manage Orders</h4>
          <div className="innerprodopts" style={{display:prodsel?"block":"none" }} >
            <label>
              <h6>Order Number</h6>
              <input type="number" min="0" value={number} onChange={(e) => setNumber(parseInt(e.target.value,10))}/>
            </label>
            <label>
              <h6>Customer Name</h6>
              <input value={custname} onChange={(e) => setCustname(e.target.value)}/>
            </label>
            <label>
              <h6>Carrier</h6>
              <select className="carrierselect" onChange={(e) => setCarrier(e.target.value)}>
                <option default selected disabled>Choose a Carrier</option>
                <option selected={carrier==="Canada Post"?true:false} value="Canada Post">Canada Post</option>
                <option selected={carrier==="Fedex"?true:false} value="Fedex">Fedex</option>
                <option selected={carrier==="UPS"?true:false} value="UPS">UPS</option>
                <option selected={carrier==="Purolator"?true:false} value="Purolator">Purolator</option>
              </select> 
            </label>
            <label>
              <h6>Tracking Number</h6>
              <input value={trackingnum} onChange={(e) => setTrackingnum(e.target.value)}/> 
            </label>
            <label>
              <h6>Delivery Speed</h6>
              <select className="carrierselect" onChange={(e) => setDelivspeed(e.target.value)}>
                <option selected={delivspeed==="Standard"?true:false} value="Standard">Standard</option>
                <option selected={delivspeed==="Express"?true:false} value="Express">Express</option>
                <option selected={delivspeed==="Same Day"?true:false} value="Same Day">Same Day</option>
              </select> 
            </label>
            <label>
              <h6>Order Status</h6>
              <select className="orderstatusbtn" onChange={(e) => setStatus(e.target.value)}>
                <option selected={status==="Pending"?true:false} value="Pending">Pending Payment</option>
                <option selected={status==="Processing"?true:false} value="Processing">Processing</option>
                <option selected={status==="Shipped"?true:false} value="Shipped">Shipped</option>
                <option selected={status==="Delivered"?true:false} value="Delivered">Delivered</option>
                <option selected={status==="Refunded"?true:false} value="Refunded">Refunded</option>
              </select>
            </label> 
            <label>  
              <h6>Total</h6> <div className="currencydiv">$</div> <input className="priceinp" value={parseFloat(total).toFixed(2)} onChange={(e) => setTotal(parseFloat(e.target.value))} /> <div className="clear"></div>
            </label>
            <button className="saveorderbtn" onClick={() => saveOrder()}>Save Order</button>
            <button className="removeorderbtn">Remove Order</button>
          </div>
        </div> 
      </div>
    </div>
  )
}  

export default Orders