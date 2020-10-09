import React from 'react'
import PageBanner from './PageBanner'

function Contact() {
  return (
    <div className="contactpage">
      <PageBanner title="Contact" subtitle="Reach out to us" bgimg="https://i.imgur.com/TKlYCEJ.jpg"/>

      <div className="grid xgrid pgrid">
        <h2>Contact Information</h2>
        <div className="contactgrid">
          <div>
            <i class="fas fa-mobile-alt"></i>
            <h4>Phone</h4>
            <h6>+1.514.992.1344</h6>
          </div> 
          <hr/>
          <div>
            <i class="far fa-envelope"></i>
            <h4>Email</h4>
            <h6>contact@elixirsite.com</h6>
          </div> 
          <hr/>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
            <h6>998 Westford Boul.<br/>Quebec, Canada</h6>
          </div>  
        </div>
        <div className="spacerl"></div>
        <div className="contactdiv">
          <h2>Get in touch with us</h2>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui inea</p>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Phone"/>
            <textarea placeholder="Message"/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact