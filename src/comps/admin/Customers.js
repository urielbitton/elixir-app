import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import { ProductContext } from '../../comps/site/ProductContext'
import CustomerRow from './CustomerRow'

function Customers() {

  const {customers, setCustomers} = useContext(ProductContext)

  const [find, setFind] = useState('')
  const pattern = new RegExp('\\b' + find, 'i')
  let cuscount = 0, cusorders = 0, cusavgspend = 0
 
  const allcustomers = customers.map(cus => {
    if(pattern.test(cus.name.toLowerCase()))
      return <CustomerRow name={cus.name} email={cus.email} phone={cus.phone} signup={cus.signup} orders={cus.orders} spent={cus.spent} country={cus.country} city={cus.city} postal={cus.postal} address={cus.address} />
  })
 
  return (
    <div className="customerspage">
      <h2 className="homepagetitle">Customers</h2>
      <div className="dashbox dashlarge dashtable">
        <div className="headeropts">
          <h5>All Customers</h5>
          <label><i className="fas fa-search"></i><input placeholder="Find a customer" onChange={(e) => setFind(e.target.value.toLowerCase())}/></label>
          <Link to="/addcustomer"><button className="addcustomerbtn"><i className="fas fa-user-tag"></i>Add Customer</button></Link>
          <div className="clear"></div>
        </div>

        <table className="customerstable">
          <thead>
            <th><h6>Name<i className="fas fa-sort"></i></h6></th>
            <th><h6>Email<i className="fas fa-sort"></i></h6></th>
            <th><h6>Phone Number<i className="fas fa-sort"></i></h6></th>
            <th><h6>Sign Up<i className="fas fa-sort"></i></h6></th>
            <th><h6>Orders<i className="fas fa-sort"></i></h6></th>
            <th><h6>Total Spent<i className="fas fa-sort"></i></h6></th>
            <th><h6>Country<i className="fas fa-sort"></i></h6></th>
            <th><h6>City<i className="fas fa-sort"></i></h6></th>
            <th><h6>Postal Code<i className="fas fa-sort"></i></h6></th>
            <th><h6>Address<i className="fas fa-sort"></i></h6></th>
          </thead>
          <tbody>
          {allcustomers}  
          </tbody>
          <tfoot>
            {
              customers.map(cus => {
                cuscount++
                cusorders += cus.orders
                cusavgspend += cus.spent
              })
            } 
            <td className="tfootdetails" colSpan="7">
              <h6>{cuscount} <span>{cuscount===1?"Customer":"Customers"}</span></h6>
              <h6>{cusorders>0?cusorders:"0"} <span>Total {cusorders===1?"Order":"Orders"}</span></h6>
              <h6>${(cusavgspend/cuscount)>0?(cusavgspend/cuscount).toFixed(2):"0.00"} <span>Average Spendings</span></h6>
            </td>
          </tfoot>
        </table> 

      </div>
    </div>
  )
}

export default Customers