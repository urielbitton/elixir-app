import React, { useContext, useState } from 'react'
import Charts from './Charts'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Home() {   

  const {products, general} = useContext(ProductContext)
  const [prodshow, setProdshow] = useState(5)
  const [sort, setSort] = useState([0,0])
 
  const prodsold = general.products_sold.reduce((a,b) => {return a+b},0)
  const earnings = general.earnings
  const profit = general.profit
  const order_proc = general.order_proc  
  let topproducts
  let reccount = 0, recqtypurch = 0, recearnings = 0, recavgprice = 0
  let topcount = 0, topqtypurch = 0, topearnings = 0, topavgprice = 0
 
  topproducts = products.sort((a,b) => {
    return (b.purchased_qty) - (a.purchased_qty)
  }).map(prod => {
    if(prod.purchased_qty > 5) 
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.qty} qty_purch={prod.purchased_qty} earnings={prod.earnings} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} datesold={prod.datesold}/>
  }) 
  const recentprods = products.sort((a,b) => {
    if(sort[0]===0) {
      if(sort[1]===0)
        return a.id-b.id
      else 
        return b.id-a.id
    }
    else if(sort[0]===1) {
      if(sort[1]===0) {
        if(a.name > b.name)
          return -1
        else if(a.name < b.name)
          return 1
      }
      else {
       if(a.name > b.name)
        return 1
       else if(a.name < b.name)
        return -1
      }
    } 
    else if(sort[0]===2) {
      if(sort[1]===0)
        return a.price-b.price
      else
        return b.price-a.price
    }
    else if(sort[0]===3) {
      if(sort[1]===0)
        return a.qty-b.qty
      else 
      return b.qty-a.qty
    } 
    else if(sort[0]===4) {
      if(sort[1]===0)
        return a.purchased_qty-b.purchased_qty
      else 
      return b.purchased_qty-a.purchased_qty
    } 
    else if(sort[0]===5) {
      if(sort[1]===0)
        return a.earnings-b.earnings
      else
        return b.earnings-a.earnings
    }
    else if(sort[0]===6) {
      if(sort[1]===0) 
        return a.instock-b.instock
      else
        return b.instock-a.instock
    }
  }).map(prod => {
    if(prod.purchased_status === true)
      return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.qty} qty_purch={prod.purchased_qty} earnings={prod.earnings} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct} datesold={prod.datesold}/>
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
              <th style={{color: sort[0]===0?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([0,1]):setSort([0,0])}>No.<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===1?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([1,1]):setSort([1,0])}>Product Name<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===2?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([2,1]):setSort([2,0])}>Unit Price<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===3?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([3,1]):setSort([3,0])}>Qty<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===4?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([4,1]):setSort([4,0])}>Quantity Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===5?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([5,1]):setSort([5,0])}>Earnings<i className="fas fa-sort"></i></h6></th>
              <th><h6>Date Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===6?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([6,1]):setSort([6,0])}>Stock Status<i className="fas fa-sort"></i></h6></th> 
            </tr>
          </thead>
          <tbody>
            {topproducts}
          </tbody> 
          <tfoot>
          { 
              products.map(prod => {
                if(prod.purchased_qty > 5) {
                  topcount++
                  topearnings += prod.earnings
                  topqtypurch += prod.purchased_qty
                  topavgprice += prod.price 
                }
              })
            } 
            <td className="tfootdetails" colSpan="8">
              <h6>{topcount} <span>Products</span></h6>
              <h6>${topearnings.toFixed(2)} <span>Total earnings</span></h6>
              <h6>{topqtypurch} <span>Quantities sold</span></h6>
              <h6>${isNaN(topavgprice/topcount)?0:(topavgprice/topcount).toFixed(2)} <span>Average price</span></h6>
            </td>
          </tfoot>
        </table>
      </div>

      <div className="dashbox dashlarge">
        <h5>Recently Sold</h5>
        <table>
          <thead>
            <tr>
              <th style={{color: sort[0]===0?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([0,1]):setSort([0,0])}>No.<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===1?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([1,1]):setSort([1,0])}>Product Name<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===2?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([2,1]):setSort([2,0])}>Unit Price<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===3?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([3,1]):setSort([3,0])}>Qty<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===4?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([4,1]):setSort([4,0])}>Quantity Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===5?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([5,1]):setSort([5,0])}>Earnings<i className="fas fa-sort"></i></h6></th>
              <th><h6>Date Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort[0]===6?"var(--color)":""}}><h6 onClick={() => sort[1]===0?setSort([6,1]):setSort([6,0])}>Stock Status<i className="fas fa-sort"></i></h6></th> 
            </tr>
          </thead>
          <tbody>
            {recentprods}
          </tbody>  
          <tfoot>
            <div className="spacers"></div>
            <small onClick={() => prodshow===5?setProdshow(Infinity):setProdshow(5)}>{prodshow===5?"Show All":"Show Less"}</small>
          </tfoot>
          <tfoot>
            {
              products.map(prod => {
                if(prod.purchased_status===true) {
                  reccount++
                  recearnings += prod.earnings
                  recqtypurch += prod.purchased_qty
                  recavgprice += prod.price 
                }
              })  
            } 
            <td className="tfootdetails" colSpan="8">
              <h6>{reccount} <span>Products</span></h6>
              <h6>${recearnings.toFixed(2)} <span>Total earnings</span></h6>
              <h6>{recqtypurch} <span>Quantities sold</span></h6>
              <h6>${isNaN(recavgprice/reccount)?0:(recavgprice/reccount).toFixed(2)} <span>Average price</span></h6>
            </td>
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