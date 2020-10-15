import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Section2() {
  return (
    <section className="section2">
      <div className="grid xgrid">
        <div className="banner">
          <div className="innerbanner">
            <big>Elixir</big>
            <h4>#Collection</h4>
            <p>Discover our featured elixir collection of 2021</p>
            <Link to="/shop" onClick={() => window.scrollTo(0,0)}>Shop Featured<hr/></Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Section2