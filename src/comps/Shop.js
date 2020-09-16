import React, {useContext, useState} from 'react'
import PageBanner from './PageBanner' 
import { ProductContext } from './ProductContext'
import Item from './Item'

function Shop(props) { 
  let allcats = /hat/i
  const {products} = useContext(ProductContext)
  const [filteron, setFilteron] = useState(false)
  const [pricefilt, setPricefilt] = useState([0,Infinity])
  const [catfilter, setCatfilter] = useState(allcats)

  const allprods = products.map(prod => {
      if((prod.price >= pricefilt[0] && prod.price < pricefilt[1]) && prod.cat.includes(catfilter)) {
        return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} addcart={prod.addcart} wishlist={prod.wishlist} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} key={prod.id}/>
      }  
  }) 
  
  return (
    <div className="shoppage">
      <PageBanner title="Shop" subtitle="Find all our products here" bgimg="https://i.imgur.com/kp0n6CL.jpg"/>
      <div className="grid">
      <div className="spacers"></div>
      
      <div className="shopoptions">
      <div className="left">
          <h5><span>Showing</span> 1-20 of 100 <span>results</span></h5>
      </div>
      <div className="right">
        <div><h6 onClick={() => filteron?setFilteron(false):setFilteron(true)}>Filter<i className="fas fa-sliders-h"></i></h6></div>
        <div>
          <select>
            <option>20 items</option><option>25 items</option><option>30 items</option><option>35 items</option><option>40 items</option>
          </select>
        </div>
      <div><i className="fas fa-th"></i><i class="fas fa-grip-lines"></i></div>
      </div>
      <div className="clear"></div>

      <div className={filteron?"filterscont-on filterscont":"filterscont-off filterscont"}>
        <div>
          <h4>Price Filter</h4> 
          <ul><li className="activefilter" onClick={() => setPricefilt([0,Infinity])}>All</li><li onClick={() => setPricefilt([1,100])}>$0 - $100</li><li onClick={() => setPricefilt([100,150])}>$100 - $150</li><li onClick={() => setPricefilt([150,200])}>$150 - $200</li><li onClick={() => setPricefilt([200,250])}>$200 - $250</li><li onClick={() => setPricefilt([250,500])}>$250 - $500</li><li onClick={() => setPricefilt([500,Infinity])}>$500+</li></ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul><li className="activefilter">All categories</li><li onClick={() => setCatfilter('women')}>Women</li><li onClick={() => setCatfilter('men')}>Men</li><li onClick={() => setCatfilter('kids')}>Kids</li><li onClick={() => setCatfilter('shirt')}>Shirts</li><li onClick={() => setCatfilter('pants')}>Pants</li><li onClick={() => setCatfilter('jacket')}>Jackets</li><li onClick={() => setCatfilter('shoes')}>Shoes</li></ul>
        </div>
        <div>
          <h4>Colors</h4>
          <ul><li className="activefilter">All Colors</li><li>Black</li><li>White</li><li>Blue</li><li>Gray</li><li>Red</li><li>Brown</li><li>Pink</li></ul>
        </div>
        <div>
          <h4>Sizes</h4>
          <ul><li className="activefilter">All Sizes</li><li>Extra Small</li><li>Small</li><li>Medium</li><li>Large</li><li>Extra Large</li></ul>
        </div>
        <div>
          <h4>Sort By</h4>
          <ul><li className="activefilter">All</li><li>Hot</li><li>Rating</li><li>New Products</li><li>Price: Low to High</li><li>Price: High to Low</li></ul>
        </div>
      </div>
 
    </div>
        
        <div className="productsgrid">
          {allprods}
        </div>

        <div className="spacerl"></div>

      </div>
    </div>
  )
} 

export default Shop