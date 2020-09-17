import React, {useContext, useState} from 'react'
import Item from './Item'
import { ProductContext } from './ProductContext'

function Section1(props) {

  const {products} = useContext(ProductContext)
  const [catnum, setCatnum] = useState("new")

  let newarrivals 

  newarrivals = products.map(prod => {
    if(prod.cat.includes(catnum))
      return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} wishlist={prod.wishlist} descript={prod.descript} color={prod.color} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} wishnum={props.wishnum} key={prod.id}/>
    if(catnum === "hot")
      if(prod.hot)
        return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} wishlist={prod.wishlist} descript={prod.descript} color={prod.color} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} wishnum={props.wishnum} key={prod.id}/>
  })  
   
  
  return (
    <section className="section1">
      <div className="grid xgrid">
        <h4 className="sectitle">New Arrivals</h4>
        <h5 className="secsubtitle">Shop Collection</h5>
        <div className="sectionnav">
          <h6 className="activesecnav" onClick={() => setCatnum("new")}>New</h6><h6 onClick={() => setCatnum("hot")}>Hot</h6><h6 onClick={() => setCatnum("shirt")}>Shirts</h6><h6 onClick={() => setCatnum("pants")}>Pants</h6><h6 onClick={() => setCatnum("shoes")}>Shoes</h6><h6 onClick={() => setCatnum("jacket")}>Coats</h6>
        </div>

        <div className="sectiongrid">
           

          {newarrivals}
          
        </div>
 
      </div> 
    </section> 
  )
}
 
export default Section1