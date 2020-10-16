import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from '../site/ProductContext'

function Orders() {

  const {products, orders} = useContext(ProductContext)
 
  const myorders = orders.map(ord => {
    return (<div className="orderbox">
    <h5><div className="orderstatcirc"></div>{ord.status==="Pending Payment"?"Pending":ord.status}</h5>
    <div>
      <div className="orderboxrow"><img src={products.find(x => x.id === ord.productid[0]).img} alt=""/><div className="multprodimgcont" style={{display: ord.products>1?"block":"none"}}><span>+{ord.products-1}</span><img src={ord.products>1?products.find(x => x.id === ord.productid[1]).img:"#"} alt=""/></div><h4>Arrives {ord.delivdate}<br/><small>8am - 8pm</small></h4></div>
      <div className="orderboxrow"><small>Delivery by Fedex<br/><span>#{ord.number} - {ord.delivspeed}</span></small></div>
    </div>
    <div>
      <button className="trackorderbtn">Track Order</button>
      <button>View Order Details</button>
      <button>Get Invoice</button>
    </div>
  </div>)
  })

  useEffect(() => {
    const orderbtns = document.querySelectorAll('.myorderspage button')
    orderbtns.forEach(el => {
      el.onclick = () => {
        if(el.getAttribute('data-open') === 0) {
          document.querySelector('.orderspanel').style.right = '0'
          el.setAttribute('data-open',1)
        }
        else {
          document.querySelector('.orderspanel').style.right = '-650px'
          el.setAttribute('data-open',0)
        }
      }
    })
  })
      
  return (
    <div className="myorderspage clientpage">
      <div className="topspacer"></div>
      <h2 className="clientpagetitle">My Orders</h2>
      <h6 className="clientpagesub">{orders.length} {orders.length>1?"Orders":"Order"}</h6>

      {myorders.reverse()}

      <div className="orderspanel">
        <h3>View Order</h3>
        <i className="fal fa-times"></i>
      </div>
    </div>
  )
}
 
export default Orders