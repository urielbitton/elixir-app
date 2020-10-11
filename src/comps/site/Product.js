import React, {useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from './ProductContext'

function Product(props) {
 
  const {products, general,  cart} = useContext(ProductContext)
  const [prodsize, setProdsize] = useState("")
  const [units, setUnits] = useState(1)
  let temp = 1

  function addToCart() { 
    products.map(prod => {    
      return (prod.id === props.prod.id)?(props.prod.addcart = true):""
    })  
    let cartobj = {id:props.id,name:props.name,img:props.img,price:props.price,units:props.prod.units,qty:props.qty,color:props.color,sizes:props.sizes,addcart:props.addcart,wishlist:props.wishlist,descript:props.descript,selcolor:props.prod.selcolor,selsize:props.prod.selsize}
    cart.push(cartobj) 
    general.subtotal += props.prod.price*props.prod.units  
    general.cartitems += 1
    props.updatesub()
  }    
  function addToWishlist() {
    products.map(prod => {
      return (prod.id === props.prod.id)?(props.prod.wishlist = true):""
    }) 
    props.updatewish() 
  }
  function addUnits() {
    if(props.prod.units < props.prod.qty) {
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
    const otherimg = document.querySelectorAll('.otherimg img')
    const productimg = document.querySelector('.productimg')
    otherimg.forEach(el => { 
      el.onclick = () => {
        let imgattr = el.getAttribute('src')
        productimg.setAttribute('src',imgattr)
      }
    }) 
    
    const zoomresult = document.querySelector('#zoomresult')
    productimg.onmouseover = () => {
      imageZoom("prodimgid", "zoomresult")
    }
    productimg.onmouseout = () => {
      zoomresult.style.display = 'none'
    }

    function imageZoom(imgID, resultID) {
      zoomresult.style.display = 'block'
      var img, lens, result, cx, cy;
      img = document.getElementById(imgID);
      result = document.getElementById(resultID);
      lens = document.createElement("DIV");
      lens.setAttribute("class", "img-zoom-lens");
      img.parentElement.insertBefore(lens, img);
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);
      function moveLens(e) {
        var pos, x, y;    
        e.preventDefault(); 
        pos = getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      }
      function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset+20;
        y = y - window.pageYOffset+30;
        return {x : x, y : y};
      }
    }
  })
 
  return (  
    <div className="product">
        <div style={{position: "relative"}}>
          <img id="prodimgid" className="productimg" src={props.img} alt="productimg" />
          <div className="otherimg"><img src="https://i.imgur.com/lYlrhuI.png" alt=""/></div>
          <div className="otherimg"><img src={props.img} alt="" /></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
          <div className="otherimg"></div>
        </div>
        <div id="zoomresult" class="img-zoom-result"></div>
        <div> 
          <h2>{props.name}</h2>
          <h5>${parseFloat(props.price).toFixed(2)}</h5>
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
            <hr />
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
            <hr />
            <div className="clear"></div> 
          </label> 
          <div className="clear"></div>
          <div className="itemnum">
            <div className="subnum" onClick={() => props.prod.instock?subUnits():""}>-</div>
            <div className="num" data-units={units}>{props.prod.units}</div>
            <div className="addnum" onClick={() => props.prod.instock?addUnits():""}>+</div>
          </div> 
          {
          props.prod.instock?  
          <Link to={props.prod.addcart?"/cart":"#"}><button className={props.prod.addcart?"viewcart":"addtocart"} onClick={() => props.prod.addcart?"":addToCart()}><i class="fas fa-cart-plus"></i>{props.prod.addcart?"View Cart":"Add To Cart"}</button></Link>
          : <button disabled className="addtocart cartdisabled"><i class="fas fa-cart-plus"></i>Add To Cart</button>
          }
          <div className="metaitem">
            <h6>Categories: <span>{props.cat.map(cat => {return cat+", "})}</span></h6>
            <h6>Product ID: <span>elx{parseInt(props.id,10)+1000}</span></h6>
            <h6>Stock Status: <span style={{color: props.prod.instock?"#7deb00":"#FF3737"}}>{props.prod.instock?"In Stock":"Out Of Stock"}</span></h6>
            <h6>Ratings: <span>{props.prod.ratings}</span></h6>
            <h6>Share Product <span className="socialsgroup"><i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i></span></h6> 
          </div>
          <div className="clear"></div> 
          <small style={{display:"none"}}>{props.wishnum}</small> 
          <Link to={props.prod.wishlist?"/wishlist":"#"}><button className="addtowish" onClick={() => props.prod.wishlist?"":addToWishlist()}><i class="fas fa-heart"></i>{props.prod.wishlist?"View Wishlist":"Add to Wishlist"}</button></Link>
        </div> 
      </div>  
  )  
} 

export default Product