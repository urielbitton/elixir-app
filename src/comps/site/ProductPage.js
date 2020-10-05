import React, {useContext} from 'react'
import Product from './Product'
import Item from './Item'
import { ProductContext } from './ProductContext'

function ProductPage(props) {

  const {products} = useContext(ProductContext)
  let mapcount = 0

  const similarprods = products.map(prod => {
    if(props.cat.some(el => prod.cat.includes(el)) && props.id !== prod.id && mapcount<4) {
      mapcount++
      return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} descript={prod.descript} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} instock={prod.instock} units={prod.units} wishlist={prod.wishlist} qty={prod.qty} compared={prod.compared} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} key={prod.id} resetunits={props.resetunits} updatecompare={props.updatecompare} updatecompstatus={props.updatecompstatus}/> 
    }
  }) 

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
            {similarprods}  
          </div> 
        </div>
 
      </div>  
    </div>
  )
}

export default ProductPage