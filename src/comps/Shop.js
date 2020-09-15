import React, {useContext} from 'react'
import PageBanner from './PageBanner' 
import { ProductContext } from './ProductContext'
import Item from './Item'

function Shop(props) {

  const {products} = useContext(ProductContext)

  const allprods = products.map(prod => {
    return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} addcart={prod.addcart} wishlist={prod.wishlist} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} key={prod.id}/>
  })
  
  return (
    <div className="shoppage">
      <PageBanner title="Shop" subtitle="Find all our products here" bgimg="https://i.imgur.com/kp0n6CL.jpg"/>
      <div className="grid xgrid">
        <div className="productsgrid">
          {allprods}
        </div>
      </div>
    </div>
  )
} 

export default Shop