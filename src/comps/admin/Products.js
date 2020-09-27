import React, { useContext, useState } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Products() {

  const {products, general} = useContext(ProductContext)
  const [sort, setSort] = useState(0)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
 
  const myproducts = products.sort((a,b) => {
    if(sort===0)
      return a.id-b.id
    else if(sort===1) {
      if(a.name < b.name)
        return -1
      else if(a.name < b.name)
        return 1
    }
    else if(sort===2)
      return a.price-b.price
    else if(sort===3)
      return a.qty-b.qty
    else if(sort===4)
      return a.earnings-b.earnings
    
  }).map(prod => {
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct}/>
  })

  function openProduct(name, price) {
    setName(name)
    setPrice(price)
  }

  return (
    <div className="myproductspage">
      <h2 className="homepagetitle">My Products</h2>
      <div className="spacer"></div>

      <div className="myproductsgrid">
      <div className="dashbox dashlarge">
        <h5>Recently Sold</h5>
        <table>
          <thead>
            <tr>
              <th style={{color: sort===0?"var(--color)":""}} onClick={() => setSort(0)}><h6>No.<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===1?"var(--color)":""}} onClick={() => setSort(1)}><h6>Product Name<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===2?"var(--color)":""}} onClick={() => setSort(2)}><h6>Unit Price<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===3?"var(--color)":""}} onClick={() => setSort(3)}><h6>Quantity Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===4?"var(--color)":""}} onClick={() => setSort(4)}><h6>Earnings<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===5?"var(--color)":""}}><h6>Stock Status</h6></th> 
            </tr>
          </thead>
          <tbody>
            {myproducts}
          </tbody>  
          <tfoot>
            <div className="spacers"></div>
          </tfoot>
        </table>
      </div>

      <div className="myproductsoptions dashbox">
        <h4>Manage Products</h4>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>

      </div>
    </div>
  )
}

export default Products