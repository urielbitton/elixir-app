import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import PageBanner from './PageBanner'

function Wishlist() {

  const {products, setProducts, setGeneral} = useContext(ProductContext)

  let wishitems = products.map(prod => {
    if(prod.wishlist)
      return <tr><td><i className="far fa-window-close"></i><img src={prod.img} alt="prodwish" /></td><td>{prod.name}</td><td className="pricetd">${prod.price}.00</td><td>{prod.instock?<p><i class='fas fa-check-circle'></i>In stock</p>:<p><i class='fas fa-window-close'></i>Out of stock</p>}</td><td></td></tr>
  })
  
  return ( 
    <div className="wishlistcont">
      <PageBanner title="Wishlist" subtitle="My wishlist on elixir" bgimg="https://i.imgur.com/eNtn9hp.jpg"/>

      <div className="grid xgrid pgrid">
          <h2 className="pagetitle">My Wishlist</h2>

          <table className="wishtable">
            <thead>
              <th></th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Stock Status</th>
              <th>Tags</th>
            </thead>
            <tbody>
              {wishitems}
            </tbody>
          </table>
          

      </div>

    </div>
  )
}

export default Wishlist