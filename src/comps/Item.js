import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Item(props) { 

  useEffect(() => {
    const quickviewbtn = document.querySelectorAll('.quickviewbtn')
    const quickviewcont = document.querySelector('.quickviewcont')
    const quickview = document.querySelector('.quickview')

    quickviewbtn.forEach(el => {
      el.onclick = () => {
        quickviewcont.style.display = 'flex'
        setTimeout(() => {
          quickviewcont.style.opacity = '1'
          setTimeout(() => {
            quickview.style.top = '0'
          }, 100);
        }, 200);
      }
    })
  },[]) 

  return (
    <div className="itemcont">
      <div className="imgcont">
        <i className="far fa-heart"></i>
        <Link to="/product"><img src={props.img} alt="item"/></Link>
        <div className="itemactions">
          <i className="fas fa-shopping-cart"></i>
          <i class="fas fa-search-plus quickviewbtn"></i>
          <i class="fas fa-random"></i>
        </div>
      </div>
      <h5><Link to="/product">{props.title}</Link></h5>
      <small>${props.price}</small>
    </div>
  )
}

export default Item