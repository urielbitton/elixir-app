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
  const recentprods = general.recently_purch.sort((a,b) => {
    if(sort[0]===0) {
      if(sort[1]===0)
        return a.id-b.id
      else 
        return b.id-a.id
    } 
    else if(sort[0]===1) {
      if(sort[1]===0) {
        if(products.find(x => x.id===a.id).name > products.find(x => x.id===b.id).name)
          return -1
        else if(products.find(x => x.id===a.id).name < products.find(x => x.id===b.id).name)
          return 1
      }
      else {
       if(products.find(x => x.id===a.id).name > products.find(x => x.id===b.id).name)
        return 1
       else if(products.find(x => x.id===a.id).name < products.find(x => x.id===b.id).name)
        return -1
      }
    } 
    else if(sort[0]===2) {
      if(sort[1]===0)
        return products.find(x => x.id===a.id).price-products.find(x => x.id===b.id).price
      else
        return products.find(x => x.id===b.id).price-products.find(x => x.id===a.id).price
    }
    else if(sort[0]===3) {
      if(sort[1]===0)
        return products.find(x => x.id===a.id).qty-products.find(x => x.id===b.id).qty
      else 
      return products.find(x => x.id===b.id).qty-products.find(x => x.id===a.id).qty
    } 
    else if(sort[0]===4) {
      if(sort[1]===0)
        return products.find(x => x.id===a.id).purchased_qty-products.find(x => x.id===b.id).purchased_qty
      else 
      return products.find(x => x.id===b.id).purchased_qty-products.find(x => x.id===a.id).purchased_qty
    } 
    else if(sort[0]===5) {
      if(sort[1]===0)
        return products.find(x => x.id===a.id).earnings-products.find(x => x.id===b.id).earnings
      else
        return products.find(x => x.id===b.id).earnings-products.find(x => x.id===a.id).earnings
    }
    else if(sort[0]===6) { 
      if(sort[1]===0) 
        return products.find(x => x.id===a.id).instock-products.find(x => x.id===b.id).instock
      else
        return products.find(x => x.id===b.id).instock-products.find(x => x.id===a.id).instock
    }
  }).map(el => {
      return <DashTableRow img={products.find(x => x.id===el.id).img} name={products.find(x => x.id===el.id).name} price={products.find(x => x.id===el.id).price} qty={products.find(x => x.id===el.id).qty} qty_purch={products.find(x => x.id===el.id).purchased_qty} earnings={products.find(x => x.id===el.id).earnings} status={products.find(x => x.id===el.id).purchased_status} instock={products.find(x => x.id===el.id).instock} hot={products.find(x => x.id===el.id).hot} sale={products.find(x => x.id===el.id).sale} id={products.find(x => x.id===el.id).id} datesold={products.find(x => x.id===el.id).datesold} openproduct={openProduct} />
  }) 
   
  function openProduct() {} 

  return ( 
    <div className="homegrid">  
      <div className="dashsmallgrid">
        <div className="dashbox smallbox">
          <span style={{background:"rgba(10, 157, 255,0.6)"}}><i className="fad fa-box-open" style={{color:"#fff"}}></i></span>
          <h3>{prodsold}<small>products sold</small></h3>
        </div>
        <div className="dashbox smallbox">
          <span style={{background: "rgba(130, 107, 232,0.6"}}><i className="fad fa-chart-line" style={{color:"#fff"}}></i></span>
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
          <span style={{background:"rgba(255, 87, 115,0.6)"}}><i className="fad fa-print" style={{color:"#fff"}}></i></span>
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
        <h5>Popular Selling Products</h5>
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
          <tfoot><td colSpan="8"><small className="footnote">* based on products that sold 6 or more units</small></td></tfoot>
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
              <h6>{topcount} <span>{topcount===1?"Product":"Products"}</span></h6>
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
              general.recently_purch.map(el => {
                recearnings += products.find(x => x.id===el.id).earnings
                recqtypurch += products.find(x => x.id===el.id).purchased_qty
                recavgprice += products.find(x => x.id===el.id).price 
              })  
            } 
            <td className="tfootdetails" colSpan="8">
              <h6>{general.recently_purch.length} <span>{general.recently_purch.length===1?"Product":"Products"}</span></h6>
              <h6>${recearnings.toFixed(2)} <span>Total earnings</span></h6>
              <h6>{recqtypurch} <span>Quantities sold</span></h6>
              <h6>${isNaN(recavgprice/general.recently_purch.length)?0:(recavgprice/general.recently_purch.length).toFixed(2)} <span>Average price</span></h6>
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