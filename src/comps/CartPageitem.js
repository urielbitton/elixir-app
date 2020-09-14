import React from 'react'

function CartPageItem(props) {
  return (
    <tr>
      <td><img src={props.img} alt="cartprod"/><h6>{props.name}</h6></td>
      <td className="pricetd">${props.price}.00</td>
      <td><div className="itemnum"><div className="subnum">-</div><div className="num">1</div><div className="addnum">+</div></div></td>
      <td className="itemtotaltd">${props.price*1}.00</td>
      <td><i className="far fa-window-close"></i></td>
    </tr>
  )
}

export default CartPageItem