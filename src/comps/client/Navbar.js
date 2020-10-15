import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from '../site/ProductContext'

function Navbar(props) {

  const {accounts} = useContext(ProductContext)

  return (
    <div className="topbar">  
      <div className="left">
        <Link to="/" onClick={() => props.adminoff()}>
          <div className="sitelink">
            <i class="fad fa-external-link-alt"></i>Elixir Site
          </div>
        </Link>
        <label className="search">
          <i className="fad fa-search"></i>
          <input placeholder="Search" />
        </label> 
      </div> 
      <div className="right">
        <div className="profilecont">
          <img src={accounts[accounts.length-1].pic} alt=""/>
          <small>{accounts[accounts.length-1].name}</small>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>

      <div className="clear"></div>

    </div>
  )
}

export default Navbar