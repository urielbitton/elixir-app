import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Sidebar(props) {

  useEffect(() => {
    const sidelinks = document.querySelectorAll('.sidemenu h5')
    sidelinks.forEach(el => {
      el.querySelector('span').onclick = () => {
        if(!el.classList.contains('closed')) {
          el.querySelector('.fa-angle-up').style.transform = 'rotate(180deg)'
          el.classList.toggle('closed')
          el.querySelector('.clear').style.opacity = '1'
          el.querySelector('.clear').style.height = '220px'
        }
        else {
          el.querySelector('.fa-angle-up').style.transform = 'rotate(0deg)'
          el.classList.toggle('closed') 
          el.querySelector('.clear').style.opacity = ''
          el.querySelector('.clear').style.height = ''
        }
      }
    }) 
  },[])

  return ( 
    <div className="sidebar">
      <div className="sidelogodiv"><img className="sidelogo" src="https://i.imgur.com/lYlrhuI.png" alt="sidelogo"/><h3>Elixir</h3></div>
      <div className="sidebarinner">
      <div className="sidemenu">
        <h5 className="activesidelink">
          <Link to="/dashhome"><span><i className="fas fa-home"></i><el>Dashboard </el><i className="fas fa-angle-up dasharrow" style={{display:"none"}}></i></span></Link>
          <div className="clear" style={{display:"none"}}></div>
        </h5>
        <h5>
        <span><i className="fas fa-store"></i><el>Store</el><i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <Link to="/products"><h6><i class="fas fa-tshirt"></i><el>Products</el></h6></Link>
            <Link to="/coupons"><h6><i class="fas fa-money-bill"></i><el>Coupons</el></h6></Link>
            <h6><i class="fas fa-truck"></i><el>Shipping</el></h6>
            <h6><i class="fas fa-dollar-sign"></i><el>Taxes</el></h6>
            <h6><i class="fas fa-chart-bar"></i><el>Analytics</el></h6>
          </div>
        </h5>
        <h5>
          <span><i className="fas fa-shopping-bag"></i><el>Orders</el><i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <Link to="/addorder"><h6><i class="fas fa-cart-plus"></i><el>Add Order</el></h6></Link>
            <Link to="/orders"><h6><i class="fas fa-money-check"></i><el>Orders</el></h6></Link>
            <h6><i class="fas fa-wallet"></i><el>Revenue</el></h6>
          </div>
        </h5>
        <h5> 
        <span><i className="fas fa-user-tag"></i><el>Customers</el><i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <Link to="/addcustomer"><h6><i class="fas fa-user-edit"></i><el>Add Customer</el></h6></Link>
            <Link to="/customers"><h6><i class="fas fa-user-friends"></i><el>Customers</el></h6></Link>
            <h6><i class="fas fa-mail-bulk"></i><el>Marketing</el></h6>
          </div>
        </h5>
        <h5>
        <span><i className="fas fa-cog"></i><el>Settings</el><i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <h6><i class="fas fa-sliders-h"></i><el>General</el></h6>
            <h6><i class="fas fa-palette"></i><el>Appearance</el></h6>
            <h6><i class="fas fa-store"></i><el>Store</el></h6>
            <h6><i class="fas fa-user-circle"></i><el>Account</el></h6>
            <h6><i class="fas fa-question"></i><el>Support</el></h6>
          </div>
        </h5>
      </div>

      <button className="logoutbtn" onClick={() => props.logout()}><i class="fas fa-sign-out-alt"></i><span>Logout</span></button>
      </div>
    </div> 
  )
}

export default Sidebar