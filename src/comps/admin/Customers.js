import React, {useContext} from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import CustomerRow from './CustomerRow'

function Customers() {

  const {products, general, customers} = useContext(ProductContext)
  /*
  const allcustomer = customers.map(cust => {
    return <CustomerRow />
  })
  */ 

  function findCustomer() {

  }

  return (
    <div className="customerspage">
      <h2 className="homepagetitle">Customers</h2>
      <div className="dashbox dashlarge dashtable">
        <div className="headeropts">
          <h5>All Customers</h5>
          <label><i className="fas fa-search"></i><input placeholder="Find a customer" onChange={(e) => findCustomer(e.target.value.toLowerCase())}/></label>
          <div className="clear"></div>
        </div>

        <table>
          <thead>
            <th><h6>Name<i className="fas fa-sort"></i></h6></th>
            <th><h6>Email<i className="fas fa-sort"></i></h6></th>
            <th><h6>Sign Up<i className="fas fa-sort"></i></h6></th>
            <th><h6>Orders<i className="fas fa-sort"></i></h6></th>
            <th><h6>Total Spent<i className="fas fa-sort"></i></h6></th>
            <th><h6>Country<i className="fas fa-sort"></i></h6></th>
            <th><h6>City<i className="fas fa-sort"></i></h6></th>
            <th><h6>Postal Code<i className="fas fa-sort"></i></h6></th>
            <th><h6>Address<i className="fas fa-sort"></i></h6></th>
          </thead>
          <tbody>
            
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Customers