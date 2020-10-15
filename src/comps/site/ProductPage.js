import React, {useContext, useEffect, useState, useRef} from 'react'
import Product from './Product'
import Item from './Item'
import { ProductContext } from './ProductContext'
import Reviews from './Reviews'

function ProductPage(props) {

  const {products} = useContext(ProductContext)
  let mapcount = 0

  const similarprods = products.map(prod => { 
    if(props.cat.some(el => prod.cat.includes(el)) && props.id !== prod.id && mapcount<4) {
      mapcount++
      return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} descript={prod.descript} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} instock={prod.instock} units={prod.units} wishlist={prod.wishlist} qty={prod.qty} compared={prod.compared} ratings={prod.ratings} reviews={prod.reviews} avgrating={prod.avgrating} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} addwishnum={props.addwishnum} openproduct={props.openproduct} key={prod.id} resetunits={props.resetunits} updatecompare={props.updatecompare} updatecompstatus={props.updatecompstatus}/> 
    }
  }) 

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    taber.forEach(el => {
      el.onclick = () => {
        taber.forEach(el2 => el2.style.color = '')
        el.style.color = '#333'
        document.querySelectorAll('[re-tab]').forEach(el2 => el2.style.display = 'none')
        document.querySelector('[re-tab="'+el.getAttribute('re-taber')+'"]').style.display = 'block'
      }
    }) 
    
  }) 
 
  return ( 
    <div className="productpage"> 
      <div className="grid xgrid pgrid">
        <div className="spacer"></div>
        <Product prod={props.prod} id={props.id} name={props.name} img={props.img} price={props.price} descript={props.descript} color={props.color} cat={props.cat} sizes={props.sizes} units={props.units} addcart={props.addcart} wishlist={props.wishlist} instock={props.instock} qty={props.qty} compared={props.compared} ratings={props.ratings} reviews={props.reviews} avgrating={props.avgrating} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} updatewish={props.updatewish} addwishnum={props.addwishnum} setprodcolor={props.setprodcolor} setprodsize={props.setprodsize} key={props.prod.id}/>
        <div className="spacer"></div>
        <hr /> 
        <Reviews prod={props.prod} />
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