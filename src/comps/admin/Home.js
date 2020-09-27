import React, { useContext, useState } from 'react'
import Charts from './Charts'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Home() {  

  const {products, general} = useContext(ProductContext)
  const [prodshow, setProdshow] = useState(5)
  const [sort, setSort] = useState(0)

  const prodsold = general.products_sold.reduce((a,b) => {return a+b},0)
  const earnings = general.earnings
  const profit = general.profit
  const order_proc = general.order_proc  
  let topproducts
 
  topproducts = products.sort((a,b) => {
    return (b.purchased_qty) - (a.purchased_qty)
  }).map(prod => {
    if(prod.purchased_qty > 5) 
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id}/>
  })
  const recentprods = products.sort((a,b) => {
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
    if(prod.purchased_status === true)
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct}/>
  })
    
  function openProduct() {}

  return ( 
    <div className="homegrid">  
      <div className="dashsmallgrid">
        <div className="dashbox smallbox">
          <span style={{background:"rgba(10, 157, 255,0.6)"}}><i className="fas fa-box-open" style={{color:"#fff"}}></i></span>
          <h3>{prodsold}<small>products sold</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background: "rgba(130, 107, 232,0.6"}}><i className="fas fa-chart-line" style={{color:"#fff"}}></i></span>
          <h3>${earnings}<small>total earnings</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background: "rgba(242, 214, 78,0.6"}}><i className="fas fa-dollar-sign" style={{color:"#fff"}}></i></span>
          <h3>${profit}<small>total profit</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background:"rgba(57, 230, 199,0.6)"}}><i className="fas fa-shopping-bag" style={{color:"#fff"}}></i></span>
          <h3>{products.length}<small>total products</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background:"rgba(255, 87, 115,0.6)"}}><i className="fas fa-print" style={{color:"#fff"}}></i></span>
          <h3>{order_proc}<small>orders processed</small></h3>
        </div>
      </div>
 
      <div className="dashbox dashmed">
        <h5>Earnings Statistics</h5>
        <Charts type="line-chart" />
      </div>
      <div className="dashbox dashmed">
        <h5>Orders Stats</h5>
        <Charts type="bar-chart" />
      </div>

      <div className="dashbox dashlarge">
        <h5>Top Selling Products</h5>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name<i className="fas fa-sort"></i></th>
              <th>Unit Price<i className="fas fa-sort"></i></th>
              <th>Quantity Sold<i className="fas fa-sort"></i></th>
              <th>Earnings<i className="fas fa-sort"></i></th>
              <th>Stock Status<i className="fas fa-sort"></i></th> 
            </tr>
          </thead>
          <tbody>
            {topproducts}
          </tbody> 
          <tfoot>
            <div className="spacers"></div>
            <small onClick={() => prodshow===5?setProdshow(Infinity):setProdshow(5)}>{prodshow===5?"Show All":"Show Less"}</small>
          </tfoot>
        </table>
      </div>

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
            {recentprods}
          </tbody>  
          <tfoot>
            <div className="spacers"></div>
          </tfoot>
        </table>
      </div>
      <div className="dashbox dashmed">
        <h5>Recent Updates</h5>

      </div>

    </div>
  )
}

export default Home