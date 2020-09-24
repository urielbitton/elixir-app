import React, { useContext, useState } from 'react'
import Charts from './Charts'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Home() {  

  const {products, general} = useContext(ProductContext)
  const [prodshow, setProdshow] = useState(5)
  const prodsold = general.products_sold.reduce((a,b) => {return a+b},0)
  const earnings = general.earnings
  const profit = general.profit
  const order_proc = general.order_proc

  const topproducts = products.slice(0,prodshow).map(prod => {
    if(prod.purchased.status)
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.purchased.qty} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id}/>
  })
   
  return ( 
    <div className="homegrid">
      <div className="dashsmallgrid">
        <div className="dashbox smallbox">
          <span style={{background:"rgba(10, 157, 255,0.1)"}}><i className="fas fa-box-open" style={{color:"var(--color2)"}}></i></span>
          <h3>{prodsold}<small>products sold</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background: "rgba(130, 107, 232,0.1"}}><i className="fas fa-chart-line" style={{color:"#826be8"}}></i></span>
          <h3>${earnings}<small>total earnings</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background: "rgba(242, 214, 78,0.1"}}><i className="fas fa-dollar-sign" style={{color:"#f2d64e"}}></i></span>
          <h3>${profit}<small>total profit</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background:"rgba(57, 230, 199,0.1)"}}><i className="fas fa-shopping-bag" style={{color:"#39e6c7"}}></i></span>
          <h3>{prodsold}<small>active orders</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background:"rgba(255, 87, 115,0.1)"}}><i className="fas fa-print" style={{color:"#ff5773"}}></i></span>
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
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Sold</th>
              <th>Earnings</th>
              <th>Stock Status</th> 
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

    </div>
  )
}

export default Home