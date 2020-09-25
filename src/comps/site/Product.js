import React, {useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from './ProductContext'

function Product(props) {
 
  const {products, setProducts, setGeneral} = useContext(ProductContext)
  const [prodsize, setProdsize] = useState("")
  const [units, setUnits] = useState(1)
  let temp = 1

  function addToCart() { 
    products.map(prod => {    
      return (prod.id === props.prod.id)?(props.prod.addcart = true):""
    })  
    props.updatecartnum()
    props.updatesub(props.prod.price*props.prod.units)  
    props.updateunits(props.prod.units)
    setUnits(1)
  }    
  function addToWishlist() {
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    }) 
    props.updatewish() 
  }
  function addUnits() {
    if(props.prod.units<=9) {
      props.prod.addcart?temp=1:props.prod.units += 1
      setUnits(prev => prev+1)
    }
    //props.prod.addcart = false //uncomment if you want to allow post addcart adding units
  }    
  function subUnits() { 
    if(props.prod.units > 1) {
      props.prod.addcart?temp=1:props.prod.units -= 1
      setUnits(prev => prev-1)
    }
    //props.prod.addcart = false //uncomment if you want to allow post addcart adding units
  }
  function colorUpdate(color) {
    props.prod.selcolor = color
    props.setprodcolor()  
  }
  function sizeUpdate(size) {
    props.prod.selsize = size
    props.setprodsize()  
  }
  
  const addtocart = document.querySelectorAll('.quickview .addtocart')
    addtocart.forEach(el => {
      el.onclick = () => {
        Object.assign(document.querySelector('.cartcont').style, {opacity:'1',visibility:'visible',top:'45px'})
        setTimeout(() => {
          Object.assign(document.querySelector('.cartcont').style, {opacity:'',visibility:'',top:''})
        }, 3000);
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
    document.querySelectorAll('.colorboxcont .colorbox').forEach(box => {
      box.onclick = () => {
        document.querySelectorAll('.colorboxcont .colorbox').forEach(el => el.classList.remove('activecolorbox'))
        box.classList.add('activecolorbox')
      }
    })
    if(document.body.contains(document.querySelector('.viewcart'))) {
      document.querySelector('.viewcart').onclick = ()  => {
          setTimeout(() => {
            document.querySelector('.quickviewcont').style.opacity = '0'
            setTimeout(() => {
              document.querySelector('.quickviewcont').style.display = 'none'
            }, 100)
          }, 200)
      }
    }
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
          <h5>${props.price.toFixed(2)}</h5>
          <p>{props.descript}</p>  
          <hr/>
          <label> 
            <small>Color</small>
            <div className="colorboxcont">
              {
                props.color.map(color => {
                  return <div className="colorbox" style={{background: color}} onClick={() => colorUpdate(color)}></div>
                })
              } 
            </div> 
            <div className="clear"></div> 
          </label> 
          <label>
            <small>Size</small>
            <div className="sizesboxdiv">
            { 
              props.sizes.map(size => {
                return <div className="sizebox" onClick={() => sizeUpdate(size)}>{size}</div>
              })
            } 
            </div> 
            <div className="clear"></div> 
          </label>
          <div className="clear"></div>
          <div className="itemnum">
            <div className="subnum" onClick={() => subUnits()}>-</div>
            <div className="num" data-units={units}>{props.prod.units}</div>
            <div className="addnum" onClick={() => addUnits()}>+</div>
          </div>
          <Link to={props.prod.addcart?"/cart":"#"}><button className={props.prod.addcart?"viewcart":"addtocart"} onClick={() => props.prod.addcart?"":addToCart()}><i class="fas fa-cart-plus"></i>{props.prod.addcart?"View Cart":"Add To Cart"}</button></Link>
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