import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from './ProductContext'

function Product(props) {

  const {products, setProducts, setGeneral} = useContext(ProductContext)

  function addToWishlist() {
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    })
    props.updatewish() 
  }
 
  return ( 
    <div className="product">
        <div>
          <img className="productimg" src="https://i.imgur.com/mgjGwhr.jpg" alt="productimg" />
          <div className="otherimg"></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
        </div>
        <div>
          <h2>Women's Shoes</h2>
          <h5>$299.00</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.</p>
          <hr/>
          <label>
            <small>Color</small>
            <select>
              <option selected disabled>Choose a Color</option>
              <option>Black</option>
              <option>Gray</option>
              <option>Pink</option>
            </select>
          </label>
          <div className="clear"></div>
          <div className="spacers"></div>
          <div className="itemnum">
            <div className="subnum">-</div>
            <div className="num">1</div>
            <div className="addnum">+</div>
          </div>
          <button className="addtocart"><i class="fas fa-cart-plus"></i>Add to Cart</button>
          <div className="metaitem">
            <h6>Categories: <span>women, shoes</span></h6>
            <h6>Tags: <span>#newarrival, #women, #featured</span></h6>
            <h6>Share Product</h6>
            <div><i class="fab fa-facebook-f"></i></div>
            <div><i class="fab fa-twitter"></i></div>
            <div><i class="fab fa-instagram"></i></div>
            <div><i class="fab fa-linkedin-in"></i></div>
          </div>
          <div className="clear"></div>
          <button className="addtowish" onClick={() => addToWishlist()}><i class="fas fa-heart"></i>{props.wishlist?"View Wishlist":"Add to Wishlist"}</button>
        </div> 
      </div>  
  ) 
} 

export default Product