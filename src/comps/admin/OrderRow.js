import React from 'react'

function OrderRow(props) {

  return (
    <tr onClick={() => props.manageorder(props.number,props.custname,props.date,props.carrier,props.trackingnum,props.delivspeed,props.status,props.total)}>
      <td>#{props.number}</td>
      <td>{props.custname}</td>
      <td>{props.date}</td>
      <td>{props.carrier}</td>
      <td>{props.trackingnum}</td>
      <td className="orderstatus"><span>{props.status}</span></td>
      <td>${parseFloat(props.total).toFixed(2)}</td>
    </tr>
  )
}

export default OrderRow