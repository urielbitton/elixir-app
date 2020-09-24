import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import AddProduct from './AddProduct';

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
    <div>
    <div className="sidebar">
      <div className="sidelogodiv"><img className="sidelogo" src="https://i.imgur.com/lYlrhuI.png" alt="sidelogo"/><h3>Elixir</h3></div>
      <div className="sidemenu">
        <h5 className="activesidelink">
          <Link to="/dashhome"><span><i className="fas fa-home"></i>Dashboard<i className="fas fa-angle-up" style={{display:"none"}}></i></span></Link>
          <div className="clear" style={{display:"none"}}></div>
        </h5>
        <h5>
        <span><i className="fas fa-store"></i>Store<i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <Link to="/products"><h6><i class="fas fa-tshirt"></i>Products</h6></Link>
            <h6><i class="fas fa-money-bill"></i>Coupons</h6> 
            <h6><i class="fas fa-sync-alt"></i>Status</h6>
            <h6><i class="fas fa-dollar-sign"></i>Taxes</h6>
            <h6><i class="fas fa-chart-bar"></i>Analytics</h6>
          </div>
        </h5>
        <h5>
          <span><i className="fas fa-shopping-bag"></i>Orders<i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <h6><i class="fas fa-wallet"></i>Revenue</h6>
          </div>
        </h5>
        <h5> 
        <span><i className="fas fa-user-tag"></i>Customers<i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <h6><i class="fas fa-mail-bulk"></i>Marketing</h6>
          </div>
        </h5>
        <h5>
        <span><i className="fas fa-cog"></i>Settings<i className="fas fa-angle-up"></i></span>
          <div className="clear">
            <h6><i class="fas fa-sliders-h"></i>General</h6>
            <h6><i class="fas fa-palette"></i>Appearance</h6>
            <h6><i class="fas fa-store"></i>Store</h6>
            <h6><i class="fas fa-user-circle"></i>Account</h6>
            <h6><i class="fas fa-question"></i>Support</h6>
          </div>
        </h5>
      </div>

      <button className="logoutbtn" onClick={() => props.logout()}><i class="fas fa-sign-out-alt"></i>Logout</button>

    </div> 
      <AddProduct />
    </div>
  )
}

export default Sidebar