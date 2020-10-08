import React from 'react'
import PageBanner from './PageBanner'

function Contact() {
  return (
    <div className="shoppage">
      <PageBanner title="Contact" subtitle="Reach out to us" bgimg="https://i.imgur.com/TKlYCEJ.jpg"/>

      <div className="grid xgrid pgrid">
        <h2>Contact Information</h2>
        <div className="contactgrid">
          <div>
            <i class="fas fa-mobile-alt"></i>
            <h4>Phone</h4>
            <h6></h6>
          </div> 
          <hr/>
          <div>
            <i class="far fa-envelope"></i>
            <h4>Email</h4>
            <h6></h6>
          </div> 
          <hr/>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
            <h6></h6>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Contact