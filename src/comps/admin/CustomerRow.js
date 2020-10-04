import React, {useContext} from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function CustomerRow(props) {

  const {customers} = useContext(ProductContext)

  return (
    <tr>
      <td>{props.name}</td>
      <td><a href={"mailto:"+props.email}>{props.email}</a></td>
      <td>{props.phone}</td>
      <td>{props.signup}</td>
      <td>{props.orders}</td>
      <td>${parseFloat(props.spent).toFixed(2)}</td>
      <td>{props.country}</td>
      <td>{props.city}</td>
      <td>{props.postal}</td>
      <td>{props.address}</td>
    </tr> 
  ) 
}

export default CustomerRow