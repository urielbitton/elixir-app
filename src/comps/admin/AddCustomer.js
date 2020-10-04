import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import { ProductContext } from '../../comps/site/ProductContext'

function AddCustomer() { 
 
  const {customers, setCustomers} = useContext(ProductContext)
  const history = useHistory()

  const [id, setId] = useState(customers.length)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [points, setPoints] = useState(0)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postal, setPostal] = useState('')
  const [address, setAddress] = useState('')
  const [orders, setOrders] = useState(0)
  const [spent, setSpent] = useState(0)

  let d = new Date()
  let today = d.getFullYear() +"-"+ (d.getMonth()+1<10?"0"+(d.getMonth()+1):(d.getMonth()+1)) +"-"+ (d.getDate()<10?"0"+(d.getDate()):(d.getDate()))
  
  const [signup, setSignup] = useState(today) 
 
  function createCustomer() {
    setCustomers(prevCust => [...prevCust, {id:id, name:name, email:email, phone:phone, signup:signup, points:points, country:country, city:city, postal:postal, address:address, spent:spent, orders:orders}])
    const notif = document.createElement('div')
    notif.innerHTML = `<i class="fas fa-circle-notch"></i><p>Customer "${name}" has been successfully created and added to your customer's database.</p><button className="viewprodbtn">View</button>`
    document.querySelector('.notifcont').appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += 'opacity:1;left:0'
    }, 100);
    setTimeout(() => {
      history.push('/customers') 
    },1000) 
    setTimeout(() => {
      notif.style.cssText += 'opacity:0;left:-40px'
      setTimeout(() => {
        notif.style.display = 'none'
      }, 100); 
    }, 4000); 
  }

  return ( 
    <div className="addcustomerpage">
      <h2 className="homepagetitle">Add a Customer</h2>
      <div className="dashbox dashlarge addproductcont">
        <form className="addform">
          <div className="gsub">
            <label>
              <h6>Customer Name</h6>
              <input placeholder="e.g. John Applewood" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <h6>Customer Email</h6>
              <input placeholder="e.g. japplewood@mail.com" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              <h6>Phone Number</h6>
              <input placeholder="(514)667-8492" onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <label>
              <h6>Sign Up Date</h6>
              <input type="date" value={signup} onChange={(e) => setSignup(e.target.value)}/>
            </label>
            <label>
              <h6>Customer Points</h6>
              <input type="number" style={{width: "100px"}} placeholder="0" onChange={(e) => setPoints(e.target.value)}/>
            </label>
          </div>
          <div className="gsub">
            <label>
              <h6>Country</h6>
              <input placeholder="Canada" onChange={(e) => setCountry(e.target.value)}/>
            </label>
            <label>
              <h6>City</h6>
              <input placeholder="Toronto" onChange={(e) => setCity(e.target.value)}/>
            </label>
            <label>
              <h6>Postal Code</h6>
              <input placeholder="H3Z 1X5" onChange={(e) => setPostal(e.target.value)}/>
            </label>
            <label>
              <h6>Address</h6>
              <input placeholder="490 Ocean Dr." onChange={(e) => setAddress(e.target.value)}/>
            </label>
          </div>
        </form>
        <button className="createcustomerbtn" onClick={() => createCustomer()}>Create Customer</button>
      </div>
    </div>
  )
}

export default AddCustomer