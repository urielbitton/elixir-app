import React, {useContext} from 'react'
import Item from './Item'
import { ProductContext } from './ProductContext'

function Section1(props) {

  const {products} = useContext(ProductContext)
 
  const newarrivals = products.map(prod => {
    return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} addcart={prod.addcart} wishlist={prod.wishlist} descript={prod.descript} color={prod.color} cat={prod.cat} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} wishnum={props.wishnum} key={prod.id}/>
  })  
 
  return (
    <section className="section1">
      <div className="grid xgrid">
        <h4 className="sectitle">New Arrivals</h4>
        <h5 className="secsubtitle">Shop Collection</h5>
        <div className="sectionnav">
          <h6 className="activesecnav">New</h6><h6>Shirts</h6><h6>Pants</h6><h6>Shoes</h6><h6>Coats</h6>
        </div>

        <div className="sectiongrid">
           

          {newarrivals}
          
        </div>
 
      </div> 
    </section> 
  )
}
 
export default Section1