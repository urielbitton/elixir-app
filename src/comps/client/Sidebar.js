import React from 'react'

function Sidebar(props) {

  return (
    <div className="sidebar">
      <div className="innersidebar">
        <h4>Elixir</h4>
        <div className="sidemenu">
          <h5 style={{color:"#555"}}><i className="fas fa-home-alt"></i>Overview</h5>
          <h5><i className="far fa-shopping-bag"></i>My Orders</h5>
          <h5><i className="fas fa-heart"></i>My Wishlist</h5>
          <h5><i className="fad fa-star-half"></i>My Reviews</h5>
          <h5><i className="fad fa-user-alt"></i>My Account</h5>
        </div>
        <div className="promodiv">
          <img src="https://i.imgur.com/rSt6gHe.png" alt=""/>
          <h6>Download the elixir mobile app and manage your account <span>on the go</span>.</h6>
          <hr/>
        </div>
        <div className="sidebarfoot">
          <button onClick={() => props.logout()}><i class="fad fa-sign-out-alt"></i>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar