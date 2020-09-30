import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Topbar(props) { 

  const [darkmode, setDarkmode] = useState(false)

  function slideGrid() {
    const dashboard = document.querySelector('.dashboard')
    if(!dashboard.classList.contains('minidash')) {
      dashboard.style.gridTemplateColumns = '70px auto'
      document.querySelector('.sidelogodiv h3').style.display = 'none'
      document.querySelectorAll('.sidemenu el, .sidemenu .fa-angle-up').forEach(el => el.style.display = 'none')
      document.querySelector('.logoutbtn span').style.display = 'none'
      document.querySelector('.logoutbtn').style.padding = '15px'
      document.querySelector('.sidelogo').style.margin = 'auto'
      document.querySelector('.topbar').style.width = 'calc(100% - 85px)'
      dashboard.classList.add('minidash')
      document.querySelectorAll('.sidemenu h5 i:first-child').forEach(el => el.style.fontSize = '19px')
    } 
    else { 
      dashboard.style.gridTemplateColumns = ''
      document.querySelector('.sidelogodiv h3').style.display = ''
      document.querySelectorAll('.sidemenu el, .sidemenu .fa-angle-up').forEach(el => el.style.display = '')
      document.querySelector('.logoutbtn span').style.display = ''
      document.querySelector('.logoutbtn').style.padding = ''
      document.querySelector('.topbar').style.width = 'calc(100% - 235px)'
      document.querySelector('.sidelogo').style.margin = ''
      dashboard.classList.remove('minidash')
      document.querySelectorAll('.sidemenu h5 i:first-child').forEach(el => el.style.fontSize = '')
    }
  }

  useEffect(() => {
    if(darkmode === true) {
      document.querySelectorAll('.topbar,.sidebar,.homecont,.addproductcont,input,select,textarea').forEach(el => el.style.background = '#171f24')
      document.querySelectorAll('.dashbox').forEach(el => el.style.background = '#212a30')
    }
    else {
      document.querySelectorAll('.topbar,.sidebar,.homecont,.addproductcont,input,select,textarea').forEach(el => el.style.background = '')
      document.querySelectorAll('.dashbox').forEach(el => el.style.background = '')
    }
  },[darkmode]) 

  return (
    <div className="topbar"> 
      <div className="left">
      <i class="fas fa-stream regrid" onClick={() => slideGrid()}></i>
        <Link to="/" onClick={() => props.adminoff()}>
          <div className="sitelink">
            <i class="fas fa-external-link-alt"></i>Elixir Site
          </div>
        </Link>
        <Link to="/addproduct"><button className="addprodbtn"><i className="fas fa-plus"></i>Add Product</button></Link>
        <label className="search">
          <i className="fas fa-search"></i>
          <input placeholder="Search"/>
        </label>
      </div>
      <div className="right">
        <div className="profilecont">
          <img src="https://i.imgur.com/UMv6hbM.jpg" alt="profile"/>
          <small>Alison Hayden</small>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="quickactions">
          <i class="fas fa-bell"></i>
          <i class="fas fa-adjust darkmodebtn" onClick={() => darkmode?setDarkmode(false):setDarkmode(true)}></i>
        </div>
      </div>

      <div className="clear"></div>
    </div>
  )
}

export default Topbar