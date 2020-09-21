import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="grid fgrid">
        <div>
          <h2>elixir<span>.</span></h2>
          <p>All Rights Reserved. Elixir 2020.</p>
        </div>
        <div>
          <h4>Shop Elixir</h4>
          <ul>
            <li><Link to="#">Women's Wear</Link></li>
            <li><Link to="#">Men's Wear</Link></li>
            <li><Link to="#">Kids</Link></li>
            <li><Link to="#">Collection</Link></li>
            <li><Link to="#">Featured</Link></li>
            <li><Link to="#">Promos</Link></li>
          </ul>
        </div>
        <div>
          <h4>About Elixir</h4>
          <ul>
            <li><Link to="#">Elixir App</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Returns</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Payments</Link></li>
          </ul>
        </div>
        <div>
          <h6>Subscribe to Elixir for deals and promos.</h6>
          <label>
            <input placeholder="Your email"/>
            <i class="far fa-envelope"></i>
          </label>
          <div className="socials">
            <div><i class="fab fa-facebook-f"></i></div>
            <div><i class="fab fa-twitter"></i></div>
            <div><i class="fab fa-instagram"></i></div>
            <div><i class="fab fa-linkedin-in"></i></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer