import React, {useContext} from 'react'
import Product from './Product'
import Item from './Item'
import { ProductContext } from './ProductContext'

function ProductPage(props) {

  const {products} = useContext(ProductContext)

  return ( 
    <div className="productpage"> 
      <div className="grid xgrid pgrid">
        <div className="spacer"></div>
        <Product prod={props.prod} id={props.id} name={props.name} img={props.img} price={props.price} descript={props.descript} color={props.color} cat={props.cat} sizes={props.sizes} units={props.units} addcart={props.addcart} wishlist={props.wishlist} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} updatewish={props.updatewish} wishnum={props.wishnum} setprodcolor={props.setprodcolor} setprodsize={props.setprodsize} />
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
            <Item img={products[3].img} name={products[3].name} price={products[3].price} hot={products[3].hot} sale={products[3].sale} wishlist={products[3].wishlist} color={products[3].color} sizes={products[3].sizes} addcart={products[3].addcart} openproduct={props.openproduct} />
            <Item img={products[0].img} name={products[0].name} price={products[0].price} hot={products[0].hot} sale={products[0].sale} wishlist={products[0].wishlist} color={products[0].color} sizes={products[0].sizes} addcart={products[0].addcart} openproduct={props.openproduct} />
            <Item img={products[7].img} name={products[7].name} price={products[7].price} hot={products[7].hot} sale={products[7].sale} wishlist={products[7].wishlist} color={products[7].color} sizes={products[7].sizes} addcart={products[7].addcart} openproduct={props.openproduct} />
            <Item img={products[8].img} name={products[8].name} price={products[8].price} hot={products[8].hot} sale={products[8].sale} wishlist={products[8].wishlist} color={products[8].color} sizes={products[8].sizes} addcart={products[8].addcart} openproduct={props.openproduct} />
          </div> 
        </div>
 
      </div>
    </div>
  )
}

export default ProductPage