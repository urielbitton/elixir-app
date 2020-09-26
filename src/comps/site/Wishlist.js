import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import PageBanner from './PageBanner'

function Wishlist(props) {

  const {products, setProducts, setGeneral} = useContext(ProductContext)
  const [wish, setWish] = useState(false)
  
  let wishitems = products.map(prod => {
    if(prod.wishlist)
      return <tr data-wish={wish}>
        <td><i className="far fa-window-close" onClick={() => removeWish(prod)}></i><img src={prod.img} alt="prodwish" /></td>
        <td><Link to="/product" onClick={() => props.openproduct(prod,prod.id,prod.name,prod.img,prod.price,prod.descript,prod.color,prod.cat,prod.sizes,prod.units,prod.addcart,prod.wishlist)}>{prod.name}</Link></td>
        <td className="pricetd">${prod.price.toFixed(2)}</td>
        <td>{prod.instock?<p><i class='fas fa-check-circle'></i>In stock</p>:<p><i class='fas fa-window-close'></i>Out of stock</p>}</td>
        <td>{prod.cat[0]}</td>
      </tr> 
  })

  function removeWish(prod) {
    prod.wishlist = false
    setWish(true)
    props.subwishnum()
  }
  function resetWishnum() {
    products.map(prod => prod.wishlist = false)
    setWish(false)
    props.zerowishnum()
  }
  
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
              <th>Category</th>
            </thead>
            <tbody>
              {wishitems}
            </tbody>
            <tfoot>
              <div className="spacer"></div>
              <button onClick={() => resetWishnum()}>Clear Items</button>
              </tfoot>
          </table>
          

      </div>

    </div>
  )
}

export default Wishlist