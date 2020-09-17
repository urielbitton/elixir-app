import React, {useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from './ProductContext'

function Product(props) {
 
  const {products, setProducts, setGeneral} = useContext(ProductContext)
  const [prodsize, setProdsize] = useState("")

  function addToCart() { 
    products.map(prod => {    
      return (prod.id === props.prod.id)?(props.prod.addcart = true):""
    })  
    props.updatecartnum()
    props.updatesub(props.price)  
  } 
  function addToWishlist() {
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    }) 
    props.updatewish() 
  }

  const addtocart = document.querySelectorAll('.quickview .addtocart')
    addtocart.forEach(el => {
      el.onclick = () => {
        document.querySelector('.cartcont').style.cssText += 'opacity:1;visibility:visible;top: 45px'
      }
  })  

  const quickviewcont = document.querySelector('.quickviewcont')
  const quickview = document.querySelector('.quickview')
  function closeQuickview() {
    quickview.style.top = ''
    setTimeout(() => {
      quickviewcont.style.opacity = ''
    }, 100)
    setTimeout(() => { 
      quickviewcont.style.display = ''
    }, 200)
  }

  useEffect(() => {
    document.querySelectorAll('.sizesboxdiv .sizebox').forEach(box => {
      box.onclick = () => {
        document.querySelectorAll('.sizesboxdiv .sizebox').forEach(el => el.classList.remove('activesizebox'))
        box.classList.add('activesizebox')
      }
    })
  })

  return ( 
    <div className="product">
        <div>
          <img className="productimg" src={props.img} alt="productimg" />
          <div className="otherimg"></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
        </div>
        <div>
          <h2>{props.name}</h2>
          <h5>${props.price}.00</h5>
          <p>{props.descript}</p> 
          <hr/>
          <label>
            <small>Color</small>
            <select>
              <option selected disabled>Choose a Color</option>
              {
                props.color.map(color => {
                  return <option>{color}</option>
                })
              } 
            </select>  
            <div className="clear"></div> 
          </label> 
          <label>
            <small>Size</small>
            <div className="sizesboxdiv">
            {
              props.sizes.map(size => {
                return <div className="sizebox">{size}</div>
              })
            } 
            </div>
            <div className="clear"></div> 
          </label>
          <div className="clear"></div>
          <div className="itemnum">
            <div className="subnum">-</div>
            <div className="num">1</div>
            <div className="addnum">+</div>
          </div>
          <Link to={props.prod.addcart?"/cart":"#"}><button className="addtocart" onClick={() => props.prod.addcart?"":addToCart()}><i class="fas fa-cart-plus"></i>{props.prod.addcart?"View Cart":"Add To Cart"}</button></Link>
          <div className="metaitem">
            <h6>Categories: 
              <span>
              {
                props.cat.map(cat => {
                  return cat+", "
                })
              } 
              </span>
              </h6>
            <h6>Product ID: <span>elx{props.id+1000}</span></h6>
            <h6>Share Product</h6>
            <div><i class="fab fa-facebook-f"></i></div>
            <div><i class="fab fa-twitter"></i></div>
            <div><i class="fab fa-instagram"></i></div>
            <div><i class="fab fa-linkedin-in"></i></div>
          </div>
          <div className="clear"></div> 
          <small style={{display:"none"}}>{props.wishnum}</small> 
          <Link to={props.prod.wishlist?"/wishlist":"#"}><button className="addtowish" onClick={() => props.prod.wishlist?"":addToWishlist()}><i class="fas fa-heart"></i>{props.prod.wishlist?"View Wishlist":"Add to Wishlist"}</button></Link>
        </div> 
      </div>  
  ) 
} 

export default Product