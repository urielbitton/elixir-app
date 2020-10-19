import React, { useState, useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import { ProductContext } from '../../comps/site/ProductContext'

function AddOrder() {

  const {customers, orders, setOrders} = useContext(ProductContext)

  const [id, setId] = useState(orders.length)
  const [number, setNumber] = useState(0)
  const [custname, setCustname] = useState('')
  const [status, setStatus] = useState('Pending')
  const [total, setTotal] = useState(0)

  const history = useHistory()
  let d = new Date()
  let today = d.getFullYear() +"-"+ (d.getMonth()+1<10?"0"+(d.getMonth()+1):(d.getMonth()+1)) +"-"+ (d.getDate()<10?"0"+(d.getDate()):(d.getDate()))
  const [date, setDate] = useState(today)

  function createOrder() {
    setOrders(prevOrder => [...prevOrder, {id:id,number:number, custname:custname, date:date, status:status, total:total}])
    const notif = document.createElement('div')
    notif.innerHTML = `<i class="fas fa-circle-notch"></i><p>Product "Order #${number}" has been successfully created and added to your store.</p><button className="viewprodbtn">View</button>`
    document.querySelector('.notifcont').appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += 'opacity:1;left:0'
    }, 100);
    setTimeout(() => {
      history.push('/orders') 
    },1000) 
    setTimeout(() => {
      notif.style.cssText += 'opacity:0;left:-40px'
      setTimeout(() => {
        notif.style.display = 'none'
      }, 100); 
    }, 4000);
  }

  return (
    <div className="addorderpage">
      <h2 className="homepagetitle">Add an Order</h2>
      <div className="dashbox dashlarge addproductcont">
        <form className="addform">
          <div className="gsub">
            <label>
              <h6>Order Number</h6>
              <input placeholder="#3549" type="number" min="0" onChange={(e) => setNumber(parseInt(e.target.value,10))}/>
            </label>
            <label>
              <h6>Customer Name</h6>
              <input placeholder="e.g. John Applewood" onChange={(e) => setCustname(e.target.value)}/>
            </label>
            <label>
              <h6>Date</h6>
              <input style={{resize: "none"}} type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </label>
            <label>
              <h6>Order Status</h6>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending Payment</option>
                <option value="Processing">Processing</option>
                <option value="Ready to Ship">Ready to Ship</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Refunded">Refunded</option>
              </select> 
            </label>
            <label>
              <h6>Order Total</h6>
              <input type="number" style={{width: "100px"}} placeholder="0" min="0" onChange={(e) => setTotal(e.target.value)}/>
            </label>
          </div>
        </form>
        <button className="createorderbtn" onClick={() => createOrder()}>Create Order</button>
      </div>
    </div>
  )
}

export default AddOrder