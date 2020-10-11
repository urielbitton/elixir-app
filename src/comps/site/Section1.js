import React, {useContext, useState} from 'react'
import Item from './Item'
import { ProductContext } from './ProductContext'

function Section1(props) {

  const {products} = useContext(ProductContext)
  const [catnum, setCatnum] = useState("new")

  const newarrivals = products.sort((a,b) => {
    return a.id - b.id
  }).map(prod => {
    if(prod.cat.includes(catnum.trim()))
      return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} cat={prod.cat} sizes={prod.sizes} units={prod.units} addcart={prod.addcart} instock={prod.instock} wishlist={prod.wishlist} descript={prod.descript} color={prod.color} qty={prod.qty} compared={prod.compared} ratings={prod.ratings} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} openproduct={props.openproduct} addwishnum={props.addwishnum} updatecompare={props.updatecompare} updatecompstatus={props.updatecompstatus} key={prod.id} />
  })   
   
   
  return (
    <section className="section1">
      <div className="grid xgrid">
        <h4 className="sectitle">New Arrivals</h4>
        <h5 className="secsubtitle">Shop Collection</h5>
        <div className="sectionnav">
          <h6 className="activesecnav" onClick={() => setCatnum("new")}>New</h6><h6 onClick={() => setCatnum("shirt")}>Shirts</h6><h6 onClick={() => setCatnum("pants")}>Pants</h6><h6 onClick={() => setCatnum("shoes")}>Shoes</h6><h6 onClick={() => setCatnum("jacket")}>Coats</h6><h6 onClick={() => setCatnum("hat")}>Hats</h6>
        </div>

        <div className="sectiongrid">
          
          {newarrivals}
          
        </div>
 
      </div> 
    </section> 
  )
}
 
export default Section1