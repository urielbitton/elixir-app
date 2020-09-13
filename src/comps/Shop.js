import React, {useContext} from 'react'
import PageBanner from './PageBanner'
import { ProductContext } from './ProductContext'
import Item from './Item'

function Shop() {

  const {products} = useContext(ProductContext)

  const allprods = products.map(prod => {
    return <Item name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} key={prod.id}/>
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