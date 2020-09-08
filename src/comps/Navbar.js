import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <h1 className="logo">elixir<span>.</span></h1>
        <ul className="menu">
          <li>
            <Link to="#">Home<hr/></Link>
          </li>
          <li>
            <Link to="#">Shop<i className="fas fa-caret-down"></i><hr/></Link>
            <div className="tab">
              <ul>
                <h4>Women's</h4>
              </ul>
              <ul>
                <h4>Men's</h4>
              </ul>
              <ul>
                <h4>Kids</h4>
              </ul>
              <ul>
                <h4>Promos</h4>
              </ul>
            </div> 
          </li>
          <li>
            <Link to="#">About<i className="fas fa-caret-down"></i><hr/></Link>
            <div className="tab"></div>
          </li>
          <li>
            <Link to="#">Gallery<i className="fas fa-caret-down"></i><hr/></Link>
            <div className="tab"></div>
          </li>
          <li>
            <Link to="#">Contact<hr/></Link>
          </li>
        </ul>
      </div>
 
      <div className="right">
        <div className="searchdiv">
        <i class="fas fa-search"></i>
        </div>
        <div className="cartdiv">
        <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar