import React, { useContext } from 'react'
import { ProductContext } from '../site/ProductContext'

function MyAccount() {

  const {accounts} = useContext(ProductContext)

  return (
    <div className="myaccountpage clientpage">
      <div className="topspacer"></div>
      <h2 className="clientpagetitle">My Account</h2>

      <div className="spacers"></div>
 
      <div className="myaccountgrid">
        <div className="accountcol1">
          <div className="dashbox dashprofbox">
            <h6>Profile</h6>
            <div className="profaccountdiv"><img src={accounts[0].pic} alt=""/><span><i class="fad fa-camera"></i></span></div>
            <h4>{accounts[0].name}</h4>
          </div>
          <div className="dashbox helpbox">
            <i class="fal fa-comments"></i>
            <h4>Need Help?</h4>
            <p>Have questions or concerns regarding your account or the site? Our support is open 24/7!</p>
            <div className="spacers"></div>
            <button>Contact Support</button>
          </div>
        </div>
        <div className="dashbox mainbox">
          <div className="dashnav">

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount