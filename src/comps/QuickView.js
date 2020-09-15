import React, { useEffect } from 'react'
import Product from './Product'

function QuickView(props) {

  useEffect(() => {
    const quickviewcont = document.querySelector('.quickviewcont')
    const quickview = document.querySelector('.quickview')

    quickviewcont.onclick = () => {
      quickview.style.top = ''
      setTimeout(() => {
        quickviewcont.style.opacity = ''
      }, 100)
      setTimeout(() => {
        quickviewcont.style.display = ''
      }, 200)
    }
    quickview.onclick = (e) => {
      e.stopImmediatePropagation()
    } 
 
  },[])

  return (
    <div className="quickviewcont">
      <i className="close"></i>
      <div className="quickview">
        <Product updatewish={props.updatewish}/>
      </div>
    </div>
  )
}

export default QuickView