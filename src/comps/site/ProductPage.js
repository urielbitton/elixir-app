import React, {useContext} from 'react'
import Product from './Product'
import Item from './Item'
import { ProductContext } from './ProductContext'

function ProductPage(props) {

  const {products} = useContext(ProductContext)
  let r1,r2,r3,r4
  r1 = Math.floor((Math.random() * products.length-1) + 1)
  r2 = Math.floor((Math.random() * products.length-1) + 1)
  while(r1===r2 || r1===r3 || r1===r4 || r2===r3 || r2===r4 | r3===r4) {
    r2 = Math.floor((Math.random() * products.length-1) + 1)
    r3 = Math.floor((Math.random() * products.length-1) + 1)
    r4 = Math.floor((Math.random() * products.length-1) + 1)
  }
  

  return ( 
    <div className="productpage"> 
      <div className="grid xgrid pgrid">
        <div className="spacer"></div>
        <Product prod={props.prod} id={props.id} name={props.name} img={props.img} price={props.price} descript={props.descript} color={props.color} cat={props.cat} sizes={props.sizes} units={props.units} addcart={props.addcart} wishlist={props.wishlist} instock={props.instock} qty={props.qty} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} updatewish={props.updatewish} wishnum={props.wishnum} setprodcolor={props.setprodcolor} setprodsize={props.setprodsize} />
        <div className="spacer"></div>
        <hr />
        <div className="prodaccordion">
          <h2 re-taber="acc1">Description</h2>
          <h2 re-taber="acc2">Reviews</h2>
          <div className="accordion">
            <div re-tab="acc1"> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod odio nec purus bibendum, sit amet ultricies ante venenatis. Nunc nec pulvinar justo. Nulla et enim tincidunt, euismod ipsum at, dapibus lorem. Phasellus at convallis lorem. Quisque varius vulputate libero, in mattis ipsum dictum eget. Pellentesque ut purus est. Proin vel ligula at velit vehicula varius tincidunt nec sem. Aenean laoreet tortor quis sapien placerat ornare. </p>
              <table>
                <tr><th>Colors</th><td>Pink, black</td></tr>
                <tr><th>Sizes</th><td>Large, Small, Extra Small</td></tr>
              </table>
            </div>
            <div re-tab="acc2">
              <p>There are no reviews yet. Add the first review.</p> 
            </div>
          </div>
        </div> 
        <div className="spacerl"></div> 
        <hr/> 
        <div className="spacer"></div> 
        <div className="similarprods">
          <h2>Similar Products</h2>
          <div className="similarprodgrid">
            <Item img={products[r1].img} name={products[r1].name} price={products[r1].price} hot={products[r1].hot} sale={products[r1].sale} wishlist={products[r1].wishlist} color={products[r1].color} sizes={products[r1].sizes} units={products[r1].units} addcart={products[r1].addcart} openproduct={props.openproduct} />
            <Item img={products[r2].img} name={products[r2].name} price={products[r2].price} hot={products[r2].hot} sale={products[r2].sale} wishlist={products[r2].wishlist} color={products[r2].color} sizes={products[r2].sizes} units={products[r2].units} addcart={products[r2].addcart} openproduct={props.openproduct} />
            <Item img={products[r3].img} name={products[r3].name} price={products[r3].price} hot={products[r3].hot} sale={products[r3].sale} wishlist={products[r3].wishlist} color={products[r3].color} sizes={products[r3].sizes} units={products[r3].units} addcart={products[r3].addcart} openproduct={props.openproduct} />
            <Item img={products[r4].img} name={products[r4].name} price={products[r4].price} hot={products[r4].hot} sale={products[r4].sale} wishlist={products[r4].wishlist} color={products[r4].color} sizes={products[r4].sizes} units={products[r4].units} addcart={products[r4].addcart} openproduct={props.openproduct} />
          </div> 
        </div>
 
      </div> 
    </div>
  )
}

export default ProductPage