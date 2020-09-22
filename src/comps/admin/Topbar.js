import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div className="topbar"> 
      <div className="left">
        <Link to="/" onClick={() => props.adminoff()}>
          <div className="sitelink">
            <i class="fas fa-external-link-alt"></i>Elixir Site
          </div>
        </Link>
        <button className="addprodbtn"><i className="fas fa-plus"></i>Add Product</button>
        <label className="search">
          <i className="fas fa-search"></i>
          <input placeholder="Search"/>
        </label>
      </div>
      <div className="right"></div>

      <div className="clear"></div>
    </div>
  )
}

export default Topbar