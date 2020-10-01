import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function Coupons() {

  const {products, setProducts, general} = useContext(ProductContext)

  const [num, setNum] = useState(0)
  const [coupname, setCoupname] = useState('')
  const [coupamount, setCoupamount] = useState(0)
  const [update, setUpdate] = useState(0)


  function generateCode() {
    let coupongen = Math.random().toString(36).substring(7)
    setCoupname(coupongen)
  }
  function createCoupon() {
    let newcoupon = {name:coupname,amount:coupamount}
    general.coupons.push(newcoupon)
    setUpdate(prev => prev+1)
  } 
 
 
  return (
    <div className="couponspage" style={{display: general.coupons.length===0?"flex":"block"}}>
      <h2 className="homepagetitle" style={{display: general.coupons.length===0?"none":"block"}}>My Products</h2>
      <div className="nocouponsdiv" style={{display: general.coupons.length===0?"block":"none"}}>
        <h5>You have no coupons</h5>
        <h2>Create your first coupon</h2>
        <button onClick={() => {general.coupons.length=10;setUpdate(prev => prev+1)}}>Create Coupon</button>
      </div>

      <div className="createcouponcont" style={{display: general.coupons.length>0?"grid":"none"}}>

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
              return <p>{el.name} <span> {el.amount}</span></p>
            }) 
          } 
        </div>
      </div>

    </div>
  )
}

export default Coupons