import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
 
function Mainbg() {

  const [slide1, setSlide1] = useState(true)
  const [slide2, setSlide2] = useState(false)
  const [slide3, setSlide3] = useState(false)
  let interval = 21000
  let numslides = 3
  let timeout = interval/numslides  
 
  useEffect(() => { 
    document.querySelector('.slide1').style.opacity = '1'
    setTimeout(() => { document.querySelector('.slide1 h6').style.cssText += 'opacity:1;left:0' },700)
    setTimeout(() => { document.querySelector('.slide1 h1').style.cssText += 'opacity:1;top:0' },1200)
    setTimeout(() => { document.querySelector('.slide1 button').style.cssText += 'opacity:1;left:0' },1700)

  },[]) 
 
  
  return ( 
    <div className="bgcont">
      <div className="slide1 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#promos2020</h6>
          <h1>Shop<br/>Promos 2020</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Shop Now</button></Link>
        </div>
      </div> 
      <div className="slide2 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#onsale2020</h6>
          <h1>Find<br/>The Best Deals</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Get Deals</button></Link>
        </div>
      </div> 
      <div className="slide3 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#hot2020</h6>
          <h1>Shop<br/>Trending Fashion</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>View Collection</button></Link>
        </div> 
      </div> 
      
      <div className="pgrid"> 
        <div className="bgnav"> 
          <div className="nav1" style={{opacity: slide1?"1":""}}></div>
          <div className="nav2" style={{opacity: slide2?"1":""}}></div>
          <div className="nav3" style={{opacity: slide3?"1":""}}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Mainbg