import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from "./ProductContext";

function Search(props) {

  const { products, setProducts, general, setGeneral } = useContext(ProductContext)
  const [keyword, setKeyword] = useState("noname") 

  document.querySelectorAll('.resultrow').forEach(el => el.onclick = () => {
    document.querySelector('.searchcont .close').click()
    setTimeout(() => {
      document.querySelector('.searchcont input').value = ''
    }, 500)
  })
 
  return (
    <div className="searchcont">
      <i className="close"></i>
      <div className="grid pgrid">
        <div className="searchbox">
          <label><input onChange={(e) => setKeyword(e.target.value)} placeholder="Search by product, tag, category or price"/><i className="fas fa-search"></i></label>
        </div>
        <div className="searchresults">
          <div className="innersearchresults">
          {
            products.map(prod => {
              if((prod.name.toLowerCase()).includes(keyword.toLowerCase()))
                return <Link to="/product"><div className="resultrow" onClick={() => props.openproduct(prod,prod.id,prod.name,prod.img,prod.price,prod.descript,prod.color,prod.cat,prod.sizes,prod.units,prod.addcart,prod.wishlist)}><img src={prod.img} alt="searchimg"/><h5>{prod.name}</h5><small>${prod.price.toFixed(2)}</small><div className="clear"></div></div></Link>
            })
          }
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Search