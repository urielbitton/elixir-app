import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Mainbg() {

  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(0)
  const [slide3, setSlide3] = useState(0)

  useEffect(() => {
    setInterval(() => {
      
    }, 1000)
  },[]) 

  return (
    <div className="bgcont">
      <div className="bgimg bgimg1"></div>
      <div className="grid">
        <h6>#promos2020</h6>
        <h1>Shop<br/>Promos 2020</h1>
        <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Shop Now</button></Link>

        <div className="bgnav">
          <div><small>1</small></div><div><small>2</small></div><div><small>3</small></div>
        </div>
      </div>
    </div>
  )
}

export default Mainbg