import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function Coupons() {

  const {products, setProducts, general} = useContext(ProductContext)

  const [num, setNum] = useState(0)
  const [coupname, setCoupname] = useState('')
  const [coupamount, setCoupamount] = useState(0)
  const [update, setUpdate] = useState(0)
  const [exist, setExist] = useState(false)


  function generateCode() {
    let coupongen = Math.random().toString(36).substring(7)
    setCoupname(coupongen)
  }
  function createCoupon() {
    if(coupamount>0) {
      let newcoupon = {name:coupname,amount:coupamount}
      general.coupons.push(newcoupon)
      setUpdate(prev => prev+1)
    }
    else {
      const notif = document.createElement('div')
      notif.innerHTML = '<i class="fas fa-exclamation-circle"></i>Coupon amount must be greater than 0 to be created'
      document.querySelector('.notifcont').appendChild(notif)
      setTimeout(() => {notif.style.cssText += 'opacity:1;left:0'}, 100);
      setTimeout(() => {
        notif.style.cssText += 'opacity:0;left:-40px'
        setTimeout(() => {notif.style.display = 'none'}, 100)
      }, 4000) 
    }
  }  
 
  return (
    <div className="couponspage" style={{display: exist?"block":"flex"}}>
      <h2 className="homepagetitle" style={{display: exist?"block":"none"}}>My Coupons</h2>
      <div className="nocouponsdiv" style={{display: exist?"none":"block"}}>
        <h5>You have no coupons</h5>
        <h2>Create your first coupon</h2>
        <button onClick={() => {setExist(true);setUpdate(prev => prev+1)}}>Create Coupon</button>
      </div> 

      <div className="createcouponcont" style={{display: exist?"grid":"none"}}>

        <div className="dashbox">
          <h5>Coupon Code</h5>  
          <input className="couponcodeinp" value={coupname} placeholder="Coupon Name" onKeyDown={(e) => e.key==="Backspace"?setCoupname():""} onChange={(e) => setCoupname(e.target.value)}/>
          <button className="generatebtn" onClick={() => generateCode()}>Generate Code</button>
          <textarea placeholder="Description (optional)">
            
          </textarea>
          <div className="spacer"></div>
          <h5>Coupon Data</h5>
          <div className="coupondatadiv">
            <label>
              <h6>Coupon Type</h6>
              <select>
                <option>Flat Cart Amount</option>
                <option>Cart Percentage</option>
              </select>
              <div className="clear"></div>
            </label>
            <label>
              <h6>Coupon Amount</h6>
              <input placeholder="0" onChange={(e) => setCoupamount(e.target.value)}/>
              <div className="clear"></div>
            </label>
            <label>
              <h6>Coupon Expiry Date</h6>
              <input type="date"/>
              <div className="clear"></div>
            </label>
          </div>
          <button className="createcouponbtn" onClick={() => createCoupon()}>Create Coupon</button>
        </div>
        <div className="dashbox mycouponsbox" data-update={update}>
          <h4 className="rightbartitle">My Coupons</h4>
          {
            general.coupons.map(el => {
              return <div className="couponbox"><p>Coupon: <span>{el.name}</span></p><small>Amount: {el.amount}</small><small>Expiry Date: June 12 2022</small></div>
            }) 
          } 
        </div> 
      </div>

    </div>
  )
}

export default Coupons