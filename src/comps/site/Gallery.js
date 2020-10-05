import React, { useContext } from 'react'
import PageBanner from './PageBanner'
import { ProductContext } from './ProductContext'

function Gallery() {

  const {products} = useContext(ProductContext)
  const gallery = products.map(prod => {
    return <img src={prod.img} className={prod.id===7?"horiz":prod.id===3?"vert":prod.id===12?"big":prod.id===10?"horiz":""} alt="" />
  })

  return (
    <div className="shoppage">
      <PageBanner title="Gallery" subtitle="View our site's gallery" bgimg="https://i.imgur.com/Hl72WnH.jpg"/>

      <div className="grid xgrid">
        <h2>Elixir Exclusive Products</h2>

        <div className="gallerygrid">
          {gallery}
        </div>

      </div>
    </div>
  )
}

export default Gallery