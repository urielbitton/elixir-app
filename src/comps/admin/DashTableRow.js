import React, { useContext } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'

function DashTableRow(props) {

  const {products, general} = useContext(ProductContext)
 
  return ( 
    <tr data-purchased={props.status} onClick={() => props.openproduct(props.id,props.name,props.price,props.img,props.instock,props.color,props.sizes,props.sale,props.cat,props.descript,props.qty)} data-updated={props.updated}> 
      <td>{props.id}</td>
      <td><img src={props.img} alt="img"/><span className="prodname">{props.name} <span className="hottag">{props.hot?"- Hot":""}</span> <span className="saletag">{props.sale?"- Sale":""}</span></span></td>
      <td>${parseFloat(props.price).toFixed(2)}</td>
      <td>{props.qty}</td>
      <td>{props.qty_purch}</td>
      <td>${isNaN(props.earnings)?0:(props.earnings.toFixed(2) )}</td>
      <td style={{display:props.hide}}>{props.datesold}</td>
      <td><span className={props.instock?"stockstatus instock":"stockstatus outstock"}>{props.instock?"In Stock":"Out Of Stock"}</span></td>
    </tr>
  )
}  

export default DashTableRow 