import React from 'react'

function Item(props) { 
  return (
    <div className="itemcont">
      <div className="imgcont">
        <i className="far fa-heart"></i>
        <img src={props.link} alt="item"/>
        <div className="itemactions">
          <i className="fas fa-shopping-cart"></i>
          <i class="fas fa-search-plus"></i>
          <i class="fas fa-random"></i>
        </div>
      </div>
      <h5><a href="#">{props.title}</a></h5>
      <small>${props.price}</small>
    </div>
  )
}

export default Item