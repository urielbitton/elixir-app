import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import PageBanner from './PageBanner'

function About() {
  return (
    <div className="aboutpage">
      <PageBanner title="About" subtitle="About our ecommerce platform" bgimg="https://i.imgur.com/29mlO62.jpg?1"/>
      <div className="grid xgrid">
        <div className="spacers"></div>

        <div className="abouts1">
          <div className="left">
            <img src="https://i.imgur.com/U9K2x6t.png" alt="aboutimg1"/>
            <small><span>#</span>elixironline</small>
            <big>e</big>
          </div>
          <div className="right">
            <h3>The outdoor shopping experience in the confort of your place</h3>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat</p>
            <h6><Link to="#">Discover More</Link></h6>
          </div>
          <div className="clear"></div>

        </div>
        


      </div>
    </div>
  )
}

export default About