import React, {useState, useContext} from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import OrderRow from './OrderRow'

function Orders() {

  const {customers, orders, setOrders} = useContext(ProductContext)

  const [number, setNumber] = useState(0)
  const [custname, setCustname] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')
  const [total, setTotal] = useState(0) 
  const [updated, setUpdated] = useState(0)

  const [find, setFind] = useState('')
  const pattern = new RegExp('\\b' + find, 'i')

  const allorders = orders.map(ord => {
    if(pattern.test(ord.number))
      return <OrderRow number={ord.number} custname={ord.custname} date={ord.date} status={ord.status} total={ord.total}/>
  }) 

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
          <table className="orderstable">  
            <thead>    
              <tr>
                <th>Order #</th>
                <th>Name</th>
                <th>Date</th>
                <th>Order Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {allorders}
            </tbody>
          </table>
        </div>
        <div className="myproductsoptions dashbox" data-updated={updated}>
          <h4 className="rightbartitle">Manage Orders</h4>
        </div>
      </div>
    </div>
  )
}

export default Orders