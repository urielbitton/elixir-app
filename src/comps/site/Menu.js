import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

function Menu() {

  return ( 
    <ul className="menu">
            <li className="activelink">
              <Link to="/">Home<hr/></Link>
            </li>
            <li>
              <Link to="shop">Shop<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab shop-tab"> 
                <ul>
                  <h4>Women</h4>
                  <li><Link to="shop">Dresses</Link></li>
                  <li><Link to="shop">Shoes</Link></li>
                  <li><Link to="shop">Pants</Link></li>
                  <li><Link to="shop">Coats</Link></li>
                  <li><Link to="shop">Jackets</Link></li>
                  <li><Link to="shop">Hats</Link></li>
                  <li><Link to="shop">Bags</Link></li>
                </ul>
                <ul>
                  <h4>Men</h4>
                  <li><Link to="shop">Button Shirts</Link></li>
                  <li><Link to="shop">T-Shirt</Link></li>
                  <li><Link to="shop">Pants</Link></li>
                  <li><Link to="shop">Jackets</Link></li>
                  <li><Link to="shop">Coats</Link></li>
                  <li><Link to="shop">Shoes</Link></li>
                  <li><Link to="shop">Caps</Link></li>
                </ul>
                <ul>
                  <h4>Kids</h4>
                  <li><Link to="shop">Boy's Jeans</Link></li>
                  <li><Link to="shop">Shoes</Link></li>
                  <li><Link to="shop">Kid's Coats</Link></li>
                  <li><Link to="shop">Girl's T-Shirt</Link></li>
                  <li><Link to="shop">Backpacks</Link></li>
                </ul> 
                <ul>
                  <h4>Promos</h4>
                  <li><Link to="shop">All Sales</Link></li> 
                  <li><Link to="shop">Jeans</Link></li>
                  <li><Link to="shop">Hats</Link></li>
                  <li><Link to="shop">Sunglasses</Link></li>
                </ul>
              </div> 
            </li>
            <li>
              <Link to="about">About<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab about-tab">
                <ul>
                  <h4>About Elixir</h4>
                  <li><Link to="shop">Our Store</Link></li> 
                  <li><Link to="shop">Who We Are</Link></li>
                  <li><Link to="shop">Our Style</Link></li>
                  <li><Link to="shop">In Store</Link></li>
                </ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
              </div>
            </li>
            <li>
              <Link to="gallery">Gallery<i className="fas fa-caret-down"></i><hr/></Link>
              <div className="tab gal-tab"></div>
            </li>
            <li>
              <Link to="contact">Contact<hr/></Link>
            </li>
          </ul>
  )
}

export default Menu