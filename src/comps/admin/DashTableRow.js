import React, { useContext } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function DashTableRow(props) {

  const {products, general} = useContext(ProductContext)

  const earnings = ((props.price*props.qty)-(props.price*general.taxrate)).toFixed(2)
 
  return ( 
    <tr data-purchased={props.status} onClick={() => props.openproduct(props.name,props.price)}> 
      <td>{props.id}</td>
      <td><img src={props.img} alt="img"/><span className="prodname">{props.name} <span className="hottag">{props.hot?"- Hot":""}</span> <span className="saletag">{props.sale?"- Sale":""}</span></span></td>
      <td>${props.price.toFixed(2)}</td>
      <td>{props.qty}</td>
      <td>${earnings<0?"0":earnings}</td>
      <td><span className={props.instock?"stockstatus instock":"stockstatus outstock"}>{props.instock?"In Stock":"Out Of Stock"}</span></td>
    </tr>
  )
} 

export default DashTableRow