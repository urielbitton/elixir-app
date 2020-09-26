import React, { useEffect, useState } from 'react'
import Product from './Product'

function QuickView(props) {

  useEffect(() => { 
    const quickviewcont = document.querySelector('.quickviewcont')
    const quickview = document.querySelector('.quickview')
    const quickclose = document.querySelector('.quickclose')

    quickclose.onclick = () => {
      quickview.style.top = ''
      setTimeout(() => {
        quickviewcont.style.opacity = ''
      }, 100)
      setTimeout(() => {
        quickviewcont.style.display = ''
      }, 200)
    }  
  
  },[]) 
 
  return (
    <div className="quickviewcont">
      <i className="close"></i>
      <div className="quickclose"></div>
        <div className="quickview">
          <Product prod={props.prod} id={props.id} name={props.name} img={props.img} price={props.price} descript={props.descript} color={props.color} cat={props.cat} sizes={props.sizes} units={props.units} addcart={props.addcart} wishlist={props.wishlist} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} updatewish={props.updatewish} wishnum={props.wishnum} setprodcolor={props.setprodcolor} setprodsize={props.setprodsize} />
        </div>
    </div>
  )
}

export default QuickView