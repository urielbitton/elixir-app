import React from 'react'

function OrderRow(props) {
  return (
    <tr>
      <td>#{props.number}</td>
      <td>{props.custname}</td>
      <td>{props.date}</td>
      <td className="orderstatus"><span>{props.status}</span></td>
      <td>${parseFloat(props.total).toFixed(2)}</td>
    </tr>
  )
}

export default OrderRow