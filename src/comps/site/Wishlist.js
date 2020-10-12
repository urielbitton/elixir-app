import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import PageBanner from './PageBanner'

function Wishlist(props) {

  const {products, wishes, general} = useContext(ProductContext)
  const [update, setUpdate] = useState(true)
  
  let wishitems = wishes.map(wish => {
      return ( 
      <tr>
        <td><i className="far fa-window-close" onClick={() => removeWish(wish.id, wish)}></i><img src={wish.img} alt="prodwish" /></td>
        <td><Link to="/product" onClick={() => props.openproduct(wish,wish.id,wish.name,wish.img,wish.price,wish.descript,wish.color,wish.cat,wish.sizes,wish.units,wish.instock,wish.addcart,wish.wishlist,wish.qty,wish.ratings,wish.reviews,wish.avgrating)}>{wish.name}</Link></td>
        <td className="pricetd">${parseFloat(wish.price).toFixed(2)}</td>
        <td>{wish.instock?<p><i class='fas fa-check-circle'></i>In stock</p>:<p><i class='fas fa-window-close'></i>Out of stock</p>}</td>
        <td>{wish.cat[0]}</td>
      </tr> 
      )
  })   
 
  function removeWish(wishid, wish) {
    products.map(prod => { 
      if(prod.id === wishid) { 
        prod.wishlist = false
      }
    })
    wishes.map(el => {
      if(el.id === wishid) {
        let index = wishes.indexOf(el)
        wishes.splice(index,1)
        setUpdate(prev => prev+1)
        general.wishnum -= 1
        props.addwishnum() 
      }
    })
  }
  function resetWishnum() {
    products.map(prod => prod.wishlist = false)
    wishes.splice(0,wishes.length)
    general.wishnum = 0
    setUpdate(prev => prev-1)
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
            <tbody data-update={update}>
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