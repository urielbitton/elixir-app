import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Mainbg() {

  function scrollUp() {
    window.scrollTo(0, 0)
  }

  return (
    <div className="bgcont">
      <div className="bgimg bgimg1"></div>
      <div className="grid">
        <h6>#promos2020</h6>
        <h1>Shop<br/>Promos 2020</h1>
        <Link to="/shop" onClick={() => scrollUp()}><button>Shop Now</button></Link>

        <div className="bgnav">
          <div><small>1</small></div><div><small>2</small></div><div><small>3</small></div>
        </div>
      </div>
    </div>
  )
}

export default Mainbg