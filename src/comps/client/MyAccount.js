import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../site/ProductContext'

function MyAccount(props) {

  const {accounts, general} = useContext(ProductContext)

  const [update, setUpdate] = useState(0)
  let settingstype

  function uploadImg() {
    var file = document.querySelector(".uploadpic").files[0]
    var reader = new FileReader()
    reader.onloadend = function(){
      accounts.find(el => el.id===general.activeaccid).pic = reader.result
      setUpdate(prev => prev+1)
      props.updateimg()
    }  
    if(file) {
        reader.readAsDataURL(file)
      } 
  } 

  function saveDetails() {
    dropNotif("Personal Details")
  }
  function saveAddress() {
    dropNotif("Address")
  }
  function savePayment() { 
    dropNotif("Payment Info")
  }
  function saveSettings() {
    dropNotif("General Settings")
  } 

  function dropNotif(settingstype) {
    const notif = document.createElement('div')
    notif.innerHTML = `<i class="fas fa-circle-notch"></i><p>Your ${settingstype} ${settingstype.endsWith('s')?"have":"has"} been successfully saved.</p>`
    document.querySelector('.notifcont').appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += 'opacity:1;left:0'
    }, 100);
    setTimeout(() => {
      notif.style.cssText += 'opacity:0;left:-40px'
      setTimeout(() => {
        notif.style.display = 'none'
      }, 100); 
    }, 4000);
  }

  useEffect(() => {
    const navlink = document.querySelectorAll('.dashnav h5')
    const dashnavliner = document.querySelector('.dashnavliner')

    navlink.forEach(el => {
      el.onclick = () => {
        dashnavliner.style.left = el.getAttribute('data-pos')+"px" 
        dashnavliner.style.width = el.getAttribute('data-width')+"px" 
        navlink.forEach(el2 => el2.style.cssText += 'color:#999;font-weight:500')
        el.style.cssText += 'color:#333;font-weight:600'

        let taber = el.getAttribute('data-taber')
        document.querySelectorAll('[data-tab]').forEach(el3 => el3.style.display = 'none')
        document.querySelector('[data-tab="'+taber+'"]').style.display = 'block'
      } 
    }) 
    const showpasswordtxt = document.querySelector('.showpasswordtxt')
    showpasswordtxt.onclick = () => {
      let x = document.querySelector('.passwordinp')
      showpasswordtxt.classList.toggle('fa-eye-slash')
      if (x.type === "password") { 
        x.type = "text"
      } else {
        x.type = "password"
      } 
    }  
 
  },[])

  return (
    <div className="myaccountpage clientpage">
      <div className="topspacer"></div>
      <h2 className="clientpagetitle">My Account</h2>

      <div className="spacers"></div>
 
      <div className="myaccountgrid" data-update={update}>
        <div className="accountcol1">
          <div className="dashbox dashprofbox">
            <h6>Profile</h6>
            <div className="profaccountdiv"><label><input type="file" className="uploadpic" onChange={() => uploadImg()}/><img src={accounts.find(el => el.id === general.activeaccid).pic} alt=""/><span><i class="fad fa-camera"></i></span></label></div>
            <h4>{accounts.find(el => el.id === general.activeaccid).name}</h4>
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
          <hr className="dashnavsep"/>
          <div className="dashnav">  
            <h5 data-pos="0" data-width="97" data-taber="1">Personal Details</h5>
            <h5 data-pos="141" data-width="63" data-taber="2">Addresses</h5>
            <h5 data-pos="249" data-width="110" data-taber="3">Payment Methods</h5>
            <h5 data-pos="403" data-width="52" data-taber="4">Settings</h5> 
            <hr className="dashnavliner"/> 
          </div>

          <div className="personaldetails" data-tab="1">
            <form> 
              <h6>Personal</h6>
              <label className="span3"><h6>First Name</h6><input placeholder="e.g. John" onChange={(e) => accounts.find(el => el.id===general.activeaccid).name = e.target.value}/></label>
              <label className="span3"><h6>Last Name</h6><input placeholder="e.g. Applewood" onChange={(e) => accounts.find(el => el.id===general.activeaccid).name = e.target.value} /></label>
              <label className="span3"><h6>Email Address</h6><input placeholder="e.g. japplewood@gmail.com" onChange={(e) => accounts.find(el => el.id===general.activeaccid).email = e.target.value}/></label>
              <label className="span3"><h6>Phone Number</h6><input placeholder="e.g. (514) 901-3492" onChange={(e) => accounts.find(el => el.id===general.activeaccid).phone = e.target.value} /></label>
              <label className="span3"><h6>Password</h6><input className="passwordinp" type="password" onChange={(e) => accounts.find(el => el.id===general.activeaccid).password = e.target.value} /><i className="fad fa-eye showpasswordtxt"></i></label>
              <h6>Company</h6>
              <label className="span2"><h6>Company Name</h6><input placeholder="e.g. Elixir Shop" onChange={(e) => accounts.find(el => el.id===general.activeaccid).compname = e.target.value}/></label>
              <label className="span2"><h6>Website</h6><input placeholder="e.g. www.elixir.com" onChange={(e) => accounts.find(el => el.id===general.activeaccid).website = e.target.value}/></label>
              <label className="span2"><h6>CID</h6><input placeholder="e.g. 0218833901" onChange={(e) => accounts.find(el => el.id===general.activeaccid).cid = e.target.value}/></label>
            </form>
            <button onClick={() => saveDetails()}>Save</button>
          </div>

          <div className="addresses" data-tab="2">
            <form>
              <h6></h6>
              <label className="span3"><h6>Address Line 1</h6><input placeholder="e.g. 8732 Western Boul." onChange={(e) => accounts.find(el => el.id===general.activeaccid).address = e.target.value}/></label>
              <label className="span3"><h6>Apt. Type (If Applicable)</h6><input placeholder="e.g. Apt. 416" onChange={(e) => accounts.find(el => el.id===general.activeaccid).apt = e.target.value}/></label>
              <label className="span2"><h6>Postal Code</h6><input placeholder="e.g. H5Q 3M7" onChange={(e) => accounts.find(el => el.id===general.activeaccid).postal = e.target.value}/></label>
              <label className="span2"><h6>City</h6><input placeholder="e.g. Montreal" onChange={(e) => accounts.find(el => el.id===general.activeaccid).city = e.target.value}/></label>
              <label className="span2">
                <h6>Country</h6>
                <select onChange={(e) => accounts.find(el => el.id===general.activeaccid).country = e.target.value}>
                  <option value="Canada">Canada</option><option value="UK">UK</option><option value="United States">United States</option><option value="France">France</option><option value="China">China</option><option value="Australia">Australia</option>
                  </select>
              </label> 
              <label className="span3"><h6>Delivery Notes</h6><textarea placeholder="e.g. Leave deliveries by the door..." onChange={(e) => accounts.find(el => el.id===general.activeaccid).delivnotes = e.target.value}/></label>
            </form>
            <button onClick={() => saveAddress()}>Save</button>
            <button>Add New Address</button>
          </div>

          <div className="payments" data-tab="3">
            <form>
              <h6></h6>
              <label className="span3"><h6>Cardholder Name</h6><input placeholder="e.g. John Applewood" onChange={(e) => accounts.find(el => el.id===general.activeaccid).name = e.target.value}/></label>
              <label className="span3"><h6>Card Number</h6><input placeholder="e.g. 4509 9301 3448 1122" onChange={(e) => accounts.find(el => el.id===general.activeaccid).cardnumber = e.target.value}/></label>
              <label className="span2">
                  <h6>Card Type</h6>
                  <select onChange={(e) => accounts.find(el => el.id===general.activeaccid).cardtype = e.target.value}>
                    <option value="Visa">Visa</option><option value="Mastercard">Mastercard</option><option value="Paypal">Paypal</option><option value="Amex">Amex</option>
                    </select>
                </label> 
              <label className="span2"><h6>Expiry Date</h6><input placeholder="e.g. 07/2022" onChange={(e) => accounts.find(el => el.id===general.activeaccid).expdate = e.target.value}/></label>
              <label className="span2"><h6>CVC</h6><input placeholder="e.g. 202" onChange={(e) => accounts.find(el => el.id===general.activeaccid).cvc = e.target.value}/></label> 
            </form> 
            <button onClick={() => savePayment()}>Save</button>
            <button>Add New Card</button>
          </div>

          <div className="settings" data-tab="4">

            <button onClick={() => saveSettings()}>Save</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyAccount