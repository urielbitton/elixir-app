import React, { useContext } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function DashTableRow(props) {

  const {products, general} = useContext(ProductContext)

  return ( 
    <tr> 
      <td>{props.id}</td>
      <td><img src={props.img} alt="img"/><span className="prodname">{props.name} <span className="hottag">{props.hot?"- Hot":""}</span> <span className="saletag">{props.sale?"- Sale":""}</span></span></td>
      <td>${props.price.toFixed(2)}</td>
      <td>{props.units}</td>
      <td>${((props.price*props.units)-(props.price*general.taxrate)).toFixed(2)}</td>
      <td><span className={props.instock?"stockstatus instock":"stockstatus outstock"}>{props.instock?"In Stock":"Out Of Stock"}</span></td>
    </tr>
  )
}

export default DashTableRow