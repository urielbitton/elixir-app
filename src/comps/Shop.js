import React, {useContext} from 'react'
import PageBanner from './PageBanner'
import { ProductContext } from './ProductContext'
import Item from './Item'

function Shop(props) {

  const {products} = useContext(ProductContext)

  const allprods = products.map(prod => {
    return <Item prod={prod} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} addcart={prod.addcart} updatecartnum={props.updatecartnum} updatesub={props.updatesub} key={prod.id}/>
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