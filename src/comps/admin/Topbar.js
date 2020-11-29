import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Search from './Search';

function Topbar(props) { 

  const [darkmode, setDarkmode] = useState(false)
  const [keyword, setKeyword] = useState('') 
  const pattern = new RegExp('\\b' + keyword.replace(/[\W_]+/g,""), 'i')
 
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
  function openSearch() {
    const searchbar = document.querySelector('.searchbar') 
    searchbar.style.display = 'block'
    setTimeout(() => {
      searchbar.style.top = '70px'
      searchbar.style.opacity = '1'
    }, 100);
  } 
  function closeSearch() {
    const searchbar = document.querySelector('.searchbar') 
    searchbar.style.opacity = ''
    searchbar.style.top = ''
    setTimeout(() => { 
      searchbar.style.display = ''
    }, 150);
  }
 
  if(darkmode === true) {
    document.querySelectorAll('.topbar, .sidebar, .homecont,.addproductcont,input,select,textarea').forEach(el => el.style.background = '#171f24')
    document.querySelectorAll('.dashbox').forEach(el => el.style.background = '#212a30')
  }
  else {
    document.querySelectorAll('.topbar,.sidebar,.homecont,.addproductcont,input,select,textarea').forEach(el => el.style.background = '')
    document.querySelectorAll('.dashbox').forEach(el => el.style.background = '')
  }
  
  useEffect(() => {
    const searchbar = document.querySelector('.searchbar')
    const close = document.querySelector('.searchbar .close')
    close.onclick = () => {
      searchbar.style.cssText += 'opacity:0;top:90px'
      setTimeout(() => {
        searchbar.style.display = 'none'
      }, 100);
    } 
  },[])

 
  return (
    <div className="topbar"> 
      <div className="left">
      <i class="fad fa-stream regrid" onClick={() => slideGrid()}></i>
        <Link to="/" onClick={() => props.adminoff()}>
          <div className="sitelink">
            <i class="fad fa-external-link-alt"></i>Elixir Site
          </div>
        </Link>
        <Link to="/addproduct"><button className="addprodbtn"><i className="fas fa-plus"></i>Add Product</button></Link>
        <label className="search">
          <i className="fad fa-search"></i>
          <input placeholder="Search" onFocus={() => openSearch()} onKeyUp={(e) => setKeyword(e.target.value)} />
        </label>
      </div>
      <div className="right">
        <div className="profilecont">
          <img src="https://i.imgur.com/UMv6hbM.jpg" alt="profile"/>
          <small>Alison Hayden</small>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="quickactions">
          <i class="fad fa-bell"></i>
          <i class="fad fa-adjust darkmodebtn" onClick={() => darkmode?setDarkmode(false):setDarkmode(true)}></i>
        </div>
      </div>

      <div className="clear"></div>

      <Search pattern={pattern} />

    </div>
  )
}

export default Topbar